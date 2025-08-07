"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchHotel {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute() {
        return this.repo.searchAll();
    }
}
exports.default = SearchHotel;
//# sourceMappingURL=SearchHotel.js.map