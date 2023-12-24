import type { Component, ParentComponent } from "solid-js";
import { Router, Route, useNavigate } from "@solidjs/router";

const RootLayout : ParentComponent = (props) => {
  return (
    <>
    Root
    {props.children}
    </>
  )
}

const FooRoute: Component = () => {
  const navigate = useNavigate();

  return (
    <div>
      Foo
      <button onClick={() => navigate("/")}>to /</button>
    </div>
  );
};

const RootRoute = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      Root
      <button onClick={() => navigate("/foo")}>to /foo</button>
    </div>
  );};

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
