<template>
    <div class="dashboard-menu-component">
        <CommonBanner :banner="banner" />

        <SectionMenuCategryComponent />
    </div>
</template>

<script>
    import CommonBanner from "../common-component/CommonBanner.vue";
    import SectionMenuCategryComponent from "../section-component/SectionMenuCategoryComponent.vue";
    import serviceHttp from "@/services/service-http";

    import environment from "@/environment";

    const { http } = serviceHttp();


    export default {
        name: "DashboardMenuComponent",
        components: {
            CommonBanner,
            SectionMenuCategryComponent,
        },
        data() {
            return {
                banner: "linear-gradient(to right, rgb(0 0 0 / 35%), rgb(0 0 0 / 35%)), url('/assets/images/banner/banner_menu.jpg')",
                categories: [],
            }
        },
        mounted() {
            this.loadCategory();
        },
        methods: {
            async loadCategory() {
                this.$store.commit('toggleLoader');
                let url = `${environment.api.url}${environment.api.category.root}`;
                await http(url, "GET", null, (information) => {
                    let { status, message, metadata} = information;

                    if(status) {
                        let categories = metadata.categories.map((category, index) => {
                            category.reverse = (index % 2 !== 0)? true : false;
                            category.dishs = [];
                            return category;
                        })
                        this.$store.commit("setInitCategory",  categories);
                        
                    } else {
                        this.$store.commit("toggleMessage", message);
                        setTimeout(() => {
                            this.$store.commit("toggleMessage", "");
                        }, 2500)
                    }
                    this.$store.commit('toggleLoader');
                })
            }
        }
    }
</script>

<style scoped></style>