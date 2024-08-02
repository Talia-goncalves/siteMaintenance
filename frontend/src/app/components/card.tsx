import React from "react";

interface CardInterface {
    color?: string;    // ? significa que o parâmetro é opcional se fosse ! seria obrigatório
    qty?: string;
    text?: string;
    icon?: React.ReactNode; // ou any
}

export function Card({color, qty, text, icon}: CardInterface){
    return(
        <div className={`${color} p-6 flex gap-2 rounded-xl`}>
            <div className="flex-1 flex flex-col">
                  <strong className="text-3xl font-bold">{qty}</strong>
                  <span className="font-medium text-white ">{text}</span>
            </div>
            {icon}
        </div>
    )
}