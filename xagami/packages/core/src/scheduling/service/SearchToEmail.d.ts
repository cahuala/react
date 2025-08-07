import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Scheduling from "../model/Scheduling";
import RepositoryScheduling from "../provider/RepositoryScheduling";
export default class SearchSchedulingToEmailClient implements CaseOfUse<User, Scheduling[]> {
    private readonly repo;
    constructor(repo: RepositoryScheduling);
    execute(user: User): Promise<Scheduling[]>;
}
