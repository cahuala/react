"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginUser {
    repo;
    cripto;
    constructor(repo, cripto) {
        this.repo = repo;
        this.cripto = cripto;
    }
    async execute(input) {
        const { email, password } = input;
        const user = await this.repo.searchToEmail(email);
        if (!user)
            throw new Error('Usuário não encontrado');
        if (!user || !user.password) {
            throw new Error("Usuário não encontrado ou sem password.");
        }
        const similarPassword = await this.cripto.compare(password, user.password);
        if (!similarPassword)
            throw new Error('Senha incorrecta');
        delete user.password;
        return user;
    }
}
exports.default = LoginUser;
//# sourceMappingURL=LoginUser.js.map