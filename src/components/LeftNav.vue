<template>
    <div
    id="LeftNav"
    class="drawer collapse show fixed-top h-100 bg-white border-right">
        <div class="nav flex-column nav-pills" style="margin-top: 5.5rem;">
            <router-link
            to="/home"
            class="nav-link active rounded-0">
                Health Data
            </router-link>
            <router-link
            to="/time"
            class="nav-link rounded-0">
                Time
            </router-link>
            <router-link
            to="/goals"
            class="nav-link rounded-0">
                Goals
            </router-link>
            <router-link
            to="/location"
            class="nav-link rounded-0">
                Location
            </router-link>
            <router-link
            to="/nutrients"
            class="nav-link rounded-0">
                Nutrients
            </router-link>
            <router-link
            to="/settings"
            class="nav-link rounded-0">
                Settings
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftNav',
    props: {
    },
    data() {
        return {
        }
    },
    mounted() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#LeftNav {
    z-index: 100;
    width: 280px;
}
</style>