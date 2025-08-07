import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Request from "../model/Request";
import RepositoryRequest from "../provider/RepositroyRequest";
type Entrada = {
    request: Request;
    user: User;
};
type Id = {
    id: string;
};
export default class NewRequest implements CaseOfUse<Entrada, Id> {
    private readonly repo;
    constructor(repo: RepositoryRequest);
    execute(params: Entrada): Promise<Id>;
}
export {};
