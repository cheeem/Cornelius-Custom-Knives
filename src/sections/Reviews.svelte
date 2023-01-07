<script>

  //import images
  import img_profile1 from '../img/profile1.png';
  import img_profile2 from '../img/profile2.png';
  import img_profile3 from '../img/profile3.png';
  import img_knife11 from '../img/knife11.jpg';
  import img_knife14 from '../img/knife14.jpg';
  import img_knife15 from '../img/knife15.jpg';

  //import utilities
  import { viewport } from "../utils/viewport";

  //get the set active function
  export let setActive;

  const reviews = [
    {
      name: 'Sara Lund',
      pfp: img_profile1,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      src: img_knife11,
      viewed: false,
    },
    {
      name: 'Justin Trosper',
      pfp: img_profile2,
      body: 'Nibh cras pulvinar mattis nunc sed blandit libero. Cursus mattis molestie a iaculis at erat. At in tellus integer feugiat scelerisque varius morbi enim nunc.',
      src: img_knife14,
      viewed: false,
    },
    {
      name: 'Vern Rumsey',
      pfp: img_profile3,
      body: 'Arcu odio ut sem nulla. Dignissim suspendisse in est ante in nibh mauris cursus. Et molestie ac feugiat sed lectus vestibulum. Arcu cursus vitae congue mauris. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.',
      src: img_knife15,
      viewed: false,
    },
  ];

</script>

<div id="reviews" class="section"
  use:viewport
  on:enterViewport={() => setActive(2)}
>

  <h1 class={`heading`}> 
    REVIEWS
    <h1 class="watermark"> REVIEWS </h1>
  </h1>

  <ul>
    {#each reviews as { pfp, name, body, src, viewed }}
      <li class={viewed && "viewed"}
        use:viewport
        on:enterViewport={() => viewed = true}
      >
        <div class="pfp">
          <div> </div>
          <div style={`
            background-image: url(${pfp});
          `}> </div>
        </div>
        <div class="content">
          <h3> {name} </h3>
          <p> {body} </p>
        </div>
        <div class="knife" style={`
          background-image: url(${src});
        `}></div>
      </li>
    {/each}
  </ul>

</div>

<style>

  :root {
    --watermark-size: 25vw;
    --pfp-size: 5em;
    --pfp-border-size: 0.2;
    --review-border-radius: 2em;
    --content-padding-x: 4em;
    --knife-border-radius: 0 var(--review-border-radius) var(--review-border-radius) 0;
  }

  #reviews {
    display: flex;
    flex-direction: column;
    gap: 10rem;
    padding: 13.5rem 7.5rem;
  }

  .heading {
    position: relative;

    width: fit-content;

    font-size: calc(var(--watermark-size) / 4.5);
  }

  .heading::before {
    z-index: 1;

    position: absolute;
    top: 0;
    left: 0.01em;

    width: 15%;
    height: 0.07em;

    background-color: var(--highlight);

    content: "";

    border-radius: 2em 0 0 2em;

    transition: 0.5s ease-in-out;

    translate: -0.01em 0;
  }

  .heading::after {
    position: absolute;
    top: 0;
    left: 0.01em;

    width: 45%;
    height: 0.07em;

    background-color: var(--darkgrey);

    content: "";

    border-radius: 2em;
  }

  .heading h1 {
    z-index: -1;

    position: absolute;
    
    top: calc(-1 * var(--watermark-size) / 2 + var(--watermark-size) / 19);
    left: calc(-1 * var(--watermark-size) / 2 - 5.5rem);

    height: 100%;

    font-size: var(--watermark-size);
    color: var(--lightgrey);

    opacity: 0.2;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 4em;
  }

  li { 
    z-index: -1;    

    position: relative;

    flex: 1 1 0px;
    display: flex;

    min-width: 0;

    background-color: var(--white);

    border-radius: var(--review-border-radius);
    box-shadow: 0 0 0.5em var(--darkgrey-03);

    translate: 0 1em;

    opacity: 0;
    
    transition:
      translate 1.5s ease-out,
      opacity 1.5s ease-in-out;
  }

  ul .viewed {
    translate: 0;

    opacity: 1;
  }

  .pfp, .pfp div:last-of-type {
    position: absolute;

    border-radius: 50%;
  }

  .pfp {
    top: calc(var(--pfp-size) / -2);
    left: var(--content-padding-x);

    width: var(--pfp-size);
    height: var(--pfp-size);

    background: var(--white);

    box-shadow: inset 0 0 0.5em var(--darkgrey-03);
  }

  .pfp div:first-of-type {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 50%;

    background: var(--white);

    border-radius: 50% 50% 0 0;
  }

  .pfp div:first-of-type::before, .pfp div:first-of-type::after {
    position: absolute;

    width: 0.5em;
    height: 0.5em;

    content: "";
  } 

  .pfp div:first-of-type::before {
    bottom: 0;
    left: 0;

    background: linear-gradient(to bottom left, transparent 60%, hsl(0, 0%, 9%, 0.15));

    border-radius: 0 50% 0 0;
  }

  .pfp div:first-of-type::after {
    bottom: 0em;
    right: 0;

    background: linear-gradient(to bottom right, transparent 60%, hsl(0, 0%, 9%, 0.15));

    border-radius: 50% 0 0 0;
  }

  .pfp div:last-of-type {
    top: calc(var(--pfp-border-size) * 50%);
    left: calc(var(--pfp-border-size) * 50%);

    width: calc(100% * (1 - var(--pfp-border-size)));
    height: calc(100% * (1 - var(--pfp-border-size)));

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    box-shadow: 0 0 0.3em var(--darkgrey-03);
  }

  .content {
    flex: 3;

    display: flex;
    flex-direction: column;
    gap: 1.0em;

    padding: 4em var(--content-padding-x) 3em var(--content-padding-x);
  }

  h3 {
    font-size: 2em;
  }

  p {
    font-size: 1.2em;
  }

  .knife {
    position: relative;

    flex: 8;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    border-radius: var(--knife-border-radius);
  }

  .knife::after {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: "";

    /* background: linear-gradient(to right, white 1%, transparent, transparent); */

    border-radius: var(--knife-border-radius);
  }

</style>