<template>
    <v-dialog v-model="$store.state.openSearch"
              max-width="500px">
        <v-card>
            <v-card-title>
                <span>Расширенный поиск</span>
            </v-card-title>
            <v-card-text style="padding-bottom:0;">
                <v-text-field v-model="title"
                              outlined
                              dense
                              autocomplete="off"
                              background-color="white"
                              label="Название/описание"></v-text-field>

                <v-select v-model="day"
                          outlined
                          dense
                          background-color="white"
                          :items="days"
                          item-text="title"
                          item-value="number"
                          label="День"></v-select>

                <v-select v-model="month"
                          outlined
                          dense
                          background-color="white"
                          :items="months"
                          item-text="title"
                          item-value="number"
                          label="Месяц"></v-select>

                <v-text-field v-model="year"
                              outlined
                              dense
                              autocomplete="off"
                              background-color="white"
                              label="Год"
                              type="number"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"
                       text
                       @click="$router.push({ path: '/SearchResult/?text=' + title + '&day=' + day + '&month=' + month + '&year=' + year + '&tag=' + tag + '&source=' + source })"
                       class="searchBtn">
                    Найти
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                day: null,
                month: null,
                year: null,
                tag: null,
                source: null,

                tags: [],
                sources: [],
                days: [
                    { number: null, title: '' },
                    { number: 1, title: '1' },
                    { number: 2, title: '2' },
                    { number: 3, title: '3' },
                    { number: 4, title: '4' },
                    { number: 5, title: '5' },
                    { number: 6, title: '6' },
                    { number: 7, title: '7' },
                    { number: 8, title: '8' },
                    { number: 9, title: '9' },
                    { number: 10, title: '10' },
                    { number: 11, title: '11' },
                    { number: 12, title: '12' },
                    { number: 13, title: '13' },
                    { number: 14, title: '14' },
                    { number: 15, title: '15' },
                    { number: 16, title: '16' },
                    { number: 17, title: '17' },
                    { number: 18, title: '18' },
                    { number: 19, title: '19' },
                    { number: 20, title: '20' },
                    { number: 21, title: '21' },
                    { number: 22, title: '22' },
                    { number: 23, title: '23' },
                    { number: 24, title: '24' },
                    { number: 25, title: '25' },
                    { number: 26, title: '26' },
                    { number: 27, title: '27' },
                    { number: 28, title: '27' },
                    { number: 29, title: '29' },
                    { number: 30, title: '30' },
                    { number: 31, title: '31' },
                ],
                months: [
                    { number: null, title: '' },
                    { number: 1, title: 'Январь' },
                    { number: 2, title: 'Февраль' },
                    { number: 3, title: 'Март' },
                    { number: 4, title: 'Апрель' },
                    { number: 5, title: 'Май' },
                    { number: 6, title: 'Июнь' },
                    { number: 7, title: 'Июль' },
                    { number: 8, title: 'Август' },
                    { number: 9, title: 'Сентябрь' },
                    { number: 10, title: 'Октябрь' },
                    { number: 11, title: 'Ноябрь' },
                    { number: 12, title: 'Декабрь' },
                ],
            }
        },

        methods: {
            loadPage() {
                this.$http
                    .get(this.$store.state.baseUrl + `api/tag/GetAll?datetime=` + new Date().getMilliseconds())
                    .then(response => {
                        this.tags = response.data
                    })
                    .catch(e => {
                        this.$store.state.snackbarShow = false
                        this.$store.state.snackbarColor = "#ff5252"
                        this.$store.state.snackbarText = "Ошибка загрузки тегов"
                        this.$store.state.snackbarShow = true
                    });

                this.$http
                    .get(this.$store.state.baseUrl + `api/source/GetAll?datetime=` + new Date().getMilliseconds())
                    .then(response => {
                        this.sources = response.data
                    })
                    .catch(e => {
                        this.$store.state.snackbarShow = false
                        this.$store.state.snackbarColor = "#ff5252"
                        this.$store.state.snackbarText = "Ошибка загрузки источников"
                        this.$store.state.snackbarShow = true
                    });
            },

            search() {

            },
        },

        created() {
            this.loadPage()
        },

        //watch: {
        //    $route(toR, fromR) {
        //        this.id = toR.params['id']
        //        this.loadPage()
        //    },
        //},
    };
</script>

<style>
    .searchForm .v-text-field__details{
        display:none;
    }

    .searchBtn{
        float: right;
    }
</style>