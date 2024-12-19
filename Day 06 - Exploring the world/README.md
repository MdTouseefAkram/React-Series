# React Series
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles
- Different dev and prod bundles
# Food App
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
 Two types of Export/Import
- Default Export/Import
export default Component;
import Component from "path";
- Named Export/Import
export const Component;
import {Component} from "path";
# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()

- Vitual DOM- Virtula DOM is the JS Object representation of actaul DOM.
- UseEffect- useEffect is a function, which takes two arguments.
- 1) Arrow function/ call back function
  2) Dependency Array
- Purpose of useEffect - if we have to do something after rendering of the component, we have to write inside the useEffect.
- Ex- useEffect is use in fetching data, fecthing API and updating the DOM with new data after rendering the component/ UI. useEffect is use render the UI with new data coming from an API.
-  This happens in cylce.
-  Load -> Render-> API Called-> Rerender with new data using useEffect.
-  When React execute line by line the component if it see useEffect then it keep it save the call back function of useEffect and after the whole component gets rendered then this useEffect gets called and his callbeck function executed and populate the new data coming from external world inside our App.
