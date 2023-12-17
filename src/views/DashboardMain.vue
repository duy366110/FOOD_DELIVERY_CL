<template>
    <CommonHeader />
    <router-view />
    <CommonFooter />
</template>

<script>
    import CommonHeader from "../components/common-component/CommonHeader.vue";
    import CommonFooter from "../components/common-component/CommonFooter.vue";

    export default {
        name: "DashboardMain",
        components: {
            CommonHeader,
            CommonFooter
        }
    }
</script>