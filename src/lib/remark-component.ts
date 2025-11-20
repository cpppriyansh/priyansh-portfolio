import fs from "node:fs";
import path from "node:path";
import { visit } from "unist-util-visit";
import type { Node, Parent } from "unist";

type UnistNode = Node & {
  name?: string;
  attributes?: Array<{
    name: string;
    value?: string | boolean | number;
    type?: string;
  }>;
  children?: UnistNode[];
  value?: string;
  tagName?: string;
  properties?: Record<string, any>;
  data?: {
    meta?: string;
  };
};

type UnistTree = Node & {
  children: UnistNode[];
};

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

export function remarkComponent() {
  return async (tree: UnistTree) => {
    visit(tree as Node, (node: Node) => {
      const unistNode = node as UnistNode;
      // Handle ComponentSource nodes
      if (unistNode.name === "ComponentSource") {
        const srcAttr = getNodeAttributeByName(unistNode, "src");
        const srcPath = srcAttr?.value as string | undefined;
        const name = getNodeAttributeByName(unistNode, "name")?.value as string | undefined;

        if (!name && !srcPath) {
          return;
        }

        try {
          if (srcPath) {
            const filePath = path.join(process.cwd(), srcPath);
            const source = fs.readFileSync(filePath, "utf8");
            const processedSource = source.replaceAll(`@/registry/`, "@/components/ncdai/");

            const title = getNodeAttributeByName(unistNode, "title");
            const showLineNumbers = getNodeAttributeByName(unistNode, "showLineNumbers");

            const codeBlock = {
              type: "code",
              lang: path.extname(filePath).slice(1),
              meta: [
                title ? `title="${title?.value}"` : "",
                showLineNumbers ? "showLineNumbers" : "",
              ].filter(Boolean).join(" "),
              value: processedSource,
            };

            const parentNode = node as Parent;
            if (parentNode && parentNode.children) {
              const nodeIndex = parentNode.children.indexOf(node);
              if (nodeIndex !== -1) {
                parentNode.children[nodeIndex] = codeBlock as any;
              }
            }
          } else if (name) {
            // For components without src path, show a placeholder
            const placeholder = {
              type: "paragraph",
              children: [{
                type: "text",
                value: `[Component source for ${name} would be shown here]`
              }]
            };

            const parentNode = node as Parent;
            if (parentNode && parentNode.children) {
              const nodeIndex = parentNode.children.indexOf(node);
              if (nodeIndex !== -1) {
                parentNode.children[nodeIndex] = placeholder as any;
              }
            }
          }
        } catch (error) {
          console.error("Error processing component source:", error);
        }
      }

      // Handle ComponentPreview nodes
      if (unistNode.name === "ComponentPreview") {
        const name = getNodeAttributeByName(unistNode, "name")?.value as string;

        if (!name) {
          return;
        }

        // Create a placeholder for component previews
        const placeholder = {
          type: "paragraph",
          children: [{
            type: "text",
            value: `[Component preview for ${name} would be shown here]`
          }]
        };

        const parentNode = node as Parent;
        if (parentNode && parentNode.children) {
          const nodeIndex = parentNode.children.indexOf(node);
          if (nodeIndex !== -1) {
            parentNode.children[nodeIndex] = placeholder as any;
          }
        }
      }
    });
  };
}
