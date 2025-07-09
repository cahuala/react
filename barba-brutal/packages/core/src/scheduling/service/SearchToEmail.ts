import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Scheduling from "../model/Scheduling";
import RepositoryScheduling from "../provider/RepositoryScheduling";

export default class SearchSchedulingToEmailClient implements CaseOfUse<User,Scheduling[]> {
    constructor(private readonly repo: RepositoryScheduling) {}
    async execute(user: User): Promise<Scheduling[]>{
      const scheduling = await this.repo.searchToEmail(user.email);
      return scheduling;
    } 
}