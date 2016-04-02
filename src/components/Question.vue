<template lang="jade">
#question
  h1(class="blue") {{ msg }}
</template>

<style lang="scss">
  .blue {
    color: #f00
  }
</style>

<script lang="coffee">
  module.exports =
    data: ->
      msg: 'question'
</script>
