<script>
  import { elasticIn } from "svelte/easing";
  import { tweened } from "svelte/motion";
  export let level;

  function getProgress() {
    switch (level.toLowerCase()) {
      case "beginner":
      case "junior":
        return 0.25;
      case "intermediate":
      case "mid-level":
        return 0.5;
      case "advanced":
        return 0.75;
      case "master":
      case "senior":
      case "expert":
        return 1.0;
      default:
        return 0;
    }
  }

  const progress = tweened(0);

  const fill = getProgress();
  progress.set(fill, { duration: 1200 * fill });
</script>

<style>
  progress {
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.25);
    height: 1rem;
    width: 10rem;
    display: block;
    margin-bottom: 1rem;
  }

  progress::-webkit-progress-bar {
    background: transparent;
  }

  progress::-webkit-progress-value {
    background: #05732e;
  }
</style>

<progress value={$progress} />
