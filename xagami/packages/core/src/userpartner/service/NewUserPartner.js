"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NewRequest {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(params) {
        const { user, userpartner } = params;
        if (user.id !== userpartner.id) {
            throw new Error("Não é permitido ter mais de um registro");
        }
        let result = await this.repo.save(userpartner);
        return result;
    }
}
exports.default = NewRequest;
//# sourceMappingURL=NewUserPartner.js.map