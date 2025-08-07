import CaseOfUse from "../../shared/CaseOfUse";
import User from "../model/User";
import ProviderCrypto from "../provider/ProviderCrypto";
import RepositoryUser from "../provider/RepositoryUser";
type INPUT ={
    email:string
    password:string
}
export default class LoginUser implements CaseOfUse<INPUT,User>{
    constructor(
        private readonly repo:RepositoryUser,
        private readonly cripto: ProviderCrypto
    ){}
    async execute(input: INPUT): Promise<User> {
        const { email, password }= input
        const user = await this.repo.searchToEmail(email)
        if(!user) throw new Error('Usuário não encontrado')
        if (!user || !user.password) {
            throw new Error("Usuário não encontrado ou sem password.");
            }

            const similarPassword = await this.cripto.compare(password, user.password)
        if(!similarPassword) throw new Error('Senha incorrecta')
        
        delete user.password
        return user
    }
    
}