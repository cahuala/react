"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteRequest {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(input) {
        const { user, id } = input;
        const request = await this.repo.searchToId(id);
        if (!request) {
            throw new Error("Solicitação não encontrada!");
        }
        const client = request.user.email === user.email;
        if (!client) {
            throw new Error("Usuário não autorizado");
        }
        return this.repo.delete(id);
    }
}
exports.default = DeleteRequest;
//# sourceMappingURL=DeleteRequest.js.map