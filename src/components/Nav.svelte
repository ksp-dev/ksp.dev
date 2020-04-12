<script>
  export let segment;
  import ProfilePhoto from "./ProfilePhoto.svelte";
  import ContactInformation from "./ContactInformation.svelte";
</script>

<style>
  nav {
    flex-direction: column;
    display: flex;
    padding: 1rem;
    max-width: 100vw;
  }

  @media (min-width: 576px) {
    nav {
      max-width: 350px;
    }
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
</style>

<nav>
  <ProfilePhoto />
  <ContactInformation />
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href="/">
        home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        blog
      </a>
    </li>
  </ul>
</nav>
