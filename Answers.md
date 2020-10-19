1. What problem does the context API help solve?
Context is a simpler Redux designed for React that solves the issue of prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is a centralized place at the top of the app that controls application state. It is the single source of truth because all state and state changes are managed there. Actions represent the  allowed "actions" a use can use to interact with the app. Reducers take the action and the state and return just the new state, thus "reducing" down to one object. I will say that I find it a little confusing that all of the actual "action" takes place inside a reducer, and the action object itself is just a label, or command.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is application wide. things that are passed through the tree. Component state is contained within that component, usualy form input values, etc. You dont pass the value itsef, you asign the value to another object and pass that.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to make asyncronous axios requests by intercepting action-creators and performing actions on them before they reach the reducer.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
It was Context before, but I think I prefer Redux because it has uses outside of React.