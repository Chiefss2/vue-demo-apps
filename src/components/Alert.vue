<template>
  <div id="alert">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'alert',
  props: {
    msg: String
  }
}
</script>
