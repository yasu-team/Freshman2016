<template lang="jade">
#app
  top(v-show="status==0")
  question(v-show="status==1")
  question(v-show="status==2")
  question(v-show="status==3")
  question(v-show="status==4")
  question(v-show="status==5")
  result(v-show="status==6")
  button(v-on:click="next()") 次へ
  p {{status}}
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

  questions = [1, 2, 3, 4, 5]

  module.exports =

    data: ->
      status: 0
      answers: []
      message: ""
    methods: {
      next: ->
        console.log 3
        @status = @status + 1
    }
    events: {
      'next': ->
        console.log 3
      'yes': ->
        console.log 'yes'
      'no': ->
        console.log 'no'
    }
    components: {
      top, question, result
    }
</script>