import "./App.css";
import "sober/page";
import { TitleBar } from "./layout/TitleBar";
import { createSignal } from "solid-js";
import { SideBar } from "./layout/SideBar";
import { RouteSectionProps } from "@solidjs/router";

function App(props: RouteSectionProps) {
  const [titleBarHeight, _] = createSignal(45);
  return (
    <s-page theme="dark" class="size-full flex flex-col">
      <TitleBar height={titleBarHeight()} />
      <div class="flex flex-1 min-h-0">
        <SideBar />
        <div class="flex-1 overflow-auto">{props.children}</div>
      </div>
    </s-page>
  );
}

export default App;
