import CaseOfUse from "../../shared/CaseOfUse";
import User  from "../../user/model/User";
import RepositoryRequest from "../provider/RepositroyRequest";
type Input = {
    user:User
    id:string
}
export default class DeleteRequest implements CaseOfUse<Input,void>{
    constructor(private readonly repo: RepositoryRequest) {}
        
    async execute(input: Input): Promise<void> {
        const { user, id } = input;
        const request = await this.repo.searchToId(id);
        if (!request) {
            throw new Error("Solicitação não encontrada!");
        }
        const client = request.user.email === user.email;
        if(!client){
            throw new Error("Usuário não autorizado")
        }
        return this.repo.delete(id);
    }
}