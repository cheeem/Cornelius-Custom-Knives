<script>

  //import svgs
  import email from '../svg/Envelope.svg';
  import phone from '../svg/Phone.svg';
  import facebook from '../svg/Facebook.svg';
  import instragram from '../svg/Instagram.svg';
  import twitter from '../svg/Twitter.svg';
  import linkedin from '../svg/Linkedin.svg';
  
  //import utilities
  import { viewport } from '../utils/viewport.js';

  //get the set active function
  export let setActive;

  //define socials
  const socials = [
    {
      label: 'Email',
      src: email,
      href: 'mailto:wernerjt@rfhstudent.org',
    },
    {
      label: 'Phone Number',
      src: phone,
      href: 'tel:2025554502',
    },
    {
      label: 'Facebook',
      src: facebook,
      href: '',
    },
    {
      label: 'Instagram',
      src: instragram,
      href: '',
    },
    {
      label: 'Twitter',
      src: twitter,
      href: '',
    },
    {
      label: 'LinkedIn',
      src: linkedin,
      href: '',
    },
  ];

</script>

<div id="contact" class="section"
  use:viewport
  on:enterViewport={() => setActive(3)}
>  

  <div class="about-me"> 

  </div>

  <div class="contact">

    <h1> Let's <span> Get In Touch </span> </h1>

    <div class="contact-body">

      <div class="socials">
        {#each socials as { src, href, copy }}
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

      <form on:submit={e => {
        e.preventDefault();
        console.log(e);
      }}>
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
    
</div>

<style>

  #contact {
    display: flex;
    justify-content: space-between;

    font-size: 0.75vw;

    padding: 1.5em var(--page-padding) 1.5em var(--page-padding);
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 3em;
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

  input, textarea {
    width: 100%;

    padding: 1em;

    font-size: 1.25em;
    font-weight: 500;

    border: none;
    border-radius: 0.6em;
    outline-color: var(--lightgrey);
    box-shadow: 0 0 0.3em var(--darkgrey-01);

    transition: box-shadow 0.3s, outline-color 0.3s;

    resize: none;
  }
 
  input:focus-visible, textarea:focus-visible {
    outline-offset: 0.1em;
    outline-width: 0.3em;
  }

  input:not(input:placeholder-shown) {
    box-shadow: 0 0 0.3em var(--input-color);
  }

  input:not(input:placeholder-shown):focus-visible {
    outline-color: var(--input-color);
  }

  #submit {
    padding: 1em 1.75em;

    width: fit-content;

    font-size: 1.2em;
    font-weight: 600;

    background-color: transparent;

    color: var(--darkgrey-03);

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
    --input-color: var(--darkgrey-01);
  }

  .field:has(:valid) {
    --input-color: var(--valid);
  }

  form:valid #submit {
    color: var(--darkgrey);

    box-shadow: 0 0 0.3em var(--valid);

    background-color: var(--valid-01);

    cursor: pointer;
  }

</style>