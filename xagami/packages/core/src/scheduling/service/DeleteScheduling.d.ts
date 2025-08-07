import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import RepositoryScheduling from "../provider/RepositoryScheduling";
type Input = {
    user: User;
    id: number;
};
export default class DeleteScheduling implements CaseOfUse<Input, void> {
    private readonly repo;
    constructor(repo: RepositoryScheduling);
    execute(input: Input): Promise<void>;
}
export {};
