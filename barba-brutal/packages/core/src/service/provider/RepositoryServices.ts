import Service from "../model/Service";

export default interface RepositoryService{
    searchAll(): Promise<Service[]>
}