<template>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
    />
    <div id="app">
        <!-- <nav class="navigation">
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
        </nav> -->

        <main class="main">
            <router-view />
        </main>
    </div>
</template>

<script lang="ts">
    import { mapActions } from 'vuex';

    export default {
        name: 'App',
        components: {
            
        },
        created() {
            // Call Store function
        },
        methods: {
            ...mapActions([
                // Import Store function
            ]),
        },
    }
</script>

<style scoped>
    :root {
        --main-first-color: #41B883;
        --main-second-color: #35495E;

        --main-red-color: #FB565E;
        --main-blue-color: #348AF4;
        --main-grey-color: #333;
        --main-white-color: #FFF;
        --main-green-color: #499F68;
        --main-yellow-color: #FFCF60;

        --main-dark-blue-color: #2c3e50;
        --main-body-color: #E2FAE9;
    }
</style>
