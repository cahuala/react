/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Link from 'next/link';
import Logo from './Logo';
import useSection from '@/data/hooks/useSection';
import MenuUser from './MenuUser';
export default function header(){
    const { user } = useSection()
    return (<header className='flex items-center h-24 bg-black/60 self-stretch'>
        <nav className='flex items-center justify-between container'>
            <Logo/>
            <div>
                {user ?(
                    <MenuUser/>
                ):(
                    <Link href="/login">Entrar</Link>
                )}
            </div>
        </nav>
        </header>
    )
}