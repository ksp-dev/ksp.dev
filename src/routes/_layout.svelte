<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  div {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
  }

  main {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>

<div>
  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>
