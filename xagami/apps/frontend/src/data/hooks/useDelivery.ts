'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { toast } from 'react-hot-toast'
interface Produto {
  nome: string
  descricao: string
  quantidade: number
  fragil: boolean
  fotos: File[]
  previewIndex: number
  uploadProgress: number[]
}
export default function useDelivery(){
      const [endereco, setEndereco] = useState('')
      const [origem, setOrigem] = useState('')
      const [destino, setDestino] = useState('')
        const tipoSolicitacao="entrega"
      const [descricaoSolicitacao, setDescricaoSolicitacao] = useState('')
      const [produtos, setProdutos] = useState<Produto[]>([])

       const adicionarProduto = () => {
        setProdutos([
        ...produtos,
        {
            nome: '',
            descricao: '',
            quantidade: 1,
            fragil: false,
            fotos: [],
            previewIndex: 0,
            uploadProgress: [],
        },
        ])
        }
        const atualizarProduto = (index: number, campo: keyof Produto, valor: any) => {
        setProdutos((prev:any) => {
        const novos = [...prev]
        novos[index][campo] = valor
        return novos
        })
    }
     const handleFotoUpload = (index: number, files: FileList | null) => {
        if (files) {
        const novos = [...produtos]
        const novasFotos = Array.from(files)

        novasFotos.forEach((file) => {
            novos[index].fotos.push(file)
            novos[index].uploadProgress.push(0)
        })

      setProdutos(novos)

      novasFotos.forEach((_, idx) => {
        iniciarUploadSimulado(index, novos[index].fotos.length - novasFotos.length + idx)
      })
    }
  }
  const iniciarUploadSimulado = (produtoIndex: number, fotoIndex: number) => {
    let progresso = 0
    const interval = setInterval(() => {
      progresso += 10
      setProdutos((prev) => {
        const atual = [...prev]
        if (atual[produtoIndex]) {
          atual[produtoIndex].uploadProgress[fotoIndex] = progresso
        }
        return atual
      })
      if (progresso >= 100) clearInterval(interval)
    }, 100)
  }
  const limparFotos = (index: number) => {
    setProdutos((prev) => {
      const novos = [...prev]
      novos[index].fotos = []
      novos[index].previewIndex = 0
      novos[index].uploadProgress = []
      return novos
    })
  }
 const removerProduto = (index: number) => {
    setProdutos((prev) => {
      const novos = [...prev]
      novos.splice(index, 1)
      return novos
    })
  }
  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log({ endereco, origem, destino,tipoSolicitacao, descricaoSolicitacao, produtos })
      toast.success('Registro efectuado com sucesso!')
    }

    return {
     origem,
     endereco,
     destino,
     descricaoSolicitacao,
     produtos, 
     setDestino,
     setProdutos,
     setEndereco,
     setDescricaoSolicitacao,
     setOrigem,
     handleSubmit,
     removerProduto,
     limparFotos,
     handleFotoUpload,
     atualizarProduto,
     adicionarProduto
    
    }
      
}