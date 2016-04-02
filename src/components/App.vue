<template lang="jade">
#app
  top(v-show="status==0")
  question(v-show="status==1")
  question(v-show="status==2")
  question(v-show="status==3")
  question(v-show="status==4")
  question(v-show="status==5")
  div(class="r_field")
    result(v-show="status==6")
    button(v-on:click="next()") 次へ
    p {{status}}
</template>

<style lang="scss">
  .red {
    color: #f00
  }
  #app {
    .r_field {
      clear: both;
    }
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
      message: ""

    methods: {
      next: ->
        console.log 3
        this.status +=1
    }
    events: {
      'next': ->
        console.log 3
      'yes': ->
        console.log 'yes'
        this.status += 1
        this.$broadcast('change_q', "http://articleimage.nicoblomaga.jp/image/56/2015/8/c/8c621fe2a6cf4e3526e4b8602786a808f9a897ac1423975008.jpg")
      'no': ->
        console.log 'no'
        this.status += 1
    }
    components: {
      top, question, result
    }
</script>