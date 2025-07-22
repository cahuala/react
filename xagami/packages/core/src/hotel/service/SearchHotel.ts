import CaseOfUse from "../../shared/CaseOfUse";
import Hotel from "../model/Hotel";
import RepositoryHotel from "../provider/RepositoryHotel";


export default class SearchHotel implements CaseOfUse<void,Hotel[]>{
    constructor(
        private readonly repo:RepositoryHotel
    ){}
    async execute(): Promise<Hotel[]> {
        return this.repo.searchAll();
    }
}