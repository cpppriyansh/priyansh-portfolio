import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            // Use icon URL from config or fallback to local path
            const iconUrl = tech.icon || `/tech-stack-icons/${tech.key}.svg`;
            const lightIconUrl = tech.iconLight || `/tech-stack-icons/${tech.key}-light.svg`;
            const darkIconUrl = tech.iconDark || `/tech-stack-icons/${tech.key}-dark.svg`;

            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    {tech.theme ? (
                      <>
                        <Image
                          src={lightIconUrl}
                          alt={`${tech.title} light icon`}
                          width={32}
                          height={32}
                          className="hidden [html.light_&]:block"
                          unoptimized
                        />
                        <Image
                          src={darkIconUrl}
                          alt={`${tech.title} dark icon`}
                          width={32}
                          height={32}
                          className="hidden [html.dark_&]:block"
                          unoptimized
                        />
                      </>
                    ) : (
                      <Image
                        src={iconUrl}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
                        unoptimized
                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
