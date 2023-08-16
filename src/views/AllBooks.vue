<template>
    <div class="pageWrapper2">
        <p class="myTitle">Книги</p>

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
        name: 'AllBooks',

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
                this.books = this.$store.state.bAll
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

    .book{
        float: left;
        height: 200px;
        margin: 10px;
    }
</style>
