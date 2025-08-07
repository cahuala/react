import Hotel from "../model/Hotel";
export default interface RepositoryHotel {
    searchAll(): Promise<Hotel[]>;
}
