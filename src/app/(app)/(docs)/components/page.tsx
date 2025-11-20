import type { Metadata } from "next";
import Link from "next/link";

import { ComponentIcon } from "@/components/icons";
import { MDX } from "@/components/mdx";
import { RegistryCommandAnimated } from "@/components/registry-command-animated";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { registryConfig } from "@/config/registry";

export const metadata: Metadata = {
  title: "Components",
  description: "A collection of reusable components.",
};

const componentsJSON = `\`\`\`json title="components.json" showLineNumbers {3}
{
  "registries": {
    "${registryConfig.namespace}": "${registryConfig.namespaceUrl}"
  }
}
\`\`\``;

// Example component data - replace with your actual components
const exampleComponents = [
  { name: 'Button', description: 'A reusable button component' },
  { name: 'Card', description: 'A container for content' },
  { name: 'Input', description: 'Form input field' },
  // Add more components as needed
];

export default function Page() {
  return (
    <div className="min-h-svh">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Components</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description} <span className="max-md:block" />
          <a
            className="whitespace-nowrap underline-offset-4 hover:underline"
            href={`https://ui.shadcn.com/docs/directory?q=${registryConfig.namespace}&utm_source=priyansh-j.vercel.app&utm_medium=referral&utm_campaign=components`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Trusted registry
          </a>{" "}
          for shadcn/ui.
        </p>
      </div>

      <div className="screen-line-before screen-line-after relative">
        <RegistryCommandAnimated />

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="absolute top-1.5 right-10 rounded-lg px-2"
              variant="secondary"
              size="sm"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.85 0a4.16 4.16 0 0 0-2.95 1.217L1.456 10.66a.835.835 0 0 0 0 1.18.835.835 0 0 0 1.18 0l9.442-9.442a2.49 2.49 0 0 1 3.541 0 2.49 2.49 0 0 1 0 3.541L8.59 12.97l-.1.1a.835.835 0 0 0 0 1.18.835.835 0 0 0 1.18 0l.1-.098 7.03-7.034a2.49 2.49 0 0 1 3.542 0l.049.05a2.49 2.49 0 0 1 0 3.54l-8.54 8.54a1.96 1.96 0 0 0 0 2.755l1.753 1.753a.835.835 0 0 0 1.18 0 .835.835 0 0 0 0-1.18l-1.753-1.753a.266.266 0 0 1 0-.394l8.54-8.54a4.185 4.185 0 0 0 0-5.9l-.05-.05a4.16 4.16 0 0 0-2.95-1.218c-.2 0-.401.02-.6.048a4.17 4.17 0 0 0-1.17-3.552A4.16 4.16 0 0 0 13.85 0m0 3.333a.84.84 0 0 0-.59.245L6.275 10.56a4.186 4.186 0 0 0 0 5.902 4.186 4.186 0 0 0 5.902 0L19.16 9.48a.835.835 0 0 0 0-1.18.835.835 0 0 0-1.18 0l-6.985 6.984a2.49 2.49 0 0 1-3.54 0 2.49 2.49 0 0 1 0-3.54l6.983-6.985a.835.835 0 0 0 0-1.18.84.84 0 0 0-.59-.245"
                  fill="currentColor"
                />
              </svg>
              MCP
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>Configure MCP</DialogTitle>
              <DialogDescription className="text-balance">
                Copy and paste the following code into your project&apos;s
                components.json.
              </DialogDescription>
            </DialogHeader>

            <div className="overflow-auto *:data-rehype-pretty-code-figure:my-0">
              <MDX code={componentsJSON} />
            </div>

            <DialogFooter className="sm:justify-between">
              <Button variant="outline" asChild>
                <a
                  href="https://ui.shadcn.com/docs/mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the docs
                </a>
              </Button>

              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {exampleComponents.map((component, index) => (
          <Link
            key={index}
            href={`/components/${component.name.toLowerCase()}`}
            className="group relative flex flex-col gap-2 rounded-lg border p-4 transition-colors hover:bg-accent/50"
          >
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary/10 p-2 text-primary">
                <ComponentIcon className="size-4" />
              </div>
              <h2 className="text-lg font-semibold">{component.name}</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              {component.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
