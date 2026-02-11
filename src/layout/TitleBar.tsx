import "sober/icon";
import "sober/icon-button";
import "sober/appbar";
import { Window } from "@tauri-apps/api/window";
import { mergeProps } from "solid-js";

const appWindow = new Window("main");

export function TitleBar(props: any) {
  const barProps = mergeProps({ height: 45 }, props);
  const minimize = () => {
    appWindow.minimize();
  };
  const toggleMaximize = () => {
    appWindow.toggleMaximize();
  };
  const close = () => {
    appWindow.close();
  };

  return (
    <s-appbar
      class={` h-[${barProps.height}px] w-full flex shrink-0 [-webkit-app-region:drag]`}
    >
      <div slot="action">
        <s-icon-button
          type="filled-tonal"
          class="w-[30px] mr-[5px]"
          onclick={minimize}
        >
          <s-icon>
            <svg viewBox="0 -960 960 960">
              <path d="M240-440v-80h480v80H240Z"></path>
            </svg>
          </s-icon>
        </s-icon-button>
        <s-icon-button
          type="filled-tonal"
          class="w-[30px] mr-[5px]"
          onclick={toggleMaximize}
        >
          <svg viewBox="0 -960 960 960" class="size-[20px]">
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"></path>
          </svg>
        </s-icon-button>
        <s-icon-button type="filled" class="w-[30px] mr-[20px]" onclick={close}>
          <s-icon name="close"></s-icon>
        </s-icon-button>
      </div>
    </s-appbar>
  );
}
