import CaseOfUse from "../../shared/CaseOfUse";
import User from "../model/User";
import ProviderCrypto from "../provider/ProviderCrypto";
import RepositoryUser from "../provider/RepositoryUser";


export default class SaveUser implements CaseOfUse<User, void>{
    constructor(
        private readonly repo:RepositoryUser,
        private readonly cypto: ProviderCrypto
    ){}
    async execute(user: User): Promise<any> {
        const userExist = await this.repo.searchToEmail(user.email);
        if (userExist) {
        throw new Error('Usuário já existe');
        }
       if (!user?.password) {
        throw new Error("Senha do usuário não definida.");
        }

        const passwordCrypto = await this.cypto.crypto(user.password);

        const newUser = {
            ...user,
            password: passwordCrypto,
            barbeiro: false
        }
        await this.repo.save(newUser);
    }
}