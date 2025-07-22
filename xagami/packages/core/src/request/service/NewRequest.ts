import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Request from "../model/Request";
import RepositoryRequest from "../provider/RepositroyRequest";

type Entrada = {
    request: Request
    user: User
}

export default class NewRequest implements CaseOfUse<Entrada, void>{
    constructor(private readonly repo:RepositoryRequest) {}
    async execute(params: Entrada): Promise<void> {
        const { user, request } = params;
        
        if(user.id !== request.user.id) {
            throw new Error("Não é permitido solicitar para outro usuário");
        }
        await this.repo.save(request);
        
    }
}