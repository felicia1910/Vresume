<template>
  <div class="left_right" >
    <about-left ></about-left>
    <about-right></about-right>
  </div>
</template>

<script>
import AboutLeft from './Left'
import AboutRight from './Right'

export default {
  name: 'home',
  components: {
    AboutLeft,
    AboutRight
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
