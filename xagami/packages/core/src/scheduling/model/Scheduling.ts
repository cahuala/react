import Profissional from "../../profissional/model/Profissional";
import Service from "../../service/model/Service";
import User from "../../user/model/User";

export default interface Scheduling {
    id: number;
    data: Date;
    user:Partial<User>;
    professional: Partial<Profissional>;
    services: Partial<Service>[];
}