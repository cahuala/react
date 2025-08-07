import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import UserPartner from "../model/Userpartner";
import RepositoryUserPartner from "../provider/RepositoryUserPartner";

type Entrada = {
    userpartner: UserPartner
    user: User
}
type Id={
    id: string
}

export default class NewRequest implements CaseOfUse<Entrada, Id>{
    constructor(private readonly repo:RepositoryUserPartner) {}
    async execute(params: Entrada): Promise<Id> {
        const { user, userpartner } = params;
        
        if(user.id !== userpartner.id) {
            throw new Error("Não é permitido ter mais de um registro");
        }
         let result: any = await this.repo.save(userpartner);
         return result; 
        
    }
}