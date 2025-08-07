import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import UserPartner from "../model/Userpartner";
import RepositoryUserPartner from "../provider/RepositoryUserPartner";
export default class SearchUserPartnerToEmailClient implements CaseOfUse<User, UserPartner[]> {
    private readonly repo;
    constructor(repo: RepositoryUserPartner);
    execute(email: string): Promise<UserPartner[]>;
}
