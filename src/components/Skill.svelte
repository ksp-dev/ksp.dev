<script>
  export let data;
  import LevelBar from "./LevelBar.svelte";
  import { crossfade, scale } from "svelte/transition";
  import { faTimes } from "@fortawesome/free-solid-svg-icons";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import Row from "./Row.svelte";
  import Col from "./Col.svelte";
  import Modal from "./Modal.svelte";
  let selected = null;
  let time = 0;
  let duration;
  let paused = true;
  const [send, receive] = crossfade({
    duration: 200,
    fallback: scale
  });

  function handleMouseDown(e) {
    // we can't rely on the built-in click event, because it fires
    // after a drag — we have to listen for clicks ourselves

    function handleMouseup() {
      if (paused) e.target.play();
      else e.target.pause();
      cancel();
    }

    function cancel() {
      e.target.removeEventListener("mouseup", handleMouseup);
    }

    e.target.addEventListener("mouseup", handleMouseup);

    setTimeout(cancel, 200);
  }
</script>

<style>
  .isClickable {
    background: #720904;
    color: #fff;
    cursor: pointer;
  }

  div {
    padding: 1em;
  }

  h4 {
    margin: 0;
  }

  p {
    margin: 0;
    font-style: italic;
    font-size: 0.875em;
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
    border-radius: 2px;
  }
</style>

<div>
  <h4>{data.name}</h4>
  <p>{data.level}</p>
  <LevelBar level={data.level} />
  {#if data.keywords}
    <ul>
      {#each data.keywords as keyword}
        {#if keyword.toLowerCase() === 'wordpress'}
          <li
            class="isClickable"
            on:click={() => {
              selected = keyword;
            }}
            in:receive={{ key: keyword }}
            out:send={{ key: keyword }}>
            {keyword}
          </li>
        {:else}
          <li>{keyword}</li>
        {/if}
      {/each}
    </ul>
  {/if}

  {#if selected}
    <Modal
      on:close={() => {
        selected = false;
      }} />
  {/if}
</div>
