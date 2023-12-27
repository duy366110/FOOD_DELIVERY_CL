<template>
    <div class="dashboard-order-component">
        <CommonBanner :banner="banner"/>
        <div class="container pt-5 mt-5">
            <div class="container-wrapper bg-gray">
                <h2 v-if="order" class="container-title">Danh mục hoá đơn</h2>
                <CommonBlankMessage v-if="!order" :message="'Đơn hàng hiện trống'" />
                <CommonTable
                    @onDangerHandler="onCancelOrder"
                    @onPrimaryHandler="onTransactionOrder"
                    v-if="order"
                    :type="'Order'"
                    :data="order"
                    />
            </div>
        </div>
    </div>
</template>

<script>
    import CommonBanner from "../common-component/CommonBanner.vue";
    import CommonBlankMessage from "../common-component/CommonBlankMessage.vue";
    import CommonTable from "../common-component/CommonTable.vue";
    import serviceHttp from "@/services/service-http";
    import environment from "@/environment";

    const { http } = serviceHttp();

    export default {
        name: "DashboardOrderComponent",
        components: {
            CommonBanner,
            CommonBlankMessage,
            CommonTable
        },
        data() {
            return {
                banner: "linear-gradient(to right, rgb(0 0 0 / 35%), rgb(0 0 0 / 35%)), url('/assets/images/banner/banner_menu.jpg')",
                order: null
            }
        },
        created() {
            if(this.$store.state.auth.accessToken) {
                this.loadUserOrder();
            } else {
                this.$router.push("/auth");
            }
        },
        methods: {
            async loadUserOrder() {
                this.$store.commit('toggleLoader');
                let url = `${environment.api.url}${environment.api.order.root}/${this.$store.state.auth._id}`;
                await http(url, "GET", null, (information) => {
                    let { status, message, metadata} = information;
                    if(status) {
                        this.order = metadata.order;
                    } else {
                        this.$store.commit("toggleMessage", message);
                        setTimeout(() => {
                            this.$store.commit("toggleMessage", "");
                        }, 2500)
                    }
                    this.$store.commit('toggleLoader');
                })
            },
            async onCancelOrder(event) {
                this.$store.commit('toggleLoader');
                let url = `${environment.api.url}${environment.api.order.cancel}`;
                let payload = {user: this.$store.state.auth._id, order: event};

                await http(url, "POST", payload, (information) => {
                    let { status, message} = information;
                    
                    if(status) {
                        window.location.reload();
                    } else {
                        this.$store.commit("toggleMessage", message);
                        setTimeout(() => {
                            this.$store.commit("toggleMessage", "");
                        }, 2500)
                    }
                    this.$store.commit('toggleLoader');
                })
            },
            async onTransactionOrder(event) {
                this.$store.commit('toggleLoader');
                let url = `${environment.api.url}${environment.api.transaction.root}`;
                let payload = {user: this.$store.state.auth._id, order: event};

                await http(url, "POST", payload, (information) => {
                    let { status, message} = information;

                    if(status) {
                        this.$router.push("/transaction");
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

<style scoped>
</style>