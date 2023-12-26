<template>
    <div class="dashboard-menu-component">
        <CommonBanner :banner="banner" />

        <div class="container pt-5 mt-5" v-if="categories.length > 0">
            <div class="menu-element-wrapper py-5" v-for="(category) in categories" :key="category._id">
                <div class="row" :class="{'wrapper-reverse': category.reverse}">
                    <div class="col-6">
                        <div class="menu-banner">
                            <img :src="category.thumbs[0]" alt="thumbnail" />
                            <h2 class="menu-banner-title">{{ category.title }}</h2>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-12 mb-5" v-for="dish in category.dishs" :key="dish._id">
                                <router-link :to="'/dish/'+dish._id" class="menu-dish">
                                    <div class="menu-dish-infor">
                                        <img :src="dish.thumbs[0]" alt="thumbs" />
                                        <div class="menu-dish-infor-wrapper">
                                            <h3 class="menu-dish-title">{{ dish.title }}</h3>
                                        </div>
                                    </div>
                                    <h4 class="menu-dish-price">{{ dish.price.$numberDecimal }} VND</h4>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid pt-5 mt-5" v-if="categories.length <= 0">
            <CommonBlankMessage :message="'Danh mục menu chưa cập nhật'" />
        </div>
    </div>
</template>

<script>
    import CommonBanner from "../common-component/CommonBanner.vue";
    import CommonBlankMessage from "../common-component/CommonBlankMessage.vue";
    import serviceHttp from "@/services/service-http";
    import environment from "@/environment";

    const { http } = serviceHttp();

    export default {
        name: "DashboardMenuComponent",
        components: {
            CommonBanner,
            CommonBlankMessage
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
                    let { status, metadata} = information;

                    if(status) {
                        console.log(metadata.categories);

                        this.categories = metadata.categories.map((category, index) => {
                            category.reverse = (index % 2 !== 0)? true : false;
                            return category;
                        })
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

    /** BANNER */
    .menu-banner {
        height: 100%;
        position: relative;
    }

    .menu-banner img {
        filter: brightness(0.95);
        height: 100%;
        width: 100%;
    }

    .menu-banner .menu-banner-title {
        color: #ffffff;
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: .3px;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        z-index: 1;
    }

    /** MENU */
    .menu-dish {
        color: var(--first-text-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .menu-dish-infor {
        display: flex;
        align-items: center;
        gap: 10px;
        width: calc(100% - 25%);
    }

    .menu-dish-infor img {
        border-radius: 50%;
        width: 70px;
    }

    .menu-dish-infor-wrapper {
        text-align: left;
        width: 100%;
    }
    .menu-dish-infor-wrapper::after {
        content: "";
        border-bottom: 1px dotted #959595;
        display: flex;
        margin-top: 1rem;
        width: 100%;
    }

    .menu-dish-price {
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: .3px;
        margin-bottom: 0px;
        text-align: left;
        text-transform: uppercase;
    }
</style>