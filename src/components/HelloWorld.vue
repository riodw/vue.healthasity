<template>
    <div class="hello">
        <Masthead msg="Welcome to Your Vue.js App" />
        <div
        id="leftNav"
        class="collapse fixed-top h-100 bg-white drawer" style="width: 280px">
            <div class="nav flex-column nav-pills mx-3" style="margin-top: 5.5rem;">
                <a class="nav-link active" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled" href="#">Disabled</a>
            </div>
        </div>
        <div class="container" style="max-width: 1200px; margin-top: 5rem;">
            <header class="mb-4">
                <div class="row">
                    <div class="col-sm">
                        <div class="page-title">
                            <h1>
                                Health Data
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
                                <button
                                class="btn btn-link text-dark"
                                type="button">
                                    Saturday, Jun 29, 2019
                                </button>
                            </div>
                            <div class="end-date">
                                <button
                                class="btn btn-outline-primary"
                                type="button">
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
                        type="text">
                    </div>
                </div>
            </header>
            <div class="nav-scroller" style="height: 4rem;">
                <nav class="nav health-category-blocks">
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

            <hr>

            <div class="time-line">
                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <td style="width: 100px;">
                                
                            </td>
                            <td>
                                <h4 class="m-0">
                                    Saturday, June 29, 2019
                                </h4>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 100px;">
                                2:00 pm
                            </td>
                            <td>
                                <div class="card bg-red br-3">
                                    <div class="card-body">
                                        <div class="category-title">
                                            Running
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 100px;">
                                2:00 pm
                            </td>
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
            </div><!-- ./time-line -->
            count: {{ count.data }}
        </div>

    </div>
</template>

<script>
// vendor
import axios from 'axios'
// project
import Masthead from './Masthead.vue'

export default {
    name: 'HelloWorld',
    components: {
        Masthead,
    },
    props: {
        msg: String
    },
    data() {
        return {
            count: 2
        }
    },
    mounted() {
        axios
            .get('https://us-central1-healthasity.cloudfunctions.net/sample-json')
            .then(response => (this.count = response))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#leftNav {
    z-index: 100;
}
</style>