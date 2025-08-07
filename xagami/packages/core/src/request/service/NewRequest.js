"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NewRequest {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(params) {
        const { user, request } = params;
        if (user.id !== request.user.id) {
            throw new Error("Não é permitido solicitar para outro usuário");
        }
        let result = await this.repo.save(request);
        return result;
    }
}
exports.default = NewRequest;
//# sourceMappingURL=NewRequest.js.map