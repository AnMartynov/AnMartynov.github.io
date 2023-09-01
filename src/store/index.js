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

        bAll:[
            {
                id: 1,
                link: 'https://bookbox.center/shop/?genre=&product=yetkhi-posobie-po-angliyskomu-yazyku/',
                title: '1.jpg'
            },
            {
                id: 2,
                link: 'https://bookbox.center/shop/?genre=proza&product=muzykalnaya-istoriya',
                title: '2.jpg'
            }
        ],

        comments:[
            {
                id: 1,
                text: 'Юлия Хрущева, иллюстратор книги: "...я словно попала в необыкновенный мир, полный добра, любви и захватывающих приключений. При создании иллюстраций так увлеклась процессом, что время пролетело незаметно, и когда работа была готова, то захотелось продолжения. Все иллюстрации выполнены по тех-заданиям автора".',
                person: "Юлия Хрущева, г. Екатеринбург",
            },
            {
                id: 2,
                text: "...сказка очень хороша. Добрая, яркая сказка для детей. Все правильно: ненцы пришли с юга на Ямал и встретили поморов, норманнов, которые жили по берегам больших рек, Обской губы и Карского моря. Молодец автор...",
                person: "Иван Айваседо, коренной житель Ямала, шаман, пос. Тамбей",
            },
            {
                id: 3,
                text: "Сказка... поучительна, интересна по содержанию. В сказке много моментов, достойных подражания...",
                person: "Валерий Мартынов, действительный член Академии русской словесности и изящных искусств им. Г.Р.Державина. Член СП России. Лауреат Литературной премии Губернатора Ямало-ненецкого национального округа. Почетный гражданин г. Надым. Ветеран Ямала",
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
