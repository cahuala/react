import CaseOfUse from "../../shared/CaseOfUse";
import Profissional from "../model/Profissional";
import RepositoryProfessional from "../provider/RepositoryProfessional";


export default class SearchProfessional implements CaseOfUse<void,Profissional[]>{
    constructor(
        private readonly repo:RepositoryProfessional
    ){}
    async execute(): Promise<Profissional[]> {
        return this.repo.searchAll();
    }
}