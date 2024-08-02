import { MdForklift, MdHandyman, MdOutlineAdd } from "react-icons/md";
import { Footer } from "./components/footer";
import { Aside } from "./components/aside";
import { Card } from "./components/card";
import { Table } from "./components/tabela/table";
import { PiGearSixFill } from "react-icons/pi";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        <Aside />

        <main className="flex-1 flex flex-col overflow-hidden">
          <h1 className="text-4xl font-bold uppercase w-full bg-white/40 p-6 text-center sticky top-0 z-10">
            Sistema de Gestão de Manutenção
          </h1>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-4 gap-4 p-6">
              <Card
                color={"bg-orange-600"}
                qty={"200"}
                text={"Máquinas"}
                icon={<MdForklift size={48} />}
              />

              <Card
                color={"bg-blue-600"}
                qty={"200"}
                text={"Peças"}
                icon={<PiGearSixFill size={48} />}
              />

              <Card
                color={"bg-red-600"}
                qty={"200"}
                text={"Materiais"}
                icon={<MdHandyman size={48} />}
              />

              <Card 
                color={"bg-green-600"}
                text={"Adicionar novo Item"}
                icon={<MdOutlineAdd size={48} />}
              />
            </div>
            <div>
              <div className="p-5">
                <Table />
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
