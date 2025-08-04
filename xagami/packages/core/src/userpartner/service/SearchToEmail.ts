import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import UserPartner from "../model/Userpartner";
import RepositoryUserPartner from "../provider/RepositoryUserPartner";

export default class SearchUserPartnerToEmailClient implements CaseOfUse<User,UserPartner[]> {
    constructor(private readonly repo: RepositoryUserPartner) {}
    async execute(email: string): Promise<UserPartner[]>{
      const request = await this.repo.searchToEmail(email);
      return request as any;
    } 
}