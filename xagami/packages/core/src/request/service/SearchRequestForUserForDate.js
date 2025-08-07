"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchRequestForUserForDate {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    execute(input) {
        const { userId, date } = input;
        return this.repo.searchToUserANDData(userId, date);
    }
}
exports.default = SearchRequestForUserForDate;
//# sourceMappingURL=SearchRequestForUserForDate.js.map