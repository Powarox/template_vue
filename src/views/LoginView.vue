<template>
    <div id="login">
        <div class="header">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
            <h1>Login</h1>
        </div>
        <div class="form">
            <div class="input">
                <input type="text" placeholder="Pseudo" v-model="pseudo" />
                <input type="password" placeholder="Password" @keyup.enter="action()" v-model="password" />
            </div>
            <router-link class="redirect" to="/home">
                <button @click="action()">Login</button>
            </router-link> 
        </div>
    </div>
</template>

<script lang="ts">
    import { mapActions } from 'vuex';

    export default {
        name: "LoginView",
        components: {},
        data() {
            return {
                pseudo: '',
                password: '',
            }
        },
        methods: { 
            ...mapActions([
                'tryConnectUser'
            ]),

            async action() {
                await this.tryConnectUser({pseudo: this.pseudo, password: this.password});
            }
        },
        computed: {

        }
    };
</script>

<style scoped lang="css">
    #login {
        height: 100%;
        padding-top: 50px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        gap: 70px;
    }

    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .header img {
        width: 60%;
    }

    .form {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .form .input {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .form .input input {
        width: 80%;
        padding: 15px;
        color: #333;
        background: #ddd;
        border-radius: 10px;
        border: none;
        font-weight: bold;
    }

    .form button {
        padding: 15px 40px;
        color: var(--ion-text-color);
        background: var(--ion-color-primary);
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
    }
</style>
