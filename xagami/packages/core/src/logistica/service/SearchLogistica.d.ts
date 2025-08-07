import CaseOfUse from "../../shared/CaseOfUse";
import Logistica from "../model/Logistica";
import RepositoryLogistica from "../provider/RepositoryLogistica";
export default class SearchLogistica implements CaseOfUse<void, Logistica[]> {
    private readonly repo;
    constructor(repo: RepositoryLogistica);
    execute(): Promise<Logistica[]>;
}
