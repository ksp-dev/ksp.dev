<script>
  import dayjs from "dayjs";
  export let position;
  export let company;
  export let location;
  export let startDate;
  export let endDate;
  export let website;
  export let summary;
  export let highlights;
  export const pinned = false;

  startDate = dayjs(startDate).format("MMMM YYYY");
  endDate = dayjs(endDate).format("MMMM YYYY");
</script>

<style>
  .container {
    padding: 1em;
  }

  .row {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .row > .col + .col {
    text-align: left;
  }

  @media (min-width: 576px) {
    .row > .col + .col {
      text-align: right;
    }
  }
</style>

<div class="container">
  <div class="row">
    <div class="col">
      <strong>{position}</strong>
      <span>{company}</span>
      <span>{location}</span>
    </div>
    <div class="col">
      <strong>{startDate} — {endDate}</strong>
      {#if website}
        <a href={website}>{website}</a>
      {/if}
    </div>
  </div>
  <div class="row">
    <div class="col">{summary}</div>
  </div>
  <div class="row">
    <div class="col">
      {#if highlights}
        <ul>
          {#each highlights as highlight}
            <li>{highlight}</li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</div>
