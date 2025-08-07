"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SaveUser {
    repo;
    cypto;
    constructor(repo, cypto) {
        this.repo = repo;
        this.cypto = cypto;
    }
    async execute(user) {
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
        };
        let result = await this.repo.save(newUser);
        return result;
    }
}
exports.default = SaveUser;
//# sourceMappingURL=SaveUser.js.map