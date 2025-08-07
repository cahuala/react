import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Request from "../model/Request";
import RepositoryRequest from "../provider/RepositroyRequest";

type Entrada = {
    request: Request
    user: User
}
type Id={
    id: string
}

export default class NewRequest implements CaseOfUse<Entrada, Id>{
    constructor(private readonly repo:RepositoryRequest) {}
    async execute(params: Entrada): Promise<Id> {
        const { user, request } = params;
        
        if(user.id !== request.user.id) {
            throw new Error("Não é permitido solicitar para outro usuário");
        }
         let result: any = await this.repo.save(request);
         return result; 
        
    }
}