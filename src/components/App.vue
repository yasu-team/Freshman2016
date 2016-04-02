<template lang="jade">
#app
  h1.red {{ msg }}
  p You are amazing
  top
  question
  result
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
      msg: 'Hello world!'
    # components: top: top
    components: {
      top, question, result
    }
</script>
