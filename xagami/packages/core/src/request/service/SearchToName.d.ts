import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Request from "../model/Request";
import RepositoryRequest from "../provider/RepositroyRequest";
export default class SearchRequestToNameClient implements CaseOfUse<User, Request[]> {
    private readonly repo;
    constructor(repo: RepositoryRequest);
    execute(request: Request): Promise<Request[]>;
}
