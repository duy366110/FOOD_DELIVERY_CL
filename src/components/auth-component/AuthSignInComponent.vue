<template>
    <form class="form-wrappert" :style="{backgroundImage: $store.state.authForm.bg.main}" @submit.prevent="signin">
        <span class="form-bg-top" :style="{backgroundImage: $store.state.authForm.bg.top}"></span>

        <h2 class="form-title">
            <router-link to="/"><i class="material-symbols-outlined">home_app_logo</i></router-link> 
            <span>Đăng nhập</span>
        </h2>

        <div class="form-group">
            <label class="form-label" for="exampleInputEmail1">E-mail</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>

        <div class="form-group">
            <label class="form-label" for="exampleInputPassword1">Mật khẩu</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>

        <button type="submit" class="btn w-100 btn-custom">Đăng nhập</button>
        <p class="form-sugget"><span>Bạn chưa có tài khoản?</span> <router-link to="/auth/signup">đăng ký</router-link></p>

        <span class="form-bg-bottom" :style="{backgroundImage: $store.state.authForm.bg.bottom}"></span>
    </form>
</template>

<script>
    import enviroment from "../../environment";

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
                try {
                    console.log("User signin");
                    let res = await fetch(`${enviroment.api.url}/access/signin`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({email: "", password: ""})
                    });

                    if(!res.ok) {
                        let resp = await res.json()
                        throw new Error(resp?.message);
                    }

                    let data = await res.json();
                    console.log(data);

                } catch (error) {
                    console.log(error);
                    // throw error;
                }
            }
        }
    }
</script>

<style scoped></style>