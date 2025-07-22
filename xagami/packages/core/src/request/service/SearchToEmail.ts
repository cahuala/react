import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Request from "../model/Request";
import RepositoryRequest from "../provider/RepositroyRequest";

export default class SearchRequestToEmailClient implements CaseOfUse<User,Request[]> {
    constructor(private readonly repo: RepositoryRequest) {}
    async execute(user: User): Promise<Request[]>{
      const request = await this.repo.searchToEmail(user.email);
      return request;
    } 
}