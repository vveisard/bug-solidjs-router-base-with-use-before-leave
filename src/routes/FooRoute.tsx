import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";

const FooRoute: Component = () => {
  const navigate = useNavigate();

  return (
    <div>
      Foo
      <button onClick={() => navigate("/")}>to /</button>
    </div>
  );
};

export { FooRoute };
