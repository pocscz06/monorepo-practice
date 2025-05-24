# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

## My process

I start with a mobile-first approach, as it inherently allows you to "start simple" and build complexity on top of it as needed for responsiveness.

So, I'll scan the provided mobile template a bit to get an idea of how to structure my HTML. I'll go from top-to-bottom in structuring my provided HTML, keeping in mind:

- Semantic HTML for accessibility
- BEM Methodology for class naming 
  - Recently, I've been thinking that while I like what BEM provides when done right in terms of readability and addressing the cascade, I often spend a lot of time deliberating on whether or not my class names follow the strict BEM conventions. I mean a _lot_ of time. Often times once I'm done, I'll look through and feel like my class names aren't great, they don't properly follow BEM convention, and thus aren't properly taking advantage of BEM's strengths, _and_ they take me a lot of time for little merit.
  - And so, I've been hearing about [CUBE CSS](https://cube.fyi/), which is a relatively newer class-naming methodology. It seems like people who had issues with certain aspects of BEM tend to like CUBE as an alternative. I intend on looking into this. I want to learn a class-naming methodology that doesn't constrain me too much to the point that I spend hours trying to figure out the best way to name my classes. A main point of these CSS methodologies is that they're supposed to be easily understood by someone who may or may not be practiced in that methodology. Thus, I don't think it important which particular one I follow.
  - Proper containers for ease of layout styling
  - Overall accessibility (ARIA) when semantic HTML is not an option for a certain design

Afterwards, I work through my stylesheet with the @layer directive. This time I've removed the 'component' layer I've had in previous stylesheets, as I'd end up having to "reuse" the same classes--separated by layout styling and component styling. I start with my "init" layer, where I handle my CSS reset + initialization of custom variables and variable fonts. I experimented with using the clamp() function for responsive typography and the :has() pseudo-class (almost kind of like a CSS conditional) to create a custom design for my radio inputs.

I'll save the responsiveness across different devices implementation for after I implement the necessary JS logic. My focus is on creating a fully-functional page on mobile first, and then concerning myself with responsiveness once I've ensured everything works. Speaking of responsiveness, I'll experiment with ensuring compatibility across different browsers as well. I recently found a plugin called [Autoprefixer](https://www.npmjs.com/package/autoprefixer) that parses your CSS and adds vendor prefixes as needed using values from [Can I Use](https://caniuse.com/). I'll spend some time reading up on vendor prefixes myself to get an idea of how developers may have needed to handle compatibility in the past. Perhaps it'll help if I ever need to maintain/read an older codebase's stylesheets.

In regards to the JS script, I want to emphasize "clean, maintainable, and scalable" code. To facilitate this, I focused on these things while writing my JavaScript:
    - Single function, single purpose
        - Each function should serve one purpose--otherwise it can lead to a bloated mess that's hard to read. Others (including myself in the future) should be able to just glimpse at the function name to get an idea of what it does.
    - JSDoc Comments
        - This is moreso just to familiarize myself with the practice of writing them and the different tags in JSDoc. I'm aware that **not every function should have comments**. They should only _require_ documented comments when the purpose of a function isn't clear at a glimpse.
    - Avoiding the declaration of global variables
        - I tend to do this a lot, so I'm trying to avoid it now as part of my efforts to practice clean, maintainable, and scalable code. To my knowledge, global vars can lead to difficulties with debugging as it can cause "scope pollution." With local scoping, it should be easier to identify an issue when one arises.
        - Also, I'm sure global variables can lead to memory issues since they exist for the duration of an application's lifetime. What memory issues exactly--I'm not too sure at the moment, but I will look into it.
    
Once everything is said and done, I complete my JS and responsive design implementations, I'll test to ensure everything works as intended (and is performant). 
    - I'll do a standard test to ensure basic functionality is working.
    - I'll test that everything works properly for keyboard-only users.
        - I'll _try_ to test with [NVDA](https://www.nvaccess.org/) to ensure my site is navigable without sight!!! Screen readers are notoriously difficult to use for those unfamiliar with them, so the best I can do is try.
    - I'll use [WAVE](https://wave.webaim.org/)--the web accessibility evaluation tool to check for any errors/alerts in terms of A11y/ARIA guidelines.
    - I'll also use Chrome DevTool's Lighthouse report to diagnose and fix any issues affecting performance, accessibility, and SEO. This is definitely "overkill" for the purposes of a small FEM project, but this is all just for familiarizing myself with the processes.


### What I learned

- Apparently, for certain input types, their font-family property needs to be overriden separately (from the body element), as they otherwise will follow the native browser's user agent stylesheet.

- The ARIA attribute, `aria-live` indicates a certain element will update. This tells the screenreader (for those using one) to expect an update and announce it to the user when the update occurs. A value of `polite` does so unintrusively. It waits for a "pause" before informing the user of the DOM update.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [CUBE CSS](https://cube.fyi/)
- [Autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [Can I Use](https://caniuse.com/)
- [NVDA](https://www.nvaccess.org/)
- [WAVE](https://wave.webaim.org/)

## Author

- Kenny Pham

