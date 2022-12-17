<template>
    <div id="home">
        <h1>Home Page</h1>

        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="/vue.svg" class="logo vue" alt="Vue logo" />
        </a>

        <HelloWorld msg="Vite + Vue" />
    </div>
</template>

<script lang="ts">
    import HelloWorld from "../components/HelloWorld.vue";

    export default {
        name: 'Home',
        components: {
            HelloWorld,    
        },
        data() {
            return { }
        },
        methods: { },
    }
</script>

<style scoped lang="css">
    #home {
        padding: 30px;
    }
</style>
