<template>
  <div class="rating-scale">

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component({
  name: 'RatingScale'
})
export default class RatingScale extends Vue {

}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.rating-scale {
  padding: 10px;
  background: $white;
}
</style>
