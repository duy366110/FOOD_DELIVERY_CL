<template>
    <div class="common-banner-component" :style="{backgroundImage: banner}">
        <h2 class="banner-title">{{ title }}</h2>
    </div>
</template>

<script>
    export default {
        name: "CommonBannerComponent",
        props: ['banner'],
        data() {
            return {
                title: ''
            }
        },
        mounted() {
            if(this.$route.path.includes('/menu')) {
                this.title = "Thực đơn";
            } else if(this.$route.path.includes('/dish')) {
                this.title = "Món ăn";
            } else if(this.$route.path.includes('/order')) {
                this.title = "Delivery";
            } else if(this.$route.path.includes('/transaction')) {
                this.title = "Giao dịch";

            } else {
                this.title = "Giới thiệu";
            }
        }
    }
</script>

<style scoped>
    .common-banner-component {
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 775px;
    }
    .banner-title {
        color: #ffffff;
        font-size: 4.5rem;
        letter-spacing: .3px;
        text-transform: uppercase;
    }
</style>