<template>
    <div style="padding:30px;">
        <v-breadcrumbs :items="breadcrumbs"
                       large></v-breadcrumbs>
        <div v-if="!loaded" class="text-center">
            <v-progress-circular indeterminate
                                 color="primary"
                                 :size="70"></v-progress-circular>
        </div>

        <div v-if="loaded">
            <p class="main-title">
                {{pageTitle}}

                <v-menu bottom
                        right
                        transition="slide-y-transition"
                        min-width="200"
                        v-if="type == 'show' && $store.state.isAdmin">
                    <template v-slot:activator="{ on }">
                        <v-btn icon
                               v-on="on"
                               style="float: right;">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
                    <v-list dense
                            nav>
                        <v-list-item link
                                     router
                                     :to="`/editHoliday/` + holiday.id"
                                     class="custom-dropdown-menu">
                            <v-list-item-icon>
                                <v-icon>mdi-pencil</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>Редактировать</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item link
                                     class="custom-dropdown-menu"
                                     @click="deleteObj()">
                            <v-list-item-icon>
                                <v-icon>mdi-delete</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>Удалить</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </p>

            <div class="form-wrapper clearfix">
                <div class="label-wrap">
                    <label for="title">Наименование</label>
                </div>
                <div class="field-wrap">
                    <v-text-field v-model="holiday.title"
                                  id="title"
                                  outlined
                                  dense
                                  :clearable="type != 'show'"
                                  autocomplete="off"
                                  background-color="white"
                                  :rules="[rules.required]"
                                  :readonly="type == 'show'"></v-text-field>
                </div>
            </div>

            <div class="form-wrapper clearfix">
                <div class="label-wrap">
                    <label for="description">Описание</label>
                </div>
                <div class="field-wrap">
                    <v-textarea v-model="holiday.description"
                                id="description"
                                outlined
                                dense
                                :clearable="type != 'show'"
                                autocomplete="off"
                                background-color="white"
                                :readonly="type == 'show'"></v-textarea>
                </div>
            </div>

            <div class="form-wrapper clearfix">
                <div class="label-wrap">
                    <label for="day">День</label>
                </div>
                <div class="field-wrap">
                    <v-select v-model="holiday.day"
                              id="day"
                              outlined
                              dense
                              background-color="white"
                              :items="days"
                              item-text="title"
                              item-value="number"
                              :readonly="type == 'show'"></v-select>
                </div>
            </div>

            <div class="form-wrapper clearfix">
                <div class="label-wrap">
                    <label for="month">Месяц</label>
                </div>
                <div class="field-wrap">
                    <v-select v-model="holiday.month"
                              id="month"
                              outlined
                              dense
                              background-color="white"
                              :items="months"
                              item-text="title"
                              item-value="number"
                              :readonly="type == 'show'"></v-select>
                </div>
            </div>

            <div class="form-wrapper clearfix">
                <div class="label-wrap">
                    <label for="year">Год</label>
                </div>
                <div class="field-wrap">
                    <v-text-field v-model="holiday.year"
                                  id="year"
                                  outlined
                                  dense
                                  :clearable="type != 'show'"
                                  autocomplete="off"
                                  background-color="white"
                                  type="number"
                                  min="1900"
                                  step="1"
                                  :rules="[rules.required, rules.yearMin, rules.yearMax, rules.isInteger]"
                                  :readonly="type == 'show'"></v-text-field>
                </div>
            </div>

            <div class="form-wrapper clearfix">
                <div class="label-wrap">
                    <label for="uploadedFile">Фотография</label>
                </div>
                <div class="field-wrap" v-if="type == 'add' || type == 'edit' && holiday.photo && holiday.photo.length == 0 || type == 'edit' && !holiday.photo">
                    <v-file-input v-model="holiday.uploadedFile"
                                  id="uploadedFile"
                                  outlined
                                  background-color="white"
                                  dense
                                  accept="image/jpeg,image/png"></v-file-input>
                </div>
                <div class="field-wrap" v-if="holiday.photo && holiday.photo.length > 0" style="position: relative;">
                    <span @click="holiday.photo = ''" style="cursor: pointer;position: absolute;left: 100px;top: -10px;" v-if="type != 'show'">X</span>
                    <img :src="`../images/holidays/preview` + holiday.photo+ `?datetime=` + new Date().getMilliseconds()" style="max-width:100px;" />
                </div>
            </div>

            <div class="form-wrapper clearfix" style="margin-bottom:10px;">
                <div class="label-wrap">
                    <label for="tags">Теги</label>
                </div>
                <div class="field-wrap">
                    <v-treeview :items="tags"
                                dense
                                :activatable="type != 'show'"
                                :active.sync="holiday.tags"
                                transition
                                hoverable
                                multiple-active
                                open-all></v-treeview>
                </div>
            </div>

            <div class="form-wrapper clearfix">
                <div class="label-wrap">
                    <label for="textSources">Источники события</label>
                </div>
                <div class="field-wrap">
                    <v-select v-model="holiday.textSources"
                              id="textSources"
                              :items="sources"
                              item-text="title"
                              item-value="id"
                              multiple
                              chips
                              persistent-hint
                              outlined
                              background-color="white"
                              dense
                              :readonly="type == 'show'"></v-select>
                </div>
            </div>

            <div class="form-wrapper clearfix">
                <div class="label-wrap">
                    <label for="photoSources">Источники фотографии</label>
                </div>
                <div class="field-wrap">
                    <v-select v-model="holiday.photoSources"
                              id="photoSources"
                              :items="sources"
                              item-text="title"
                              item-value="id"
                              multiple
                              chips
                              persistent-hint
                              outlined
                              background-color="white"
                              dense
                              :readonly="type == 'show'"></v-select>
                </div>
            </div>

            <div class="form-wrapper clearfix">
                <div class="label-wrap">
                    <label for="additionalInformation">Доп.информация</label>
                </div>
                <div class="field-wrap">
                    <v-textarea v-model="holiday.additionalInformation"
                                id="additionalInformation"
                                outlined
                                dense
                                :clearable="type != 'show'"
                                autocomplete="off"
                                background-color="white"
                                :readonly="type == 'show'"></v-textarea>
                </div>
            </div>

            <div class="form-wrapper clearfix">
                <div class="label-wrap">
                    <label for="priority">Приоритет</label>
                </div>
                <div class="field-wrap">
                    <v-text-field v-model="holiday.priority"
                                  id="priority"
                                  outlined
                                  dense
                                  :clearable="type != 'show'"
                                  autocomplete="off"
                                  background-color="white"
                                  type="number"
                                  step="1"
                                  :rules="[rules.required, rules.isInteger]"
                                  :readonly="type == 'show'"></v-text-field>
                </div>
            </div>

            <div class="form-wrapper clearfix" v-if="type == 'add' && $store.state.isAdmin">
                <div class="label-wrap">
                    <label>&nbsp;</label>
                </div>
                <div class="field-wrap">
                    <v-btn color="primary" @click="addObj()" style="margin-right: 10px;">Сохранить</v-btn>
                    <v-btn @click="$router.push({ path: '/holidays/' })">Отмена</v-btn>
                </div>
            </div>

            <div class="form-wrapper clearfix" v-if="type == 'edit' && $store.state.isAdmin">
                <div class="label-wrap">
                    <label>&nbsp;</label>
                </div>
                <div class="field-wrap">
                    <v-btn color="primary" @click="editObj()" style="margin-right: 10px;">Сохранить</v-btn>
                    <v-btn @click="$router.push({ path: '/showholiday/' + holiday.id })">Отмена</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                default: 'show',
                type: String
            },
        },

        data() {
            return {
                id: this.$route.params.id,
                holiday: {
                    id: this.$route.params.id,
                    title: '',
                    description: '',
                    photo: '',
                    uploadedFile: null,
                    day: null,
                    month: null,
                    year: new Date().getFullYear(),
                    priority: 1,
                    additionalInformation: '',
                    deleted: false,
                    tags: [],
                    textSources: [],
                    photoSources: [],
                },
                breadcrumbs: [
                    {
                        text: 'Главная',
                        disabled: false,
                        to: '/',
                    },
                    {
                        text: 'События',
                        disabled: false,
                        to: '/Holidays',
                    },
                    {
                        text: 'Событие',
                        disabled: true,
                        to: 'breadcrumbs_link_2',
                    },
                ],
                loadedTags: false,
                loadedHoliday: false,
                loadedSources: false,
                pageTitle: '',
                tags: [],
                sources: [],

                rules: {
                    required: value => !!value || 'Обязательно для заполения',
                    dayMin: value => value >= 1 || 'День не может быть меньше 1',
                    dayMax: value => value <= 31 || 'День не может быть больше 31',
                    yearMin: value => value >= 1900 || 'Год не может быть меньше 1900',
                    yearMax: value => value <= new Date().getFullYear() || 'Год не может быть больше текущего',
                    isInteger: value => value % 1 == 0 || 'Должно быть целым числом',
                },

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

        computed: {
            loaded: function () {
                return this.loadedTags && this.loadedHoliday && this.loadedSources
            },
        },

        methods: {
            loadPage() {
                this.$http
                    .get(this.$store.state.baseUrl + `api/tag/getAllTree/?parentId=00000000-0000-0000-0000-000000000000&datetime=` + new Date().getMilliseconds())
                    .then(response => {
                        this.tags = response.data
                    })
                    .catch(e => {
                        this.$store.state.snackbarShow = false
                        this.$store.state.snackbarColor = "#ff5252"
                        this.$store.state.snackbarText = "Ошибка загрузки тегов"
                        this.$store.state.snackbarShow = true
                        console.log(e)
                    })
                    .finally(() => {
                        this.loadedTags = true
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
                    })
                    .finally(() => {
                        this.loadedSources = true
                    });

                if (this.type == "show" || this.type == "edit") {
                    this.$http
                        .get(this.$store.state.baseUrl + `api/holiday/get/` + this.id + `?datetime=` + new Date().getMilliseconds())
                        .then(response => {
                            this.holiday = response.data
                        })
                        .catch(e => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка загрузки события"
                            this.$store.state.snackbarShow = true
                            console.log(e)
                        })
                        .finally(() => {
                            this.loadedHoliday = true
                        });
                } else {
                    this.loadedHoliday = true
                }
            },

            getPageTitle() {
                if (this.type == "show") {
                    this.pageTitle = 'Просмотр события'
                } else if (this.type == "add") {
                    this.pageTitle = 'Добавление события'
                } else if (this.type == "edit") {
                    this.pageTitle = 'Редактирование события'
                }
            },

            addObj() {
                if (!confirm('Добавить событие?')) { }
                else if (!this.holiday.title || this.holiday.title.length == 0) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "Наименование обязательно для заполнения"
                    this.$store.state.snackbarShow = true
                } else if (this.holiday.day && (this.holiday.day < 1 || this.holiday.day > 31)) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "День должен находиться в промежутке от 1 до 31"
                    this.$store.state.snackbarShow = true
                } else if (this.holiday.month && (this.holiday.month < 1 || this.holiday.month > 12)) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "Месяц должен находиться в промежутке от 1 до 12"
                    this.$store.state.snackbarShow = true
                } else if (!this.holiday.year || this.holiday.year < 1900 || this.holiday.year > new Date().getFullYear()) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "Год должен находиться в промежутке от 1900 до " + new Date().getFullYear()
                    this.$store.state.snackbarShow = true
                } else {
                    this.loadedHoliday = false

                    let formData = new FormData();
                    formData.append('Title', this.holiday.title);
                    if (this.holiday.description != null) {
                        formData.append('Description', this.holiday.description);
                    } else {
                        formData.append('Description', "");
                    }
                    if (this.holiday.day != null) {
                        formData.append('Day', this.holiday.day);
                    }
                    if (this.holiday.month != null) {
                        formData.append('Month', this.holiday.month);
                    }
                    formData.append('Year', this.holiday.year);
                    formData.append('UploadedFile', this.holiday.uploadedFile);
                    if (this.holiday.photo != null) {
                        formData.append('Photo', this.holiday.photo);
                    } else {
                        formData.append('Photo', "");
                    }
                    formData.append('Priority', this.holiday.priority);
                    formData.append('AdminName', this.$store.state.adminName);
                    
                    if (this.holiday.additionalInformation != null) {
                        formData.append('AdditionalInformation', this.holiday.additionalInformation);
                    } else {
                        formData.append('AdditionalInformation', "");
                    }
                    formData.append('Deleted', this.holiday.deleted);
                    formData.append('Tags', this.holiday.tags);
                    formData.append('TextSources', this.holiday.textSources);
                    formData.append('PhotoSources', this.holiday.photoSources);

                    this.$http.post(this.$store.state.baseUrl + `api/holiday/AddObj`, formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then(response => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#4caf50"
                            this.$store.state.snackbarText = "Событие успешно добавлено"
                            this.$store.state.snackbarShow = true
                            this.$router.push({ path: '/showholiday/' + response.data.id })
                        })
                        .catch(error => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка добавления события"
                            this.$store.state.snackbarShow = true
                            this.loadedHoliday = true
                            console.log(error)
                        });
                }
            },

            editObj() {
                if (!confirm('Сохранить изменения?')) {}
                else if (!this.holiday.title || this.holiday.title.length == 0) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "Наименование обязательно для заполнения"
                    this.$store.state.snackbarShow = true
                } else if (this.holiday.day && (this.holiday.day < 1 || this.holiday.day > 31)) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "День должен находиться в промежутке от 1 до 31"
                    this.$store.state.snackbarShow = true
                } else if (this.holiday.month && (this.holiday.month < 1 || this.holiday.month > 12)) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "Месяц должен находиться в промежутке от 1 до 12"
                    this.$store.state.snackbarShow = true
                } else if (!this.holiday.year || this.holiday.year < 1900 || this.holiday.year > new Date().getFullYear()) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "Год должен находиться в промежутке от 1900 до " + new Date().getFullYear()
                    this.$store.state.snackbarShow = true
                } else {
                    this.loadedHoliday = false

                    let formData = new FormData();
                    formData.append('Id', this.holiday.id);
                    formData.append('Title', this.holiday.title);
                    if (this.holiday.description != null) {
                        formData.append('Description', this.holiday.description);
                    } else {
                        formData.append('Description', "");
                    }
                    if (this.holiday.day != null) {
                        formData.append('Day', this.holiday.day);
                    }
                    if (this.holiday.month != null) {
                        formData.append('Month', this.holiday.month);
                    }
                    formData.append('Year', this.holiday.year);
                    formData.append('UploadedFile', this.holiday.uploadedFile);
                    if (this.holiday.photo != null) {
                        formData.append('Photo', this.holiday.photo);
                    } else {
                        formData.append('Photo', "");
                    }
                    formData.append('Priority', this.holiday.priority);

                    if (this.holiday.additionalInformation != null) {
                        formData.append('AdditionalInformation', this.holiday.additionalInformation);
                    } else {
                        formData.append('AdditionalInformation', "");
                    }
                    formData.append('Deleted', this.holiday.deleted);
                    formData.append('Tags', this.holiday.tags);
                    formData.append('TextSources', this.holiday.textSources);
                    formData.append('PhotoSources', this.holiday.photoSources);
                    formData.append('AdminName', this.$store.state.adminName);

                    this.$http.post(this.$store.state.baseUrl + `api/holiday/EditObj`, formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then(response => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#4caf50"
                            this.$store.state.snackbarText = "Событие успешно отредактировано"
                            this.$store.state.snackbarShow = true
                            setTimeout(() => this.$router.push({ path: '/showholiday/' + response.data.id }), 3000)
                            
                        })
                        .catch(error => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка редактирования события"
                            this.$store.state.snackbarShow = true
                            this.loadedHoliday = true
                            console.log(error)
                        });
                }
            },

            deleteObj() {
                if (confirm('Удалить событие?')) {
                    this.loadedHoliday = false

                    let formData = new FormData();
                    formData.append('Id', this.holiday.id);
                    formData.append('AdminName', this.$store.state.adminName);
                    
                    this.$http.post(this.$store.state.baseUrl + `api/holiday/DeleteObj`, formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then(response => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#4caf50"
                            this.$store.state.snackbarText = "Событие успешно удалено"
                            this.$store.state.snackbarShow = true
                            this.$router.push({ path: '/holidays/'})

                        })
                        .catch(error => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка удаления события"
                            this.$store.state.snackbarShow = true
                            this.loadedHoliday = true
                            console.log(error)
                        });
                }
            },
        },

        created() {
            this.getPageTitle()
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
