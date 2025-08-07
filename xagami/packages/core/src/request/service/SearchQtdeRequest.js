"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchQtdeRequest {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    execute(input) {
        const { userId } = input;
        return this.repo.searchQtdeRequest(userId);
    }
}
exports.default = SearchQtdeRequest;
//# sourceMappingURL=SearchQtdeRequest.js.map