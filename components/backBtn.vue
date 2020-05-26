<template>
  <nuxt-link to="/" class="btn-back">
    <IosArrowRoundBackIcon w="3em" h="3em" />Back
  </nuxt-link>
</template>

<script>
import IosArrowRoundBackIcon from "vue-ionicons/dist/ios-arrow-round-back.vue";

export default {
  components: {
    IosArrowRoundBackIcon
  }
};
</script>

<style lang="scss">
.btn-back {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  font-weight: 600;
  margin: 2rem 0 2.5rem;
  padding: 0.25rem 1rem;
  box-shadow: 0px 0px 8px 3px rgba(133, 133, 133, 0.21);
  border-radius: 5px;
  &hover {
    box-shadow: 0px 0px 10px 3px rgba(133, 133, 133, 0.31);
  }
  div {
    margin-right: 0.25em;
    transition: all 0.15s ease;
  }
  &:hover div {
    transform: translateX(-4px);
  }
}
</style>