import Request from "../model/Request"

export default interface RepositoryRequest{
    save(order: Request): Promise<string>
    searchToEmail(email: string): Promise<Request[]>
    searchToName(name: String): Promise<Request[]>
    searchToId(id: string): Promise<Request | null>
    searchToUserANDData(userId: string, data: Date): Promise<Request[]>
    searchQtdeRequest(userId:string):Promise<number | 0>
    delete(id: string): Promise<void>
}