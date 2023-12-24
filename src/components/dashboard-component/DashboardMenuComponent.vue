<template>
    <div class="dashboard-menu-component">
        <CommonBanner :banner="banner" />

        <div class="container-fluid py-5" v-if="categories.length > 0">
            <div class="menu-element-wrapper py-5" v-for="(category, index) in categories" :key="category._id">
                <div class="row" :class="{'wrapper-reverse': 2 % index == 0}">
                    <div class="col-6">
                        <img :src="category.thumbs[0]" alt="thumbnail" />
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-6" v-for="dish in category.dishs" :key="dish._id">
                                <div class="menu-dish-wrapper">
                                    <div class="menu-dish-thumbnail">
                                        <img :src="dish.thumbs[0]" alt="thumbs" />
                                    </div>
                                    <div class="menu-dish-infor">
                                        <h3 class="menu-dish-infor-title">{{ dish.title }}</h3>
                                        <h4 class="menu-dish-price">{{ dish.price.$numberDecimal }}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid" v-if="categories.length <= 0">
            <h2 class="blank-title">Danh mục menu chưa cập nhật</h2>
        </div>
    </div>
</template>

<script>
    import CommonBanner from "../common-component/CommonBanner.vue";
    import serviceHttp from "@/services/service-http";
    import environment from "@/environment";

    const { http } = serviceHttp();

    export default {
        name: "DashboardMenuComponent",
        components: {
            CommonBanner
        },
        data() {
            return {
                banner: "linear-gradient(to right, rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)), url('/assets/images/banner/banner_menu.jpg')",
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
                    let { status, metadata} = information;
                    if(status) {
                        console.log(metadata);
                        this.categories = metadata.categories;
                        this.$store.commit('toggleLoader');
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .wrapper-reverse {
        flex-direction: row-reverse;
    }
    .menu-element-wrapper img {
        height: 100%;
        width: 100%;
    }

    .menu-dish-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .menu-dish-thumbnail img {
        border-radius: 50%;
        width: 70px;
    }

    .blank-title {
        font-size: 2.5rem;
        text-align: center;
        text-transform: capitalize;
    }
</style>