import React from 'react';

export function PriyanshWordmark(props: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 800 200"
            {...props}
        >
            <text
                x="0"
                y="150"
                fontFamily="Arial, sans-serif"
                fontSize="120"
                fontWeight="bold"
                fill="currentColor"
            >
                Priyansh
            </text>
        </svg>
    );
}

export function getWordmarkSVG(color: string) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 200">
      <text x="0" y="150" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="${color}">
        Priyansh
      </text>
    </svg>
  `;
}
