import services from "@/data/constants/services";
import ItemService from "@/components/services/ItemService";
import TitleSession from "../shared/TitleSession";
export default function NossosServices() {
  return (
    <div className="flex flex-col gap-y-16">
       <TitleSession main="Nossos Serviços" secundary="Os nossos barbeiros e barbeiras negros são profissionais experientes, apaixonados pela arte do cuidado pessoal e atentos às tendências modernas." tag="Serviços"/>
      <div className="grid grid-cols-1 xl:grid-cols-3  lg:grid-cols-2 gap-4 p-4">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          services.map((service) => (
            <ItemService key={service.id} service={service}/>
              
          ))
        }
      </div>
    </div>
  );
}