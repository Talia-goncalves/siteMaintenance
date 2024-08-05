import React from "react";

interface CardInterface {
  color?: string;
  qty?: string;
  text?: string;
  icon?: React.ReactNode;
}

export function Card({ color = "bg-gray-800", qty, text, icon }: CardInterface) {
  return (
    <div className={`flex items-center justify-between ${color} p-6 rounded-xl h-24 w-56`}>
      <div className="flex-1 flex flex-col justify-center">
        {qty && <strong className="text-3xl font-bold text-white">{qty}</strong>}
        {text && <span className="font-medium text-white">{text}</span>}
      </div>
      {icon && <div className="text-white text-3xl">{icon}</div>}
    </div>
  );
}
