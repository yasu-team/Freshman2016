<template lang="jade">
#top
  h2(class="red") {{ msg }}
  button(v-on:click='next') 次へ
</template>

<style lang="scss">
  .red {
    color: #f00
  }
</style>

<script lang="coffee">
  module.exports =
    inherit: true
    data: ->
      msg: 'スポーツが好きだ'
    methods: {
      next: ->
        this.$dispatch('next')
    }
</script>
