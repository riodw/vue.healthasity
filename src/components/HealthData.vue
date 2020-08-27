<template>
  <div class="base">
    <div class="container" style="max-width: 1200px; margin-top: 5rem;">
      <!-- Header (gray part) -->
      <header class="mb-4">
        <div class="row align-items-center">
          <div class="col-auto">
            <div class="page-title">
              <h1 class="m-0">Health Data</h1>
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
                >Timeline</button
              >
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button">Table</button>
                <button class="dropdown-item" type="button">Graph</button>
                <button class="dropdown-item" type="button">Total</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Date Pcikers -->
        <div v-if="false" class="d-flex">
          <div class="select-date start-date mr-auto">
            <!-- <a href="#">
                            <small>
                                Today
                            </small>
                        </a>
            <br>-->
            <VueCtkDateTimePicker
              v-model="start_date"
              :formatted="'LLLL'"
              :no-clear-button="true"
              :auto-close="true"
              :only-date="true"
              :no-header="true"
              :no-label="true"
              :right="true"
              :button-now-translation="'Today'"
            ></VueCtkDateTimePicker>
          </div>
          <div class="select-date end-date">
            <!-- <button
                        class="btn btn-outline-primary"
                        type="button">
                            <i class="material-icons">add</i>&nbsp;End
            </button>-->
            <VueCtkDateTimePicker
              v-model="start_date"
              :formatted="'LLLL'"
              :no-clear-button="true"
              :auto-close="true"
              :only-date="true"
              :no-header="true"
              :no-label="true"
              :right="true"
              :button-now-translation="'Today'"
            ></VueCtkDateTimePicker>
          </div>
        </div>
        <!-- Search -->
        <div class="row mt-2">
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
      <!-- Scroll Nav -->
      <div class="nav-scroller" style="height: 121px;">
        <nav class="nav health-category-blocks dragscroll">
          <div
            v-for="health_type in data.health_types"
            :key="health_type.name"
            :class="'bg-' + health_type.color"
            class="card br-3"
          >
            <div class="card-body">
              <div class="category-title">{{ health_type.name }}</div>
              <div class="d-flex">
                <div style="height: 60px; width: 60px;">
                  <div
                    class="position-absolute overflow-hidden"
                    style="width: 140px; height: 70px; left: -30px; bottom: 15px;"
                  >
                    <div v-if="health_type.chart">
                      <apexchart
                        :width="health_type.chart.width"
                        :height="health_type.chart.height"
                        type="radialBar"
                        :options="charts_options.radialBar_options"
                        :series="health_type.chart.series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
                <div v-if="health_type.chart" class="d-flex align-items-center ml-2">
                  <div class="d-flex flex-column">
                    <small>
                      <div>68%</div>
                      <div>10 Logs</div>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <hr />

      <div class="time-line">
        <table class="table table-sm table-borderless">
          <tbody>
            <template v-for="row in data.display">
              <!-- TITLE -->
              <template v-if="row.title">
                <tr @click="getRowData(row)" :key="row.id">
                  <td class="d-none d-sm-table-cell" style="width: 100px;"></td>
                  <td>
                    <h4 class="m-0">{{ row.title }}</h4>
                  </td>
                </tr>
              </template>
              <!-- SELECTED -->
              <template v-else-if="row.id && selected.includes(row.id)">
                <tr :key="row.id">
                  <td colspan="2">
                    <div :class="'bg-' + row.health_type.color" class="card br-3">
                      <div class="card-body text-white">
                        <div
                          @click="getRowData(row)"
                          class="d-flex align-items-center justify-content-between text-nowrap"
                        >
                          <div class="row">
                            <!-- left -->
                            <div class="col-sm">
                              <!-- top -->
                              <router-link
                                :to="{ name: 'view_activity', params: { id: row.id } }"
                                class="h4 m-0 text-white"
                              >
                                {{ row.type }}
                                <i class="material-icons">chevron_right</i>
                              </router-link>
                            </div>
                            <div class="col-sm">
                              <!-- bottom -->
                              <small class="text-light"
                                >{{ row.time }} &mdash; 3:00 pm</small
                              >
                              <small class="d-none d-sm-inline text-light"
                                >({{ row.duration }})</small
                              >
                            </div>
                          </div>
                          <div class="row text-right">
                            <!-- right -->
                            <div class="col-sm">
                              <!-- top -->
                              <p class="h3 m-0" style="line-height: 1rem;">
                                {{ row.measurement }}
                                <small>{{ row.measurement_type }}</small>
                              </p>
                            </div>
                            <div class="col-sm d-block d-sm-none">
                              <!-- bottom -->
                              <small class="text-light">{{ row.duration }}</small>
                            </div>
                          </div>
                        </div>

                        <hr class="border-white" />

                        <!-- Details -->
                        <div>
                          <!-- <div class="d-flex">
                            <div class="btn-group w-100" role="group">
                                <button
                                v-for="(page, index) in row.pages"
                                @click="row.active_page = index"
                                :class="index === row.active_page ? 'btn-light bg-white' : 'btn-outline-light'"
                                class="btn btn-sm"
                                type="button">
                                    {{ page.name }}
                                </button>
                            </div>
                          </div>-->
                          <template v-for="(page, index) in row.pages">
                            <div v-if="index === row.active_page" :key="page.name">
                              <div v-if="page.details">
                                <div>
                                  <!-- <div class="card-body"> -->
                                  <div>
                                    <div class="row">
                                      <div
                                        v-for="detail in page.details"
                                        :key="detail.name"
                                        class="col-sm"
                                      >
                                        <p class="h4 text-nowrap">
                                          <small>{{ detail.name }}</small>
                                          <br />
                                          <span class="badge badge-pill badge-light">{{
                                            detail.value
                                          }}</span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div v-if="page.chart">
                                <apexchart
                                  :width="page.chart.width"
                                  :height="page.chart.height"
                                  :type="page.chart.type"
                                  :options="
                                    setChartOptions(row.health_type, page.chart)
                                  "
                                  :series="page.chart.series"
                                ></apexchart>
                              </div>
                            </div>
                          </template>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
              <!-- ROW -->
              <template v-else-if="row.id">
                <tr @click="getRowData(row)" :key="row.id">
                  <td
                    v-if="row.time"
                    class="d-none d-sm-table-cell"
                    style="width: 100px;"
                    >{{ row.time }}</td
                  >
                  <td>
                    <div :class="'bg-' + row.health_type.color" class="card br-3">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <!-- left -->
                            <div>
                              <!-- top -->
                              <div class="category-title text-white">{{
                                row.type
                              }}</div>
                            </div>
                            <div>
                              <!-- bottom -->
                              <small class="d-block d-sm-none text-light">{{
                                row.time
                              }}</small>
                            </div>
                          </div>
                          <div>
                            <!-- right -->
                            <div>
                              <!-- top -->
                              <p class="h3 text-white m-0" style="line-height: 1rem;">
                                {{ row.measurement }}
                                <small>{{ row.measurement_type }}</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
      </div>
      <!-- ./time-line -->
      count: {{ count.data }}
    </div>
  </div>
</template>

<script>
// project

export default {
  name: "HealthData",
  components: {},
  props: [
    // 'start_date'
  ],
  data() {
    return {
      start_date: this.$moment().startOf("day"),
      count: 2,
      // new title interval
      interval: "day",
      // selected table rows
      selected: [],
      // sample data
      charts_options: {
        // Radial
        radialBar_options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          tooltip: {
            enabled: false,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                // size: '60%',
                background: "transparent",
              },
              dataLabels: {
                show: false,
              },
              track: {
                show: false,
              },
            },
          },
          colors: ["#fff"],
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            type: "solid",
            colors: ["#fff"],
          },
          stroke: {
            lineCap: "round",
          },
          labels: [],
        },
        // Area
        area_options: {
          chart: {
            foreColor: "#fff",
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          tooltip: {
            enabled: false,
          },
          colors: ["#fff"],
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            curve: "smooth",
            colors: ["#fff"],
            lineCap: "round",
            width: 5,
          },
          // markers: {
          //     size: 0,
          //     colors: ['rgb(255, 69, 58)'],
          //     strokeWidth: 3,
          //     strokeColors: '#fff',
          //     shape: "circle",
          //     fillOpacity: 1,
          // },
          fill: {
            type: "gradient",
            colors: ["#fff"],
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.8,
              opacityTo: 0,
              stops: [0, 90, 100],
            },
          },
          xaxis: {
            // type: 'datetime',
            categories: [],
            labels: {
              show: true,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            floating: true,
            tickAmount: 2,
            // min: 20,
            // max: 100,
            labels: {
              show: true,
              align: "left",
              offsetX: 32,
              offsetY: -8,
            },
            tooltip: {
              enabled: false,
              offsetX: 0,
            },
          },
        },
      },

      data: {
        health_types: [
          {
            name: "Activity",
            color: "red",
            chart: {
              series: [67],
            },
          },
          {
            name: "Nutrition",
            color: "green",
            chart: {
              series: [67],
            },
          },
          {
            name: "Water",
            color: "teal",
            chart: {
              series: [67],
            },
          },
          {
            name: "Time",
            color: "yellow",
            chart: {
              series: [67],
            },
          },
          {
            name: "Sleep",
            color: "purple",
            chart: {
              series: [67],
            },
          },
          {
            name: "Mindfulness",
            color: "blue",
            chart: {
              series: [67],
            },
          },
          {
            name: "...",
            color: "gray",
          },
        ],
        display: [
          {
            title: "Saturday, June 29, 2019",
          },
          {
            id: 1,
            display_as: "row",
            time: "2:00 pm",
            health_type: {
              name: "Activity",
              color: "red",
            },
            type: "Outdoor Run",
            measurement: "2.2",
            measurement_type: "mi",
            duration: "3 hours",
            active_page: 0,
          },
          {
            id: 2,
            display_as: "row",
            time: "2:00 pm",
            health_type: {
              name: "Activity",
              color: "red",
            },
            type: "Running",
            measurement: "2.2",
            measurement_type: "mi",
            duration: "3 hours",
            active_page: 0,
          },
          {
            id: 3,
            display_as: "row",
            time: "2:00 pm",
            health_type: {
              name: "Activity",
              color: "red",
            },
            type: "Running",
            measurement: "2.2",
            measurement_type: "mi",
            duration: "3 hours",
            active_page: 0,
          },
          {
            title: "Saturday, June 29, 2019",
          },
          {
            id: 4,
            display_as: "row",
            time: "2:00 pm",
            health_type: {
              name: "Activity",
              color: "red",
            },
            type: "Running",
            measurement: "2.2",
            measurement_type: "mi",
            duration: "3 hours",
            active_page: 0,
          },
          {
            id: 5,
            display_as: "row",
            time: "2:00 pm",
            health_type: {
              name: "Activity",
              color: "red",
            },
            type: "Running",
            measurement: "2.2",
            measurement_type: "mi",
            duration: "3 hours",
            active_page: 0,
          },
          // {
          //     "row_type": "time",
          //     "time": "200 pm",
          //     "": "Activity",
          //     "": ""
          // },
        ],
      },
    };
  },
  mounted() {
    this.axios
      .get("https://us-central1-healthasity.cloudfunctions.net/sample-json")
      .then(response => (this.count = response));
  },
  methods: {
    // GET ROW DATA
    getRowData: function(row) {
      var vm = this;

      if (row.id) {
        var index = vm.selected.indexOf(row.id);
        if (index !== -1) {
          return vm.selected.splice(index, 1);
        }

        vm.selected.push(row.id);

        if (!row.pages) {
          // get pages
          row.active_page = 0;
          row.pages = [
            {
              name: "Summary",
              details: [
                {
                  name: "Active Calories",
                  value: "1,278 CAL",
                },
                {
                  name: "Total Calories",
                  value: "1,456 CAL",
                },
                {
                  name: "Distance",
                  value: "10.05 MI",
                },
                {
                  name: "Total Time",
                  value: "2:05:01",
                },
                {
                  name: "Avg. Heart Rate",
                  value: "127 BPM",
                },
                {
                  name: "Avg. Pace",
                  value: "12'26\"/MI",
                },
              ],
            },
            {
              name: "Distance",
              chart: {
                type: "area",
                width: "100%",
                height: 350,
                series: [
                  {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                  },
                ],
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
              },
            },
            {
              name: "Heart Rate",
              chart: {
                type: "area",
                width: "100%",
                height: 350,
                series: [
                  {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                  },
                ],
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
              },
            },
          ];
        }
      }
    },
    // SET CHART OPTIONS
    setChartOptions: function(health_type, chart) {
      var vm = this;

      var options = {};
      if (chart.type == "area") {
        options = vm._.clone(vm.charts_options.area_options);
      }
      // set categories
      options.xaxis.categories = chart.categories;
      // set min/max value
      var max = Math.max(...chart.series[0].data);
      var min = Math.min(...chart.series[0].data);
      max = max + max / min;
      min = min - max / min;
      // TODO: better calculation for min/max
      options.yaxis.max = max > 0 ? max : 1;
      options.yaxis.min = min > 0 ? min : 0;

      return options;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
