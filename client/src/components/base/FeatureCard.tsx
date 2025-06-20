import React from 'react';
import { Card } from '@/components/ui/card';

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 border border-2 border-black flex items-center align-middle bg-slate-800">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl text-cyan-200 font-semibold mb-2">{title}</h3>
      <p className="font-bold text-cyan-200">{description}</p>
    </Card>
  );
}
