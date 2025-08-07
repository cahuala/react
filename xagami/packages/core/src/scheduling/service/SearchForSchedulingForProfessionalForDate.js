"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchForSchedulingForProfessionalForDate {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    execute(input) {
        const { professionalId, date } = input;
        return this.repo.searchToProfessionalANDData(professionalId, date);
    }
}
exports.default = SearchForSchedulingForProfessionalForDate;
//# sourceMappingURL=SearchForSchedulingForProfessionalForDate.js.map