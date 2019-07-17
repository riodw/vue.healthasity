<template>
    <div id="app">
        <Masthead />
        <LeftNav />
        <router-view></router-view>
    </div>
</template>

<script>
    import Masthead from '@/components/Masthead.vue'
    import LeftNav from '@/components/LeftNav.vue'

    export default {
        name: 'app',
        data: function () {
            return {
                start_date: Date.now(),
                end_date: null,
            }
        },
        components: {
            Masthead,
            LeftNav,
        },
    }
</script>

<style>
#app {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
}
</style>