import Logistica from "../model/Logistica";
export default interface RepositoryLogistica {
    searchAll(): Promise<Logistica[]>;
}
