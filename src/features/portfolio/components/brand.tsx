import dynamic from "next/dynamic";

import { PriyanshSvg } from "@/components/priyansh-svg";
import { ChanhDaiWordmark } from "@/components/chanhdai-wordmark";

import { Panel, PanelHeader, PanelTitle } from "./panel";

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
);

export function Brand() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle className="underline">Thanks for visiting </PanelTitle>
      </PanelHeader>

      <BrandContextMenu>
        <div className="grid grid-cols-[2rem_1fr] pt-10">
          <div className="flex h-28 items-center justify-center border-r border-dashed border-edge bg-background">
            <span className="rotate-270 text-sm text-muted-foreground select-none">

            </span>
          </div>

          <div className="screen-line-after flex items-center justify-center pr-8 after:z-1">
            <PriyanshSvg className="h-8 w-auto sm:h-12" />
          </div>

          <div className="flex h-28 items-center justify-center border-r border-dashed border-edge bg-background">
            <span className="rotate-270 text-sm text-muted-foreground select-none">

            </span>
          </div>

          <div className="screen-line-after flex items-center justify-center pr-8 after:z-1">
            <h1 className="text-6xl font-bold">Priyansh Jaisingkar</h1>
          </div>
        </div>
      </BrandContextMenu>
    </Panel>
  );
}

