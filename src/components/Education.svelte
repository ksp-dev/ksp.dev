<script>
  import dayjs from "dayjs";
  import Row from "./Row.svelte";
  import Col from "./Col.svelte";
  import VideoLink from "./VideoLink.svelte";
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

<div class="container">
  <Row>
    <Col>
      <strong>
        <VideoLink content={`${studyType} ${area}`} />
      </strong>
      <span>{institution}</span>
    </Col>
    <Col right>
      <strong>{startDate} — {endDate}</strong>
    </Col>
  </Row>
  <Row>
    <Col>
      {#if courses}
        <ul>
          {#each courses as course}
            <li>
              <VideoLink isTag={true} content={course} />
            </li>
          {/each}
        </ul>
      {/if}
    </Col>
  </Row>
</div>
