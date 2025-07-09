import User from "../model/User";

export default interface RepositoryUser{
    save(user:User): Promise<void>
    searchToEmail(email: string): Promise<User | null>
}