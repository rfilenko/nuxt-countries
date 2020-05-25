<template>
  <div class="app">
    <AppHeader />
    <main>
      <nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

