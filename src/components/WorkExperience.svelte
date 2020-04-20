<script>
  import dayjs from "dayjs";
  import Row from "./Row.svelte";
  import Col from "./Col.svelte";
  export let position;
  export let company;
  export let location;
  export let startDate;
  export let endDate;
  export let website = undefined;
  export let summary;
  export let highlights;
  export const pinned = false;
  import VideoLink from "./VideoLink.svelte";
  import {
    faExternalLinkSquareAlt,
    faMapMarkerAlt
  } from "@fortawesome/free-solid-svg-icons";
  import Icon from "svelte-awesome/components/Icon.svelte";

  startDate = dayjs(startDate).format("MMMM YYYY");
  endDate = dayjs(endDate).format("MMMM YYYY");
</script>

<style>
  .container {
    padding: 1em;
  }

  a {
    display: inline-block;
  }
</style>

<div class="container">
  <Row>
    <Col>
      <strong>{position}</strong>
      <span>{company}</span>
      <span>
        <Icon
          data={faMapMarkerAlt}
          style="display: inline-block; vertical-align: middle" />
        {location}
      </span>
    </Col>
    <Col right>
      <strong>{startDate} — {endDate}</strong>
      {#if website}
        <a
          href={website}
          target="_blank"
          rel="noopener"
          style="display: inline-block">
          <Icon
            data={faExternalLinkSquareAlt}
            style="display: inline-block; vertical-align: middle; min-width:
            1.5em;" />
          {website}
        </a>
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
