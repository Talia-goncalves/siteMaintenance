import { FaTools, FaUsers } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { GrHostMaintenance } from "react-icons/gr";
import { MdDashboard, MdForklift } from "react-icons/md";

export function NavBar(){
    const links = [
        {target: "/", text: "Estoque", icon: <MdDashboard/>},
        {target: "#", text: "Máquinas", icon: <MdForklift/>},
        {target: "#", text: "Manutenções", icon: <GrHostMaintenance/>},
        {target: "#", text: "Peças e Materiais", icon: <FaTools/>},
        {target: "#", text: "Equipes", icon: <FaPeopleRoof/>},
        {target: "#", text: "Usuário", icon: <FaUsers/>}
    ];

    return(
        <nav className="space-y-4 flex flex-col mt-8">
            {links.map((obj) => (
                <a href={obj.target} className="flex items-center gap-4 hover:font-semibold">
                    {obj.icon}
                    {obj.text}
                </a>
            ))}
        </nav>
    );
}