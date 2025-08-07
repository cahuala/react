import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import UserPartner from "../model/Userpartner";
import RepositoryUserPartner from "../provider/RepositoryUserPartner";
export default class SearchUserPartnerToName implements CaseOfUse<User, UserPartner[] | null> {
    private readonly repo;
    constructor(repo: RepositoryUserPartner);
    execute(name: string): Promise<UserPartner[] | null>;
}
