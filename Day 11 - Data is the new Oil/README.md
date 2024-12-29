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

# Lifting state up is like using for controlling the components vai props.

# Prop drilling-
In React, prop drilling refers to the process of passing data from a parent component to a deeply nested child component by passing props through intermediate components and these intermediate components even don't need this prop data themselves.

# The problem with passing props-
Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.

But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called “prop drilling”.
example-
RestaurantMenu -> RestaurantCategory -> ItemList
Pass Props  ----- Receive Props ----    Receive Props and use this props data. 
                  and send to next deeper
                  component ItemList.

# Context: an alternative to passing props or to avoid prop drilling.
Context, in React, is a way to pass data down through a component tree without having to pass props down through every level. This can be very helpful since this allows us to share data between components that are not directly related to each other.
It allows the data to be accessed globally throughout the application and enable efficient state management.

# Context is for state management, state get changed when data get changed.
# To create context - createContext()
# To access or use context - useContext()

ex - const data = useContext(userContext);
Here useContext comes from react and userContext is context file name. we can directly extract loggedInUser data from this data from userContext.js file.

const {loggedInUser} = useContext(userContext);

-- For using context
- Import useContext
- Import the particular context file that we created in utils folder.
  
# In class based component, there is no Hooks.
-- In class based component, we use to access or consume or read the context using a component <userContext.consumer>. userContext is context file name, it can be vary but .consumer is given by React to access context in class based component.
 e.g <userComtext.consumer>
     {(data) => console.log(data)}
      </userContext.cosumer>
# To modify context data in our App
-- In real life, default value inside the context. Basically we can override the value of userContext.js and we can provide any value as we want in using .provider. For pass this new information in my context we use context.Provider.
<userContext.Provider value = {loggedInUser : UserName}>

--We wrap the whole App in App.js with contextProvider to modify the context value or data.

# we can also use the context.Provider for a specific portion of our App.
In App.js

#1
return (
  // Default value of context.
    <UserContext.Provider value={{ loggedInUser: userName}}>
    // Context value get changed.
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

#2
return (
  // Default value of context.
    <UserContext.Provider value={{ loggedInUser: userName}}>
    // Context value get changed.
      <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName}}>
      // context data chnaged again for this portion.
        <Header />
      </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

# Using <input/> in React, It create a input box.

# To change username while we write in input box on the fly (To modify context data in our App on fly).
-- If I write any name in input box, then it should update the context and reflect in UI. Basically we want to update username from Input Box.
-- We are trying to update global space context on OnClick or OnChange.

In the context.Provider, we can pass setUserName function to modify itself on the fly when we write in input box. In App.js and we access setUserName in Body.js or anywhere in my App. we wrap this below line as we do preveios for modifying the context data but here we add setUserName also which it can be imported and will use in body to update context data from input box on fly.

<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>

We tied the userContext with userName state variable, when state variable gets changed then userContext gets modify on the fly and everywhere in my App , data gets changed.

e.g In body.js

import UserContext from "../utils/UserContext";

 const { loggedInUser, setUserName } = useContext(UserContext);

 <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />

e is event.
# we can use context.consumer many times.
-- colclusion
- To create context -- createContext()
- To consume or read or access context in class based component - context.Consumer.
- To modify context - context.Provider
- To modify with input box on fly - context.Provider, setUserName.
- Here setUserName is a function, whcih update the data in state variable using useEffect and it is used in context with updating value using input box.
So, we can read my context anywhere we want to in my App.

# Redux prefer, why?
Redux is scalable. If we do with context, so we need to create different context for different data, like for cart context (cartContext.js), for userContext, for UI context, for theme context, there different context files will need to created in utils folder and if App grows then becomes cluttry.

# React App is built using data layer and UI layer.

