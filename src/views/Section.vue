<template>
    <div class="pageWrapper2">
        <p class="myTitle">{{title}}</p>
        
        <p class="mySubTitle">{{subtitle}}</p>

        <div class="bookWrap" 
            v-for="book in books"
            :key="book.id">
            <a :href="book.link" target="_blank">
                <img :src="`${publicPath}books/` + book.title" class="book"/>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Section',

        data: () => ({
            id: 0,
            title: '',
            subtitle: '',
            books: [],
            publicPath: process.env.BASE_URL,
        }),

        methods: {
            loadPage() {
                this.$store.state.menu = 1
                this.id = this.$route.params.id
                if(this.id == '1'){
                    this.title = 'Романы'
                    this.subtitle = 'Русский язык'
                    this.books = this.$store.state.b1
                } else if(this.id == '2'){
                    this.title = 'Повести'
                    this.subtitle = 'Русский язык'
                    this.books = this.$store.state.b2
                } else if(this.id == '3'){
                    this.title = 'Сказки'
                    this.subtitle = 'Русский язык'
                    this.books = this.$store.state.b3
                } else if(this.id == '4'){
                    this.title = 'Novels'
                    this.subtitle = 'English language'
                    this.books = this.$store.state.b4
                } else if(this.id == '5'){
                    this.title = 'Stories'
                    this.subtitle = 'English language'                    
                    this.books = this.$store.state.b5
                } else if(this.id == '6'){
                    this.title = 'Fairy tales'
                    this.subtitle = 'English language'
                    this.books = this.$store.state.b6
                } else if(this.id == '7'){
                    this.title = 'Романы / Novels'
                    this.subtitle = 'Русский язык / English language'
                    this.books = this.$store.state.b7
                } else if(this.id == '8'){
                    this.title = 'Повести / Stories'
                    this.subtitle = 'Русский язык / English language'
                    this.books = this.$store.state.b8
                } else if(this.id == '9'){
                    this.title = 'Сказки / Fairy tales'
                    this.subtitle = 'Русский язык / English language'
                    this.books = this.$store.state.b9
                }else{
                    this.$router.push('/sections');
                }
            },
        },

        created() {
            this.loadPage()
        },

        watch: {
            $route(toR, fromR) {
                this.id = toR.params['id']
                this.loadPage()
            },
        },
    };
</script>

<style>
    .pageWrapper2{
        padding: 5%;
        max-width: 960px;
        margin: 0 auto;
    }

    .myTitle{
        color: white;
        font-size: 40px !important;
        font-family: 'Gilroy' !important;
        font-weight: bold !important;
        text-align: center;
        margin-bottom: 0px !important;
    }
    
    .mySubTitle{
        color: #757575;
        font-size: 25px !important;
        font-family: 'Gilroy';
        font-weight: 300;
        font-style: italic;
        margin: 20px 0 5px 0 !important;
    }

    .booksWrapper{
        display: flex;
        justify-content: space-between;
    }
    
    .bookWrapper{
        background: #ebebeb;
        color: #676767;
        cursor: pointer;
        display: flex;
        font-family: 'Gilroy';
        font-size: 30px;
        font-weight: 200;
        font-style: italic;
        justify-content: center;
        flex-direction: column;
        line-height: 2;
        height: 40vh;
        text-align: center;
        width: 30%;
    }

    .bookWrapper1:hover{
        background: #f6e9d8;
        border: 3px solid #A07946;
    }

    .bookWrapper2:hover{
        background: #ccdddd;
        border: 3px solid #429090;
    }

    .bookWrapper3:hover{
        background: #ede8f7;
        border: 3px solid #674BA1;
    }

    .book{
        float: left;
        height: 200px;
        margin: 10px;
    }
</style>
