<script>
  export let reference;
  export let name;
</script>

<style>
  div {
    padding: 1em;
  }

  blockquote > footer {
    padding: 0.667em;
  }
</style>

<div>
  <blockquote>
    {reference}
    {#if name}
      <footer>
        <cite>{name}</cite>
      </footer>
    {/if}
  </blockquote>
</div>
