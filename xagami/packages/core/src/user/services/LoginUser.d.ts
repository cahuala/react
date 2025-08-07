import CaseOfUse from "../../shared/CaseOfUse";
import User from "../model/User";
import ProviderCrypto from "../provider/ProviderCrypto";
import RepositoryUser from "../provider/RepositoryUser";
type INPUT = {
    email: string;
    password: string;
};
export default class LoginUser implements CaseOfUse<INPUT, User> {
    private readonly repo;
    private readonly cripto;
    constructor(repo: RepositoryUser, cripto: ProviderCrypto);
    execute(input: INPUT): Promise<User>;
}
export {};
