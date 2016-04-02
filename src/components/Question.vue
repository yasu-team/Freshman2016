<template lang="jade">
#question
  h1(class="q_title") {{msg}}
  div(class="q_field")
    image(src="{{image}}")
    div(class="yes_or_no")
      div(class="yes" v-on:click="yes()")
        h3 yes
      div(class="no" v-on:click="no()")
        h3 no
</template>

<style lang="scss">
  .q_title {
    text-align: center;
  }

  #question {
    width: 300px;
    margin: 0 auto;
    padding: 0;
    background: #ccc;
    .q_field {
      img {
        width: 300px;
        height: auto;
      }
      .yes_or_no {
        width: 300px;
        & > div {
          width: 150px;
          float: left;
          margin: 0;
          padding: 10px auto;
          &:hover {
            background: red;
          }
        }
        clear: both;
      }
    }
  }
</style>

<script lang="coffee">
  module.exports =
    data: ->
      image: "http://shijonawate-aeonmall.com/files/shop/43/thumbW480_photo2.jpg"
      msg: 'スポーツは好き？'

    methods: {
      yes: ->
        this.$dispatch('yes')
      no: ->
        this.$dispatch('no')
    }
</script>
