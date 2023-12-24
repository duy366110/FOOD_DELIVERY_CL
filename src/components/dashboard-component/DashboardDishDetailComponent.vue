<template>
    <div class="dashboard-dish-detail-component">
        <CommonBanner :banner="banner" />
        <div class="container-fluid py-5">
            <div class="row">
                <div class="col-6">
                    <div class="dish-detail-banner">
                        <img :src="thumb" alt="thumbnail" />
                    </div>
                </div>
                <div class="col-6">col-6</div>
            </div>
        </div>
    </div>
</template>

<script>
    import CommonBanner from "../common-component/CommonBanner.vue";
    import serviceHttp from "@/services/service-http";
    import environment from "@/environment";

    const { http } = serviceHttp();

    export default {
        name: "DashboardDishDetailComponent",
        components: {
            CommonBanner
        },
        data() {
            return {
                banner: "linear-gradient(to right, rgb(0 0 0 / 35%), rgb(0 0 0 / 35%)), url('/assets/images/banner/banner_about.jpg')",
                thumb: "",
                dish: {},
            }
        },
        created() {
            this.loaderDish();
        },
        methods: {
            async loaderDish() {
                this.$store.commit('toggleLoader');
                let url = `${environment.api.url}${environment.api.dish.root}/${this.$route.params.id}`;
                await http(url, "GET", null, (information) => {
                    let { status, metadata} = information;
                    if(status) {
                        console.log(metadata.dish);
                        // this.dish = metadata.dish;
                        this.thumb = metadata.dish.thumbs[0];
                        Object.assign(this.dish, metadata.dish);
                        console.log(this.dish);
                        this.$store.commit('toggleLoader');
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .dish-detail-banner img {
        width: 100%;
    }
</style>