---
author: Kameron Tanseli
date: '2019-12-24T13:56:26.370Z'
hero_image: /static/js-cover.png
title: 'The rules of reusable components'
byline: "I spend a lot of my time developing new reusable UI components."
---

I spend a lot of my time developing new reusable UI components.

This means during development I tend to extract UI components that are placed in a shared library or styleguide. These components are reused throughout the entire project. Often having different styles or layouts when integrated into features.

Along the way I learnt a few rules that helped me save time and pain.

## 1. Keep the layout fluid

I can’t count the amount of times a component has had a fixed width and that has affected a responsive design. Meaning I have to go in and fiddle with the existing props that was set up in place for another feature somewhere in the site. Not good.

By keeping the component 100% width you pass the layout responsibility up to the parent component.

For example it’s a lot easier to use `CardOne` over `CardTwo`. As `CardOne` will respond to the parent's column changes when the screen size changes.

```javascript
const CardOne = ({ title }) => (
  <div style={{ 
    padding: "20px 30px", 
    background: "white" 
  }}>{title}</div>
);

const CardTwo = ({ title }) => (
  <div style={{ 
    width: 600, 
    padding: "10px",
    background: "white" 
  }}>
    {title}
  </div>
);

const App = () => (
  <div className="row">
    <div className="col-md-6">
      <CardOne title="I'm Fluid" />
    </div>
    <div className="col-md-6">
      <CardTwo title="I will break this layout" />
    </div>
  </div>
);
```

## 2. Allow extra props to be passed

Turns out that your Button component needs a specific data attribute to work with the library you’re using for one of the specific features. Too bad that the `Button` component only allows `className`, `children` and `onClick`.

How can we fix this?

[Modern ES6 JavaScript allows you to spread function parameters and objects.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) This can be used to feed props to components.

```javascript
// Before -> <button className="button">Click me</button>

const Button = ({ children, className, onClick }) => (
  <button 
    onClick={onClick} 
    className={`${styles.button} ${className || ""}`}>
    {children}
  </button>
);

// After -> <button className="button" data-theme="dark">Click me</button>

const Button = ({ className, ...props }) => (
  <button 
    className={`${styles.button} ${className || ""}`} 
    {...props} />
);

// Example

const App = ({ onActivate }) => (
  <SpecificFeature>
    <Button data-theme="dark" onClick={onActivate}>
      Click me
    </Button>
  </SpecificFeature>
);
```

## 3. Push logic upwards / Keep it dumb

One of the top things that prevents reusability is when stateful logic specific to a feature is implemented within a reusable component.

Imagine you have a `Dropdown` component. That you have used in your navigation when a link is clicked.

```javascript
const DropdownItem = ({ className, ...props }) => (
  <li className={`dropdown-item ${className || ""}`} {...props} />
);

class Dropdown extends React.Component {
  state = { toggled: false };
  toggle = () => this.setState(state => ({ toggled: !state.toggled }));
  render() {
    return (
      <div className="navbar-link">
        <span onClick={this.toggle}> {this.props.title} </span>
        {this.state.toggled && (
          <ul className="dropdown"> {this.props.children} </ul>
        )}
      </div>
    );
  }
}

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-brand">Example</div>
    <ul className="navbar-menu">
      <Dropdown title="My Account">
        <DropdownItem>One</DropdownItem>
        <DropdownItem>Two</DropdownItem>
      </Dropdown>
    </ul>
  </div>
);
```

The problem above is:

1. `Dropdown` handles the logic for opening and closing the dropdown. Making it a lot harder to reuse `Dropdown` for more complicated scenarios (e.g: only open the dropdown when a request is successful).

2. `Dropdown` has markup that relates to the `Navbar` component.

If we refactor the `Dropdown` component to push the logic up. We end up with a much more reusable `Dropdown` component.

```javascript
const DropdownItem = ({ className, ...props }) => (
  <li className={`dropdown-item ${className || ""}`} {...props} />
);

const Dropdown = ({ className, ...props }) => (
  <ul className={`dropdown ${className || ""}`} {...props} />
);

class Navbar extends React.Component {
  state = { showUserOptions: false };
  
  toggleOptions = () => {
    this.setState(state => ({
      showUserOptions: !state.showUserOptions
    }));
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">Example</div>
        <ul className="navbar-menu">
          <div className="navbar-link">
            <span onClick={this.toggleOptions}>My Account</span>
            {this.state.showUserOptions && (
              <Dropdown>
                <DropdownItem>One</DropdownItem>
                <DropdownItem>Two</DropdownItem>
              </Dropdown>
            )}
          </div>
        </ul>
      </div>
    );
  }
}
```

## Summary
* Keep the component layout fluid.
* Allows extra props to be passed into the component.
* Keep logic out of them as much as possible.