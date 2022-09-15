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
                                     :to="`/editSource/` + source.id"
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
                    <label for="author">Автор</label>
                </div>
                <div class="field-wrap">
                    <v-text-field v-model="source.author"
                                  id="author"
                                  outlined
                                  dense
                                  :clearable="type != 'show'"
                                  autocomplete="off"
                                  background-color="white"
                                  :readonly="type == 'show'"></v-text-field>
                </div>
            </div>

            <div class="form-wrapper clearfix">
                <div class="label-wrap">
                    <label for="title">Наименование</label>
                </div>
                <div class="field-wrap">
                    <v-text-field v-model="source.title"
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
                    <v-textarea v-model="source.description"
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
                    <label for="uploadedFile">Фотография</label>
                </div>
                <div class="field-wrap" v-if="type == 'add' || type == 'edit' && source.photo && source.photo.length == 0 || type == 'edit' && !source.photo">
                    <v-file-input v-model="source.uploadedFile"
                                  id="uploadedFile"
                                  outlined
                                  background-color="white"
                                  dense
                                  accept="image/jpeg,image/png"></v-file-input>
                </div>
                <div class="field-wrap" v-if="source.photo && source.photo.length > 0" style="position: relative;">
                    <span @click="source.photo = ''" style="cursor: pointer;position: absolute;left: 100px;top: -10px;" v-if="type != 'show'">X</span>
                    <img :src="`../images/sources/preview` + source.photo+ `?datetime=` + new Date().getMilliseconds()" style="max-width:100px;" />
                </div>
            </div>

            <div class="form-wrapper clearfix" v-if="type == 'add' && $store.state.isAdmin">
                <div class="label-wrap">
                    <label>&nbsp;</label>
                </div>
                <div class="field-wrap">
                    <v-btn color="primary" @click="addObj()" style="margin-right: 10px;">Сохранить</v-btn>
                    <v-btn @click="$router.push({ path: '/sources/' })">Отмена</v-btn>
                </div>
            </div>

            <div class="form-wrapper clearfix" v-if="type == 'edit' && $store.state.isAdmin">
                <div class="label-wrap">
                    <label>&nbsp;</label>
                </div>
                <div class="field-wrap">
                    <v-btn color="primary" @click="editObj()" style="margin-right: 10px;">Сохранить</v-btn>
                    <v-btn @click="$router.push({ path: '/showsource/' + source.id })">Отмена</v-btn>
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
                source: {
                    id: this.$route.params.id,
                    author: '',
                    title: '',
                    description: '',
                    photo: '',
                    uploadedFile: null,
                    deleted: false,
                },
                loaded: false,
                pageTitle: '',

                rules: {
                    required: value => !!value || 'Обязательно для заполения',
                },
                breadcrumbs: [
                    {
                        text: 'Главная',
                        disabled: false,
                        to: '/',
                    },
                    {
                        text: 'Источники',
                        disabled: false,
                        to: '/Sources',
                    },
                    {
                        text: 'Источник',
                        disabled: true,
                        to: 'breadcrumbs_link_2',
                    },
                ],
            }
        },

        methods: {
            loadPage() {
                if (this.type == "show" || this.type == "edit") {
                    this.$http
                        .get(this.$store.state.baseUrl + `api/source/get/` + this.id + `?datetime=` + new Date().getMilliseconds())
                        .then(response => {
                            this.source = response.data
                            this.loaded = true
                        })
                        .catch(e => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка загрузки источника"
                            this.$store.state.snackbarShow = true
                            this.loaded = true
                            console.log(e)
                        });
                } else {
                    this.loaded = true
                }
            },

            getPageTitle() {
                if (this.type == "show") {
                    this.pageTitle = 'Просмотр источника'
                } else if (this.type == "add") {
                    this.pageTitle = 'Добавление источника'
                } else if (this.type == "edit") {
                    this.pageTitle = 'Редактирование источника'
                }
            },

            addObj() {
                if (!confirm('Добавить источник?')) { }
                else if (!this.source.title || this.source.title.length == 0) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "Наименование обязательно для заполнения"
                    this.$store.state.snackbarShow = true
                } else {
                    this.loaded = false

                    let formData = new FormData();
                    formData.append('Author', this.source.author);
                    formData.append('Title', this.source.title);
                    formData.append('Description', this.source.description);
                    formData.append('UploadedFile', this.source.uploadedFile);
                    formData.append('Photo', this.source.photo);
                    formData.append('Deleted', this.source.deleted);
                    formData.append('AdminName', this.$store.state.adminName);

                    this.$http.post(this.$store.state.baseUrl + `api/source/AddObj`, formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then(response => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#4caf50"
                            this.$store.state.snackbarText = "Источник успешно добавлен"
                            this.$store.state.snackbarShow = true
                            this.$router.push({ path: '/showsource/' + response.data.id })
                        })
                        .catch(error => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка добавления источника"
                            this.$store.state.snackbarShow = true
                            this.loaded = true
                            console.log(error)
                        });
                }
            },

            editObj() {
                if (!confirm('Сохранить изменения?')) {}
                else if (!this.source.title || this.source.title.length == 0) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "Наименование обязательно для заполнения"
                    this.$store.state.snackbarShow = true
                } else {
                    this.loaded = false

                    let formData = new FormData();
                    formData.append('Id', this.source.id);
                    formData.append('Author', this.source.author);
                    formData.append('Title', this.source.title);
                    formData.append('Description', this.source.description);
                    formData.append('UploadedFile', this.source.uploadedFile);
                    formData.append('Photo', this.source.photo);
                    formData.append('Deleted', this.source.deleted);
                    formData.append('AdminName', this.$store.state.adminName);

                    this.$http.post(this.$store.state.baseUrl + `api/source/EditObj`, formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then(response => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#4caf50"
                            this.$store.state.snackbarText = "Источник успешно отредактирован"
                            this.$store.state.snackbarShow = true
                            setTimeout(() => this.$router.push({ path: '/showsource/' + response.data.id }), 3000)
                            
                        })
                        .catch(error => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка редактирования источника"
                            this.$store.state.snackbarShow = true
                            this.loaded = true
                            console.log(error)
                        });
                }
            },

            deleteObj() {
                if (confirm('Удалить источник?')) {
                    this.loaded = false

                    let formData = new FormData();
                    formData.append('Id', this.source.id);
                    formData.append('AdminName', this.$store.state.adminName);
                    
                    this.$http.post(this.$store.state.baseUrl + `api/source/DeleteObj`, formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then(response => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#4caf50"
                            this.$store.state.snackbarText = "Источник успешно удалено"
                            this.$store.state.snackbarShow = true
                            this.$router.push({ path: '/sources/'})

                        })
                        .catch(error => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка удаления источника"
                            this.$store.state.snackbarShow = true
                            this.loaded = true
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
