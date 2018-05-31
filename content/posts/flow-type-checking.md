For the past 3 months I have been adding more Flow type checking to a codebase.

Lots of trial and error went into integrating Flow into the existing legacy code and new code. So I will share what I have learnt with you:

## Declare types above the component

So you have a React.Component and you want to add types to it right? You might be inclined to just add them inline when declaring the component like so:

```typescript
class Greeting extends React.Component<{ name: string }, void> {
  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}
```

What a joy! You have types for your props, everything is wonderful in the world until… you need to add some logic to the `constructor`:

```typescript
class Greeting extends React.Component<{ name: string }, void> {
  constructor(props: { name: string }) {
    super(props);
    // some initialisation stuff
  }
  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}
```

Now you have added two declarations of the props for this component. The best way to declare types is to extract it into its own type declaration:

```typescript
type GreetingProps = { name: string };

class Greeting extends React.Component<GreetingProps, void> {
  constructor(props: GreetingProps) {
    super(props);
    // some initialisation stuff
  }
  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}
```

The same logic goes for stateless components which take a large number of props like so:

```typescript
const ToolbarFilter = ({
  active,
  pending,
  upcoming,
  cancelled,
  recentlyEdited
}: {
  active: boolean;
  pending: boolean;
  upcoming: boolean;
  cancelled: boolean;
  recentlyEdited: boolean;
}) => <div> {/* Some checkboxes here */} </div>;
```

There is nothing wrong with this approach but it is a lot cleaner to extract it out as well as offering reuse for any parent component above it:

```typescript
// this can be used else where
type ToolbarFilters = {
  active: boolean;
  pending: boolean;
  upcoming: boolean;
  cancelled: boolean;
  recentlyEdited: boolean;
};

// needed in case of any new props to be added
type ToolbarFilterProps = ToolbarFilters;

const ToolbarFilter = ({
  active,
  pending,
  upcoming,
  cancelled,
  recentlyEdited
}: ToolbarFilterProps) => <div> {/* Some checkboxes here */} </div>;
```

## Extending types

Like the above example imagine you have a type called `ToolbarFilters` and it contains all the available options for filtering some data.

Now your component ToolbarFilter uses the `ToolbarFilters` type in its props. How do we use it? Copy and paste? No. We use `&` to reuse the type:

```typescript
// this can be used else where
type ToolbarFilters = {
  active: boolean,
  pending: boolean,
  upcoming: boolean,
  cancelled: boolean,
  recentlyEdited: boolean
};
// see how we added the new onFilterChange
type ToolbarFilterProps = ToolbarFilters & {
  onFilterChange: ($Keys<ToolbarFilters>, boolean) => void
};
const ToolbarFilter = ({
  active,
  pending,
  upcoming,
  cancelled,
  recentlyEdited,
  onFilterChange
}: ToolbarFilterProps) => <div> {/* Some checkboxes here */} </div>;
```

## Use React.Element to avoid the issue of not returning a Component

We have all been there, where we have written a stateless component and just forgotten to return the JSX:

```typescript
const hello = ({ name }: { name: string })=> {
 const fullName: string = name.split("_").join(" ");
 (<div>Hello {fullName}<div>);
}
```

Then we get the lovely React error to follow it:

```markup
A valid React element (or null) must be returned.
You may have returned undefined, an array or some
other invalid object.
```

Not so good. But we can catch this before it ever reaches our browser by using `React.Element`:

```typescript
import * as React from 'react';
// this imports all Flow types into the React namespace
const hello = ({ name }: { name: string }): React.Element<'div'> => {
 const fullName: string = name.split("_").join(" ");
 (<div>Hello {fullName}<div>);
}
```

Now in this example we get this error:

```markup
10: }): React.Element<"div"> => {
         ^^^^^^^^^^^^^^^^^^^^ undefined. Inexact type is incompatible with exact type
 10: }): React.Element<"div"> => {
         ^^^^^^^^^^^^^^^^^^^^ exact type: object type
Found 1 error
```

There are a lots of other [React Flow types](https://flow.org/en/docs/react/) that can be used to add more coverage over a component.

## Make use of the utility types such as $Keys

We’re all in a rush sometimes. So why not learn something that would speed up adding types to our Component. Say we have a component which takes a `type` prop and returns a component based off that type:

```typescript
const Greeting = ({ type }: { type: string }): React.Element<"h2"> => {
  switch (type) {
    case "welcome":
      return <h2> Welcome! </h2>;
    default:
      return <h2> Hello </h2>;
  }
};
```

We would only want this type to ideally be restricted to the choices `hello` or `welcome`. That is where `$Keys` comes in. It scans an Object literal and uses it’s keys as a string union.

So an object like this: `{a: 2, b: 3}` is turned into `’a’ | ‘b'`.

We can add this type check and refactor:

```typescript
const greetingComponents = {
  welcome: () => <h2> Welcome! </h2>,
  hello: () => <h2> Hello </h2>
};
type GreetingProps = {
  type: $Keys<typeof greetingComponents>;
};
const Greeting = ({ type }: GreetingProps): React.Element<"h2"> =>
  greetingComponents[type]();
```

If we tried to use the key `bye` for example it will throw the rather nice error:

```markup
15: <Greeting type='bye' />
                     ^ property `bye`. Property not found in
7:  type: $Keys<typeof greetingComponents>
          ^ object literal
```

Flow offers a bunch of really useful utility types that you can read about [here](https://flow.org/en/docs/types/utilities/#toc-keys).

## Move all reused types to a separate file

You may notice as you build out your React app that a certain type is used in multiple places. You may decide to just import the type from that one component: `import type {State} from ‘../some/component’` .

But this will slowly get out of hand.

My suggestion is to create a `types.js` file in the root of your app to keep reference .

This file should contain:

* Only app wide shared types (if its feature wide then create another types.js inside that feature folder).
* Redux types like the InitialState for reducers etc.
* Only flow types.

## If you want an object to be immutable then you can type check it

You really don’t want some component messing around with your state. So why not protect against it by declaring that object as immutable:

```typescript
type AppConfig = {
 +apiKey: string // the '+' makes it immutable in Flow
};
const Settings: AppConfig = {
 apiKey: 'rihfwefiweufweiufgewfugew84r34t3'
};
// later on....
Settings.apiKey = 'fiohwefoihefoihfoeihfewifhwfihefhwoef';
```

Flow helps protect against the change by throwing this error:

```markup
11: Settings.apiKey = 'fiohwefoihefoihfoeihfewifhwfihefhwoef';
    ^ object type. Covariant property `apiKey` incompatible with contravariant use in
11: Settings.apiKey = 'fiohwefoihefoihfoeihfewifhwfihefhwoef';
    ^ assignment of property `apiKey`
```

## Read the documentation & find references
I can’t stress this enough how detailed the Flow docs are at explaining things. The most useful links I have found are as follows:

1. [Components | Flow](https://flow.org/en/docs/react/components/)
2. [Redux | Flow](https://flow.org/en/docs/react/redux/)
3. [Children | Flow](https://flow.org/en/docs/react/children/)
4. [Type Refinements | Flow](https://flow.org/en/docs/lang/refinements/)
5. [Flow DOM cheat sheet](https://www.saltycrane.com/flow-type-cheat-sheet/latest/#lib/dom.js)