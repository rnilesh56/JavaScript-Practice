// ^ BOM Browser Object Model
//* When we open the browser the browser itself is considered as an object the object is know as BOM.
//* The other name of BOM is window object.
//* BOM is used to interact with the browser.

//~ WINDOW - ['document', 'history', 'screen', 'navigator', 'location']

//^ DOM Documnet Object Model
//* When ever we execute HTML file in a browser the beowser convert HTML file to a tree like structure and the tree like structure is known as DOM.
//* In DOM tree every tag will be considered as NODE(Object) of the DOM tree.
//* The attributes of the tags will behave like properties of the object.
//* DOM is used to manpulate HTML through JAVASCRIPT by using DOM we can add or remove HTML tags and attributes, by using DOM we can create new tags and attributes, by using DOM we can add or remove CSS from HTML.

//! NOTES:
//~ Any dynamic functionality withn the HTML can be performed with the help of DOM.

//* Element section inside browser DEVTOOL represents DOM.
//* Whatever is available in DOM that will be reflected on UI.

//! DOCUMENT
//~ document : HTML Document
//~ document.head: Whatever in head tag will come <head>...</head>
//~ document.body: Body tag will come <body></body>
//~ document.script: HTMLCollection[Scripts]
//~ document.link: HTMLCollection[]
//~ document.title: 'document'

//? document.title = 'JavaScript' : title = JavaScript will reflect on UI.

//! DOM Methods to fetch element from HTML
//~ document.getElementById('idName')
//* document.getElementById is used to get the HTML element from the HTML document based on the given idName.
//* It accepts one argument of type string where the arg. is the idName.
//* It return an element if the given id is available.
//* It return only the first occured element
//* If the given idName is not available it returns null.

//? EXAMPLE:

// let demo = document.getElementById("demo");
// console.log(demo); //~ div#demo

// let test = document.getElementById("test");
// console.log(test); //~ null

//~ document.querySelector('selectorName')
//* document.querySelector is used to select the HTML element from HTML document based on the css selector.
//* It accepts one argument of type string where the arg. is selectorName
//* It return an element if the given selectorName is available
//* It return the first occured Element only.
//* If the given selectorName is not available it return null.

//? EXAMPLE:
// let demo = document.querySelector("#demo");
// console.log(demo); //~ div#demo

// let test = document.getElementById("#test");
// console.log(test); //~ null

// let demo = document.querySelector("div#demo");
// console.log(demo); //~ div#demo

//~ document.querySelectorAll('selectorName')
//* querySelectorAll is same as querySelector but it return all the element which is having the selectorName in the form of Nodelist
//* If no element is having the given selectorName then it return empty Nodelist

//? EXAMPLE:
// let demo = document.querySelectorAll("#demo");
// console.log(demo); //~ NodeList [div#demo]
// console.log(Array.isArray(demo)); //~ false
// console.log(demo[0]); //~ <div id="demo">Demo</div>

//~ document.getElementsByClassName('className')
//* getElementsByClassName is used to get all the element which is having same class name in HTMLCollection.
//* If no element is found it will return empty HTMLCollection

//? EXAMPLE:
// let demo = document.getElementsByClassName("lol");
// console.log(demo); //~ HTMLCollection(2) [div#demo.lol, div.lol, demo: div#demo.lol]
// console.log(Array.isArray(demo)); //~ false
// console.log(demo[0]); //~ div#demo.lol

//~ document.getElementByTagName('tagName')
//* getElementByTagName is used to get all the element which is having same tag name in form of HTMLCollection
//* If no element is found it will return empty HTMLCollection

// let demo = document.getElementsByTagName("div");
// console.log(demo); //~ HTMLCollection(2) [div#demo.lol, div.lol, demo: div#demo.lol]
// console.log(Array.isArray(demo)); //~ false
// console.log(demo[0]); //~ div#demo.lol
