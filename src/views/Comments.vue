<template>
    <div class="pageWrapper3">
        <p class="myTitle">Отзывы</p>

        <div v-for="comment in $store.state.comments" 
            :key="comment.id"
            class="commentWrap">
            <p class="commentText">{{comment.text}}</p>
            <p class="commentPerson">{{comment.person}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Comments',

        data: () => ({}),

        methods: {
            loadPage() {
                this.$store.state.menu = 3
            },
        },

        created() {
            this.loadPage()
        },
    };
</script>

<style>
    .pageWrapper3{
        padding: 5%;
        max-width: 500px;
        margin: 0 auto;
    }

    .commentWrap{
        margin-top: 50px;
    }

    .commentTitle{
        color: white;
        font-family: 'Gilroy';
        font-weight: 500;
        margin-bottom: 10px !important;
        text-align: center;
    }

    .commentText{
        color: #757575;
        font-size: 15px;
        font-family: 'Gilroy';
        font-weight: 300;
        font-style: italic;
        margin-bottom: 0px !important;
    }

    .commentPerson{
        color: white;
        font-family: 'Gilroy';
        font-weight: 500;
        margin-bottom: 0px !important;
        text-align: right;
        font-style: italic;
    }
</style>
