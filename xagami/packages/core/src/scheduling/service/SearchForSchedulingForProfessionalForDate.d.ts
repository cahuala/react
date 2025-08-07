import CaseOfUse from "../../shared/CaseOfUse";
import Scheduling from "../model/Scheduling";
import RepositoryScheduling from "../provider/RepositoryScheduling";
type Input = {
    professionalId: number;
    date: Date;
};
export default class SearchForSchedulingForProfessionalForDate implements CaseOfUse<Input, Scheduling[]> {
    private readonly repo;
    constructor(repo: RepositoryScheduling);
    execute(input: Input): Promise<Scheduling[]>;
}
export {};
