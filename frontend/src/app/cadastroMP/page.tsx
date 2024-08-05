'use client'

import { useState } from "react";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside";

export default function Home() {
  const [cadastroTipo, setCadastroTipo] = useState<string | null>(null);

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex-1 flex overflow-hidden">
        <Aside />

        <main className="flex-1 flex flex-col overflow-hidden">
          <h1 className="text-4xl font-bold uppercase w-full bg-white/40 p-6 text-center sticky top-0 z-10">
            Sistema de Gestão de Manutenção
          </h1>

          <div className="flex-1 overflow-y-auto p-6">
            {/* Formulário de Cadastro */}
            <div className="p-6 rounded-lg shadow-lg bg-gray-900 border border-gray-700">
              <h2 className="text-xl font-semibold mb-6">Cadastrar Novo Item</h2>
              <div className="mb-6">
                <label className="block font-medium mb-2 text-gray-200" htmlFor="tipo">
                  Tipo de Cadastro
                </label>
                <select
                  id="tipo"
                  className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setCadastroTipo(e.target.value)}
                >
                  <option value="" disabled selected>
                    Selecione uma opção
                  </option>
                  <option value="Máquina">Máquina</option>
                  <option value="Peça">Peça</option>
                  <option value="Material">Material</option>
                </select>
              </div>

              {cadastroTipo && (
                <form className="space-y-6">
                  {cadastroTipo === "Máquina" && (
                    <>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="nome-maquina">
                          Nome da Máquina
                        </label>
                        <input
                          type="text"
                          id="nome-maquina"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="tipo-maquina">
                          Tipo
                        </label>
                        <input
                          type="text"
                          id="tipo-maquina"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="modelo-maquina">
                          Modelo
                        </label>
                        <input
                          type="text"
                          id="modelo-maquina"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="fabricacao-maquina">
                          Data de Fabricação
                        </label>
                        <input
                          type="date"
                          id="fabricacao-maquina"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="numero-serie-maquina">
                          Número de Série
                        </label>
                        <input
                          type="text"
                          id="numero-serie-maquina"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="localizacao-maquina">
                          Localização
                        </label>
                        <input
                          type="text"
                          id="localizacao-maquina"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="imagem-maquina">
                          Upload de Imagem
                        </label>
                        <input
                          type="file"
                          id="imagem-maquina"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </>
                  )}

                  {["Peça", "Material"].includes(cadastroTipo) && (
                    <>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="nome-item">
                          Nome
                        </label>
                        <input
                          type="text"
                          id="nome-item"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="codigo-item">
                          Código
                        </label>
                        <input
                          type="text"
                          id="codigo-item"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="fornecedor-item">
                          Fornecedor
                        </label>
                        <input
                          type="text"
                          id="fornecedor-item"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="quantidade-item">
                          Quantidade em Estoque
                        </label>
                        <input
                          type="number"
                          id="quantidade-item"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="valor-unitario-item">
                          Valor Unitário
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          id="valor-unitario-item"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2 text-gray-200" htmlFor="imagem-item">
                          Upload de Imagem
                        </label>
                        <input
                          type="file"
                          id="imagem-item"
                          className="w-full p-1 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-1 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Cadastrar
                  </button>
                </form>
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
