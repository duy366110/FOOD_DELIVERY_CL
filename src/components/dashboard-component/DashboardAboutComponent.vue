<template>
    <div class="dashboard-about-component">
        <CommonBanner :banner="banner" />
    </div>
</template>

<script>
    import CommonBanner from "../common-component/CommonBanner.vue";

    export default {
        name: "DashboardAboutComponent",
        components: {
            CommonBanner
        },
        data() {
            return {
                banner: "linear-gradient(to right, rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)), url('/assets/images/banner/banner_about.jpg')"
            }
        }
    }
</script>

<style scoped>
</style>