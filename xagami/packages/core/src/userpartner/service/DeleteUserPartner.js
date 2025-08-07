"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteUserPartner {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(input) {
        const { user, id } = input;
        const userpartner = await this.repo.searchToId(id);
        if (!userpartner) {
            throw new Error("utilizador não encontrado!");
        }
        const client = userpartner.id === user.id;
        if (!client) {
            throw new Error("Usuário não autorizado");
        }
        return this.repo.delete(id);
    }
}
exports.default = DeleteUserPartner;
//# sourceMappingURL=DeleteUserPartner.js.map