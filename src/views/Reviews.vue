<template>
    <div class="pageWrapper2">
        <p class="myTitle">Рецензии</p>

        <div v-for="review in $store.state.reviews" 
            :key="review.id"
            class="commentWrap">
            <p class="commentTitle">{{review.title}}</p>
            <p class="commentText">{{review.text}}</p>
            <p class="commentPerson">{{review.person}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Reviews',

        data: () => ({}),

        methods: {
            loadPage() {
                this.$store.state.menu = 2
            },
        },

        created() {
            this.loadPage()
        },
    };
</script>

<style>
    .infWrapper{
        margin: 25vh 5% 0 5% !important;
        text-align: center;
    }

    .myName{
        color: white;
        font-size: 50px !important;
        font-family: 'Gilroy' !important;
        font-weight: bold !important;
        margin: 0 !important;
        position: relative;
        z-index: 2;
    }

    .myPosition{
        color: #757575;
        font-size: 20px !important;
        font-family: 'Gilroy' !important;
        font-weight: normal !important;
        margin: 0 !important;
        position: relative;
        z-index: 2;
    }

    .underLine{
        border-bottom: 2px solid #757575;
        margin: 30px auto !important;
        width: 100px;
    }

    .myIcon{
        color: #757575 !important;
        text-decoration: none;
        line-height: 2;
    }

    .myIcon i{
        color: #757575 !important;
        display: inline-block;
        text-decoration: none;
        margin-right: 5px;
    }
</style>
