import UserPartner from "../model/Userpartner";

export default interface RepositoryUserPartner{
    save(user:UserPartner): Promise<string>
    delete(id: string): Promise<void>
    searchToEmail(email: string): Promise<UserPartner | null>
    searchToId(id: string): Promise<UserPartner | null>
    searchToName(name: string): Promise<UserPartner[]>
}