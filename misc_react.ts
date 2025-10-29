/*

lodash : 
useful methods:
1. _.get(obj, 'a.b.c', 'default')
2. _.has(obj, 'a.b.c')
3. _.isEmpty(obj)
4. _.isEqual(obj1, obj2)
5. _.cloneDeep(obj)
6. _.debounce(func, delay)
7. _.throttle(func, delay)

suspense :
- Suspense is a component that lets you "wait" for some code to load and declaratively specify a loading state (like a spinner) while we're waiting.
example:
<Suspense fallback={<div>Loading...</div>}>
  <ProfileDetails />
</Suspense>

lazy :
- The lazy function lets you render a dynamic import as a regular component.
example:
const OtherComponent = React.lazy(() => import('./OtherComponent'));

memo :
- React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes.
example:
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props * /
});


Higher Order Components (HOC) :
- A higher-order component is a function that takes a component and returns a new component.
example:
const EnhancedComponent = higherOrderComponent(WrappedComponent);

const WrappedComponent = (props) => {
    return <div>{props.name}</div>;
    };
const higherOrderComponent = (WrappedComponent) => {
    return (props) => {
        return <WrappedComponent {...props} />;
    };
};


i18n / translation :
- i18n is a short name for internationalization.


Middleware :
- Middleware is a function that is composed in a chain to handle a request and response in an application.
example:
const middleware = (req, res, next) => {
    // do something
    next();
};

in case of redux:
const middleware = store => next => action => {
    // do something
    next(action);
};


Custom Hooks :
- Custom hooks are JavaScript functions whose names start with "use" and that may call other hooks.
example:
const useCustomHook = () => {
    const [count, setCount] = useState(0);
    return count;
};

to use this custom hook:
const count = useCustomHook();

how do we call setCount here ?
- we can return setCount from the custom hook as well. ??? - Yes.

const useCustomHook = () => {
  const [count, setCount] = useState(0);
  return { count, setCount }; // return both
};

 const { count, setCount } = useCustomHook();


What is vite and webpack?
vite and webpack are both build tools for modern web applications. To build react applications.

vite vs webpack :
- Vite is faster than Webpack because it uses native ES modules.
- Vite doesn't require bundling, so it's faster to start the development server.
- Vite uses Rollup for bundling in production, which is faster than Webpack.
- Vite doesn't require a separate configuration file like Webpack.
- Vite doesn't require a separate compilation step like Webpack.
- Vite doesn't require a separate server like Webpack.

- Webpack is slower than Vite because it uses CommonJS modules.
- Webpack requires bundling, so it's slower to start the development server.
- Webpack uses Webpack for bundling in production, which is slower than Rollup.

Protected Routes :
- Protected routes are routes that require authentication to access.
- to implement protected routes, we can use a higher-order component or a custom hook.

example:
const ProtectedRoute = ({ component: Component, ...rest }) => { // higher-order component
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

uses:
<ProtectedRoute path="/dashboard" component={Dashboard} />

to login:
<Route path="/login" component={Login} />




***React Code Optimization Techniques***
- Use React.memo for functional components.
- Use useMemo for expensive calculations.
- Use useCallback for expensive functions.
- Use lazy loading for components.
- Use code splitting for better performance.
- Use keys in lists for efficient rendering.

- Use virtualized lists for large lists.
- Use context API for passing data to nested components.
- Use React Profiler for performance analysis.
- Use React DevTools for debugging.
- Use server-side rendering for better SEO.

- Reduce the number of re-renders.
- Reduce the number of useEffect calls.
- Use the correct hooks.
- Use the correct event handlers.
- Use the correct state management.


React Lifecycle Methods :
- React has several lifecycle methods that allow you to run code at specific points in a component's lifecycle.
- The most common lifecycle methods are:
    - componentDidMount : Runs after the component has been rendered to the DOM.
    - componentDidUpdate : Runs after the component has been updated.
    - componentWillUnmount : Runs before the component is removed from the DOM.
    - shouldComponentUpdate : Runs before the component is updated.

React Saga Testing :
- Testing sagas in React is important to ensure that your application behaves as expected.
- To test sagas, you can use the redux-saga-test-plan library.
- The library provides a fluent API for testing sagas and their effects.
- You can use the expectSaga function to test the behavior of your sagas.
    example:
    import { expectSaga } from 'redux-saga-test-plan';
    import { call } from 'redux-saga/effects';
    import { fetchData } from './sagas';

    it('fetches data', () => {
        return expectSaga(fetchData)
            .provide([[call(api.fetchData), { data: 'test' }]])
            .put({ type: 'FETCH_SUCCESS', payload: 'test' })
            .run();
    });

React Library:
Pros and Cons of React :
- Pros :
    - React is fast and efficient.
    - React is easy to learn and use.
    - React has a large and active community.
    - React has a rich ecosystem of libraries and tools.
    - React is SEO-friendly.
    - React is component-based.
    - React has a virtual DOM.
    - React has a one-way data flow.
    - React has a declarative syntax.
    - React has a strong type system.

- Cons :
    - React has a steep learning curve.
    - React can be verbose.
    - React can be complex for large applications.
    - React can have performance issues with large DOM trees.
    - React can have compatibility issues with older browsers.

Virtual DOM :
- The virtual DOM is a lightweight copy of the actual DOM.
- React uses the virtual DOM to optimize rendering performance.
- React updates the virtual DOM first and then updates the actual DOM.
- React compares the virtual DOM with the actual DOM to minimize updates.
- React uses a diffing algorithm to update only the changed parts of the DOM.



for loops : 
 forEach in react :
    array.forEach((item) => {
        // do something with item
    });

    for(let i = 0; i < array.length; i++) {
        // do something with array[i]
    }

    for (const item of array) {
        // do something with item
    }


useParams : 
- useParams is a hook that returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
example:

import { useParams } from "react-router-dom";
const { id } = useParams();
*/
