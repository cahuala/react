// components/DashboardCards.tsx
import {
  UserRound,
  Hotel,
  Briefcase,
  PackageSearch,
} from 'lucide-react';

const cards = [
  {
    title: 'Minhas Entregas',
    value: 12,
    icon: PackageSearch,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Hotéis Reservados',
    value: 4,
    icon: Hotel,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Serviços Solicitados',
    value: 7,
    icon: Briefcase,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Meu Perfil',
    value: 1,
    icon: UserRound,
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition"
          >
            <div className="space-y-1">
              <p className="text-gray-500 text-sm">{card.title}</p>
              <h2 className="text-3xl font-bold text-gray-800">{card.value}</h2>
            </div>
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${card.color}`}
            >
              <Icon className="w-6 h-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
