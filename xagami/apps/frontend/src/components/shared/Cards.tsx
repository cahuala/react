// components/StatCard.tsx
import CountUp from 'react-countup';

interface StatCardProps {
  title: string;
  value: number;
  icon?: React.ReactNode;
  duration?: number;
  color?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  duration = 2,
  color = '#3664f4',
}: StatCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 flex items-center justify-between w-full max-w-sm transition hover:shadow-xl">
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <h3 className="text-3xl font-bold text-gray-900 mt-1">
          <CountUp end={value} duration={duration} separator="." />
        </h3>
      </div>

      {icon && (
        <div
          className="p-3 rounded-full"
          style={{ backgroundColor: `${color}20`, color: color }}
        >
          {icon}
        </div>
      )}
    </div>
  );
}
