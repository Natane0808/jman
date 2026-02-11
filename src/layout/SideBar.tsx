import { useNavigate } from "@solidjs/router";
import "sober/menu";
import { Accessor, Component, createSignal, Index, Signal } from "solid-js";

type MenuItemProps = {
  routePath: string;
  text: Accessor<string>;
  icon: Component;
};

const menuItems = [
  {
    routePath: "/",
    text: () => "概览",
    icon: () => (
      <s-icon slot="start" class="mr-[12px]">
        <svg viewBox="0 -960 960 960">
          <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"></path>
        </svg>
      </s-icon>
    ),
  },
  {
    routePath: "/store",
    text: () => "资源",
    icon: () => (
      <s-icon slot="start" class="mr-[12px]">
        <svg viewBox="0 -960 960 960">
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z"></path>
        </svg>
      </s-icon>
    ),
  },
];

export function SideBar() {
  const menuIndex = createSignal(0);
  return (
    <div class="w-[240px] max-w-[240px] shrink-0">
      <s-menu class="size-full pr-[10px] pt-[10px] bg-(--s-color-surface-container)">
        <Index each={menuItems}>
          {(item, index) => buildMenuItem(item(), index, menuIndex)}
        </Index>
      </s-menu>
    </div>
  );
}

function buildMenuItem(
  props: MenuItemProps,
  index: number,
  menuIndex: Signal<number>,
) {
  const [currentIndex, setCurrentIndex] = menuIndex;
  const navigate = useNavigate();
  const onclick = () => {
    setCurrentIndex(index);
    navigate(props.routePath, { replace: true });
  };

  return (
    <s-menu-item checked={index === currentIndex()} onclick={onclick}>
      {props.icon({})}
      <div class="text-[18px]">{props.text()}</div>
    </s-menu-item>
  );
}
