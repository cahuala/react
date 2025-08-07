"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NewScheduling {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(params) {
        const { user, scheduling } = params;
        if (user.id !== scheduling.user.id) {
            throw new Error("Não é permitido agendar para outro usuário");
        }
        await this.repo.save(scheduling);
    }
}
exports.default = NewScheduling;
//# sourceMappingURL=NewScheduling.js.map