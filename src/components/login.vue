<template>
    <v-dialog v-model="$store.state.openLogin"
              max-width="500px">
        <v-card>
            <v-card-title>
                <span>Войти</span>
            </v-card-title>
            <v-card-text style="padding-bottom:0;">
                <v-text-field v-model="user.login"
                              label="Логин"
                              dense
                              autocomplete="off"></v-text-field>

                <v-text-field v-model="user.password"
                              label="Пароль"
                              dense
                              autocomplete="off"
                              type="password"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"
                       text
                       @click="login()">
                    Войти
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    login: '',
                    password: '',
                }
            }
        },

        methods: {
            login() {
                let user = {
                    Login: this.user.login,
                    Password: this.user.password,
                    Role: '',
                }
                this.$http.post(this.$store.state.baseUrl + `api/values/login`, user)
                    .then(response => {
                        if (response.data) {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#4caf50"
                            this.$store.state.snackbarText = "Вы успешно вошли"
                            this.$store.state.snackbarShow = true

                            this.$store.commit('changeisadmin', true)
                            this.$store.state.openLogin = false
                            this.$store.state.adminName = this.user.login
                        } else {
                            this.$store.state.snackbarShow = false
                            this.$store.state.snackbarColor = "#ff5252"
                            this.$store.state.snackbarText = "Неверно введен логин/пароль"
                            this.$store.state.snackbarShow = true

                            this.$store.commit('changeisadmin', false)
                        }
                    })
                    .catch(error => {
                        this.$store.state.snackbarShow = false
                        this.$store.state.snackbarColor = "#ff5252"
                        this.$store.state.snackbarText = "Ошибка при попытке входа"
                        this.$store.state.snackbarShow = true
                        this.loaded = true
                        console.log(error)
                    });
            },
        },

        computed: {
            isAdmin() {
                return this.$store.getters['getisadmin']
            },
        },

        watch: {
            isAdmin() {
                this.login()
            },
        },
    };
</script>