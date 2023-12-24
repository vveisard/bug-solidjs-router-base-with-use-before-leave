import { Component, JSX, ParentComponent } from "solid-js";

interface ButtonProps {
  readonly onClick: JSX.EventHandlerUnion<HTMLElement, MouseEvent>;
}

const Button: ParentComponent<ButtonProps> = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export { type ButtonProps, Button };
