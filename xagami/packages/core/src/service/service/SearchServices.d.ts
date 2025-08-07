import CaseOfUse from "../../shared/CaseOfUse";
import Service from "../model/Service";
import RepositoryServices from "../provider/RepositoryServices";
export default class SearchService implements CaseOfUse<void, Service[]> {
    private readonly repo;
    constructor(repo: RepositoryServices);
    execute(): Promise<Service[]>;
}
