import { FaCircleExclamation } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdCreate } from "react-icons/md";

interface RowInterface{
    nome?: string;
    tipo?: string;
    dtEntrada?: string
    dtSaida?: string;
    qtd?: string;
    status?: string;
}

export function Row({nome, tipo, dtEntrada, dtSaida, qtd, status}: RowInterface){
    return(
        <tr>
            <td className="p-1 border border-gray-300">{nome}</td>
            <td className="p-1 border border-gray-300 text-center">{tipo}</td>
            <td className="p-1 border border-gray-300 text-center">{dtEntrada}</td>
            <td className="p-1 border border-gray-300 text-center">{dtSaida}</td>
            <td className="p-1 border border-gray-300 text-center">{qtd} unidades</td>
            <td className="p-1 border border-gray-300 text-center">{status}</td>
            <td className="p-2 border border-gray-300 flex space-x-2 justify-center">
                <span className="icon"><MdCreate/></span>
                <span className="icon"><MdDelete/></span>
                <span className="icon"><FaCircleExclamation/></span>
            </td>
        </tr>
    )
}