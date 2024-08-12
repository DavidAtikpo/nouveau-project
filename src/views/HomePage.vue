<template>
  <div>
    <NavigationComponent />
    <TestimonialComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent.vue';
import TestimonialComponent from '@/components/TestimonialComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    NavigationComponent,
    TestimonialComponent,
    FooterComponent
  }
};
</script>

<style scoped>
</style>

