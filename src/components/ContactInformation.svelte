<script>
  import SectionTitle from "../components/SectionTitle.svelte";
  import Row from "../components/Row.svelte";
  import Col from "../components/Col.svelte";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import {
    faMapMarkerAlt,
    faGlobe,
    faEnvelope,
    faMobileAlt,
    faQuestion
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faGithub,
    faGoodreads,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  export let basics;

  function getIcon(network) {
    let icon = faQuestion;
    switch (network.toLowerCase()) {
      case "github":
        icon = faGithub;
        break;
      case "instagram":
        icon = faInstagram;
        break;
      case "goodreads":
        icon = faGoodreads;
        break;
      default:
        icon = faQuestion;
        break;
    }

    return icon;
  }
</script>

<style lang="scss">
  div {
    padding: 1em;
    transition: all 0.3s;
  }

  h1 {
    margin-bottom: 0;
  }

  p {
    padding: 1em;
    margin: 0;
  }

  a {
    text-decoration: none;
    vertical-align: middle;

    > span {
      text-decoration: underline;
    }
  }
</style>

<SectionTitle>Contact Information</SectionTitle>
<div>
  <Row>
    <Col>
      <span>
        <Icon
          data={faMapMarkerAlt}
          style="min-width: 1.5em; vertical-align: middle;" />
        {basics.location.city}, {basics.location.postalCode}
      </span>
    </Col>
  </Row>
  <Row>
    <Col>
      <span>
        <a href={basics.website} target="_blank" rel="noopener">
          <Icon
            data={faGlobe}
            style="min-width: 1.5em; vertical-align: middle;" />
          <span>{basics.website}</span>
        </a>
      </span>
      <span>
        <a href="mailto:{basics.email}" target="_blank" rel="noopener">
          <Icon
            data={faEnvelope}
            style="min-width: 1.5em; vertical-align: middle;" />
          <span>{basics.email}</span>
        </a>
      </span>
      <span>
        <a href="tel:{basics.phone}" target="_blank" rel="noopener">
          <Icon
            data={faMobileAlt}
            style="min-width: 1.5em; vertical-align: middle;" />
          <span>{basics.phone}</span>
        </a>
      </span>
    </Col>
    <Col>
      {#if basics.profiles}
        {#each basics.profiles as profile}
          <span>
            <a href={profile.url} target="_blank" rel="noopener">
              <Icon
                data={getIcon(profile.network)}
                style="min-width: 1.5em; vertical-align: middle;" />
              <span>{profile.url.replace(/https?:\/\//, '')}</span>
            </a>
          </span>
        {/each}
      {/if}
    </Col>
  </Row>
</div>
