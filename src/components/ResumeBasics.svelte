<script>
  import SectionTitle from "./SectionTitle.svelte";
  import Row from "./Row.svelte";
  import Col from "./Col.svelte";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import VideoLink from "./VideoLink.svelte";
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
  h1 {
    margin-bottom: 0;
  }

  div {
    padding: 1em;
  }
</style>

<h1>{basics.name}</h1>
<h2>{basics.label}</h2>
<SectionTitle>Summary</SectionTitle>
<Row>
  <Col>
    <div>
      <VideoLink content={basics.summary} />
    </div>
  </Col>
</Row>
