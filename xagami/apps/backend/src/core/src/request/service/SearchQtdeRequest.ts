import CaseOfUse from "../../shared/CaseOfUse";
import RepositoryRequest from "../provider/RepositroyRequest";
type Input = {
    userId: string;
};
export default class SearchQtdeRequest implements CaseOfUse<Input,number> {
    constructor(private readonly repo:RepositoryRequest){}
    execute(input: Input): Promise<number>{
        const { userId } = input;
        return this.repo.searchQtdeRequest(userId);
    }
}