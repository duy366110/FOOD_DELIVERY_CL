<template>
    <div class="dashboard-order-component">
        <CommonBanner :banner="banner"/>
        <CommonBlankMessage v-if="!order" :message="'Đơn hàng hiện trống'" />
        <CommonTable v-if="order" :type="'Order'" :data="order"/>
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
            this.loadUserOrder();
        },
        methods: {
            async loadUserOrder() {
                this.$store.commit('toggleLoader');
                let url = `${environment.api.url}${environment.api.order.root}/${this.$store.state.auth._id}`;
                await http(url, "GET", null, (information) => {
                    let { status, metadata} = information;
                    if(status) {
                        console.log(metadata);
                        this.order = metadata.order;
                        this.$store.commit('toggleLoader');
                    }
                })
            }
        }
    }
</script>

<style scoped>
</style>