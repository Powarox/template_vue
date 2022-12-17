<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <router-link class="redirect" :to="{name: 'Details', params: { id: 'OneRandomID' }}">GO TO DETAILS</router-link> 
</template>

<script lang="ts">

    export default {
        name: 'HelloWorld',
        props: ['msg'],
        data() {
            return {
                count: 0
             }
        },
        methods: { },
    }
</script>

<style scoped>
    .read-the-docs {
        color: #888;
    }
</style>
