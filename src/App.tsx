// App.tsx
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Header from "./pages/Header";
import store from "./store/store";
import { Recursion } from "./pages/Recursion/Recursion";
import { DebounceThrottle } from "./pages/DebounceThrottle/DebounceThrottle";
import { StateExample } from "./hooks/1-use-state";
import { EffectExample } from "./hooks/2-use-effect";
import { ContextExample } from "./hooks/3-use-context";
import { ReducerExample } from "./hooks/4-use-reducer";
import { RefExample, RefExample2 } from "./hooks/5-use-ref";
import { ImperativeHandleExample } from "./hooks/6-use-imperative-handle";
import { LayoutExample } from "./hooks/7-use-layout";
import { TransitionExample } from "./hooks/10-use-transition";
import { DefferedValueExample } from "./hooks/11-use-deferred-value";
import { SyncExternalStoreExample } from "./hooks/12-use-sync-external-store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container sx={{ maxWidth: "90vw !important" }}>
          <SyncExternalStoreExample />
          {/* <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/recursion" element={<Recursion />} />
            <Route path="/debounce-throttle" element={<DebounceThrottle />} />
          </Routes> */}
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
