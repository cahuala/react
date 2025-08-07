import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Userpartner from "../model/Userpartner";
import RepositoryUserPartner from "../provider/RepositoryUserPartner";
export default class SearchToId implements CaseOfUse<User, Userpartner | null> {
    private readonly repo;
    constructor(repo: RepositoryUserPartner);
    execute(id: string): Promise<Userpartner | null>;
}
