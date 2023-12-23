<template>
    <form class="form-wrappert" :style="{backgroundImage: $store.state.authForm.bg.main}" @submit.prevent="signin">
        <span class="form-bg-top" :style="{backgroundImage: $store.state.authForm.bg.top}"></span>

        <h2 class="form-title">
            <router-link to="/"><i class="material-symbols-outlined">home_app_logo</i></router-link> 
            <span>Đăng nhập</span>
        </h2>

        <div class="form-group">
            <label class="form-label" for="user-email">E-mail</label>
            <input
                type="email"
                class="form-control"
                id="user-email"
                v-model="form.email"/>
        </div>

        <div class="form-group">
            <label class="form-label" for="user-password">Mật khẩu</label>
            <input
                type="password"
                class="form-control"
                id="user-password"
                v-model="form.password"/>
        </div>

        <p>{{$store.state.auth.email}}</p>

        <button type="submit" class="btn w-100 btn-custom">Đăng nhập</button>
        <p class="form-sugget"><span>Bạn chưa có tài khoản?</span> <router-link to="/auth/signup">đăng ký</router-link></p>

        <span class="form-bg-bottom" :style="{backgroundImage: $store.state.authForm.bg.bottom}"></span>
    </form>
</template>

<script>
    import serviceHttp from "@/services/service-http";
    import environment from "@/environment";

    const { http } = serviceHttp();

    export default {
        name: "AuthSignInComponent",
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            async signin() {
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
        }
    }
</script>

<style scoped></style>