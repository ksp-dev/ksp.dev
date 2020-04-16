<script>
  export let right = undefined;
</script>

<style>
  .col {
    flex-direction: column;
    flex: 1;
    display: flex;
  }

  @media (max-width: 575px) {
    .col {
      min-width: 100%;
    }
  }

  @media (min-width: 576px) {
    .right {
      text-align: right;
    }
  }
</style>

<div class="col" class:right={right !== undefined}>
  <slot />
</div>
