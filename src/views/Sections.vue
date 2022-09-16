<template>
    <div class="pageWrapper2">
        <p class="myTitle">Книги</p>
        
        <p class="mySubTitle">Русский язык</p>
        <div class="clearfix">
            <div class="bookWrapper bookWrapper1"
                @click="$router.push('/sections/1')">
                Романы
            </div>
            <div class="bookWrapper bookWrapper2"
                @click="$router.push('/sections/2')">
                Повести
            </div>
            <div class="bookWrapper bookWrapper3"
                @click="$router.push('/sections/3')">
                Сказки
            </div>
        </div>
        
        <p class="mySubTitle">English language</p>
        <div class="clearfix">
            <div class="bookWrapper bookWrapper1"
                @click="$router.push('/sections/4')">
                Novels
            </div>
            <div class="bookWrapper bookWrapper2"
                @click="$router.push('/sections/5')">
                Stories
            </div>
            <div class="bookWrapper bookWrapper3"
                @click="$router.push('/sections/6')">
                Fairy tales
            </div>
        </div>
        
        <p class="mySubTitle">Русский язык / English language</p>
        <div class="clearfix">
            <div class="bookWrapper bookWrapper1"
                @click="$router.push('/sections/7')">
                Романы <br> Novels
            </div>
            <div class="bookWrapper bookWrapper2"
                @click="$router.push('/sections/8')">
                Повести <br> Stories
            </div>
            <div class="bookWrapper bookWrapper3"
                @click="$router.push('/sections/9')">
                Сказки <br> Fairy tales
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'Books',

        data: () => ({}),

        methods: {
            loadPage() {
                this.$store.state.menu = 1
            },
        },

        created() {
            this.loadPage()
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
        width: 40vh;
        float: left;
        margin: 10px;
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

    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
</style>
