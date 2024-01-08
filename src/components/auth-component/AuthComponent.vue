<template>
    <div class="auth-component">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AuthComponent",
        data() {},
        components: {}
    }
</script>

<style>
    .auth-component {
        display: flex;
        align-items: center;
        height: 100vh;
        width: 100%;
    }
    .auth-component .form-wrappert {
        background-size: contain;
        background-repeat: repeat;
        border-radius: 5px;
        padding: 4.5rem 1.5rem;
        position: relative;
        width: 100%;
    }

    .auth-component .form-wrappert .form-title {
        font-size: 3.5rem;
        font-weight: 600;
        letter-spacing: .3px;
        margin-bottom: 2.5rem;
        position: relative;
        text-align: center;
        text-transform: uppercase;
    }

    .auth-component .form-wrappert .form-title a {
        color: #333333;
        left: 15px;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
    }

    .auth-component .form-wrappert .form-bg-top {
        background-size: cover;
        background-repeat: no-repeat;
        height: 36px;
        display: block;
        left: 0px;
        position: absolute;
        top: -36px;
        width: 100%;
    }

    .auth-component .form-wrappert .form-bg-bottom {
        background-size: cover;
        background-repeat: no-repeat;
        height: 36px;
        display: block;
        left: 0px;
        position: absolute;
        bottom: -36px;
        width: 100%;
    }

    .auth-component .form-wrappert .form-label {
        display: flex;
        font-size: 1.8rem;
        text-align: left;
    }

    .auth-component .form-wrappert .form-group .form-control {
        font-size: 1.5rem;
        height: 3.8rem;
    }

    .btn-custom {
        background-color: #333333;
        border: 1px solid #333333;
        color: #ffffff;
        font-size: 1.8rem;
        margin: 1.5rem 0rem;
    }

    .btn-custom:hover {
        background-color: #ffffff;
        border: 1px solid #333333;
        color: #333333;
    }

    .auth-component .form-wrappert .form-sugget {
        color: #7A7A7A;
        font-size: 1.8rem;
        margin-bottom: 0px;
        text-align: center;
    }

    .auth-component .form-wrappert .form-sugget a {
        color: #333333;
    }

    .auth-component .form-wrappert .form-sugget a:hover {
        text-decoration: underline!important;
    }

</style>