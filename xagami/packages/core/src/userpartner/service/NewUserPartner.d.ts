import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import UserPartner from "../model/Userpartner";
import RepositoryUserPartner from "../provider/RepositoryUserPartner";
type Entrada = {
    userpartner: UserPartner;
    user: User;
};
type Id = {
    id: string;
};
export default class NewRequest implements CaseOfUse<Entrada, Id> {
    private readonly repo;
    constructor(repo: RepositoryUserPartner);
    execute(params: Entrada): Promise<Id>;
}
export {};
