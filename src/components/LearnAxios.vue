<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- <hr>
    <pre>{{ items }}</pre>
    <hr> -->

    <pre>
      <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass"></b-table>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'LearnAxios',
  data () {
    return {
      msg: 'Learn axios: Welcome to My Vue.js App !',
      fields: ['userName', 'age'],
      items: []
    }
  },
  mounted () {
    // this.axios.post('https://www.appvip2020.net/book/GetAllBook').then(
    this.axios.post('https://www.appvip2020.net/nodejsapi/user')
      .then(
        body => {
          this.items = body.data
        }
      )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ul {
  list-style-type: none;
  text-align: middle;
} */
</style>
