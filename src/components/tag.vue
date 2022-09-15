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
                                     :to="`/editTag/` + tag.id"
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
            <form autocomplete="off">
                <div class="form-wrapper clearfix">
                    <div class="label-wrap">
                        <label for="title">Наименование</label>
                    </div>
                    <div class="field-wrap">
                        <v-text-field v-model="tag.title"
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

                <div class="form-wrapper clearfix" style="margin-bottom:10px;">
                    <div class="label-wrap">
                        <label for="title">Родитель</label>
                    </div>
                    <div class="field-wrap">
                        <v-treeview :items="parents"
                                    dense
                                    :activatable="type != 'show'"
                                    :active.sync="active"
                                    transition
                                    hoverable
                                    item-disabled="locked"
                                    open-all>
                        </v-treeview>
                    </div>
                </div>
            </form>
            <div class="form-wrapper clearfix" v-if="type == 'add' && $store.state.isAdmin">
                <div class="label-wrap">
                    <label>&nbsp;</label>
                </div>
                <div class="field-wrap">
                    <v-btn color="primary" @click="addObj()" style="margin-right: 10px;">Сохранить</v-btn>
                    <v-btn @click="$router.push({ path: '/tags/' })">Отмена</v-btn>
                </div>
            </div>

            <div class="form-wrapper clearfix" v-if="type == 'edit' && $store.state.isAdmin">
                <div class="label-wrap">
                    <label>&nbsp;</label>
                </div>
                <div class="field-wrap">
                    <v-btn color="primary" @click="editObj()" style="margin-right: 10px;">Сохранить</v-btn>
                    <v-btn @click="$router.push({ path: '/showTag/' + tag.id })">Отмена</v-btn>
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
                search: null,
                parents: [],
                active: [],
                id: this.$route.params.id,
                tag: {
                    id: this.$route.params.id ? this.$route.params.id : `00000000-0000-0000-0000-000000000000`,
                    parentId: null,
                    title: '',
                    deleted: false,
                },
                loadedTag: false,
                loadedParents: false,
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
                        text: 'Теги',
                        disabled: false,
                        to: '/Tags',
                    },
                    {
                        text: 'Тег',
                        disabled: true,
                        to: 'breadcrumbs_link_2',
                    },
                ],
            }
        },

        computed: {
            loaded: function () {
                return this.loadedTag && this.loadedParents
            },
        },

        methods: {
            loadPage() {
                this.$http
                    .get(this.$store.state.baseUrl + `api/tag/getAllTree/?parentId=00000000-0000-0000-0000-000000000000&disabledId=` + this.tag.id + `&datetime=` + new Date().getMilliseconds())
                    .then(response => {
                        this.parents = response.data
                    })
                    .catch(e => {
                        this.$store.state.snackbarShow = false
                        this.$store.state.snackbarColor = "#ff5252"
                        this.$store.state.snackbarText = "Ошибка загрузки тегов"
                        this.$store.state.snackbarShow = true
                        console.log(e)
                    })
                    .finally(() => {
                        this.loadedParents = true
                    });

                if (this.type == "show" || this.type == "edit") {
                    this.$http
                        .get(this.$store.state.baseUrl + `api/tag/get/` + this.id + `?datetime=` + new Date().getMilliseconds())
                        .then(response => {
                            this.tag = response.data
                            if (this.tag.parentId) {
                                this.active.push(this.tag.parentId)
                            }
                        })
                        .catch(e => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка загрузки тега"
                            this.$store.state.snackbarShow = true
                            console.log(e)
                        })
                        .finally(() => {
                            this.loadedTag = true
                        });
                } else {
                    this.loadedTag = true
                }
            },

            removeParent() {
                this.tag.parentId = null
                this.active = []
            },

            getPageTitle() {
                if (this.type == "show") {
                    this.pageTitle = 'Просмотр тега'
                } else if (this.type == "add") {
                    this.pageTitle = 'Добавление тега'
                } else if (this.type == "edit") {
                    this.pageTitle = 'Редактирование тега'
                }
            },

            addObj() {
                if (!confirm('Добавить тег?')) { }
                else if (!this.tag.title || this.tag.title.length == 0) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "Наименование обязательно для заполнения"
                    this.$store.state.snackbarShow = true
                } else {
                    this.loadedTag = false
                    let newTag = {
                        Title: this.tag.title,
                        Deleted: this.tag.deleted,
                        AdminName: this.$store.state.adminName,
                        ParentId: this.tag.parentId ? this.tag.parentId : '00000000-0000-0000-0000-000000000000'
                    }

                    this.$http.post(this.$store.state.baseUrl + `api/tag/AddObj`, newTag)
                        .then(response => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#4caf50"
                            this.$store.state.snackbarText = "Тег успешно добавлено"
                            this.$store.state.snackbarShow = true
                            this.$router.push({ path: '/showTag/' + response.data.id })
                        })
                        .catch(error => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка добавления тега"
                            this.$store.state.snackbarShow = true
                            this.loadedTag = true
                            console.log(error)
                        });
                }
            },

            editObj() {
                if (!confirm('Сохранить изменения?')) {}
                else if (!this.tag.title || this.tag.title.length == 0) {
                    this.$store.state.snackbarShow = false
                    this.$store.state.snackbarColor = "#ff5252"
                    this.$store.state.snackbarText = "Наименование обязательно для заполнения"
                    this.$store.state.snackbarShow = true
                } else {
                    this.loadedTag = false

                    let formData = new FormData();
                    formData.append('Id', this.tag.id);
                    formData.append('Title', this.tag.title);
                    formData.append('Deleted', this.tag.deleted);
                    formData.append('AdminName', this.$store.state.adminName);
                    formData.append('ParentId', this.tag.parentId ? this.tag.parentId : '00000000-0000-0000-0000-000000000000');

                    this.$http.post(this.$store.state.baseUrl + `api/tag/EditObj`, formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then(response => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#4caf50"
                            this.$store.state.snackbarText = "Тег успешно отредактирован"
                            this.$store.state.snackbarShow = true
                            setTimeout(() => this.$router.push({ path: '/showTag/' + response.data.id }), 3000)
                            
                        })
                        .catch(error => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка редактирования тега"
                            this.$store.state.snackbarShow = true
                            this.loadedTag = true
                            console.log(error)
                        });
                }
            },

            deleteObj() {
                if (confirm('Удалить тег?')) {
                    this.loadedTag = false

                    let formData = new FormData();
                    formData.append('Id', this.tag.id);
                    formData.append('AdminName', this.$store.state.adminName);
                    
                    this.$http.post(this.$store.state.baseUrl + `api/tag/DeleteObj`, formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then(response => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#4caf50"
                            this.$store.state.snackbarText = "Тег успешно удален"
                            this.$store.state.snackbarShow = true
                            this.$router.push({ path: '/tags/'})

                        })
                        .catch(error => {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Ошибка удаления тега"
                            this.$store.state.snackbarShow = true
                            this.loadedTag = true
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

            active() {
                if (this.active && this.active.length > 0) {
                    if (this.active[0] != this.tag.id) {
                        this.tag.parentId = this.active[0];
                    } else {
                        this.active = []
                    }
                } else {
                    this.tag.parentId = null;
                }
            }
        },
    };
</script>
