import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import NossosServices from "@/components/services/NossosServices";
import SessionBackground from '../components/shared/SessionBackground';
import Footer from "@/components/shared/Footer";

import Slogan from "@/components/landing/Slogan";
import NossosClients from "@/components/clients/NossosClients";


export default function Landing() {
  return (
    <div className="flex flex-col">
      <Slogan/>
      
      <SessionBackground image="/banners/servicos.webp">
        <NossosServices />
      </SessionBackground>
      <SessionBackground image="/banners/profissionais.webp">
          <NossosProfissionais/>

      </SessionBackground>
      <SessionBackground image="/banners/clientes.webp">
          <NossosClients/>

      </SessionBackground>
      <Footer/>
    </div>
  );
}
