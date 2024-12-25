# React


## What is React Custom Hook ?
In React, custom hooks are JavaScript functions that let you extract component logic into reusable units. They allow you to:
1. Share Logic: If you have the same logic repeated across multiple components, you can encapsulate it within a custom hook and reuse it effortlessly.
2. Improve Readability: Custom hooks break down complex component logic into smaller, focused functions, making your code easier to read and understand.
3. Manage State and Side Effects: You can use built-in hooks like useState and useEffect within your custom hook to manage state and interact with external systems.
Naming Convention: Custom hooks must start with the word use, followed by a capital letter (e.g., useFetchData).
## Need of custom hooks in react ?
1. Reusability:
Avoid repetition:
Instead of writing the same logic in multiple components, encapsulate it within a custom hook and reuse it effortlessly.
Share logic:
Easily share stateful logic (e.g., fetching data, managing forms) across different parts of your application.
2. Code Organization:
Break down complexity:
Split complex component logic into smaller, focused custom hooks, making your code more readable and maintainable.
Improve separation of concerns:
Each custom hook handles a specific piece of logic, leading to better structure and organization.
3. Abstraction:
Hide implementation details:
Simplify component logic by abstracting complex operations behind a custom hook's interface.
Focus on the "what," not the "how":
Components can focus on their core purpose, leaving the implementation details to the custom hooks.
4. Testing:
Easier to test: Custom hooks can be tested independently from the components that use them, leading to more robust and reliable tests.
## Common use cases for custom hooks:
1.Data fetching: Fetching data from APIs and managing loading/error states.
2.Form handling: Managing form state, validation, and submission logic.
3.State management: Creating custom state management solutions tailored to your application's needs.
4.Event handling: Handling complex event interactions like window resizing or scrolling.
5.Animation: Creating reusable animation logic.

# Single Responsibilty Principle - Suppose if we have a class or if you have any single identity of your code that should have single responsibility.

# Modularity -  Our code break down into small modules that it can become easy to maintain and easy for testing.
# Custom Hooks follows the modularity.
# Try to create custom Hook in utils folder.
# Always prefer for sepaarte file for seperate Hooks.
# Just like state variable inside component, we can create state variables inside custom Hook.

## How to think logic of custom hook ?
# Finalize the contract. i.e what is the input of custom Hook and what should we want to return from custom Hook to make follow single resposnibility both for component and custom Hook. In some case in custom Hook , we do not need any input as information e.g in case of checking online status, it not need input , it simply checks and return output.

## Online Event listener- This listener is used to find out or keep tracking whether the user is online or offline.
# Window/browser gives this super power. we add only once time this event listener by using in useEffect.
# functional component is JS function and Hooks is utility function.

# Bundling - It takes all your code file and make into in one file.
## chunking - we do bundling but we try to make smaller bundles of our file. This process is known as chunking or code splitting.
# We want to do logical separation of my bundles i.e means a bundle has enough code for a major feature in a website.
# We can splitting our bundles into these logical chunks. so that request for JS file does not become so heavy that take so much time to load into browser.

## lazy loading - lazy is a function is given by React and it import as named import.
-- In initially it will not load load the particular page , it will load this page , when we go to this page. This is also know as ondemand loading. # That's how we optimise our app.
-- The lazy takes a call back function and here we write import, here import is function, which has file component path.
# while using lazy , we wrap the component path which will load later in suspense component with a placeholder fallback. It is kind of a loading screen. We can put here shimmer UI also.
# We use lazy loading when our app grows.

## optimising our App is very easy by using lazy loading.
-- Go to App.js (root file)
-- Dynamic import lazy loading of any component which we want to load later.
-- wrap this component inside suspense and write fallback placeholder.
-- It works now. these particular components comes in diifrenet bundle. Our App get optimised and fast.

# This is how we can distribute our app into smaller chunks(bundles).

## Two thing
# 1. code spliiting or chunking for modularity and following single responsibility. It makes our app easy to read , maintable and easy for testable.
# 2. lazy loading - for optimising our App.
