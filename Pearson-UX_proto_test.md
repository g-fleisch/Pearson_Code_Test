# Introduction

This evaluation contains four parts. All parts must be completed within one week of receipt. **No plugins or libraries** of any kind are allowed in the JavaScript tests. Libraries such as React and Angular are allowed in the prototypes, but **plugins** to achieve specific functionality **are not allowed**. All CSS should be written using a SASS pre-compiler. All code should be written in a consistent style, and in a production-ready quality that accounts for best-practices in organization and memory management. Leave comments in your work for teammates who will inherit your code later, and be prepared to discuss _why_ you made certain choices with your code!

Please deliver both the source code and deployed links for all parts of this evaluation. Whether your deliverable is in one GitHub repo or several is up to you. If you have any questions about these instructions, feel free to email Greg Davis: greg.davis@pearson.com.

## Part I: HTML

Create a semantic, accessible HTML page that consists of:

- A page header
- Text that explains the purpose of the page (dummy text is fine)
- A form
- A header in the form
- Inputs asking for a user's first name, last name, username and password
- A dropdown for the state the user lives in
- Submit and reset buttons

**Note:** You do not need to style this page!

## Part II - SASS

Create a SASS function or include that demonstrates use of iterator functuons. This should be something like a list, where each list item is unique and has its own color based on an array of colors stored in SASS. The actual content is not important.

## Part III: JavaScript

### `transformNums`

Write a `transformNums()` function that behaves as illustrated below. It should be as efficient as possible.

```js
const nums = [3, 1, 4, 5, 2];
const transformedNums = transformNums(nums);
console.log(transformedNums); // => [1,2,3,4,5,5,4,3,2,1,1,2,3,4,5]
```

### Make a list

Dynamically generate an unordered list of 100 items in the HTML page you just built. The list items should contain the string `EVEN` in even entries and `ODD` in odd entries. If the item is a multiple of 3, it should contain `3 MULTIPLE`. If the item is a multiple of 5, it should contain `5 MULTIPLE`. If it's divisible by both, the item should contain both phrases. For example, the number 15 would output `ODD 3 MULTIPLE 5 MULTIPLE`

## Part IV - Prototyping

Create prototypes of the following two screens, following the specific directions given for each one and producing the best prototype for each use case. Depending on what you think is the best use of resources for a given deliverable, you can prototype with code, or with prototyping software such as InVision. If you prototype in code, your code should be high-fidelity and match the provided designs as closely as possible.

**Note:** Don't spend too much time on exact pixel measurements; make your best guess.

### Train Wreck!

The below screen represents a prototype that will be used usability-tested to catch early UX problems with the design. You have been tasked with creating a basic implementation of the prototype for testing. The designers did not include everything that is important for testing: you should create error states for the inputs, as well as any other messaging which you think will be important to the user experience. Don't forget about form semantics and accessibility.

**Note:** The prototype _does not_ need to produce mathematically correct outputs; it just needs to show the interaction. The final algorithm will be supplied by the development team.

![](https://lh4.googleusercontent.com/1bLkGG_LExPJTIS_a4Kt9CmJYfsijH_v0F-DUZSyzkLpuy4V2_aoxu2mDeF1UnRQ98qmC3DQFgRuIVAlVRP6T6UQfkdBZxQRk1oXRIzFHUQ1m7Ni2WYAfFBjlFIrQ1ilqTox5oM6)

### Video Quiz

The [Video Quiz design PDF](https://drive.google.com/file/d/0BzV7YpKB7jpOaGp4Z1Y5YmFCX3d1NmFKZlJDQlB2aHoxX0NN/view) represents a finalized visual design that will be used for usability testing. The visual design is final and the production stack for the front end will include a SASS precompiler and React.js using JSX templating. The data will be coming from a back-end API that doesn’t exist yet, and the data will be served in JSON format.

You can use any front-end libraries you'd like to build this prototype, but keep in mind: Some users in the study will have physical disabilities such as low vision or complete blindness. Your prototype should be as accessible to these users as possible, without assistance or modification by the on-site facilitator.

## Bonus:
Debug [this XMLHTTPRequest](https://jsfiddle.net/f90htuq8/), save it when you're finished, and include the link to your fork in your deliverable.

**Note:** This is just a test of your debugging skills! You shouldn't worry about the accessibility of this code.
