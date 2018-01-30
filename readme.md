# React Router Notes

In this talk we're go over what React.js is and show off a simple project made with it.

To get started please download the zip or clone [https://github.com/IAPark/react-router-notes](https://github.com/IAPark/react-router-notes).

## Install

* Unzip the file and cd into it
* Run `npm install`
    * This will install all the libraries we'll be using

## My first react app

* Open `src/app.jsx`
* You should see 
```javascript
import * as React from "react";
import * as ReactDom from "react-dom";

ReactDom.render(
    <div>Hello World</div>,
document.getElementById("app"))
```
* This will tell react to mount itself to an element with the id `app` and render a `div` with `hello world` inside.
* To add some actual programming let's make our own component
* Let's say we really want an HTML tag to render our very special subtitled image
```javascript
function BetterImage(props) {
    return  <div>
                <img src={props.src} alt={props.title}/>
                <div>{props.title}</div>
            </div>
}
```
* We can use it it in the render function now like
```javascript
ReactDom.render(
    <BetterImage src="http://via.placeholder.com/350x150" title="placeholder"/>,
document.getElementById("app"))
```
* For some people this might be enough to see how React could be useful all on it's own, acting as "just" a templating library
* We can do a lot more, actually store changes and react to them
* Let's make a custom input which will auto format as a phone number
```javascript
class PhoneInput extends React.Component {
    constructor(props) {
        super(props);
        // our initial state for this component
        this.state = {value: ""};
    }

    onValueChange(v) {
        //330-474-9653
        let numbers = v.split('')
            .filter(c => !isNaN(c))
        if (v.length > 3) {
            numbers.splice(3, 0, '-');
        }
        if (v.length > 7) {
            numbers.splice(7, 0, '-');
        }
        // the state can only be changed by calling this function, it won't re-render otherwise
        this.setState({value: numbers.join('')});
    }

    render() {
        return <input value={this.state.value} onChange={e => this.onValueChange(e.target.value)}/>
    }
}
```
## More than one page

* This works if you just need to show stuff on one page, but what if you want to have multiple "pages" of content without the user ever needing to reload
* [React Router](https://github.com/ReactTraining/react-router)
* The idea here is to conditionally show only part of the page depending on what URL you're actually at
* To get this to work with a normal URL you need your web server to send all the requests to the same page

