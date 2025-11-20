import { cn } from "@/lib/utils";

interface PriyanshSvgProps extends React.ComponentProps<"svg"> {
  theme?: "light" | "dark";
}

export function PriyanshSvg({
  className,
  theme = "light",
  ...props
}: PriyanshSvgProps) {
  const fillColor = theme === "dark" ? "currentColor" : "currentColor";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 64"
      width="160"
      height="64"
      className={cn(
        "text-foreground dark:text-foreground",
        className
      )}
      {...props}
    >
      <rect x="0" y="0" width="8" height="64" fill={fillColor} />
      <rect x="8" y="0" width="24" height="8" fill={fillColor} />
      <rect x="32" y="8" width="8" height="16" fill={fillColor} />
      <rect x="8" y="24" width="24" height="8" fill={fillColor} />

      <rect x="56" y="0" width="48" height="8" fill={fillColor} />
      <rect x="80" y="8" width="8" height="48" fill={fillColor} />
      <rect x="56" y="56" width="32" height="8" fill={fillColor} />
      <rect x="56" y="48" width="8" height="8" fill={fillColor} />
    </svg>
  );
}

export function getMarkSVG(color: string, theme: "light" | "dark" = "light") {
  const fillColor = theme === "dark" ? "#ffffff" : color;
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${fillColor}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}