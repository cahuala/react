import Image from "next/image";
import Header from "../shared/Header";
import Link from "next/link";

export default function Slogan(){
    return(
        <div className="relative h-[450px] sm:h-[700px]">
            <Image src="/banners/principal.JPG" fill className="object-cover" alt="Xagami"/>
            <div className="flex flex-col items-center absolute top-0 left-0 w-full h-full bg-black/40">
                <Header/>
               <div className="flex flex-col justify-center items-center flex-1 gap-5">
              <h1 className="flex flex-col items-center">
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient">
                  Xagami
                </span>
              </h1>

  <div className="max-w-3xl px-4">
    <p className="text-center text-white text-lg sm:text-xl lg:text-2xl font-light text-white-800">
      Integramos transporte eficiente com hospedagem de qualidade
      para oferecer a melhor experiência em viagens corporativas e turísticas.
    </p>
  </div>

  <div className="flex gap-4 flex-wrap justify-center">
    <Link
      href="/scheduling"
      className="
        bg-[#3664f4] hover:bg-[#274fd3]
        text-white font-semibold text-base md:text-lg
        px-5 py-2 rounded-full transition
      "
    >
      Nossos Serviços
    </Link>

    <Link
      href="/scheduling"
      className="
        bg-[#3664f4] hover:bg-[#274fd3]
        text-white font-semibold text-base md:text-lg
        px-5 py-2 rounded-full transition
      "
    >
      Fale Conosco
    </Link>
  </div>
</div>

            </div>
                  
        </div>
    )
}