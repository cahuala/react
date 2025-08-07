import CaseOfUse from "../../shared/CaseOfUse";
import User from "../../user/model/User";
import Userpartner from "../model/Userpartner";
import RepositoryUserPartner from "../provider/RepositoryUserPartner";

export default class SearchToId implements CaseOfUse<User, Userpartner | null> {
    constructor(private readonly repo: RepositoryUserPartner) {}

    async execute(id: string): Promise<Userpartner | null> {
        const user = await this.repo.searchToId(id);
        return user as any;
    }

}