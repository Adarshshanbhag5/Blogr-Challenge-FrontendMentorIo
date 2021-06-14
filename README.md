# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Live Site URL: [https://adarshshanbhag5.github.io/Blogr-Challenge-FrontendMentorIo/](https://adarshshanbhag5.github.io/Blogr-Challenge-FrontendMentorIo/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- Only Plain Vanilla Javascript (for logic)

### What I learned

Concepts that I learned, see below:

```html
<div class="nav-ul flex">
  <ul class="nav-main-ul flex">
    <div class="nav--dropdown-tab">
      <div class="dropdown-name">Products</div>
      <ul class="nav--inside-ul">
        <li><a href="#">Overview</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Marketplace</a></li>
        <li><a href="#">Integrations</a></li>
      </ul>
    </div>
    <div class="nav--dropdown-tab">
      <div class="dropdown-name">Company</div>
      <ul class="nav--inside-ul">
        <li><a href="#">About</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div class="nav--dropdown-tab">
      <div class="dropdown-name">Connect</div>
      <ul class="nav--inside-ul">
        <li><a href="#">Contact</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>
  </ul>
  <div class="auth-section flex">
    <div class="login btn">Login</div>
    <div class="sign-up btn">Sign Up</div>
  </div>
</div>
```

```css
header {
  width: 100vw;
  height: 500px;
  background-size: cover;
  border-bottom-left-radius: 100px;
  background: linear-gradient(
    to right,
    var(--very-light-red),
    var(--light-red)
  );
  color: var(--white);
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 1;
}
```

```js
const proudOfThisFunc = () => {
  console.log("no special logic here you can find :)");
};
```

### Continued development

I want to focus in css dropdown menus and its working in mobile and desktop in javascript

## Author

- Frontend Mentor - [Adarshshanbhag5](https://www.frontendmentor.io/profile/yourusername)
- Instagram - [adarshshanbhag5@gmail.com](https://www.instagram.com/adarshshanbhag5)
