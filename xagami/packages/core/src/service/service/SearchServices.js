"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute() {
        return this.repo.searchAll();
    }
}
exports.default = SearchService;
//# sourceMappingURL=SearchServices.js.map