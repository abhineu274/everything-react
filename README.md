This is a React Project created by me for my own reference.

Going to explore React Typescript, Redux Toolkit and Saga, React Hook Form, MUI, etc.

- used npx create-react-app everything-react --template typescript to create this
        "react": "^18.3.1",
    -package.json - list of all dependencies, package-lock.json - version of dependencies

    flow : index.html -> <div id="root"></div> -> this div gets populated from -> index.tsx 
        -> which has the component App.tsx, which ultimately has our entire project.

    We use jsx in react - javascript + xml/html
    babel is the library/bundle that converts the jsx to javascript and all.
    
- npm install @reduxjs/toolkit react-redux redux-saga react-hook-form @mui/material 

- npm install -D @types/react-redux

- npm start : to start the app

- npm install -g yarn
- yarn --version 
- yarn start : yarn is faster

- yarn global add json-server : json servwer for db and api calls
- npm install -g json-server 

- create a db.json file
json-server --watch db.json --port 5000
//server will start at port 5000

- yarn add axios
- yarn add react-router-dom / npm install react-router-dom

- yarn add @emotion/react @emotion/styled : was getting some mui related error
- yarn add tss-react : will use tss-react/mui
- npm install @mui/icons-material






React Recursion -- ?
React Higher Order Component -- ?





















































































































1. Core JavaScript/TypeScript Concepts
Fundamentals:

Variables and scoping (var, let, const)
Data types, arrays, and objects
Template literals and destructuring
Arrow functions and function expressions
Classes and prototypes
Default parameters
Advanced Concepts:

Closures and lexical scope
Promises, async/await, and error handling
Event loop, microtasks, and macrotasks
this keyword and binding
Callbacks and higher-order functions
ES6+ features like spread/rest operators, for...of, Map/Set
Modules (import/export)
TypeScript:

Interfaces, types, and type aliases
Generics and type inference
Utility types (Partial, Omit, Pick, etc.)
Handling optional chaining (?.) and nullish coalescing (??)
Discriminated unions
Strict typing for props, hooks, and Redux actions


2. Core React Concepts
React Fundamentals:

JSX syntax and rendering
Functional vs. class components
Props and state management
Event handling (onClick, onChange, etc.)
Conditional rendering (&&, ternary, short-circuiting)
Lists and keys for rendering
React Advanced:

React lifecycle (with hooks like useEffect)
Context API for global state management
Error boundaries and fallback UI
Handling refs with useRef
Memoization techniques:
React.memo, useCallback, useMemo
Lazy loading and React.Suspense
Server-Side Rendering (SSR) vs. Client-Side Rendering (CSR)
React performance optimization techniques (e.g., preventing unnecessary re-renders)


3. State Management (Redux Toolkit + Saga)
Redux Toolkit:

Configuring the store (configureStore)
Creating slices using createSlice
Using createAsyncThunk for API calls
Selectors and createSelector from Reselect
Middleware integration in Redux Toolkit
Redux-Saga:

Setting up Redux-Saga middleware
Writing watcher and worker sagas (takeEvery, takeLatest, all)
Handling side effects with call, put, select
Advanced Saga effects (fork, cancel, race, throttle)
Error handling and retries with Sagas



4. React Form Handling (React Hook Form)
React Hook Form Basics:

Creating forms with useForm
Handling validation with yup or zod
Controlled vs uncontrolled inputs
Error handling and form submission
Using Controller for custom components
React Hook Form Advanced:

Nested forms and dynamic fields
Prefilling form data (setValue, reset)
Using FormProvider for shared contexts
Performance optimizations (avoiding unnecessary re-renders)



5. UI Libraries (MUI, Material CSS)
Material-UI (MUI):

Setting up themes (light/dark mode)
Using Material-UI components (Grid, Button, Dialog, Tabs, etc.)
Customizing MUI components via sx and makeStyles/styled
Understanding the ThemeProvider and extending themes
Accessibility features in MUI (ARIA labels)
Material CSS:

Understanding material design principles
Utilizing material-specific CSS utilities



6. Testing
Unit Testing:

Writing tests with Jest and React Testing Library
Mocking API calls and Redux state
Testing Redux Toolkit slices and selectors
End-to-End Testing:

Using tools like Cypress or Playwright



7. Build Tools and Performance
Build and Deployment:

Using Webpack, Vite, or similar tools
Code splitting and lazy loading
Performance Optimizations:

Debouncing and throttling
Avoiding unnecessary re-renders with React
Analyzing performance using React Profiler



8. General Web Development Skills
CSS and Styling:

Responsive design using CSS Grid and Flexbox
Styled-components or @emotion
HTTP Basics:

Understanding REST APIs
HTTP methods, status codes, headers, and CORS
Fetch API and Axios for making requests
Browser APIs:

LocalStorage and SessionStorage
Intersection Observer
File and Drag-and-Drop APIs



9. Bonus Skills (Optional but Helpful)
Real-Time Updates:

Websockets and Server-Sent Events (SSE)
GraphQL:

Querying and mutating data with Apollo Client
Accessibility:

WCAG standards and best practices
ARIA roles and properties
Soft Skills:

Clear communication of trade-offs in technical decisions
Ability to debug and problem-solve collaboratively
