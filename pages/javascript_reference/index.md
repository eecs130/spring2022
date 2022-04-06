---
layout: two-column
title: JavaScript Cheatsheet
nav_order: 2
has_children: true
permalink: /javascript-reference/
show_outline: false
---

<style>
    .qa th:first-child {
        width: 40%;
    }
    .qa th:nth-child(2) {
        width: 60%;
    }
</style>

## Debugging

| Built-in Function| Example | Description |
|--|--|--|
| `console.log(some_data);`<br>`console.log(thing1, thing2, ...);` | `console.log("Hello world!");`<br>`console.log(a, b, c, d);` | Analogous to Python"s **print** function;<br>outputs to the Browser"s console |


## Working with the DOM
When you are updating the DOM, there are three things you need to specify in your program:

| Question | Approach |
|--|--|
| 1. What element(s) do you want to change? | Use one of the selector methods below |
| 2. What do you want to change about the element(s)? | If it's an attribute, specify which one (see below). If it's a style property, specify which one (see below). |
| 3. What do you want to change the element(s)' attribute / style property to? | Use the assignment operator (equal sign) to set the attribute / style property to a valid value. |

Some applications of these three considerations are shown below:
```js
// updating attributes
document.querySelector('#my-header').innerHTML = 'Hey there!';
document.querySelector('img').src = "https://media1.britannica.com/eb-media/22/65322-004-8FF21CDA.jpg";

// updating style properties
document.querySelector('.panel').style.background = 'hotpink';
document.querySelector('.panel').style.fontSize = '3.5em';
```

### 1. Selector methods 

| Method | Example | Notes |
|--|--|--|
| querySelector() | document.querySelector("#my_element")<br>document.querySelector("p")<br>document.querySelector(“.my-announcements") | This one can access a ***single*** element using ***any*** selector |
| querySelectorAll() | document.querySelectorAll("p") | This one can access a ***list*** of elements using ***any*** selector |
| getElementById() | document.getElementById("my_element") | analagous to querySelector("#my_id"); | 
| getElementsByTagName() | document.getElementsByTagName("div") | analagous to querySelectorAll("tagName"); | 
| getElementsByClassName() | document.getElementsByClassName("panel") | analagous to querySelectorAll(".className"); | 

### 2. HTML attributes

| Attribute | Example |
|--|--|
| className | document.querySelector("div").className = "panel"; |
| innerHTML | document.querySelector("div").innerHTML = "hi"; |
| src (for images) | document.getElementsByTagName("div") |
| href (for links) | document.getElementsByClassName(".panel") |

### 3. HTML element properties
HTML element properties also allow you to navigate through the DOM. A list of common properties and an example are shown below:

| Property | Definition |
|--|--|
| firstElementChild | The element's first element child. If no children then null. |
| lastElementChild | The element's next sibling element. If no children then null. |
| nextElementSibling | The element's next sibling element. If no previous sibling then null. |
| previousElementSibling | The element's previous sibling element. If no previous sibling then null. |
| parentElement | The element's parent. If no parent then null. |

#### HTML
```html
<section class="cards">
    <div class="card" style="background-image:url('images/field1.jpg')"></div>
    <div class="card" style="background-image:url('images/purple.jpg')"></div>
    <div class="card" style="background-image:url('images/jar.jpg')"></div>
</section>
```
#### JavaScript
```js
// EXAMPLE
const cards = document.querySelector('.cards');

// get first child of cards:
const firstChild = cards.firstElementChild;
console.log('first child:',firstChild);

// get last child of cards:
const lastChild = cards.lastElementChild;
console.log('last child:', lastChild);

// get first child's next sibling:
const nextSibling = firstChild.nextElementSibling;
console.log('first child\'s next sibling:', nextSibling);

// get last child's previous sibling:
const previousSibling = lastChild.previousElementSibling;
console.log('last child\'s previous sibling:', previousSibling);

// get last child's parent:
const parent = lastChild.parentElement;
console.log('last child\'s parent:', parent);
```


### 4. Style properties

| Property | Example |
|--|--|
| width | document.querySelector("div").style.width = "200px"; |
| height | document.querySelector("div").style.width = "200px"; |
| background-color | document.querySelector("div").style.backgroundColor = "hotpink"; |
| border-width | document.querySelector("div").style.borderWidth = "5px"; |
| padding | document.querySelector("div").style.padding = "10px"; |
| display | document.querySelector("div").style.display = "none"; |



## Data

| Type | Description | Example |
|--|--|--|
| number  | For numbers of any kind: integer or floating-point| 1.4, 33, 99999999 |
| string | For strings (text). A string may have one or more characters, there’s no separate single-character type | "hello world!" |
| boolean | for true/false. | true, false |
| null | for unknown values – has a single value null | null |
| undefined | for unassigned values – has a single value undefined | undefined |
| object | for more complex data structures.| { name: "ralph", species: "dog" } | 
| symbol | for unique identifiers (we won’t be using this one) | |
 

### 1. Figuring out the type of data you have

```js
console.log(typeof "hello world!");
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 23.4);
console.log(typeof 4500);
console.log(typeof [1, 3, 4, 6]);
console.log(typeof { name: "Lester", species: "dog", age: 15});
```

### 2. Functions that convert between data types

```js
// String(), Number(), Boolean()
console.log(123, typeof 123);
console.log(String(123), typeof String(123));
console.log("123", typeof "123");
console.log(Number("123"), typeof Number("123"));
console.log("true", typeof "true");
console.log(Boolean("true"), typeof Boolean("true"));
```

## Variables
* Variables are containers for storing and / or referencing data
* Variables can also be used to alias data, functions, variables, objects, functions, etc. 
* You assign values to variables using the assignment operator (equal sign)
* Variables are **case-sensitive**
* Variables should be "camel case" 

### 1. Sample Naming Conventions (Mnemonic & Camel Case)
```js
// variable names:
let timeLeftTilEndOfClass = 35;
let firstName = "Jazmin";
let lastName = "Morales";

//function names:
const divideTwoNums = (num, denom) => {
   return num / denom;
};
const moveAvatarLeft = (dog) => {
   dog.x -= 1;
   dog.redraw();
};
```

### 2. Declaring Variables
In JavaScript, there are three keywords for declaring variables: let, const, and var.

**`let`**
Means that the variable may be reassigned / can be changed.

**`const`**
Means that the variable won"t be reassigned. It’s "immutable." Used in cases where you declare and assign once, but don’t change it afterwards.

**`var`**
Avoid. Old way to do things prior to ES6.
“The weakest signal available” — “The variable may or may not be reassigned, and the variable may or may not be used for an entire function.”

## Operators

### 1. Arithmetic Operators

| Operator | Meaning | Description | 
|--|--|--|
| + | Addition | Adds values on either side of the operator | 
| - | Subtraction | Subtracts right hand operand from left hand operand | 
| * | Multiplication | Multiplies values on either side of the operator | 
| / | Division | Divides left hand operand by right hand operand | 
| ** | Exponent | Performs exponential (power) calculation on operators | 
| % | Modulus | Divides left hand operand by right hand operand; returns remainder | 
| ++ | Increment | Adds 1 to the number | 
| -- | Decrement | Subtracts 1 from the number |

### 2. Comparison Operators
Comparison operators always evaluate to `true` or `false` and are often used with if/else statements and loops.

| Operator | Meaning |
|--|--|
| == | Equality |
| === | Strict Equality (both values and data types match) |
| != | Not Equal |
| >, >= | Greater than; greater than or equal to |
| <, <= | Less than; Less than or equal to |

See <a href="https://www.w3schools.com/js/js_comparisons.asp" target="_blank">W3 Schools</a> for more information and examples.

### 3. Logical Operators

| Operator | Meaning | Explanation |
|--|--|
| && | and | If both operands are true, then the "and expression" also evaluates to true. Otherwise, the "and expression" evaluates to false. | 
| \|\| | or | If either or both of the operands are true, then the "or expression" also evaluates to true. Otherwise, the "or expression" evaluates to false.  |
| ! | not | if the operand is false, then the "not" of the operand is true (and vice versa). |

## Functions
* Functions are a way to encapsulate and re-use code
* With functions, you can perform the same operations over and over using different data
* JavaScript has many built-in functions
* You can also create your own functions

### 1. Syntax
```js
const nameOfFunction = (parameters) => {
    statement 1;
    statement 2;
    ...
    return someValue; //optional
};
```

#### Avoid Older Syntax
While you will see the syntax below in many web posts, avoid if possible (to maintain consistency with newer versions): 
```js
// Old JavaScript syntax (avoid)
function addTwoNums(num1, num2) {
   	return num1 + num2;
}

// Old JavaScript syntax (avoid)
var document.querySelector(‘button’).onclick = function(num1, num2) {
   	return num1 + num2;
};
```

### 2. Terminology

| Term | Definition |
|--|--|
| arguments | the data that you pass into a function |
| parameters | local variables, inside a function, that are assigned when the function is invoked |
| function definition | tells you which parameters are required and which are optional (if any) |
| function body | the statements that are executed when a function is invoked |
| return value | The data that is returned from a function (optional) |


## Events
When JavaScript is used in HTML pages, JavaScript can "react" to particular “events," which include (among others): 
* onchange
* onclick
* onmouseover
* onmouseout
* onkeydown
* onload

### 1. Making events work for you
Events are comprised of two parts:
1. **Event Listeners:** refer to the particular interaction / thing to which you want to listen.

2. **Event Handlers:** snippets of code that you want to execute when the event listener triggers the event.

For instance, if I want to attach a "click" ***event listener*** to the button with the id of "subscribe", I would assign the **onclick** event of that button to a function that I specify. Example:

#### HTML
```html
<button id="subscribe">Subscribe</button>
```
#### JavaScript
```js
// event handler:
const subscribe = () => {
   	alert('Perform subscribe functionality...');
};

// event listener:
document.querySelector('#subscribe').onclick = subscribe;
```

Therefore, to create an event-driven interaction, you need to tell your browser three things:

{:.qa}
| Question | Approach |
|--|--|
| 1. What element(s) do you want to attach an event to? | Use one of the selector methods (see the DOM section above). |
| 2. What is the event of interest? | See the list of events above. |
| 3. What functionality to you want to attach to the event? | For this, you will need to create your own event handler -- a function -- to respond to the event. Moreover, if you need your event handler to use data from the element that triggered the event, use the event object (see below). |

### 2. The "Event" object
When you attach an event handler (i.e function) to an event, an event object is passed to the event handler when it is triggered. This event object offers some useful information about the event that has just been fired, including:
1. **target:** The element that triggered the event (target)
2. **currentTarget:** The element whose event listeners triggered the event

You can learn more about the distinction between the target and the currentTarget <a href="https://medium.com/@florenceliang/javascript-event-delegation-and-event-target-vs-event-currenttarget-c9680c3a46d1" target="_blank">here</a>.

Note in the example below, `ev.currentTarget` is used to detect which button was clicked, in order to change the document background to the appropriate color:

```html
<button id="color1" type="button">teal</button>
<button id="color2" type="button">hotpink</button>
<button id="color3" type="button">yellow</button>
```

```js
// event handler:
const changeColor = (ev) => {
    console.log(ev);
   	const sourceElement = ev.currentTarget;
   	document.querySelector('body').style.background = sourceElement.innerHTML;
};

// event listener attach to all of the buttons:
document.querySelector('#color1').onclick = changeColor;
document.querySelector('#color2').onclick = changeColor;
document.querySelector('#color3').onclick = changeColor;
```


<!-- ## Conditional Statements (If / Else)
TBD

## Loops
TBD -->
