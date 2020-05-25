<template>
  <footer>
    <div class="attribution">
      <p>
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >Frontend Mentor</a>.
      </p>
      <p>
        Coded by
        <a href="https://rfilenko-cv.netlify.app/">@Roman Filenko</a>.
      </p>
    </div>
  </footer>
</template>
<style lang="scss">
footer {
  margin-top: auto;
  background: var(--lightMode-bg-clr);
  color: var(--lightMode-text-clr);
  padding: 1rem;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  a {
    &:hover {
      text-decoration-style: double;
    }
  }
}

.attribution {
  display: flex;
  flex-direction: column;
  align-items: center;
  p + p {
    margin-bottom: 0.5rem;
  }
}
</style>
