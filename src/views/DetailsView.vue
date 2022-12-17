<template>
    <div id="details">
        <h2>Details View</h2>

        <p>{{ id }}</p>
    </div>
</template>

<script lang="ts">
    import { mapGetters } from 'vuex';

    export default {
        name: "DetailsView",
        props: ['id'],
        components: {},
        methods: {},
        computed: {
            ...mapGetters([]),
        }
    };
</script>

<style lang="css">
    #details {
        padding: 30px;
    }
</style>
