 export default interface Profissional {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    avaliacao: number;
    qtdeAvaliacao: number;
    price?:number;
   location?:string
 }