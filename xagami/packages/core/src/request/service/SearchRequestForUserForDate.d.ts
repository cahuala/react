import CaseOfUse from "../../shared/CaseOfUse";
import Request from "../model/Request";
import RepositoryRequest from "../provider/RepositroyRequest";
type Input = {
    userId: string;
    date: Date;
};
export default class SearchRequestForUserForDate implements CaseOfUse<Input, Request[]> {
    private readonly repo;
    constructor(repo: RepositoryRequest);
    execute(input: Input): Promise<Request[]>;
}
export {};
