/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import routes from "./router/routes";
import App from "./App";

const wrapper = document.getElementById("root");

if (!wrapper) {
  throw new Error("wrapper div not found");
}
render(() => <Router root={App}>{routes}</Router>, wrapper);
