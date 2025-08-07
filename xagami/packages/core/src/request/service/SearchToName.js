"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchRequestToNameClient {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(request) {
        const requests = await this.repo.searchToName(request.descricao);
        return requests;
    }
}
exports.default = SearchRequestToNameClient;
//# sourceMappingURL=SearchToName.js.map