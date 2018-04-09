<template>
  <div class="upcoming">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'upcoming',
  data () {
    return {
      msg: 'Coming soon'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: bold;
  font-size: 1.6em;
  margin-bottom: 12px;
}
</style>
