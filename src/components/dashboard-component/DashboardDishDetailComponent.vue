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
                <div class="col-6">
                    <div class="dish-detail-infor">
                        <h2 class="dish-detail-infor_title">{{ dish.title }}</h2>
                        <h3 class="dish-detail-infor_price">
                            <span>Đơn giá:</span>
                            <span>{{ dish.price?.$numberDecimal }} VND</span>
                        </h3>
                        <CommonButton :title="'Thêm vào hoá đơn'" @btnClick="addDishToOrder" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CommonBanner from "../common-component/CommonBanner.vue";
    import CommonButton from "../common-component/CommonButton.vue";
    import serviceHttp from "@/services/service-http";
    import environment from "@/environment";

    const { http } = serviceHttp();

    export default {
        name: "DashboardDishDetailComponent",
        components: {
            CommonBanner,
            CommonButton
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
                        this.thumb = metadata.dish.thumbs[0];
                        Object.assign(this.dish, metadata.dish);
                        this.$store.commit('toggleLoader');
                    }
                })
            },
            async addDishToOrder() {
                let url = `${environment.api.url}${environment.api.order.dish}`;

                if(this.$store.state.auth.accessToken && this.$store.state.auth._id) {
                    this.$store.commit('toggleLoader');
                    
                    let payload = {
                        user: this.$store.state.auth._id,
                        dish: this.$route.params.id,
                    }

                    await http(url, "POST", payload, (information) => {
                        let { status} = information;
                        console.log(information);
                        if(status) {
                            this.$store.commit('toggleLoader');
                            this.$router.push("/order");
                        }
                    })

                } else {
                    this.$router.push("/auth");
                }
            }
        }
    }
</script>

<style scoped>
    .dish-detail-banner img {
        width: 100%;
    }

    .dish-detail-infor_title {
        font-size: 2.5rem;
        font-weight: 600;
        letter-spacing: .3px;
        margin-bottom: 1rem;
        text-transform: capitalize;
    }

    .dish-detail-infor_price {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 1.8rem;
        letter-spacing:.3px;
    }

</style>