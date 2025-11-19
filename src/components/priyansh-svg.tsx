export function PriyanshSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 64" width="160" height="64">

      <rect x="0" y="0" width="8" height="64" fill="#fff" />
      <rect x="8" y="0" width="24" height="8" fill="#fff" />
      <rect x="32" y="8" width="8" height="16" fill="#fff" />
      <rect x="8" y="24" width="24" height="8" fill="#fff" />


      <rect x="56" y="0" width="48" height="8" fill="#fff" />
      <rect x="80" y="8" width="8" height="48" fill="#fff" />
      <rect x="56" y="56" width="32" height="8" fill="#fff" />
      <rect x="56" y="48" width="8" height="8" fill="#fff" />
    </svg>

  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
