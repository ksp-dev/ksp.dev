<script>
  import SectionTitle from "../components/SectionTitle.svelte";
  import Skill from "../components/Skill.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";
  import Interest from "../components/Interest.svelte";
  import Education from "../components/Education.svelte";
  import Reference from "../components/Reference.svelte";
  import { onMount } from "svelte";
  import fetch from "cross-fetch";
  import Row from "../components/Row.svelte";
  import Col from "../components/Col.svelte";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
  import ResumeBasics from "../components/ResumeBasics.svelte";
  import staticResume from "../data/resume.json";
  import ContactInformation from "../components/ContactInformation.svelte";
  import { index } from "../store.js";
  import { fade } from "svelte/transition";
  import { urls } from "../data/images.js";

  let currentIndex;
  const unsubscribe = index.subscribe(value => {
    currentIndex = value;
  });

  const fetchResume = (async () => {
    const response = await fetch(
      "https://api.github.com/gists/e2d526d3cd8dc0381b014cdbaef10a8a",
      {
        mode: "no-cors"
      }
    )
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }

        return staticResume;
      })
      .catch(error => {
        return staticResume;
      });

    if (response.files) {
      return JSON.parse(response.files["resume.json"].content);
    }

    return response;
  })();
</script>

<style lang="scss">
  $imageHeight: 50vh;
  p {
    text-align: center;
    margin: 0 auto;
  }

  .container {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem;
  }

  main {
    display: flex;
    flex: 1;
    flex-direction: column;

    @media (min-width: 576px) {
      margin: 0 45vw 0 0;
    }
  }

  figure {
    margin: 0 0 calc(#{$imageHeight} + 1em) 0;
    position: relative;
  }
  img {
    display: block;
    height: auto;
    width: 100%;
    height: $imageHeight;
    object-fit: cover;
    object-position: top;
    position: absolute;
  }

  aside {
    @media (min-width: 576px) {
      position: fixed;
      right: 0;
      top: 0;
      display: block;
      width: 45vw;
    }
  }
</style>

<svelte:head>
  <title>Kevin S. Perrine Development</title>
</svelte:head>

<div class="container">
  {#await fetchResume}
    <p>...waiting</p>
  {:then resume}
    <main>
      {#if resume.basics}
        <ResumeBasics basics={resume.basics} />
      {/if}

      {#if resume.skills}
        <SectionTitle>Skills</SectionTitle>
        <Row>
          {#each resume.skills as skill}
            <Col>
              <Skill data={skill} />
            </Col>
          {/each}
        </Row>
      {/if}

      {#if resume.work}
        <SectionTitle>Work Experience</SectionTitle>

        {#each resume.work as work}
          <Row>
            <Col>
              <WorkExperience {...work} />
            </Col>
          </Row>
        {/each}
      {/if}

      {#if resume.education}
        <SectionTitle>Education</SectionTitle>
        {#each resume.education as education}
          <Row>
            <Col>
              <Education {...education} />
            </Col>
          </Row>
        {/each}
      {/if}

      {#if resume.interests}
        <SectionTitle>Interests</SectionTitle>
        <Row>
          {#each resume.interests as interest}
            <Col>
              <Interest {...interest} />
            </Col>
          {/each}
        </Row>
      {/if}

      {#if resume.references}
        <SectionTitle>References</SectionTitle>
        {#each resume.references as reference}
          <Row>
            <Col>
              <Reference {...reference} />
            </Col>
          </Row>
        {/each}
      {/if}
    </main>
    <aside>
      <figure>
        {#each [urls[currentIndex]] as photo (currentIndex)}
          <img
            transition:fade={{ duration: 300 }}
            src={photo}
            alt="Kevin S. Perrine" />
        {/each}
      </figure>
      <ContactInformation basics={resume.basics} />
    </aside>
  {:catch error}
    {console.log(error)}
    <p>An error occurred!</p>
  {/await}
</div>
