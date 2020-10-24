<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <pre>
      <b-table striped hover :items="items" :fields="fields" :tbody-tr-class="rowClass"></b-table>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'LearnAxios',
  data () {
    return {
      msg: 'Welcome to My VueJS App - learn axios',
      fields: ['userName', 'age'],
      items: []
    }
  },
  mounted () {
    // this.items = [
    //   {'userName': 'Jack', 'age': 12},
    //   {'userName': 'Tom', 'age': 10}
    // ]

    this.axios.post('https://www.appvip2020.net/nodejsapi/user')
      .then(
        body => {
          this.items = body.data
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
