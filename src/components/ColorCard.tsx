import React from "react";

interface ColorCardProps {
  color: string;
  colorName?: string;
}

function ColorCard({ color, colorName }: ColorCardProps) {
  // bg-[#34911F] bg-[#a21caf] bg-grayscale-2 bg-grayscale-3 bg-grayscale-4 bg-accent-dark bg-accent-light bg-grayscale-5
  const classes = `bg-${color} h-32 w-32 text-white shadow-md border border-neutral-700 rounded-xl p-2 flex items-end justify-end`;
  return (
    <div className="flex flex-col items-center">
      <div className={classes}></div>
      <p>{colorName || color}</p>
    </div>
  );
}

export default ColorCard;
