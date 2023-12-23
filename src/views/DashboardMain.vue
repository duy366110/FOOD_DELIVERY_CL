<template>
    <div class="dashboard-main-component">
        <CommonHeader />
        <router-view />
        <CommonFooter />
    </div>
</template>

<script>
    import CommonHeader from "../components/common-component/CommonHeader.vue";
    import CommonFooter from "../components/common-component/CommonFooter.vue";

    export default {
        name: "DashboardMain",
        components: {
            CommonHeader,
            CommonFooter
        },
        mounted() {
            window.addEventListener('scroll', this.onScrollHandler)
        },
        methods: {
            onScrollHandler() {
                if(window.scrollY > 250 && !this.$store?.header?.status) {
                    this.$store.commit('toggleHeader', true);
                } else {
                    this.$store.commit('toggleHeader', false);
                }
            }
        }
    }
</script>