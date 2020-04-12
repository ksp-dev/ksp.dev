<style>
  a {
    display: block;
    transform: rotate(-45deg);
    overflow: hidden;
    position: relative;
    width: 60vw;
    height: 60vw;
    margin: 16vw;
  }

  a:after {
    position: absolute;
    content: " ";
    background: center url(https://placehold.it/500x500) no-repeat;
    background-size: cover;
    left: -8vw;
    top: 4vw;
    height: 120vw;
    width: 120vw;
    margin: -16vw;
    transform: rotate(45deg);
  }

  @media (min-width: 576px) {
    a {
      max-width: 350px;
      height: 350px;
      width: 350px;
      margin: 75px;
    }

    a:after {
      position: absolute;
      content: " ";
      background: center url(https://placehold.it/500x500) no-repeat;
      background-size: cover;
      left: 0;
      top: 0;
      max-width: 500px;
      height: 500px;
      width: 500px;
      margin: -75px;
      transform: rotate(45deg);
    }
  }
</style>

<a href="/">
  <!-- <img src="https://placehold.it/400x400" alt="Kevin S. Perrine Development" /> -->
</a>
