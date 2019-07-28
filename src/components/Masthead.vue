<template>
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-white shadow-sm">
        <a
        onclick="$('#LeftNav').toggle();"
        href="javascript:void(0);"
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
                    <button
                    class="btn nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                        Riorden Dasan
                    </button>
                    <div class="dropdown-menu">
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
        <div class="dropdown">
            <button
            class="btn nav-link"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
                <i class="material-icons">account_circle</i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
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
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Masthead',
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

</style>