<script>
  import dayjs from "dayjs";
  import Row from "./Row.svelte";
  import Col from "./Col.svelte";
  export let position;
  export let company;
  export let location;
  export let startDate;
  export let endDate;
  export let website;
  export let summary;
  export let highlights;
  export const pinned = false;
  import VideoLink from "./VideoLink.svelte";

  startDate = dayjs(startDate).format("MMMM YYYY");
  endDate = dayjs(endDate).format("MMMM YYYY");
</script>

<style>
  .container {
    padding: 1em;
  }
</style>

<div class="container">
  <Row>
    <Col>
      <strong>{position}</strong>
      <span>{company}</span>
      <span>{location}</span>
    </Col>
    <Col right>
      <strong>{startDate} — {endDate}</strong>
      {#if website}
        <a href={website}>{website}</a>
      {/if}
    </Col>
  </Row>
  <Row>
    <Col>
      <VideoLink content={summary} />
    </Col>
  </Row>
  <Row>
    <Col>
      {#if highlights}
        <ul>
          {#each highlights as highlight}
            <li>{highlight}</li>
          {/each}
        </ul>
      {/if}
    </Col>
  </Row>
</div>
