import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        baseUrl: document.location.href.slice(0, document.location.href.indexOf('#', 0)),
        menu: 1,

        b1:[
            {
                id: 1,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            },
            {
                id: 2,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            },
            {
                id: 3,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            },
            {
                id: 4,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            },
            {
                id: 5,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            },
            {
                id: 6,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            },
            {
                id: 7,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            },
        ],

        b2:[
            {
                id: 1,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            }
        ],

        b3:[
            {
                id: 1,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            }
        ],

        b4:[
            {
                id: 1,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            }
        ],

        b5:[
            {
                id: 1,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            }
        ],

        b6:[
            {
                id: 1,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            }
        ],

        b7:[
            {
                id: 1,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            }
        ],

        b8:[
            {
                id: 1,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            }
        ],

        b9:[
            {
                id: 1,
                link: 'https://ridero.ru/books/yotkhi_trilogiya/',
                title: '1.jpg'
            }
        ],

        comments:[
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                person: "Nick Kovtunov",
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                person: "Nick Kovtunov",
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                person: "Nick Kovtunov",
            },
        ],

        reviews:[
            {
                id: 1,
                title: 'Рецензия на книгу 1',
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                person: "Nick Kovtunov",
            },
            {
                id: 2,
                title: 'Рецензия на книгу 2',
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                person: "Nick Kovtunov",
            },
            {
                id: 3,
                title: 'Рецензия на книгу 3',
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                person: "Nick Kovtunov",
            },
        ],
    },
})
