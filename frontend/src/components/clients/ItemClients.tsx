'use client'

export interface ItemClientProps {
    
    name: string
    testemunho:string
}
export default function ItemClient(props: ItemClientProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, testemunho } = props;
  return (
    <div>
        <p className="font-bold text-4xl text-white">{name}</p>
        <p className="my-4 text-zinc-50">{testemunho}</p>
       
    </div>
  );
}