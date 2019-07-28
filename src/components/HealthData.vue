<template>
    <div class="base">
        <div class="container" style="max-width: 1200px; margin-top: 5rem;">
            <!-- Header (gray part) -->
            <header class="mb-4">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <div class="page-title">
                            <h1 class="m-0">
                                Health Data
                            </h1>
                        </div>
                    </div>
                    <div class="col text-right">
                        <div class="dropdown">
                            <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                <!-- Date Pcikers -->
                <div
                v-if="false"
                class="d-flex">
                    <div class="select-date start-date mr-auto">
                        <!-- <a href="#">
                            <small>
                                Today
                            </small>
                        </a>
                        <br> -->
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
                        </button> -->
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
                        type="text">
                    </div>
                </div>
            </header>
            <!-- Scroll Nav -->
            <div class="nav-scroller" style="height: 121px;">
                <nav class="nav health-category-blocks dragscroll">
                    <div
                    v-for="health_type in data.health_types"
                    :class="'bg-' + health_type.color"
                    class="card br-3">
                        <div class="card-body">
                            <div class="category-title">
                                {{ health_type.name }}
                            </div>
                            <div class="d-flex">
                                <div style="height: 60px; width: 60px;">
                                    <div class="position-absolute overflow-hidden" style="width: 140px; height: 70px; left: -30px; bottom: 15px;">
                                        <div v-if="health_type.chart">
                                            <apexchart
                                            :width="health_type.chart.width"
                                            :height="health_type.chart.height"
                                            type="radialBar"
                                            :options="radialBar_options"
                                            :series="health_type.chart.series"></apexchart>
                                        </div>
                                    </div>
                                </div>
                                <div
                                v-if="health_type.chart"
                                class="d-flex align-items-center ml-2">
                                    <div class="d-flex flex-column">
                                        <small>
                                            <div>
                                                68%
                                            </div>
                                            <div>
                                                10 Logs
                                            </div>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <hr>

            <div class="time-line">
                <table class="table table-sm table-borderless">
                    <tbody>
                        <template v-for="row in data.display">
                            <tr v-if="row.display_as == 'title'">
                                <td
                                class="d-none d-sm-table-cell"
                                style="width: 100px;"></td>
                                <td>
                                    <h4 class="m-0">
                                        {{ row.title }}
                                    </h4>
                                </td>
                            </tr>
                            <tr v-if="row.display_as == 'row'">
                                <td
                                v-if="row.time"
                                class="d-none d-sm-table-cell"
                                style="width: 100px;">
                                    {{ row.time }}
                                </td>
                                <td>
                                    <div
                                    :class="'bg-' + row.health_type.color"
                                    class="card br-3">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div><!-- left -->
                                                    <div><!-- top -->
                                                        <div class="category-title text-white">
                                                            {{ row.type }}
                                                        </div>
                                                    </div>
                                                    <div><!-- bottom -->
                                                        <small class="d-block d-sm-none text-light">
                                                            {{ row.time }}
                                                        </small>
                                                    </div>
                                                </div>
                                                <div><!-- right -->
                                                    <div><!-- top -->
                                                        <p class="h3 text-white m-0" style="line-height: 1rem;">
                                                            {{ row.measurement }}
                                                            <small>
                                                                {{ row.measurement_type }}
                                                            </small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="row.display_as == 'graph'">
                                <td colspan="2">
                                    <div
                                    :class="'bg-' + row.health_type.color"
                                    class="card br-3">
                                        <div class="card-body text-white">
                                            <div class="d-flex align-items-center justify-content-between text-nowrap">
                                                <div class="row"><!-- left -->
                                                    <div class="col-sm"><!-- top -->
                                                        <p class="category-title h3 m-0" style="line-height: 1rem;">
                                                            {{ row.type }}
                                                        </p>
                                                    </div>
                                                    <div class="col-sm"><!-- bottom -->
                                                        <small class="text-light">
                                                            {{ row.time }}
                                                        </small>
                                                        <small class="d-none d-sm-inline text-light">
                                                            <i class="material-icons">maximize</i>&nbsp;{{ row.duration }}
                                                        </small>
                                                    </div>
                                                </div>
                                                <div class="row text-right"><!-- right -->
                                                    <div class="col-sm"><!-- top -->
                                                        <p class="h3 m-0" style="line-height: 1rem;">
                                                            {{ row.measurement }}
                                                            <small>
                                                                {{ row.measurement_type }}
                                                            </small>
                                                        </p>
                                                    </div>
                                                    <div class="col-sm d-block d-sm-none"><!-- bottom -->
                                                        <small class="text-light">
                                                            {{ row.duration }}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr>

                                            <div>
                                                <apexchart
                                                :width="row.chart.width"
                                                :height="row.chart.height"
                                                :type="row.chart.type"
                                                :options="row.chart.options"
                                                :series="row.chart.series"></apexchart>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div><!-- ./time-line -->
            count: {{ count.data }}
        </div>
    </div>
</template>

<script>
// project

export default {
    name: 'HealthData',
    components: {
    },
    props: [
        // 'start_date'
    ],
    data() {
        return {
            start_date: this.$moment().startOf('day'),
            count: 2,
            // sample data
            radialBar_options: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            // size: '60%',
                            background: 'transparent',
                        },
                        dataLabels: {
                            show: false,
                        },
                        track: {
                            show: false,
                        },
                    },
                },
                colors: ['#fff'],
                legend: {
                    show: false,
                },
                dataLabels: {
                    enabled: false,
                },
                fill: {
                    type: 'solid',
                    colors: ['#fff'],
                },
                stroke: {
                    lineCap: "round",
                },
                labels: [],
                tooltip: {
                    enabled: false,
                },
            },
            data: {
                health_types: [
                    {
                        name: "Activity",
                        color: "red",
                        chart: {
                            series: [67],
                        }
                    },
                    {
                        name: "Nutrition",
                        color: "green",
                        chart: {
                            series: [67],
                        }
                    },
                    {
                        name: "Water",
                        color: "teal",
                        chart: {
                            series: [67],
                        }
                    },
                    {
                        name: "Time",
                        color: "yellow",
                        chart: {
                            series: [67],
                        }
                    },
                    {
                        name: "Sleep",
                        color: "purple",
                        chart: {
                            series: [67],
                        }
                    },
                    {
                        name: "Mindfulness",
                        color: "blue",
                        chart: {
                            series: [67],
                        }
                    },
                    {
                        name: "...",
                        color: "gray",
                    },
                ],
                display: [
                    {
                        display_as: "title",
                        title: "Saturday, June 29, 2019"
                    },
                    {
                        display_as: "graph",
                        time: "2:00 pm",
                        health_type: {
                            name: "Activity",
                            color: "red",
                        },
                        type: "Running",
                        measurement: "2.2",
                        measurement_type: "mi",
                        duration: "3 hours",
                        chart: {
                            type: "area",
                            width: '100%',
                            height: 350,
                            options: {
                                chart: {
                                    foreColor: '#fff',
                                    zoom: {
                                        enabled: false
                                    },
                                    toolbar: {
                                        show: false,
                                    }
                                },
                                colors: ['#fff'],
                                legend: {
                                    show: false,
                                },
                                dataLabels: {
                                    enabled: false
                                },
                                stroke: {
                                    show: true,
                                    curve: 'smooth',
                                    colors: ['#fff'],
                                    lineCap: 'round',
                                    width: 5,
                                },
                                markers: {
                                    size: 0,
                                    colors: ['rgb(255, 69, 58)'],
                                    strokeWidth: 3,
                                    strokeColors: '#fff',
                                    shape: "circle",
                                    fillOpacity: 1,
                                },
                                fill: {
                                    type: 'gradient',
                                    colors: ['#fff'],
                                    gradient: {
                                        shadeIntensity: 1,
                                        opacityFrom: 0.8,
                                        opacityTo: 0,
                                        stops: [0, 90, 100],
                                    }
                                },
                                xaxis: {
                                    // type: 'datetime',
                                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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
                                    min: 20,
                                    max: 100,
                                    labels: {
                                        show: true,
                                        align: 'left',
                                        offsetX: 32,
                                        offsetY: -8,
                                    },
                                    tooltip: {
                                        enabled: false,
                                        offsetX: 0,
                                    },
                                },
                                tooltip: {
                                    enabled: false,
                                }
                            },
                            series: [{
                                name: 'series-1',
                                data: [30, 40, 45, 50, 49, 60, 70, 91]
                            }],
                        }
                    },
                    {
                        display_as: "row",
                        time: "2:00 pm",
                        health_type: {
                            name: "Activity",
                            color: "red",
                        },
                        type: "Running",
                        measurement: "2.2",
                        measurement_type: "mi"
                    },
                    {
                        display_as: "row",
                        time: "2:00 pm",
                        health_type: {
                            name: "Activity",
                            color: "red",
                        },
                        type: "Running",
                        measurement: "2.2",
                        measurement_type: "mi"
                    },
                    {
                        display_as: "title",
                        title: "Saturday, June 29, 2019"
                    },
                    {
                        display_as: "row",
                        time: "2:00 pm",
                        health_type: {
                            name: "Activity",
                            color: "red",
                        },
                        type: "Running",
                        measurement: "2.2",
                        measurement_type: "mi"
                    },
                    {
                        display_as: "row",
                        time: "2:00 pm",
                        health_type: {
                            name: "Activity",
                            color: "red",
                        },
                        type: "Running",
                        measurement: "2.2",
                        measurement_type: "mi"
                    },
                    // {
                    //     "row_type": "time",
                    //     "time": "200 pm",
                    //     "": "Activity",
                    //     "": ""
                    // },
                ]
            }
        }
    },
    mounted() {
        this.axios
            .get('https://us-central1-healthasity.cloudfunctions.net/sample-json')
            .then(response => (this.count = response))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>