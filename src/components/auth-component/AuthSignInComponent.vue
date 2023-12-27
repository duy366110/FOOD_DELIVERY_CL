<template>
    <form class="form-wrappert" :style="{backgroundImage: $store.state.authForm.bg.main}" @submit.prevent="signin">
        <span class="form-bg-top" :style="{backgroundImage: $store.state.authForm.bg.top}"></span>

        <h2 class="form-title">
            <router-link to="/"><i class="material-symbols-outlined">home_app_logo</i></router-link> 
            <span>Đăng nhập</span>
        </h2>

        <CommonInput
            :label="'E-mail'"
            :id="'user-email'"
            :type="'email'"
            :valid="valid.email"
            ref="emailRef"
            @onBlur="onBlurEmail"/>

        <CommonInput
            :label="'Mật khẩu'"
            :id="'user-password'"
            :type="'password'"
            :valid="valid.password"
            ref="passwordRef"
            @onBlur="onBlurPass"/>

        <button type="submit" class="btn w-100 btn-custom">Đăng nhập</button>
        <p class="form-sugget"><span>Bạn chưa có tài khoản?</span> <router-link to="/auth/signup">đăng ký</router-link></p>

        <span class="form-bg-bottom" :style="{backgroundImage: $store.state.authForm.bg.bottom}"></span>
    </form>
</template>

<script>
    import CommonInput from "../common-component/CommonInput.vue";
    import serviceHttp from "@/services/service-http";
    import serviceValidation from "@/services/service-validator";
    import environment from "@/environment";

    const { http } = serviceHttp();

    export default {
        name: "AuthSignInComponent",
        components: {
            CommonInput
        },
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                },
                valid: {
                    email: {status: true, message: ""},
                    password: {status: true, message: ""},
                }
            }
        },
        methods: {
            async signin() {
                let email = this.$refs.emailRef.$el.querySelector('#user-email');
                let password = this.$refs.passwordRef.$el.querySelector('#user-password');

                email.focus();
                email.blur();

                password.focus();
                password.blur();

                if(this.valid.email.status && this.valid.password.status) {
                    this.$store.commit('toggleLoader');
                    let url = `${environment.api.url}${environment.api.access.signin}`;
                    await http(url, "POST", this.form, (information) => {
                        let { status, metadata} = information;
                        if(status) {
                            this.$store.commit('signin', metadata);
                            this.$store.commit('toggleLoader');
                            this.$router.push("/");
                        }
                    })
                }
            },
            onBlurEmail(event) {
               this.valid.email = serviceValidation(event.target.value, ["require"]);
            },
            onBlurPass(event) {
                this.valid.password = serviceValidation(event.target.value, ["require"]);
            }
        }
    }
</script>

<style scoped></style>