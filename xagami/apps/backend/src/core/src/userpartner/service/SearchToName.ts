import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import UserPartner from "../model/Userpartner";
import RepositoryUserPartner from "../provider/RepositoryUserPartner";

export default class SearchUserPartnerToName implements CaseOfUse<User,UserPartner[] | null> {
    constructor(private readonly repo: RepositoryUserPartner) {}
    async execute(name: string): Promise<UserPartner[] | null> {
      const userPartners = await this.repo.searchToName(name);
      return userPartners;
    } 
}