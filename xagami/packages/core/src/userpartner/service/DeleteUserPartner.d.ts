import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import RepositoryUserPartner from "../provider/RepositoryUserPartner";
type Input = {
    user: User;
    id: string;
};
export default class DeleteUserPartner implements CaseOfUse<Input, void> {
    private readonly repo;
    constructor(repo: RepositoryUserPartner);
    execute(input: Input): Promise<void>;
}
export {};
