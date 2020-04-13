<script>
  import ProfilePhoto from "./ProfilePhoto.svelte";
  import ContactInformation from "./ContactInformation.svelte";
</script>

<style>
  nav {
    flex-direction: column;
    display: flex;
    max-width: 100vw;
    transition: width 0.2s;
    will-change: width;
  }

  @media (min-width: 576px) {
    nav {
      max-width: 350px;
      position: fixed;
    }
  }
</style>

<nav>
  <ContactInformation />
</nav>
