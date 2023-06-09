<p style="text-align: center;">
    <img src="https://i.imgur.com/fS0jiXe.gif" alt="gif showing the transition">
</p>

# useTransitionState 🪝

`@shkumbinhsn/use-transition-state` is a custom React hook that simplifies the creation of animated transitions between different DOM states in a React application. It enhances the user experience by reducing cognitive load, helping users stay in context, and minimizing perceived loading latency during state or view changes.

## Installation

```bash
npm install @shkumbinhsn/use-transition-state
```
or
```bash
yarn add @shkumbinhsn/use-transition-state
```
or
```bash
pnpm add @shkumbinhsn/use-transition-state
```

## Usage

1. Import the hook from the package:
```jsx
import useTransitionedState from '@shkumbinhsn/use-transition-state';
```

2. Use the hook in your component to create transitioned state:
```jsx
const [state, setState] = useTransitionedState(initialState);

return <div className={`normal-style ${state === 'clicked' ? 'new-style' : ''}`}>
    {state}
</div>;
```

3. Make sure to include the necessary CSS styles and animations for the desired transition effects.

4. Enjoy using @shkumbinhsn/use-transition-state to create smooth and engaging transitions in your React application!

## How it works
`@shkumbinhsn/use-transition-state` internally leverages the View Transitions API and React's `useState` hook. It provides a wrapper around the useState hook, enhancing it with the ability to perform animated transitions between different states.

When you call `useTransitionedState` with an initial state value, it returns a tuple containing the current state value and a function to update the state. The `setStateWithTransition` function can be used to update the state with a new value, triggering a transition animation if the `document.startViewTransition` method is available.

If the `document.startViewTransition` method is supported by the browser, the hook initiates a view transition by calling it and providing a callback function. Inside the callback, the `flushSync` function from React-DOM is used to ensure that the state update occurs synchronously before the transition animation begins. This helps maintain a smooth and consistent user experience.

If the `document.startViewTransition` method is not supported, the state is updated directly without any transition animation.

## Compatibility and considerations
The `document.startViewTransition` method is currently supported in Chrome 85+ and Edge 85+. It is not supported in Firefox or Safari.

If the `document.startViewTransition` method is not supported, the `setStateWithTransition` function will behave the same as the `setState` function, updating the state directly without any transition animation.

## Example
```jsx
import React from 'react';
import useTransitionedState from '@shkumbinhsn/use-transition-state';

const App = () => {
    const [state, setState] = useTransitionedState('initial');

    const handleClick = () => {
        setState('clicked');
    };

    return <div className={`normal-style ${state === 'clicked' ? 'new-style' : ''}`}>
        <button onClick={handleClick}>Click me</button>
        {state}
    </div>;
};

export default App;
```

## License

MIT ©
