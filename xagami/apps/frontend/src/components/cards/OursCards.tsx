'use client'
import { Users,Hotel, BusFront } from 'lucide-react';// ícone opcional (usando lucide-react)
import StatCard from '@/components/shared/Cards';

export default function Dashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-3 px-4">
      <StatCard
        title="Hotéis"
        value={1200}
        icon={<Hotel className="w-6 h-6" />}
      />
      <StatCard
        title="Transportes"
        value={3000}
        icon={<BusFront className="w-6 h-6" />}
        color="#10b981" // verde
      />
      <StatCard
        title="Clientes"
        value={7658}
        icon={<Users className="w-6 h-6" />}
        color="#f59e0b" // amarelo
      />
      
    </div>
  );
}
