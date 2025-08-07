import CaseOfUse from "../../shared/CaseOfUse";
import Logistica from "../model/Logistica";
import RepositoryLogistica from "../provider/RepositoryLogistica";


export default class SearchLogistica implements CaseOfUse<void,Logistica[]>{
    constructor(
        private readonly repo:RepositoryLogistica
    ){}
    async execute(): Promise<Logistica[]> {
        return this.repo.searchAll();
    }
}