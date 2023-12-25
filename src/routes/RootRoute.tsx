import { Component } from "solid-js";
import { useBeforeLeave, useNavigate } from "@solidjs/router";

const RootRoute: Component = () => {
  const navigate = useNavigate();

  useBeforeLeave((e) => {
    // before navigate to bar...
    if (e.to !== `${import.meta.env.BASE_URL}/bar`) {
      return;
    }

    console.log(`useBeforeLeave`, `e.to=${e.to}`);

    e.preventDefault();
    e.retry(true);
  });

  return (
    <div>
      Root
      <button onClick={() => navigate("/foo")}>to /foo</button>
      <button onClick={() => navigate("/bar")}>to /bar</button>
    </div>
  );
};

export { RootRoute };
