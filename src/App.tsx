import type { Component, ParentComponent } from "solid-js";
import { Router, Route } from "@solidjs/router";
//
import { RootRoute } from "./routes/RootRoute";
import { FooRoute } from "./routes/FooRoute";
import { BarRoute } from "./routes/BarRoute";

const RootLayout: ParentComponent = (props) => {
  return <>{props.children}</>;
};

const App: Component = () => {
  return (
    <>
      <Router base={import.meta.env.BASE_URL} root={RootLayout}>
        <Route path={"/"} component={RootRoute} />
        <Route path={"/foo"} component={FooRoute} />
        <Route path={"/bar"} component={BarRoute} />
      </Router>
    </>
  );
};

export default App;
