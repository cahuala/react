import CaseOfUse from "../../shared/CaseOfUse";
import User  from "../../user/model/User";
import RepositoryUserPartner from "../provider/RepositoryUserPartner";
type Input = {
    user:User
    id:string
}
export default class DeleteUserPartner implements CaseOfUse<Input,void>{
    constructor(private readonly repo: RepositoryUserPartner) {}
        
    async execute(input: Input): Promise<void> {
        const { user, id } = input;
        const userpartner = await this.repo.searchToId(id);
        if (!userpartner) {
            throw new Error("utilizador não encontrado!");
        }
        const client = userpartner.id === user.id;
        if(!client){
            throw new Error("Usuário não autorizado")
        }
        return this.repo.delete(id);
    }
}