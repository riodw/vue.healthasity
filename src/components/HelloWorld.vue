<template>
    <div class="hello">
        count: {{ count }}
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'HelloWorld',
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
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>