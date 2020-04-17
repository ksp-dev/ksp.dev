<script>
  export let content;
  export let isTag = false;

  import { videos } from "../data/videos.js";
  import { crossfade, scale } from "svelte/transition";
  import Modal from "./Modal.svelte";
  import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { elasticIn, elasticOut } from "svelte/easing";

  let parts = [];
  let beginning;
  let end;
  let selected = null;
  let showIcon = {};
  let found = videos
    .filter(video => content.includes(video.keyword))
    .sort((a, b) => content.indexOf(a.keyword) - content.indexOf(b.keyword));

  const [send, receive] = crossfade({
    duration: 200,
    fallback: scale
  });

  function pop(node, params) {
    console.log(`[PARAMS]`, params);

    const existingTransform = getComputedStyle(node).transform.replace(
      "none",
      ""
    );

    return {
      delay: params.delay || 0,
      duration: params.duration || 400,
      easing: params.easing || elasticOut,
      css: (t, u) => {
        return `transform: ${existingTransform} scale(${t})`;
      }
    };
  }

  if (found.length) {
    parts = found.reduce((carry, video, index) => {
      let startingIndex = 0;
      if (index !== 0) {
        const previous = carry[carry.length - 1];
        startingIndex =
          content.indexOf(previous.keyword) + previous.keyword.length;
      }

      const result = [
        ...carry,
        content.substring(startingIndex, content.indexOf(video.keyword)),
        { ...video }
      ];

      if (index === found.length - 1) {
        const lastStartIndex =
          content.indexOf(video.keyword) + video.keyword.length;
        return [...result, content.substring(lastStartIndex)];
      }

      return result;
    }, []);
  }
</script>

<style>
  .isClickable {
    text-decoration: underline;
    color: #720904;
    cursor: pointer;
  }

  .isTag {
    color: #fff;
    background-color: #720904;
    padding: 0.25em;
    text-decoration: none;
  }

  span {
    display: inline-block;
  }

  .icon-wrapper {
    display: inline-block;
  }
</style>

{#if parts.length}
  <span>
    {#each parts as part}
      {#if typeof part === 'string'}
        {part}
      {:else}
        <span
          class="isClickable"
          class:isTag={isTag === true}
          on:click={() => {
            selected = part;
          }}
          on:mouseover={() => {
            showIcon[part.id] = true;
          }}
          on:mouseout={() => {
            showIcon[part.id] = false;
          }}
          in:receive={{ key: part.id }}
          out:send={{ key: part.id }}>
          {part.keyword}
        </span>
      {/if}
    {/each}
  </span>
{:else}{content}{/if}

{#if selected}
  <Modal
    on:close={() => {
      selected = false;
    }}
    {selected} />
{/if}
