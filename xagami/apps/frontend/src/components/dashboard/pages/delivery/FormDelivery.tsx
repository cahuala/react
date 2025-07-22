/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'

import { UploadCloud, PlusCircle, XCircle, Trash2 } from 'lucide-react'
import clsx from 'clsx'
import {  Toaster } from 'react-hot-toast'
import useDelivery from '@/data/hooks/useDelivery'




const enderecos: string[] = ['Luanda - Bairro Prenda', 'Cacuaco - Rua do Comércio', 'Benguela - Zona Sul']

export default function FormularioEntrega() {
  const {
    endereco,
    origem,
    destino,
    descricaoSolicitacao,
    produtos,
    setOrigem, 
    setEndereco,
    setDestino,
    setDescricaoSolicitacao,
    adicionarProduto,
    atualizarProduto,
    handleFotoUpload,
    limparFotos,
    removerProduto,
    handleSubmit

  } = useDelivery()

  return (
    <>
    <Toaster
  position="top-right"
  toastOptions={{
    success: {
      style: {
        backgroundColor: '#16a34a', // verde (Tailwind: bg-green-600)
        color: 'white',
      },
      iconTheme: {
        primary: 'white',
        secondary: '#16a34a',
      },
    },
  }}
/>
      <form
        onSubmit={handleSubmit}
        className="max-w-8xl mx-auto bg-white p-6 rounded-xl shadow space-y-10"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Nova Solicitação</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="flex items-center border-b border-teal-500 py-2">
            
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Origem"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center border-b border-teal-500 py-2">
            <select
              className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            >
              <option value="">-- Selecione o Endereço --</option>
              {enderecos.map((end, i) => (
                <option key={i} value={end}>{end}</option>
              ))}
            </select>
          </div>
          
        </div>

        <div className="flex items-center border-b border-teal-500 py-2">
          <textarea
            rows={3}
            placeholder="Descrição da Solicitação"
            className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
            value={descricaoSolicitacao}
            onChange={(e) => setDescricaoSolicitacao(e.target.value)}
          />
        </div>

        {produtos.map((produto, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 shadow grid grid-cols-1 lg:grid-cols-[150px_350px_1fr] gap-4 bg-white-50 relative"
          >
            <div className="flex flex-col items-center gap-2">
              {produto.fotos.map((file, i) => (
                <div
                  key={i}
                  className="relative w-16 h-16"
                  onClick={() => atualizarProduto(index, 'previewIndex', i)}
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`miniatura-${i}`}
                    className={clsx(
                      'w-full h-full object-cover rounded border cursor-pointer',
                      produto.previewIndex === i ? 'ring-2 ring-blue-500' : 'hover:opacity-80'
                    )}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-4 border-gray-400 border-t-transparent" />
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2">
                <label className="flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs p-1 rounded cursor-pointer mt-2">
                  <UploadCloud className="w-4 h-4 mr-1" />
                  Fotos
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleFotoUpload(index, e.target.files)}
                    className="hidden"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => limparFotos(index)}
                  className="flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-700 text-xs p-1 rounded mt-2"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Limpar
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center bg-white rounded-lg min-h-[250px] border">
              {produto.fotos.length > 0 ? (
                <img
                  src={URL.createObjectURL(produto.fotos[produto.previewIndex])}
                  alt="preview"
                  className="max-h-[300px] w-full object-contain rounded"
                />
              ) : (
                <span className="text-gray-400 text-sm">Nenhuma imagem seleccionada</span>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-center border-b border-teal-500 py-2">
                <input
                  type="text"
                  placeholder="Nome do Produto"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                  value={produto.nome}
                  onChange={(e) => atualizarProduto(index, 'nome', e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center border-b border-teal-500 py-2">
                <textarea
                  rows={2}
                  placeholder="Descrição do Produto"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                  value={produto.descricao}
                  onChange={(e) => atualizarProduto(index, 'descricao', e.target.value)}
                />
              </div>
              <div className="flex items-center border-b border-teal-500 py-2">
                <input
                  type="number"
                  min={1}
                  placeholder="Quantidade"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                  value={produto.quantidade}
                  onChange={(e) => atualizarProduto(index, 'quantidade', parseInt(e.target.value))}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={produto.fragil}
                  onChange={(e) => atualizarProduto(index, 'fragil', e.target.checked)}
                  id={`fragil-${index}`}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor={`fragil-${index}`} className="text-sm">Frágil</label>
              </div>
              <button
                type="button"
                onClick={() => removerProduto(index)}
                className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm mt-2"
              >
                <XCircle className="w-4 h-4" />
                Remover Produto
              </button>
            </div>
          </div>
        ))}

        <div className="text-right">
          <button
            type="button"
            onClick={adicionarProduto}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            <PlusCircle className="w-5 h-5" />
            Adicionar Produto
          </button>
        </div>

        <div className="pt-6 text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Enviar Solicitação
          </button>
        </div>
      </form>
    </>
  )
}
