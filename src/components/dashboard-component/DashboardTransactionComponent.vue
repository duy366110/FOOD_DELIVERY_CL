<template>
    <div class="dashboard-transaction-component">
        <CommonBanner :banner="banner"/>
        <div class="container pt-5 mt-5">
            <div class="container-wrapper bg-gray">
                <h2 v-if="transactions.length > 0" class="container-title">Danh mục Giao dịch</h2>
                <CommonBlankMessage v-if="transactions.length <= 0" :message="'Danh mục giao dịch trống'" />
                <div v-if="transactions.length > 0">
                    <CommonTable
                        v-for="transaction in transactions"
                        :key="transaction._id"
                        :type="'Transaction'"
                        :data="transaction"
                        />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CommonBanner from "../common-component/CommonBanner.vue";
    import CommonTable from "../common-component/CommonTable.vue";
    import CommonBlankMessage from "../common-component/CommonBlankMessage.vue";
    import serviceHttp from "@/services/service-http";
    import environment from "@/environment";

    const { http } = serviceHttp();

    export default {
        name: "DashboardTransactionComponent",
        components: {
            CommonBanner,
            CommonTable,
            CommonBlankMessage
        },
        data() {
            return {
                banner: "linear-gradient(to right, rgb(0 0 0 / 35%), rgb(0 0 0 / 35%)), url('/assets/images/banner/banner_menu.jpg')",
                transactions: []
            }
        },
        created() {
            if(this.$store.state.auth.accessToken) {
                this.loadUserTransactions();
            } else {
                this.$router.push("/auth");
            }
        },
        methods: {
            async loadUserTransactions() {
                this.$store.commit('toggleLoader');
                let url = `${environment.api.url}${environment.api.transaction.root}/${this.$store.state.auth._id}`;
                await http(url, "GET", null, (information) => {
                    let { status, metadata} = information;
                    if(status) {
                        console.log(metadata);
                        this.transactions = metadata.transactions;
                        this.$store.commit('toggleLoader');
                    }
                })
            },
        }
    }
</script>

<style scoped>
</style>