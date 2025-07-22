import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Request from "../model/Request";
import RepositoryRequest from "../provider/RepositroyRequest";

export default class SearchRequestToNameClient implements CaseOfUse<User,Request[]> {
    constructor(private readonly repo: RepositoryRequest) {}
    async execute(request: Request): Promise<Request[]>{
      const requests = await this.repo.searchToName(request.descricao);
      return requests;
    } 
}