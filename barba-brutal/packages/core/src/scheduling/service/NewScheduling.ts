import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Scheduling from "../model/Scheduling";
import RepositoryScheduling from "../provider/RepositoryScheduling";

type Entrada = {
    scheduling: Scheduling
    user: User
}

export default class NewScheduling implements CaseOfUse<Entrada, void>{
    constructor(private readonly repo:RepositoryScheduling) {}
    async execute(params: Entrada): Promise<void> {
        const { user, scheduling } = params;
        
        if(user.id !== scheduling.user.id) {
            throw new Error("Não é permitido agendar para outro usuário");
        }
        await this.repo.save(scheduling);
        
    }
}