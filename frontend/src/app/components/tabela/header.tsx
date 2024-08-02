interface HeaderInterface{
    titulo?: string;
}

export function Header({titulo}: HeaderInterface){
    return(
        <th className="p-2 border border-gray-300">{titulo}</th>
    )
}