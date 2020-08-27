<template>
  <div class="base">
    <div class="container" style="max-width: 1200px; margin-top: 5rem;">
      <!-- Header (gray part) -->
      <header class="mb-4">
        <div class="row align-items-center">
          <div class="col-auto">
            <div class="page-title">
              <h1 class="m-0">
                View Activity
              </h1>
            </div>
          </div>
          <div class="col text-right">
            <div class="dropdown">
              <button
                class="btn btn-light btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Timeline
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button">Table</button>
                <button class="dropdown-item" type="button">Graph</button>
                <button class="dropdown-item" type="button">Total</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <hr />
    </div>
  </div>
</template>

<script>
// project

export default {
  name: "ViewActivity",
  components: {},
  props: [
    // 'start_date'
  ],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
