<template>
    <div class="dashboard-transaction-component">
        <CommonBanner :banner="banner"/>
        <div class="container pt-5 mt-5"></div>
    </div>
</template>

<script>
    import CommonBanner from "../common-component/CommonBanner.vue";
    // import CommonBlankMessage from "../common-component/CommonBlankMessage.vue";

    export default {
        name: "DashboardTransactionComponent",
        components: {
            CommonBanner,
            // CommonBlankMessage
        },
        data() {
            return {
                banner: "linear-gradient(to right, rgb(0 0 0 / 35%), rgb(0 0 0 / 35%)), url('/assets/images/banner/banner_menu.jpg')",
            }
        }
    }
</script>

<style scoped>
</style>