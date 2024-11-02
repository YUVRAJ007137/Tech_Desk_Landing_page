import { Monitor } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-[#D4AF37] p-2 rounded-lg">
        <Monitor size={24} className="text-black" />
      </div>
      <span className="text-2xl font-bold text-[#D4AF37]">Tech Desk</span>
    </div>
  );
}