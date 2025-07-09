import CaseOfUse from "../../shared/CaseOfUse";
import Service from "../model/Service";
import RepositoryServices from "../provider/RepositoryServices";


export default class SearchService implements CaseOfUse<void,Service[]>{
    constructor(
        private readonly repo:RepositoryServices
    ){}
    async execute(): Promise<Service[]> {
        return this.repo.searchAll();
    }
}