"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchLogistica {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute() {
        return this.repo.searchAll();
    }
}
exports.default = SearchLogistica;
//# sourceMappingURL=SearchLogistica.js.map