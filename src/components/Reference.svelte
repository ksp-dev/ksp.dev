<script>
  export let reference;
  export let name = undefined;
</script>

<style>
  .reference {
    margin: 0;
    margin-bottom: 1em;
    border-left: 2px solid rgba(0, 0, 0, 0.1);
    padding-left: 1em;
  }

  .reference > footer {
    padding: 0.667em;
  }

  .other {
    margin: 0;
    padding: 0;
  }

  .other > footer {
    padding: 0;
    margin: 0;
  }
</style>

<blockquote
  class:reference={typeof name === 'string'}
  class:other={typeof name !== 'string'}>
  {reference}
  {#if name}
    <footer>
      <cite>{name}</cite>
    </footer>
  {/if}
</blockquote>
