/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';
import { toast } from 'react-hot-toast'
import useAPI from '../hooks/useAPI';
import useSection from '../hooks/useSection';
import { useRouter } from 'next/navigation';
export interface Produto {
  nome: string
  descricao: string
  quantidade: number
  fragil: boolean
  fotos: File[]
  previewIndex: number
  uploadProgress: number[]
}
export interface DeliveryContextProps {
    
    endereco: string;
    origem: string;
    destino: string;
    tipoSolicitacao: string;
    descricaoSolicitacao: string;
    produtos: Produto[];
    setEndereco: (endereco: string) => void;
    setOrigem: (origem: string) => void;
    setDestino: (destino: string) => void;
    setDescricaoSolicitacao: (descricao: string) => void;
    setProdutos: (produtos: Produto[]) => void;
    adicionarProduto: () => void;
    handleSubmit: (e: React.FormEvent) => void;
    removerProduto: (index: number) => void;
    limparFotos: (index: number) => void;
    handleFotoUpload: (index: number, files: FileList | null) => void;
    atualizarProduto: (index: number, campo: keyof Produto, valor: any) => void;
    clear: () => void;
    
}
const DeliveryContext = createContext<DeliveryContextProps>({} as any)

export function DeliveryContextProvider(props: any) {
    const [endereco, setEndereco] = useState('')
      const [origem, setOrigem] = useState('')
      const [destino, setDestino] = useState('')
      const tipoSolicitacao="entrega"
      const [descricaoSolicitacao, setDescricaoSolicitacao] = useState('')
      const [produtos, setProdutos] = useState<Produto[]>([])
      const { httpPost } = useAPI()
      const { user } = useSection()
      const router = useRouter()

       const adicionarProduto:any = () => {
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
  const handleSubmit =async (e: React.FormEvent) => {
      e.preventDefault()
      try{
      const id =  await httpPost('/entregas', {
                 endereco,
                 user,
                 origem,
                 tipoServico:'ENTREGA',
                 estado:'PENDENTE',
                 destino,
                 descricao:descricaoSolicitacao
    }); 
    //console.log(id)
    toast.success('Registro efectuado com sucesso!')
      //router.push('/dashboard/client/newdelivery')
      clear()
      }catch(error){
        console.error('Erro ao enviar entrega:', error)
        toast.error('Erro ao enviar entrega. Tente novamente.')
        return
      }
      
      
    }
        function clear(){
            setDestino('')
            setEndereco('')
            setOrigem('')
            setDescricaoSolicitacao('')
            setProdutos([])
        }
        
    return <DeliveryContext.Provider value={{
            origem,
            endereco,
            destino,
            tipoSolicitacao,
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
            adicionarProduto,
            clear

    }}>
            {props.children}
        </DeliveryContext.Provider>
    
}
export default DeliveryContext;