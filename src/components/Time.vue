<template>
  <div class="base">
    <div class="container" style="max-width: 1200px; margin-top: 5rem;">
      <header class="mb-4">
        <div class="row">
          <div class="col-sm">
            <div class="page-title">
              <h1>
                Time
              </h1>
            </div>
          </div>
          <div class="col-auto">
            <div class="d-flex">
              <div class="start-date">
                <!-- <a href="#">
                    <small>
                        Today
                    </small>
                </a>
                <br> -->
                <button class="btn btn-link text-dark" type="button">
                  <u>
                    Saturday, Jun 29, 2019
                  </u>
                </button>
              </div>
              <div class="end-date">
                <button class="btn btn-outline-primary" type="button">
                  <i class="material-icons">add</i>&nbsp;End
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              class="form-control bg-light-gray border-0 w-100 rounded-lg"
              placeholder="Search"
              style="height: 3rem;"
              type="text"
            />
          </div>
        </div>
      </header>

      <router-view></router-view>

      <div class="nav-scroller" style="height: 4rem;">
        <nav class="nav health-category-blocks dragscroll">
          <div class="card bg-red br-3">
            <div class="card-body">
              <div class="category-title">
                Activity
              </div>
            </div>
          </div>
          <div class="card bg-green br-3">
            <div class="card-body">
              <div class="category-title">
                Nutrition
              </div>
            </div>
          </div>
          <div class="card bg-teal br-3">
            <div class="card-body">
              <div class="category-title">
                Water
              </div>
            </div>
          </div>
          <div class="card bg-yellow br-3">
            <div class="card-body">
              <div class="category-title text-dark">
                Time
              </div>
            </div>
          </div>
          <div class="card bg-purple br-3">
            <div class="card-body">
              <div class="category-title">
                Sleep
              </div>
            </div>
          </div>
          <div class="card bg-blue br-3">
            <div class="card-body">
              <div class="category-title">
                Mindfulness
              </div>
            </div>
          </div>
          <div class="card bg-gray br-3">
            <div class="card-body">
              <div class="category-title">
                ...
              </div>
            </div>
          </div>
        </nav>
      </div>

      <hr />

      <div class="time-line">
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td class="d-none d-sm-table-cell" style="width: 100px;"></td>
              <td colspan="2">
                <h4 class="m-0">
                  Saturday, June 29, 2019
                </h4>
              </td>
            </tr>
            <tr>
              <td class="d-none d-sm-table-cell" style="width: 100px;">
                8:30 pm
              </td>
              <td style="width: 50px;">
                <div
                  class="text-center br-100 bg-purple text-white"
                  style="width:35px; height: 35px; line-height: 1.9rem;"
                >
                  <i class="material-icons">local_pizza</i>
                </div>
              </td>
              <td>
                <h5 class="m-0">
                  Leisure
                  <span class="text-purple d-none d-sm-inline ml-2">
                    3 h 5 min
                  </span>
                  <span class="text-black-50 d-inline d-sm-none ml-2">
                    <small>
                      8:30 pm
                    </small>
                  </span>
                </h5>
              </td>
            </tr>
            <tr>
              <td class="d-none d-sm-table-cell"></td>
              <td></td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td rowspan="4" class="time-line-container">
                        <div class="time-line-block br-2 h-100 bg-purple text-white">
                          &nbsp;
                        </div>
                      </td>
                    </tr>
                    <tr class="d-table-cell d-sm-none">
                      <td>
                        <span class="text-purple">
                          3 h 5 min
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="card bg-gray br-3">
                          <div class="card-body">
                            <div class="category-title">
                              ...
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="card bg-gray br-3">
                          <div class="card-body">
                            <div class="category-title">
                              ...
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// project

export default {
  name: "HealthData",
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table td {
  height: 100%;
  padding-bottom: 10px;
}
.time-line-container {
  position: relative;
}
.time-line-block {
  width: 5px;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
</style>
