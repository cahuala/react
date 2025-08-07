import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Scheduling from "../model/Scheduling";
import RepositoryScheduling from "../provider/RepositoryScheduling";
type Entrada = {
    scheduling: Scheduling;
    user: User;
};
export default class NewScheduling implements CaseOfUse<Entrada, void> {
    private readonly repo;
    constructor(repo: RepositoryScheduling);
    execute(params: Entrada): Promise<void>;
}
export {};
