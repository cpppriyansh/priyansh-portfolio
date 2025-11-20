import fs from "node:fs";
import path from "node:path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import type { UnistNode, UnistTree } from "@/types/unist";

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode, index, parent) => {
      // Handle ComponentSource nodes
      if (node.name === "ComponentSource") {
        const srcAttr = getNodeAttributeByName(node, "src");
        const srcPath = srcAttr?.value as string | undefined;
        const name = getNodeAttributeByName(node, "name")?.value as string | undefined;

        if (!name && !srcPath) {
          return;
        }

        try {
          if (srcPath) {
            const filePath = path.join(process.cwd(), srcPath);
            const source = fs.readFileSync(filePath, "utf8");
            const processedSource = source
              .replaceAll(`@/registry/`, "@/components/ncdai/");

            const title = getNodeAttributeByName(node, "title");
            const showLineNumbers = getNodeAttributeByName(node, "showLineNumbers");

            node.children = [
              u("element", {
                tagName: "pre",
                properties: {},
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: [`language-${path.extname(filePath).slice(1)}`],
                    },
                    data: {
                      meta: [
                        title ? `title="${title?.value}"` : "",
                        showLineNumbers ? "showLineNumbers" : "",
                      ].filter(Boolean).join(" "),
                    },
                    children: [u("text", processedSource)],
                  }),
                ],
              }),
            ];
          }
        } catch (error) {
          console.error("Error processing component source:", error);
          return;
        }
      }

      // Handle ComponentPreview nodes
      if (node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value as string;

        if (!name) {
          return;
        }

        node.children = [
          u("element", {
            tagName: "div",
            properties: {
              className: ["rounded-md border p-4 bg-muted/20"],
            },
            children: [
              u("text", `Component preview for ${name} would be shown here`),
            ],
          }),
        ];
      }
    });
  };
}
