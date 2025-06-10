import Service from "@/core/service/Service";

const services: Service[] = [
    {
        id: 1,
        name: "Corte de cabelo",
        description: "Corte de cabelo masculino com estilo.",
        price: 50,
        qtdeSlots: 10,
        imagemUrl: "/servicos/corte-de-cabelo.jpg"
    },
    {
        id: 2,
        name: "Barba",
        description: "Aparar e modelar a barba.",
        price: 30,
        qtdeSlots: 8,
        imagemUrl: "/servicos/corte-de-barba.jpg"
    },
    {
        id: 3,
        name: "Penteado",
        description: "Penteado especial para ocasiões.",
        price: 70,
        qtdeSlots: 5,
        imagemUrl: "/servicos/corte-infantil.jpg"
    },
    {
        id: 4,
        name: "Corte de noivo",
        description: "Corte de cabelo para crianças.",
        price: 40,
        qtdeSlots: 6,
        imagemUrl: "/servicos/dia-de-noivo.jpg"
    },
    {
        id: 5,
        name: "Manicure",
        description: "Serviço de depilação facial e corporal.",
        price: 60,
        qtdeSlots: 4,
        imagemUrl: "/servicos/manicure-pedicure.jpg"
    },
    {
        id: 6,
        name: "Depilação",
        description: "Serviço de depilação facial e corporal.",
        price: 45,
        qtdeSlots: 3,
        imagemUrl: "/servicos/combo.jpg"
    }
];
export default services;