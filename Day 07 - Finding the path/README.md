# React Series

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
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

# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()
- useEffect()
#  2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing
# useParams() Hook, Outlet, Route Provider,CreateBrowser, React-Router-Dom, UseEffect() Dependency, useRouteError(), children Route, Routing.
# Outlet - the Outlet component is used to render child routes within a parent route, creating a nested routing structure.
 The Outlet component is a placeholder in your layout where the matched child route components will be rendered. It's particularly useful when you want different routes to share a common layout (e.g., Header and footer stay in UI but only body changes according to Route like About Us page but Header intact there on top). basically outlet is filled with component which is passed as a children into my parent component.

# UseParams- The useParams hook in React Router means that the dynamic parts of URLs are just easy to access within the app. 
useParams is a hook that allows you to have access to dynamic parameters in the URL. It comes from react-router-dom. 
How to read resId?
Params is an object with resId value. so we can use it to read the unique resId and make dynamic routing to acces easy by simple write resId in URL and get the data of the page, by using useParams() , we make our routing dynamic within the app  and easy accessible, just change the resId and we get data.
