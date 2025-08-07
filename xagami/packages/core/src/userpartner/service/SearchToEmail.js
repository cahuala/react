"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchUserPartnerToEmailClient {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(email) {
        const request = await this.repo.searchToEmail(email);
        return request;
    }
}
exports.default = SearchUserPartnerToEmailClient;
//# sourceMappingURL=SearchToEmail.js.map