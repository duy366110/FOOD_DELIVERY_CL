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

        <div class="form-group">
            <label class="form-label" for="full-name">Họ và tên</label>
            <input
                type="text" class="form-control"
                id="full-name" v-model="form.fullName" />
        </div>

        <div class="form-group">
            <label class="form-label" for="email">E-mail</label>
            <input
                type="email" class="form-control"
                id="email" v-model="form.email" />
        </div>

        <div class="form-group">
            <label class="form-label" for="password">Mật khẩu</label>
            <input
                type="password" class="form-control"
                id="password" v-model="form.password" />
        </div>

        <div class="form-group">
            <label class="form-label" for="phone">Số điện thoại</label>
            <input
                type="phone" class="form-control"
                id="phone" v-model="form.phone" />
        </div>

        <div class="form-group">
            <label class="form-label" for="address">Địa chỉ</label>
            <input
                type="text" class="form-control"
                id="address" v-model="form.address"/>
        </div>

        <button type="submit" class="btn w-100 btn-custom">Đăng ký</button>
        <p class="form-sugget"><span>Bạn chưa có tài khoản?</span> <router-link to="/auth">đăng nhập</router-link></p>

        <span class="form-bg-bottom" :style="{backgroundImage: $store.state.authForm.bg.bottom}"></span>
    </form>
</template>

<script>
    import environment from "../../environment";

    export default {
        name: "AuthSignUpComponent",
        data() {
            return {
                form: {
                    fullName: "",
                    email: "",
                    password: "",
                    phone: "",
                    address: ""
                }
            }
        },
        methods: {
            async signup() {
                try {
                    let url = `${environment.api.url}${environment.api.access.signup}`;
                    let res = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            fullName: this.form.fullName,
                            email: this.form.email,
                            password: this.form.password,
                            phone: this.form.phone,
                            addess: this.form.address
                        })
                    })

                    if(!res.ok) {
                        let resp = await res.json();
                        throw new Error(resp.message);
                    }

                    let data = await res.json();
                    console.log(data);

                } catch (error) {
                    console.log(error);
                    throw error;
                }
            }
        }
    }
</script>

<style scoped></style>