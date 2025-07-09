'use client'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../shared/Logo';
import useFormAuth from '@/data/hooks/useFormAuth';
import InputPassword from '../shared/form/InputPassword';
import InputText from '../shared/form/InputText';
import InputTelefone from '../shared/form/InputTelefone';
import InputEmail from '../shared/form/InputEmail';
export default function FormAuth(){
    
    const {name,email,password,
        mode,telefone,
        alterName,
        alterEmail,
        alterPassword,
        alterTelefone, 
        alterMode,submeter} = useFormAuth()
  
    return (
        <div className="h-screen">
            <Image src="/banners/principal.webp" fill alt="Banner" />
            <div className='
                flex justify-center items-center
                flex-col gap-10
                absolute top-0 left-0 w-full h-full
                bg-black/85
            '>
                <Logo width={250} height={250}/>
                <div>
                    { mode ==='login'?(
                        <h1 className="text-2xl font-thin">Seja bem vindo</h1>
                    ):(
                        <h1 className="text-2xl font-thin">Cadastre-se</h1>
                    )

                    }
                </div>
                <div className="flex flex-col gap-4 w-96">
                    { mode ==='cadastro' &&(
                       <InputText placeholder="Nome" value={name} onChangeText={alterName}/>
                    )}
                    <InputEmail placeholder="E-mail" value={email} onChangeText={alterEmail} />
                    <InputPassword placeholder="Senha" value={password} onChangeText={alterPassword}/>
                     { mode ==='cadastro' &&(
                        <InputTelefone placeholder="Telefone" value={telefone} onChangeText={alterTelefone} />
                     )}
                    <div className='flex gap-2'>
                        <button onClick={submeter} className='button flex-1 bg-green-600'>
                            { mode ==='cadastro' ? (
                             <span>Cadastrar</span> 
                             ):(
                                <span>Entrar</span>
                             )}
                        </button>
                        <Link href="/" className='button flex-1 flex justify-center' >Cancelar</Link>
                    </div>
                    <div className='flex mt-6'>
                        <button className="flex-1" onClick={alterMode}>
                           { mode ==='login' ? (
                               <div>Ainda não tem conta? <span className="text-yellow-400 font-bold">Cadastre-se</span> </div> 
                            ):(
                              <div>Já tem conta? <span className="text-yellow-400 font-bold">Entre na Plataforma!</span> </div>
                           )} 
                        </button>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}