<template>
  <header>
    <div class="container">
      <h1 class="title">Where is the world?</h1>

      <button v-if="lightMode" @click="switchMode">
        <IosSunnyIcon />light mode
      </button>
      <button v-else @click="switchMode">
        <IosMoonIcon />dark mode
      </button>
    </div>
  </header>
</template>

<script>
import Tile from "~/components/Tile.vue";
import IosMoonIcon from "vue-ionicons/dist/ios-moon.vue";
import IosSunnyIcon from "vue-ionicons/dist/ios-sunny.vue";

export default {
  components: {
    IosMoonIcon,
    IosSunnyIcon
  },
  data() {
    return {
      lightMode: true
    };
  },
  methods: {
    switchMode() {
      this.lightMode = !this.lightMode;
    }
  }
};
</script>
<style lang="scss">
header {
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  padding: 1rem 0;
  box-shadow: 1px 1px 3px hsla(200, 15%, 8%, 0.21);
  font-weight: bold;
  background: var(--lightMode-elements-clr);
  .title {
    font-size: 20px;
  }
  button {
    font-weight: inherit;
    display: flex;
    align-items: center;
    div {
      margin-left: 0.5rem;
    }
  }
}
</style>
