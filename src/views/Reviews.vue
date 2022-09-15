<template>
    <div>
        <div class="infWrapper">
            <p class="myName">Reviews</p>
            <p class="myPosition">Школьный учитель / Писатель / Член Союза писателей</p>
            <div class="underLine">&nbsp;</div>
            <a href="mailto:nadym7@mail.ru" class="myIcon">
                <v-icon>mdi-email</v-icon> nadym7@mail.ru
            </a>
            <br>
            <a href="https://proza.ru/avtor/nadym7" class="myIcon" target="_blank">
                <v-icon>mdi-book-open-page-variant-outline</v-icon> Проза.ру
            </a>
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
