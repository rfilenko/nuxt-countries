<template>
  <div class="app" :class="!this.$store.state.mode.lightMode ? 'dark-mode': ''">
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
  },
  data() {
    return {
      light: null
    };
  },
  created() {
    this.light = this.$store.state.mode.lightMode;
  },
  methods: {
    switchMode() {
      this.$store.commit("mode/toggle");
    }
  }
};
</script>

