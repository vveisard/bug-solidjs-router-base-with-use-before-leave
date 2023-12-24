import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { Button } from "../Button";

const RootRoute: Component = () => {
  const navigate = useNavigate();

  return (
    <div>
      Root
      <button onClick={() => navigate("/foo")}>[b] to /foo</button>
      <Button onClick={() => navigate("/foo")}>[B] to /foo</Button>
    </div>
  );
};

export { RootRoute };
