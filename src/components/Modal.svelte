<script>
  export let selected = null;
  import { index } from "../store";
  import { crossfade, scale } from "svelte/transition";
  import { faTimes } from "@fortawesome/free-solid-svg-icons";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import Row from "../components/Row.svelte";
  import Col from "../components/Col.svelte";
  import { onMount, createEventDispatcher, onDestroy } from "svelte";

  const dispatch = createEventDispatcher();
  const close = () => {
    index.update();
    dispatch("close");
  };

  let time = 0;
  let duration;
  let paused = true;
  let player;
  let done = false;

  const [send, receive] = crossfade({
    duration: 200,
    fallback: scale
  });

  function createPlayer() {
    player = new YT.Player("player", {
      height: "100%",
      width: "100%",
      videoId: selected.id,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  }

  onMount(() => {
    if (!window.YT) {
      var tag = document.createElement("script");

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = createPlayer;
    } else {
      createPlayer();
    }
  });

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      close();
    }
  }

  function stopVideo() {
    player.stopVideo();
  }
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.66);
    z-index: 1;
  }

  .container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }

  .player-container {
    width: 100%;
    height: 54vw;
  }
  #player {
    width: 100%;
  }
</style>

<div
  class="modal"
  in:receive={{ key: selected.id }}
  out:send={{ key: selected.id }}>
  <div class="container">
    <Row>
      <Col>
        <span on:click={close} style="display: block; align-self: flex-end;">
          <Icon data={faTimes} scale="3" style="color: #FFF;" />
        </span>
      </Col>
    </Row>
    <Row>
      <Col>
        <div class="player-container">
          <div id="player" />
        </div>
        <!-- <iframe
          width="560"
          height="315"
          src={selected.url}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture"
          allowfullscreen
          autoplay={true} /> -->
        <!-- <video
          src={selected.url}
          on:mousedown={handleMouseDown}
          autoplay={true}
          bind:currentTime={time}
          bind:duration
          bind:paused /> -->
      </Col>
    </Row>
  </div>
</div>
