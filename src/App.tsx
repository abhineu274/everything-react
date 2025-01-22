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

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container sx={{ maxWidth: "90vw !important" }}>
          <ContextExample />
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
