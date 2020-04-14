<script>
  export let selected = null;
  import { index } from "../store";
  import { crossfade, scale } from "svelte/transition";
  import { faTimes } from "@fortawesome/free-solid-svg-icons";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import Row from "../components/Row.svelte";
  import Col from "../components/Col.svelte";
  import { createEventDispatcher, onDestroy } from "svelte";

  const dispatch = createEventDispatcher();
  const close = () => {
    index.update();
    dispatch("close");
  };

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

  video {
    max-width: 100%;
    width: 100%;
  }
</style>

<div class="modal" in:receive={{ key: selected }} out:send={{ key: selected }}>
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
        <video
          poster="http://sveltejs.github.io/assets/caminandes-llamigos.jpg"
          src="http://sveltejs.github.io/assets/caminandes-llamigos.mp4"
          on:mousedown={handleMouseDown}
          autoplay={true}
          bind:currentTime={time}
          bind:duration
          bind:paused />
      </Col>
    </Row>
  </div>
</div>
