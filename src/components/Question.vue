<template lang="jade">
#question
  h1(class="blue") {{ msg }}
  div(class="question_field")
    image(src="{{no1.image}}")
    p {{no1.msg}}
  div(class="question_field")
    image(src="{{no2.image}}")
    p {{no2.msg}}

  button(v-on:click="next()") 次へ
</template>

<style lang="scss">
  .blue {
    color: #f00
  }

  #question {
    width: 300px;
    margin: 0 auto;
    padding: 0;
    .question_field {
      img {
        width: 300px;
        height: auto
      }
      p {
        position: relative;
        top: -20px;
      }
    }
  }
</style>

<script lang="coffee">
  module.exports =
    data: ->
      no1:
        msg: "テニス"
        image: "http://www.tennis-navi.jp/news/images/IMG_2292s.JPG"
      no2: 
        msg: "ラグビー"
        image: "http://cdn.mainichi.jp/vol1/2015/12/20/20151220dd0phj000019000p/91.jpg"
      msg: 'question'

    methods: ->
      next: ->
        @status = @status + 1
</script>
