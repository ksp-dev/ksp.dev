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
  h1 {
    margin-bottom: 0;
  }

  p {
    padding: 1em;
    margin: 0;
  }
</style>

<h1>{basics.name}</h1>
<h2>{basics.label}</h2>
<SectionTitle>Summary</SectionTitle>
<Row>
  <Col>
    <p>
      Expert software engineer who writes easy to maintain code. Can adapt or
      pivot quickly to any new tech stack. Loves serving and developing a team.
    </p>
  </Col>
</Row>
