<template>
    <form
        class="form-wrappert"
        :style="{backgroundImage: $store.state.authForm.bg.main}"
        @submit.prevent="signup">
        <span class="form-bg-top" :style="{backgroundImage: $store.state.authForm.bg.top}"></span>

        <h2 class="form-title">
            <router-link to="/"><i class="material-symbols-outlined">home_app_logo</i></router-link> 
            <span>Đăng ký</span>
        </h2>

        <CommonInput
            :label="'Họ và tên'"
            :id="'user-fullname'"
            :type="'text'"
            :valid="valid.fullName"
            ref="fullNameRef"
            @onBlur="onBlurFullName"/>

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

        <CommonInput
            :label="'Số điện thoại'"
            :id="'user-phone'"
            :type="'phone'"
            :valid="valid.phone"
            ref="phoneRef"
            @onBlur="onBlurPhone"/>

        <CommonInput
            :label="'Địa chỉ'"
            :id="'user-address'"
            :type="'text'"
            :valid="valid.address"
            ref="addressRef"
            @onBlur="onBlurAddress"/>

        <button type="submit" class="btn w-100 btn-custom">Đăng ký</button>
        <p class="form-sugget"><span>Bạn chưa có tài khoản?</span> <router-link to="/auth">đăng nhập</router-link></p>

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
        name: "AuthSignUpComponent",
        components: {
            CommonInput
        },
        data() {
            return {
                form: {
                    fullName: "",
                    email: "",
                    password: "",
                    phone: "",
                    address: ""
                },
                valid: {
                    fullName: {status: true, message: ""},
                    email: {status: true, message: ""},
                    password: {status: true, message: ""},
                    phone: {status: true, message: ""},
                    address: {status: true, message: ""},
                }
            }
        },
        methods: {
            async signup() {
                let fullName = this.$refs.fullNameRef.$el.querySelector('#user-fullname');
                let email = this.$refs.emailRef.$el.querySelector('#user-email');
                let password = this.$refs.passwordRef.$el.querySelector('#user-password');
                let phone = this.$refs.phoneRef.$el.querySelector('#user-phone');
                let address = this.$refs.addressRef.$el.querySelector('#user-address');

                fullName.focus();
                fullName.blur();

                email.focus();
                email.blur();

                password.focus();
                password.blur();

                phone.focus();
                phone.blur();

                address.focus();
                address.blur();

                if(
                    this.valid.fullName.status && this.valid.email.status &&
                    this.valid.password.status && this.valid.phone.status &&
                    this.valid.address.status
                ) {
                    this.$store.commit('toggleLoader');
                    let url = `${environment.api.url}${environment.api.access.signup}`;

                    await http(url, "POST", this.form, (information) => {
                        let { status, metadata} = information;
                        if(status) {
                            this.$store.commit('signin', metadata);
                            this.$router.push("/");
                        } else {
                            console.log("Dang ky khong thanh cong");
                        }
                        
                        this.$store.commit('toggleLoader');
                    })
                }
            },
            onBlurFullName(event) {
               this.valid.fullName = serviceValidation(event.target.value, ["require"]);
               this.form.fullName = event.target.value;
            },
            onBlurEmail(event) {
               this.valid.email = serviceValidation(event.target.value, ["require", "email"]);
               this.form.email = event.target.value;
            },
            onBlurPass(event) {
                this.valid.password = serviceValidation(event.target.value, ["require", "password"]);
                this.form.password = event.target.value;
            },
            onBlurPhone(event) {
               this.valid.phone = serviceValidation(event.target.value, ["require", "phone"]);
               this.form.phone = event.target.value;
            },
            onBlurAddress(event) {
                this.valid.address = serviceValidation(event.target.value, ["require"]);
                this.form.address = event.target.value;
            }
        }
    }
</script>

<style scoped></style>