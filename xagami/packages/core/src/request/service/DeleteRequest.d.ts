import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import RepositoryRequest from "../provider/RepositroyRequest";
type Input = {
    user: User;
    id: string;
};
export default class DeleteRequest implements CaseOfUse<Input, void> {
    private readonly repo;
    constructor(repo: RepositoryRequest);
    execute(input: Input): Promise<void>;
}
export {};
