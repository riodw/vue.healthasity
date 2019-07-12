<template>
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-white shadow-sm">
        <a
        data-toggle="collapse"
        href="#leftNav"
        class="navbar-brand">
            <i class="material-icons">menu</i>
        </a>
        <a
        href="#"
        class="navbar-brand weight-heavy">
            healthasity
        </a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                        Riorden Dasan
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="#">
                            Action
                        </a>
                        <a class="dropdown-item" href="#">
                            Another action
                        </a>
                        <a class="dropdown-item" href="#">
                            Something else here
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <i class="material-icons">account_circle</i>
        </div>
    </nav>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Masthead',
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

</style>