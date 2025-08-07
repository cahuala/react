import CaseOfUse from "../../shared/CaseOfUse";
import Hotel from "../model/Hotel";
import RepositoryHotel from "../provider/RepositoryHotel";
export default class SearchHotel implements CaseOfUse<void, Hotel[]> {
    private readonly repo;
    constructor(repo: RepositoryHotel);
    execute(): Promise<Hotel[]>;
}
