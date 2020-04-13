<script>
  import dayjs from "dayjs";
  export let studyType;
  export let area;
  export let institution;
  export let startDate;
  export let endDate;
  export let courses;

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

  @media (min-width: 576px) {
    .row > .col + .col {
      text-align: right;
    }
  }
</style>

<div class="container">
  <div class="row">
    <div class="col">
      <strong>{studyType} {area}</strong>
      <span>{institution}</span>
    </div>
    <div class="col">
      <strong>{startDate} — {endDate}</strong>
    </div>
  </div>
  <div class="row">
    <div class="col">
      {#if courses}
        <ul>
          {#each courses as course}
            <li>{course}</li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</div>
