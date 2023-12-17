<template>
    <header class="common-header-component">
        <div class="header-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3">
                        <h1 class="header-logo">
                            <router-link to="/">FoodDelivery</router-link>
                        </h1>
                    </div>
                    <div class="col-9 d-flex align-items-center justify-content-between">
                        <ul class="header-list">
                            <li><router-link to="/about">Giới thiệu</router-link></li>
                            <li><router-link to="/menu">Thực đơn</router-link></li>
                            <li><router-link to="/booking">Đặt bàn</router-link></li>
                        </ul>

                        <ul class="header-list">                            
                            <li v-if="!$store.state.auth.accessToken"><router-link to="/auth">Đăng nhập</router-link></li>
                            <li v-if="$store.state.auth.accessToken"><router-link to="">Đăng xuất</router-link></li>
                            <li v-if="!$store.state.auth.accessToken"><router-link to="/auth/signup">Đăng ký</router-link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div> 
    </header>
</template>

<script>
    export default {
        name: "CommonHeader"
    }
</script>

<style scoped>
    .common-header-component {
        display: flex;
        align-items: center;
        left: 0px;
        height: 50px;
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1000;
    }

    .header-wrapper {
        width: 100%;
    }

    /** HEADER LOGO */
    .header-logo {
        margin-bottom: 0px;
    }

    .header-logo a {
        color: #ffffff;
        font-weight: 700;
        letter-spacing: .3px;
        text-transform: capitalize;
    }

    /** HEADER LIST */
    .header-list {
        display: flex;
        align-items: center;
        gap: 1rem;
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }

    .header-list li a {
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: .5px;
        text-transform: uppercase;
    }


</style>