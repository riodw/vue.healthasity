<template>
  <div id="LeftNav" class="drawer collapse show fixed-top h-100 bg-white border-right">
    <div class="nav flex-column nav-pills" style="margin-top: 5.5rem;">
      <router-link to="/home" active-class="active" class="nav-link rounded-0"
        >Health Data</router-link
      >
      <router-link to="/time" active-class="active" class="nav-link rounded-0"
        >Time</router-link
      >
      <router-link to="/goals" active-class="active" class="nav-link rounded-0"
        >Goals</router-link
      >

      <div class="dropdown-divider"></div>

      <!-- <router-link
            to="/location"
            active-class="active"
            class="nav-link rounded-0">
                Location
      </router-link>-->
      <router-link to="/activity" active-class="active" class="nav-link rounded-0"
        >Activity</router-link
      >
      <router-link to="/nutrition" active-class="active" class="nav-link rounded-0"
        >Nutrition</router-link
      >
      <router-link to="/sleep" active-class="active" class="nav-link rounded-0"
        >Sleep</router-link
      >
      <router-link to="/mindfulness" active-class="active" class="nav-link rounded-0"
        >Mindfulness</router-link
      >

      <div class="dropdown-divider"></div>

      <router-link to="/settings" active-class="active" class="nav-link rounded-0"
        >Settings</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
  props: {},
  data() {
    return {};
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#LeftNav {
  z-index: 100;
  width: 280px;
}
</style>
