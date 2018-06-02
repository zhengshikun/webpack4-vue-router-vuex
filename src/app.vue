<template>
<div>
  <h1>hello {{name}}</h1>
  <p>
    <router-link to="/index">go to 1</router-link>
    <router-link to="/about">go to 2</router-link>
  </p>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'vue.js'
    }
  }
}
</script>

<style scoped>
div{
  color: #f60;
  font-size: 24px;
}
</style>

