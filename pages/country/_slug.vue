<template>
  <div class="wrap container">
    <nuxt-link to="/" class="btn-back">
      <IosArrowRoundBackIcon w="3em" h="3em" />back
    </nuxt-link>
    <div class="card">
      <div class="card__logo">
        <figure>
          <img v-if="!loading" :src="current.flag" :alt="`${current.name} flag`" />
          <figcaption aria-hidden="true">{{`SVG icon of ${current.name} flag`}}</figcaption>
        </figure>
      </div>
      <div class="card__body">
        <h2>{{current.name}}</h2>
        <div class="card__info">
          <p>
            Native Name:
            <span>{{current.nativeName}}</span>
          </p>
          <p>
            Population:
            <span>{{current.population.toLocaleString()}}</span>
          </p>
          <p>
            Region:
            <span>{{current.region}}</span>
          </p>
          <p>
            Sub Region:
            <span>{{current.subregion}}</span>
          </p>
          <p>
            Capital:
            <span>{{current.capital}}</span>
          </p>
        </div>
        <div class="card__additional">
          <p v-for="d in current.topLevelDomain" :key="d">
            Top level domain:
            <span>{{d}}</span>
          </p>
          <div>
            <ul>
              <b>Currencies:</b>
              <li v-for="c in current.currencies" :key="c.name">
                <span>{{c.name}}</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <b>Languages:</b>
              <li v-for="l in current.languages" :key="l.name">
                <span>{{l.name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <ul class="borders">
          <b>Border countries:</b>
          <li v-for="b in current.borders" :key="b">
            <nuxt-link :to="`/country/${b.toLowerCase()}`">{{b}}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@nuxtjs/axios";
import IosArrowRoundBackIcon from "vue-ionicons/dist/ios-arrow-round-back.vue";

export default {
  components: {
    IosArrowRoundBackIcon
  },
  head: {
    title: `Country details`,
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Country details page"
      }
    ]
  },
  data() {
    return {
      slug: null,
      current: "",
      loading: false
    };
  },
  async created() {
    const curr = this.$route.params.slug;
    this.slug = curr.toLowerCase();
    this.loading = true;
    if (this.slug !== undefined) {
      const res = await this.$axios.$get(
        `https://restcountries.eu/rest/v2/alpha/${this.slug}`
      );
      this.current = res;
      this.loading = false;
    }
  },
  mounted() {
    this.getCurr();
  },
  methods: {
    async getCurr() {
      const curr = this.$route.params.slug;
      this.slug = curr.toLowerCase();
    }
  }
};
</script>

<style lang="scss">
.btn-back {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  box-shadow: 3px 3px 12px 5px hsla(0, 0%, 52%, 0.15);
  margin: 2rem 0 2.5rem;
  padding: 0.5rem 1.25rem;
  &hover {
    box-shadow: 3px 3px 15px 8px hsla(0, 0%, 52%, 0.21);
  }
  div {
    margin-right: 0.5rem;
    transition: all 0.15s ease;
  }
  &:hover div {
    transform: translateX(-4px);
  }
}
.card {
  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
  }
  img {
    height: 250px;
    margin-bottom: 1rem;
    width: 100%;
  }
}
.card__logo {
  margin-bottom: 2rem;
}
.card__info {
  margin-bottom: 2rem;
  p,
  div {
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  span {
    color: var(--primary-clr);
    font-weight: 300;
  }
}
.card__additional {
  margin-bottom: 2rem;
  p,
  div {
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  span {
    color: var(--primary-clr);
    font-weight: 300;
    margin: 0 0.25rem;
  }
  b {
    font-weight: 600;
    margin-right: 0.5rem;
  }
}
ul,
.borders {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
.borders {
  margin: 0 0 3rem;
  b {
    flex-basis: 100%;
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  li {
    border: 1px solid var(--primary-clr);
    padding: 0.25rem 0.75rem;
    margin: 0.25rem;
  }
}

.dark-mode {
  .card__info,
  .card__additional {
    span {
      color: var(--darkMode-text-clr);
    }
  }
  svg.ion__svg {
    fill: var(--darkMode-text-clr);
  }
}
@media screen and(min-width: 800px) {
  .card {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) 1fr;
    gap: 3rem;
    h2 {
      font-size: 2.5rem;
    }
    h2,
    .borders {
      grid-column: 1 / span 2;
      align-items: center;
    }
    img {
      height: auto;
      margin-bottom: 0;
      max-height: 400px;
      object-fit: cover;
    }
  }
  .card__body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .borders {
    b {
      flex-basis: auto;
      margin-bottom: 0;
    }
  }
}
</style>