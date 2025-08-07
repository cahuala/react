import CaseOfUse from "../../shared/CaseOfUse";
import User  from "../../user/model/User";
import RepositoryScheduling from "../provider/RepositoryScheduling";
type Input = {
    user:User
    id:number
}
export default class DeleteScheduling implements CaseOfUse<Input,void>{
    constructor(private readonly repo: RepositoryScheduling) {}
        
    async execute(input: Input): Promise<void> {
        const { user, id } = input;
        const scheduling = await this.repo.searchToId(id);
        if (!scheduling) {
            throw new Error("Scheduling not found");
        }
        const client = scheduling.user.email === user.email;
        
        if(!client){
            throw new Error("Usuário não autorizado")
        }
        return this.repo.delete(id);
    }
}