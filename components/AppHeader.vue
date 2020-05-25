<template>
  <header>
    <div class="container">
      <h1 class="title">Where is the world?</h1>
      <button>
        <span></span> Dark mode
      </button>
    </div>
  </header>
</template>

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
  }
}
</style>
