<script>
  import { images } from "../store.js";

  let backgroundImage;
  const unsubscribe = images.subscribe(value => {
    backgroundImage = value;
  });
</script>

<style lang="scss">
  div {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem;
  }
  main {
    display: flex;
    flex: 1;
    flex-direction: column;

    @media (min-width: 576px) {
      margin-right: 1em;
      margin-right: 45vw;
    }
  }

  figure {
    margin: 0;
    display: none;

    @media (min-width: 576px) {
      position: fixed;
      right: 0;
      top: 0;
      display: block;
    }
  }
  img {
    display: block;
    height: auto;
    width: 45vw;
  }
</style>

<div>
  <main>
    <slot />
  </main>
  <figure>
    <img src={backgroundImage} alt="Kevin S. Perrine" />
  </figure>

</div>
