<template>
    <div>
        <v-app id="inspire" class="pageWrap">
            <v-main>
                <v-app-bar
                    color="#161616"
                    dark
                    elevation="0"
                >
            
                    <v-toolbar-title class="customTitle">Andre<span class="redLetter">Martin</span></v-toolbar-title>

                    <v-tabs
                        right
                        class="ml-n9 hidden-sm-and-down"
                        color="#cf0010"
                        v-model="$store.state.menu">
                        <v-tab
                            v-for="link in links"
                            :value="link.id"
                            :key="link.id"
                            @click.prevent="$router.push(`${link.link}`)">
                                {{ link.title }}
                        </v-tab>
                    </v-tabs>
                    <v-spacer class="hidden-md-and-up"></v-spacer>
                    <v-app-bar-nav-icon @click="drawer = true" class="ml-n9 hidden-md-and-up"></v-app-bar-nav-icon>
                
                </v-app-bar>
                <router-view></router-view>
                <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    temporary
                    right>
                    <v-list-item>
                        <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            Андрей Мартынов
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            писатель
                        </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list
                        nav
                        dense>
                        <v-list-item-group
                            v-model="group"
                            active-class="red--text text--accent-4">
                            <v-list-item 
                                v-for="link in links"
                                :to="link.link"
                                :key="link.id">
                                <v-list-item-icon>
                                    <v-icon>{{link.icon}}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    {{ link.title }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-navigation-drawer>
            </v-main>
        </v-app>
    </div>
</template>

<script>
    export default {
      data: () => ({
        drawer: false,
        group: null,
        links: [
            {
                id: 0,
                icon: 'mdi-home',
                title: 'Главная',
                link: '/'
            },
            {
                id: 1,
                icon: 'mdi-book-open-page-variant-outline',
                title: 'Книги',
                link: '/sections'
            },
            {
                id: 2,
                icon: 'mdi-check-circle-outline',
                title: 'Рецензии',
                link: '/reviews'
            },
            {
                id: 3,
                icon: 'mdi-account-supervisor',
                title: 'Отзывы',
                link: '/comments'
            },
        ],
      }),
    }
</script>

<style>
    html{
        font-family: 'Gilroy';
        font-weight: 500;
    }

    .pageWrap{
        background-color: #161616 !important;
    }

    .customTitle{
        font-size: 30px !important;
        font-family: 'Gilroy' !important;
        font-weight: bold !important;
        min-width: 180px;
    }

    .redLetter{
        color: #cf0010;
    }
</style>