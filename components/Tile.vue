<template>
  <nuxt-link :to="`/country/${country.alpha3Code.toLowerCase()}`" class="tile">
    <div class="tile__body">
      <div class="tile__logo">
        <figure>
          <img :src="country.flag" :alt="`${country.name} flag`" />
          <figcaption aria-hidden="true">{{`SVG icon of ${country.name} flag`}}</figcaption>
        </figure>
      </div>
      <div class="tile__content">
        <h3>{{country.name}}</h3>
        <p>
          Population:
          <span>{{country.population.toLocaleString()}}</span>
        </p>
        <p>
          Region:
          <span>{{country.region}}</span>
        </p>
        <p>
          Capital:
          <span>{{country.capital}}</span>
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["country"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
/* // tiles */
.tile {
  width: 100%;
  background: var(--white-clr);
  border-radius: 5px;
  box-shadow: 1px 1px 14px 5px hsla(0, 0%, 52%, 0.1);
  max-width: 75ch;
  margin: 0 auto 1.5rem;
  transition: all 0.15s ease;
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 1px 1px 15px 10px hsla(0, 0%, 52%, 0.15);
  }
}
.dark-mode {
  .tile {
    background: var(--darkMode-elements-clr);
  }
}
.tile__body {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
.tile__logo {
  min-height: 160px;
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
}

.tile__content {
  width: 100%;
  padding: 0 1.5rem 2.5rem;
  justify-self: flex-start;
  text-align: left;
  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
  }
  p {
    font-weight: 600;
    span {
      font-weight: 300;
    }
  }
}

@media screen and (max-width: 600px) {
}
</style>