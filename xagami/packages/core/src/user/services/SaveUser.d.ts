import CaseOfUse from "../../shared/CaseOfUse";
import User from "../model/User";
import ProviderCrypto from "../provider/ProviderCrypto";
import RepositoryUser from "../provider/RepositoryUser";
type Id = {
    id: string;
};
export default class SaveUser implements CaseOfUse<User, Id> {
    private readonly repo;
    private readonly cypto;
    constructor(repo: RepositoryUser, cypto: ProviderCrypto);
    execute(user: User): Promise<Id>;
}
export {};
