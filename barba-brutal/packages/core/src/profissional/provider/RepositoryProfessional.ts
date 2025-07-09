import Profissional from "../model/Profissional";

export default interface RepositoryProfessional{
    searchAll(): Promise<Profissional[]>
}