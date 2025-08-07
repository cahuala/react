"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchUserPartnerToName {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(name) {
        const userPartners = await this.repo.searchToName(name);
        return userPartners;
    }
}
exports.default = SearchUserPartnerToName;
//# sourceMappingURL=SearchToName.js.map