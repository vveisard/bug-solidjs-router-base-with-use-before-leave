import type { Component, ParentComponent } from "solid-js";
import { Router, Route, useNavigate } from "@solidjs/router";
import { FooRoute } from "./routes/FooRoute";
import { RootRoute } from "./routes/RootRoute";

const RootLayout : ParentComponent = (props) => {
  return (
    <>
    {props.children}
    </>
  )
}

const App: Component = () => {
  return (
    <>
      <Router base={import.meta.env.BASE_URL} root={RootLayout}>
        <Route path={"/"} component={RootRoute} />
        <Route path={"/foo"} component={FooRoute} />
      </Router>
    </>
  );
};

export default App;
