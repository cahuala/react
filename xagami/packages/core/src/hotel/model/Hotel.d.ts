export default interface Hotel {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    avaliacao: number;
    qtdeAvaliacao: number;
    price?: number;
    location?: string;
}
