"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchSchedulingToEmailClient {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(user) {
        const scheduling = await this.repo.searchToEmail(user.email);
        return scheduling;
    }
}
exports.default = SearchSchedulingToEmailClient;
//# sourceMappingURL=SearchToEmail.js.map