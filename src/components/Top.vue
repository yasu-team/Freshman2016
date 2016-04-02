<template lang="jade">
#top
  h1(class="red") {{ msg }}
</template>

<style lang="scss">
  .red {
    color: #f00
  }
</style>

<script lang="coffee">
  module.exports =
    data: ->
      msg: 'top'
</script>
