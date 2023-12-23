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
            console.log(this.$route.path);
            
            switch(this.$route.path) {
                case "/menu":
                    this.title = "Thực đơn"
                    break

                case "/about":
                default: 
                    this.title = "Giới thiệu"
                    break
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