<script>
  import Row from "./Row.svelte";
  import Col from "./Col.svelte";
  import VideoLink from "./VideoLink.svelte";

  export let name;
  export let keywords;
</script>

<style>
  div {
    padding: 1em;
  }

  h4 {
    margin: 0;
    margin-bottom: 0.5em;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul > li {
    list-style: none;
    display: inline-block;
    padding: 0.25em;
    background: rgba(193, 201, 211, 0.333);
    margin-bottom: 0.5em;
    margin-right: 0.5em;
    font-size: 0.875em;
  }
</style>

<div>
  <h4>
    <VideoLink content={name} />
  </h4>
  {#if keywords}
    <ul>
      {#each keywords as keyword}
        <li>
          <VideoLink isTag={true} content={keyword} />
        </li>
      {/each}
    </ul>
  {/if}
</div>
