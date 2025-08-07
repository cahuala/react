import Profissional from "../../hotel/model/Hotel";
import Service from "../../service/model/Service";
import User from "../../user/model/User";
export default interface Scheduling {
    id: string;
    data: Date;
    user: Partial<User>;
    professional: Partial<Profissional>;
    services: Partial<Service>[];
}
