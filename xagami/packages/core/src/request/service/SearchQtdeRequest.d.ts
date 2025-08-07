import CaseOfUse from "../../shared/CaseOfUse";
import RepositoryRequest from "../provider/RepositroyRequest";
type Input = {
    userId: string;
};
export default class SearchQtdeRequest implements CaseOfUse<Input, number> {
    private readonly repo;
    constructor(repo: RepositoryRequest);
    execute(input: Input): Promise<number>;
}
export {};
