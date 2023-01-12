<script>

  //import svgs
  import svg_email from '../svg/Envelope.svg';
  import svg_phone from '../svg/Phone.svg';
  import svg_facebook from '../svg/Facebook.svg';
  import svg_instragram from '../svg/Instagram.svg';
  import svg_twitter from '../svg/Twitter.svg';
  import svg_linkedin from '../svg/Linkedin.svg';
  
  //import utilities
  import { viewport } from '../utils/viewport.js';

  //get the set active function
  export let setActive;

  //define socials
  const socials = [
    {
      label: 'Email',
      src: svg_email,
      href: 'mailto:wernerjt@rfhstudent.org',
    },
    {
      label: 'Phone Number',
      src: svg_phone,
      href: 'tel:2025554502',
    },
    {
      label: 'Facebook',
      src: svg_facebook,
      href: '',
    },
    {
      label: 'Instagram',
      src: svg_instragram,
      href: '',
    },
    {
      label: 'Twitter',
      src: svg_twitter,
      href: '',
    },
    {
      label: 'LinkedIn',
      src: svg_linkedin,
      href: '',
    },
  ];

</script>

<div id="contact" class="section"
  use:viewport
  on:enterViewport={() => setActive(3)}
  on:exitViewport={() => setActive(2)}
>

  <div class="contact">

    <h1> Let's <span> Get In Touch </span> </h1>

    <div class="contact-body">

      <div class="socials">
        {#each socials as { src, href, copy, }}
          {#if href}
            <a {href}>
              <img {src} alt="" />
            </a>
          {:else}
            <div
              on:click={() => navigator.clipboard.writeText(copy)}
              on:keydown={() => navigator.clipboard.writeText(copy)}
            > 
              <img {src} alt="" />
            </div>
          {/if}
        {/each}
      </div>

      <form on:submit={e => e.preventDefault()}>
        <div class="field"> 
          <label for="name">Name</label>
          <input required type="text" id="name" name="name" placeholder=" " pattern={`.{1,}`}>
          <p> Please Input a Valid Name </p>
        </div>
        <div class="field"> 
          <label for="email">Email</label>
          <input required type="email" id="email" name="email" placeholder=" ">
          <p> Please Input a Valid Email Address </p>
        </div>
        <div class="field"> 
          <label for="body">Message</label>
          <textarea required id="body" name="body" rows="8"></textarea>
          <p> Please Input a Valid Message </p>
        </div>
        <input id="submit" type="submit" value="Send Message">
      </form>

    </div>
  </div>

  <div class="about-me">

  </div>
    
</div>

<style>

  #contact {
    display: flex;
    justify-content: space-between;

    font-size: max(calc(0.1rem + 0.6vw), calc(0.35rem + 0.35vw), calc(1vw - 0.5rem));

    padding: var(--nav-height) var(--page-padding) 0 var(--page-padding);
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 3em;

    margin-bottom: 3em;
  }

  h1 {
    font-size: 3.5em;
  }

  span::before {
    bottom: 12%;
  }

  .contact-body {
    display: flex;
    gap: 3em;
  }

  .socials {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    padding: 0.75em;

    background-color: var(--darkgrey);
  }

  .socials > * {
    display: grid;
    place-items: center;

    padding: 1em;

    background-color: var(--darkgrey);

    border-radius: 50%;
    outline: none;

    cursor: pointer;

    transition: background-color 0.3s ease;
  }

  .socials > * img {  
    width: 3em;

    filter: var(--filter-white);
  }

  .socials > *:hover, .socials > *:focus {
    background-color: var(--highlight);
  }

  form {
    display: grid;
    gap: 1.5em;

    width: 30em;
  }

  .field {
    --input-color: var(--highlight);

    display: grid;
    gap: 0.5em;
  }

  label {
    display: block;

    font-size: 1.4em;
    font-weight: 600;
  }

  input, textarea, #submit {
    width: 100%;

    padding: 1em;

    font-size: 1.25em;
    font-weight: 500;

    border: 0.15em solid var(--darkgrey);
    border-radius: 0.6em;
    outline-color: var(--darkgrey);
    outline-width: 0.01em;

    transition: box-shadow 0.3s, outline-color 0.3s;

    resize: none;
  }

  input:focus-visible, textarea:focus-visible {
    outline-style: solid;
  }

  input:not(input:placeholder-shown), form:valid #submit {
    border-color: var(--input-color);
    outline-color: var(--input-color);
  }

  #submit {
    padding: 1em 1.75em;

    width: fit-content;

    font-size: 1.4em;
    font-weight: 600;

    background-color: transparent;

    color: var(--darkgrey-03);

    border: 0.107em solid var(--darkgrey-03);

    cursor: not-allowed;

    transition: 0.3s;
  }

  .field p {
    font-weight: 600;
    color: var(--invalid);

    opacity: 0;

    transition: 0.3s;
  }

  .field:has(:invalid:not(input:placeholder-shown, input:focus, textarea)) p {
    opacity: 1;
  }

  .field:has(:invalid) {
    --input-color: var(--invalid);
  }

  .field:has(:focus) {
    --input-color: var(--darkgrey-03);
  }

  .field:has(:valid) {
    --input-color: var(--valid);
  }

  form:valid #submit {
    background-color: var(--valid-02);

    color: var(--darkgrey);

    border-color: var(--valid);

    cursor: pointer;
  }

</style>