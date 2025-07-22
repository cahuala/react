import Order from "../model/Orders"

export default interface RepositoryOrder{
    save(order: Order): Promise<void>
    searchToEmail(email: string): Promise<Order[]>
    searchToId(id: number): Promise<Order | null>
    searchToOrderANDData(orderId: number, data: Date): Promise<Order[]>
    delete(id: number): Promise<void>
}