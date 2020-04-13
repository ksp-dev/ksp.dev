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

<style>
  p {
    text-align: center;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <title>Kevin S. Perrine Development</title>
</svelte:head>

{#await fetchResume}
  <p>...waiting</p>
{:then resume}
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
{:catch error}
  {console.log(error)}
  <p>An error occurred!</p>
{/await}
