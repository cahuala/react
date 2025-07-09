import { Service } from "../service";

const services: Service[] = [
    {
        id: 1,
        name: "Gestão de Reservas",
        description: "Sistema integrado para reservas de hotéis e transportes com facilidade e segurança.",
        price: 50,
        qtdeSlots: 10,
        imagemUrl: "/servicos/reservas.png"
    },
    {
        id: 2,
        name: "Pacotes Corporativos",
        description: "Soluções personalizados para empresas com transportes, hospedagem e serviços exclusivos",
        price: 30,
        qtdeSlots: 8,
        imagemUrl: "/servicos/corporativo.png"
    },
    {
        id: 3,
        name: "Relatórios Personalizados",
        description: "Dados analíticos completos para optimização de custos e planeamento de viagens.",
        price: 70,
        qtdeSlots: 5,
        imagemUrl: "/servicos/relatorios.png"
    },
    {
        id: 4,
        name: "Rastreamento em Tempo Real",
        description: "Monitoramento de transportes e status de hospedagem pelo app ou site.",
        price: 40,
        qtdeSlots: 6,
        imagemUrl: "/servicos/rastreamento.png"
    },
    {
        id: 5,
        name: "Suporte 24/7",
        description: "Atendimento especializado sempre disponível para resolver qualquer imprevisto.",
        price: 60,
        qtdeSlots: 4,
        imagemUrl: "/servicos/suporte.png"
    },
    {
        id: 6,
        name: "Pagamentos Seguros",
        description: "Múltiplas formas de pagamento com total segurança e facilidade.",
        price: 45,
        qtdeSlots: 3,
        imagemUrl: "/servicos/seguros.png"
    }
];
export default services;