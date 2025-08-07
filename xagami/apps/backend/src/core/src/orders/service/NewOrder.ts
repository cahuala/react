import CaseOfUse from "../../shared/CaseOfUse";
import Request from "../../request/model/Request";
import Order from '../model/Orders';
import RepositoryOrder from "../provider/RepositoryOrder";
import User from "../../user/model/User";

type Entrada = {
    order: Order
    solicitacao: Request
    user:User
}

export default class NewOrder implements CaseOfUse<Entrada, void>{
    constructor(private readonly repo:RepositoryOrder) {}
    async execute(params: Entrada): Promise<void> {
        const { solicitacao, order, user } = params;
        
        if(solicitacao.user.id !== user.id) {
            throw new Error("Não é permitido agendar para outro usuário");
        }
        await this.repo.save(order);
        
    }
}