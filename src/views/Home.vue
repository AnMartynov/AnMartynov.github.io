<template>
    <div class="pageWrapper">
        <p class="myName">Андрей Мартынов</p>
        <p class="myPosition">Писатель / Член Союза писателей / Школьный учитель</p>
        <div class="underLine">&nbsp;</div>
        <a href="mailto:nadym7@mail.ru" class="myIcon">
            <v-icon>mdi-email</v-icon> nadym7@mail.ru
        </a>
        <a href="https://proza.ru/avtor/nadym7" class="myIcon" target="_blank">
            <v-icon>mdi-book-open-page-variant-outline</v-icon> Проза.ру
        </a>
    </div>
</template>

<script>
    export default {
        name: 'Home',

        data: () => ({}),

        methods: {
            loadPage() {
                this.$store.state.menu = 0
            },
        },

        created() {
            this.loadPage()
        },
    };
</script>

<style>
    .pageWrapper{
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding: 5%;
    }

    .myName{
        color: white;
        font-size: 50px !important;
        font-family: 'Gilroy' !important;
        font-weight: bold !important;
        margin: 0 !important;
    }

    .myPosition{
        color: #757575;
        font-size: 20px !important;
        font-family: 'Gilroy' !important;
        font-weight: normal !important;
        margin: 0 !important;
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
