<template>
  <div class="patient">
    <patient-form></patient-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import PatientForm from '@/components/PatientForm.vue'

@Component({
  name: 'Patient',
  components: {
    PatientForm
  }
})
export default class Patient extends Vue {

}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.patient {
  padding: 10px;
  background: $white;
}
</style>
