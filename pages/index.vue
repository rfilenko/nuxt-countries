<template>
  <div class="container">
    <div class="intro">
      <form @submit.prevent>
        <div class="input-group">
          <IosSearchIcon v-show="search.length === 0" />
          <input
            v-model="search"
            type="text"
            v-on:keyup="filterByName($event)"
            placeholder="Search for a country..."
          />
        </div>
      </form>
      <select v-on:change="onChange($event)" :selected="selectedReg">
        <option value="none">Filter by Region</option>
        <option v-for="region in regions" :key="region" :value="region">{{region}}</option>
      </select>
    </div>
    <div v-if="loading" class="loading">
      Loading
      <IosRefreshCircleIcon w="2em" h="2em" animate="rotate" />
    </div>
    <div v-else class="countries-list">
      <Tile v-for="country in filtered" :country="country" :key="country.name" />
    </div>
  </div>
</template>

<script>
import Tile from "~/components/Tile.vue";
import IosSearchIcon from "vue-ionicons/dist/ios-search.vue";
import IosRefreshCircleIcon from "vue-ionicons/dist/ios-refresh-circle.vue";

export default {
  head: {
    title: `A countries api app, created with Vue and Nuxt.js`,
    meta: [
      {
        hid: "description",
        name: "description",
        content: "A countries api app"
      }
    ]
  },
  components: {
    Tile,
    IosSearchIcon,
    IosRefreshCircleIcon
  },
  data() {
    return {
      countries: [],
      filtered: [],
      selectedReg: "",
      search: "",
      regions: [],
      loading: true
    };
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get("https://restcountries.eu/rest/v2/all");
    return { res };
  },
  async created() {
    this.countries = await this.res;
    this.loading = false;
    this.getRegions();
    this.filtered = this.countries;
  },
  methods: {
    getRegions() {
      const regions = this.countries.map(c => c.region);
      let arr = [];
      regions.forEach(el => {
        return arr.push(el);
      });
      const regionsList = arr.filter((item, pos) => {
        return arr.indexOf(item) == pos && item != "";
      });
      this.regions = regionsList;
    },
    onChange(e) {
      this.search = e.target.value;
      if (this.selectedReg !== e.target.value) {
        const filteredList = this.countries.filter(
          item => item.region === e.target.value
        );
        this.filtered = filteredList;
        this.selectedReg = e.target.value;
      }
    },
    filterByName(e) {
      const val = e.target.value;
      const filteredName = this.countries.filter(c => {
        return c.name.toLowerCase().includes(val);
      });

      this.filtered = filteredName;
    }
  }
};
</script>

<style lang="scss">
main .container {
  flex-direction: column;
}
.intro {
  display: flex;
  flex-direction: column;
  padding: 1rem 0 2rem;
  form {
    input {
      width: 100%;
      margin-bottom: 2rem;
      padding-left: 3rem;
    }
  }
  .input-group {
    position: relative;
    div {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.15s ease;
      svg {
        fill: var(--primary-clr);
      }
    }
    /* input:focus + div {
      opacity: 0;
    } */
  }

  input,
  select {
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 1px 1px 10px hsla(200, 15%, 8%, 0.1);
  }
  select {
    width: 50%;
    padding: 1rem;
    cursor: pointer;
  }
}

/* loading  */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  .ion {
    margin-left: 0.25rem;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ionRotate;
    animation-duration: 2s;
  }
}
@keyframes ionRotate {
  to {
    transform: rotate(1turn);
  }
}
/* countries-list */
.countries-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  grid-gap: 1rem;
}
@media screen and (min-width: 800px) {
  main {
    .container {
      flex-direction: row;
    }
  }
  .intro {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    form {
      width: 40%;
      input {
        margin-bottom: 0;
      }
    }
    select {
      width: 40%;
    }
  }
}
@media screen and (min-width: 1024px) {
  .countries-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(14rem, 1fr));
    grid-gap: 1rem;
  }
}
@media screen and (max-width: 799px) {
}
</style>
