import Scheduling from '../model/Scheduling';
export default interface RepositoryScheduling {
    save(scheduling: Scheduling): Promise<void>;
    searchToEmail(email: string): Promise<Scheduling[]>;
    searchToId(id: number): Promise<Scheduling | null>;
    searchToProfessionalANDData(professionalId: number, data: Date): Promise<Scheduling[]>;
    delete(id: number): Promise<void>;
}
