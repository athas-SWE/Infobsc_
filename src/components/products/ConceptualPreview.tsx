import React from 'react';

interface ConceptualPreviewProps {
  variant: 'education' | 'distribution' | 'crm';
  title: string;
}

const ConceptualPreview: React.FC<ConceptualPreviewProps> = ({ variant, title }) => {
  const panels =
    variant === 'education'
      ? [
          { label: 'Students', value: '1,248', tone: 'bg-blue-100 text-blue-900' },
          { label: 'Courses', value: '36', tone: 'bg-yellow-100 text-yellow-800' },
          { label: 'Fees Due', value: 'Rs 420K', tone: 'bg-rose-100 text-rose-800' },
          { label: 'Counsellors', value: '12', tone: 'bg-emerald-100 text-emerald-800' },
        ]
      : variant === 'distribution'
        ? [
            { label: 'Orders', value: '286', tone: 'bg-teal-100 text-teal-900' },
            { label: 'Deliveries', value: '194', tone: 'bg-blue-100 text-blue-900' },
            { label: 'Stock SKUs', value: '812', tone: 'bg-amber-100 text-amber-800' },
            { label: 'Collections', value: 'Rs 2.1M', tone: 'bg-emerald-100 text-emerald-800' },
          ]
        : [
            { label: 'Leads', value: '154', tone: 'bg-indigo-100 text-indigo-900' },
            { label: 'Pipeline', value: 'Rs 8.4M', tone: 'bg-blue-100 text-blue-900' },
            { label: 'Follow-ups', value: '27', tone: 'bg-yellow-100 text-yellow-800' },
            { label: 'Won Deals', value: '19', tone: 'bg-emerald-100 text-emerald-800' },
          ];

  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-4 xs:p-5 sm:p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-white/70">Dashboard preview</p>
          <h3 className="text-white font-semibold text-sm xs:text-base">{title}</h3>
        </div>
        <span className="text-[10px] xs:text-xs px-2 py-1 rounded-full bg-white/15 text-white/90">
          Conceptual
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 xs:gap-3 mb-4">
        {panels.map((panel) => (
          <div key={panel.label} className={`rounded-xl p-3 ${panel.tone}`}>
            <p className="text-[10px] xs:text-xs opacity-80">{panel.label}</p>
            <p className="text-base xs:text-lg font-bold">{panel.value}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="h-2 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-yellow-400 to-white" />
        </div>
        <div className="h-2 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-300 to-white" />
        </div>
        <div className="h-2 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-300 to-white" />
        </div>
      </div>
      <p className="mt-4 text-[10px] xs:text-xs text-white/70">
        Conceptual website preview – not actual product screenshots.
      </p>
    </div>
  );
};

export default ConceptualPreview;
