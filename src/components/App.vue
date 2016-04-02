<template lang="jade">
#app
  top(v-show="status==0")
  question(v-show="status==1")
  result(v-show="status==2")
  button(v-on:click='status++') 次へ
</template>

<style lang="scss">
  .red {
    color: #f00
  }
</style>

<script lang="coffee">
  top = require('./Top.vue')
  question = require('./Question.vue')
  result = require('./Result.vue')

  module.exports =
    data: ->
      status: 0
      answers: []
    components: {
      top, question, result
    }
</script>
