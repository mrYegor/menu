/* constructor for the menu object-items */
function MenuItem(name) {
    this.name = name;
    this.className = 'main-menu__item';
    this.logName = (e) => {
        e.stopPropagation();
        console.log(this.name);
    };
    this.items = [];
}

/* the basic array of names for future menu */
const namesArray = [
    {
        name: 'Main',
    },
    {
        name: 'Shop',
        items: [
            {
                name: 'For Adults',
                items: [
                    {
                        name: 'For Men',
                    },
                    {
                        name: 'For Women',
                    },
                    {
                        name: 'For Grandparents'
                    }
                ]
            },
            {
                name: 'For Kids',
                items: [
                    {
                        name: 'For Toddlers',
                    },
                    {
                        name: 'School Uniform',
                    },
                    {
                        name: 'Graduation dresses'
                    }
                ]
            }
        ]
    },
    {
        name: 'About Us',
    },
    {
        name: 'Contact Us',
    }
];

const menu = {
    items: new Array()
};

/* method that sets all params for the menu object */
const setMenu = (arr, complexMenu) => {
    for (let item of arr) {
        const tempItem = new MenuItem(item.name);
        complexMenu.push(tempItem);
        if ('items' in item) {
            tempItem.className += ' drop-down-icon';
            setMenu(item.items, tempItem.items);
        }
    }
};

setMenu(namesArray, menu.items);

const menuList = angular.module('menuList', []);
menuList.controller('menuController', function ($scope) {
    $scope.list = menu;
});

/* added additional class for the side slider*/
const checkSideSliders = () => {
    const sideSliders = document.querySelectorAll('.sub-menu.has-nested span + ul');
    for (const item of sideSliders) {
        if (item.children.length > 0) {
            item.previousElementSibling.classList.add('side-slider-icon')
        }
    }
};
window.addEventListener('load', checkSideSliders);
