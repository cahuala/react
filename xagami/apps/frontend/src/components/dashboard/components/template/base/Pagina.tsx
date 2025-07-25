/* eslint-disable @typescript-eslint/no-explicit-any */
import Cabecalho from '../cabecalho/Cabecalho'
import Rodape from '../rodape/Rodape'

interface PaginaProps {
    children: any
    titulo?: string
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={props.className ?? ''}>
            <Cabecalho />
            <div className="p-7 flex-1">{props.children}</div>
            <Rodape />
        </div>
    )
}
