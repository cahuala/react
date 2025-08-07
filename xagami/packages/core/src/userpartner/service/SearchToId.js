"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchToId {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(id) {
        const user = await this.repo.searchToId(id);
        return user;
    }
}
exports.default = SearchToId;
//# sourceMappingURL=SearchToId.js.map