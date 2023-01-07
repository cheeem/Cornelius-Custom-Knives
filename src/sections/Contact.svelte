<script>

  //import svgs
  
  //import utilities
  import { viewport } from '../utils/viewport.js';

  //get the set active function
  export let setActive;

  //define contacts
  const contacts = [
    {
      label: '',
      link: '',
    },
  ]

  //define socials
  const socials = [
    {
      src: '',
      link: '',
    },
  ];

</script>

<div id="contact" class="section"
  use:viewport
  on:enterViewport={() => setActive(3)}
>  

  <form on:submit={e => console.log(e)}>
    <h1> Let's Get in Touch </h1>
    <div class="body">
      <div class="field"> 
        <label for="name">First name</label>
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
        <textarea required id="body" name="body" rows="5"></textarea>
        <p> Please Input a Valid Message </p>
      </div>
      <input id="submit" type="submit" value="Send Message" on:submit={e => {
        e.preventDefault();
        console.log(e);
      }}>
    </div>
  </form>

  <div class="contact-info">
    
  </div>
    
</div>

<style>

  :root {
    --valid: lightgreen;
    --invalid: red;
    --focus: var(--highlight);
  }

  #contact {
    display: flex;
    gap: 5em;

    font-size: 0.75em;

    padding-right: 0;
    padding-bottom: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2.5em;

    width: 30em;
  }

  h1 {
    font-size: 3.25em;
  }

  .body {
    position: relative;
    display: grid;
    gap: 1em;
  }

  .body:after {
    position: aboslute;
    top: 0;
    left: 0;

    width: 0.3em;
    height: 100%;

    background: linear-gradient(to bottom, var(--darkgrey) 60%, var(--highlight) 60%);

    border-radius: 5em;

    content: "";
  }

  .field {
    --input-color: var(--focus);

    display: grid;
    gap: 0.5em;
  }

  label {
    display: block;

    font-size: 1.25em;
    font-weight: 600;
  }

  input, textarea {
    width: 100%;

    padding: 1em;

    font-size: 1.25em;
    font-weight: 500;

    border-radius: 0.6em;
    border: 0.2em solid var(--darkgrey);

    transition: border-color 0.3s;

    resize: none;
  }
 
  input:focus-visible, textarea:focus-visible {
    outline-offset: 0.1em;
    outline-width: 0.3em;
  }

  input:not(input:placeholder-shown) {
    border-color: var(--input-color);
  }

  input:not(input:placeholder-shown):focus-visible {
    outline-color: var(--input-color);
  }

  #submit {
    width: fit-content;

    font-size: 1.2em;
    font-weight: 600;

    background-color: transparent;

    color: var(--darkgrey-03);

    border: none;
    box-shadow: 0 0 0.3em var(--darkgrey-01);

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
    --input-color: var(--focus);
  }

  .field:has(:valid) {
    --input-color: var(--valid);
  }

  form:valid #submit {
    background-color: var(--valid); /*change to lighter opacity */

    color: var(--darkgrey);

    cursor: pointer;
  }

  .contact-info {
    flex: 1;

    background-color: var(--highlight);
  }

</style>