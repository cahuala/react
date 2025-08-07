"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchRequestToEmailClient {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(user) {
        const request = await this.repo.searchToEmail(user.email);
        return request;
    }
}
exports.default = SearchRequestToEmailClient;
//# sourceMappingURL=SearchToEmail.js.map