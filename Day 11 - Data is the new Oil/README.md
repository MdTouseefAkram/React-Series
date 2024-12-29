# React

# Higher Order Component-  
Higher order component is a function which takes a existing component as input and then it enhances that component. It adds some extra features to that component and return it back as new component. It acts like an enhancer. At the end of the day, its a normal JS function.
# use - if we want to emphasis on anything like , we want show cards with promoted label then we higher order component to do this.
<RestaurantCrad {...props}/> - It will pass all the props that we receive. It will directly passing in restaurant card.
Why we doing this? - Higher order component, It pass same data because it is a pure function. Pure function mean, we will not modify our RestaurantCard. we not change the code of component. We are enhancing on top of it by just adding extra features.

# Data layer consist of state, props, local variable, whatever we have data in our App, and UI layer is powered by data layer. UI layer consist of JSX.
# Accordion - Build vertically collapsing. It hide & show the data.
# Passing dynamic data in props from parent component where data have or comes and recieves props as object in another component where we actually use or read the data to reflect in UI.
# items.map(item=> <li> key = {item.card.info.id} </li> -- we iterate on items for each item, it return a list. Key is unique from the data. For each item we have a key over here from the data API like item ID or item.name.
# To handle default price, use ternary operator.
# To work with data layer, use state variable, it will decide whether this list is shown or not.
# To build toggle feature. - setShowItems(!showItems), but it make static behavior. Another list will expand if we do it still epannd if we click on other list item.

# Lifting my state up -- This approach involves moving state to the closest common ancestor of components that need to share the state. By doing so, it promotes better component interaction, reduces redundancy, and enhances the overall architecture of the application.
# Why lifting state up -- If each component manages its own state independently, it can lead to inconsistencies and synchronization issues. By lifting the state up to their common parent component, siblings or child can access and modify the state in a controlled manner, ensuring consistency and synchronization. example like to manage state of accordion itemList for expand and collapse.

# Lifting my state up -- Sometimes, we want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent and then pass it down to them via props. This is known as lifting state up.

# How accordion work with state lifting up ? - When I click on single item list in accordion then basically setShowIndex() gets called in RestaurantCategory.js and this setShowIndex is basically different setShowIndex all the time.

#  “Controlled” (driven by props) or “Uncontrolled” (driven by state) component -- I don't want these RestaurantCategory to manage itself. I want restaurantMenu to controll all of these RestaurantCategory. I don't want RestaurantCategory have their own state but it should take my showItems as props. This is called controlled component because it controlled by RestaurantMenu.js.

# If the RestaurantCategory is controlling itself to showIndex, then it is called controlled component. If I take away this power then it becomes an uncontrolled component because it is relying upon the parent to tell it what should it do. Now it becomes controlled component because it is controlling from its parent (RestaurantMenu.js).  We can control it via props and child has not their main state. And if we are not sending this props to child component and the child is managing itself then it becomes uncontrolled component.

# Recap - To use.
When you want to coordinate two components, move their state to their common parent.
Then pass the information down through props from their common parent.
Finally, pass the event handlers down so that the children can change the parent’s state.
It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).
