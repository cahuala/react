import CaseOfUse from "../../shared/CaseOfUse";
import Request from "../model/Request";
import RepositoryRequest from "../provider/RepositroyRequest";
type Input = {
    userId: string;
    date: Date;
};
export default class SearchRequestForUserForDate implements CaseOfUse<Input,Request[]> {
    constructor(private readonly repo:RepositoryRequest){}
    execute(input: Input): Promise<Request[]>{
        const { userId, date } = input;
        return this.repo.searchToUserANDData(userId, date);
    }
}