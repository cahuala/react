"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteScheduling {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(input) {
        const { user, id } = input;
        const scheduling = await this.repo.searchToId(id);
        if (!scheduling) {
            throw new Error("Scheduling not found");
        }
        const client = scheduling.user.email === user.email;
        if (!client) {
            throw new Error("Usuário não autorizado");
        }
        return this.repo.delete(id);
    }
}
exports.default = DeleteScheduling;
//# sourceMappingURL=DeleteScheduling.js.map