import React, { useEffect, useRef, useState } from 'react';
import { getProductById } from '../../data/products';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

interface ConceptualPreviewProps {
  variant: 'education' | 'distribution' | 'crm';
  title: string;
}

interface Metric {
  label: string;
  target: number;
  tone: string;
  format: (value: number) => string;
}

const metricsByVariant: Record<ConceptualPreviewProps['variant'], Metric[]> = {
  education: [
    { label: 'Students', target: 1248, tone: 'bg-blue-100 text-blue-900', format: (value) => value.toLocaleString('en-US') },
    { label: 'Courses', target: 36, tone: 'bg-yellow-100 text-yellow-800', format: (value) => String(value) },
    { label: 'Fees Due', target: 420, tone: 'bg-rose-100 text-rose-800', format: (value) => `Rs ${value}K` },
    { label: 'Counsellors', target: 12, tone: 'bg-emerald-100 text-emerald-800', format: (value) => String(value) },
  ],
  distribution: [
    { label: 'Orders', target: 286, tone: 'bg-teal-100 text-teal-900', format: (value) => String(value) },
    { label: 'Deliveries', target: 194, tone: 'bg-blue-100 text-blue-900', format: (value) => String(value) },
    { label: 'Stock SKUs', target: 812, tone: 'bg-amber-100 text-amber-800', format: (value) => String(value) },
    { label: 'Collections', target: 21, tone: 'bg-emerald-100 text-emerald-800', format: (value) => `Rs ${(value / 10).toFixed(1)}M` },
  ],
  crm: [
    { label: 'Leads', target: 154, tone: 'bg-indigo-100 text-indigo-900', format: (value) => String(value) },
    { label: 'Pipeline', target: 84, tone: 'bg-blue-100 text-blue-900', format: (value) => `Rs ${(value / 10).toFixed(1)}M` },
    { label: 'Follow-ups', target: 27, tone: 'bg-yellow-100 text-yellow-800', format: (value) => String(value) },
    { label: 'Won Deals', target: 19, tone: 'bg-emerald-100 text-emerald-800', format: (value) => String(value) },
  ],
};

const productIdByVariant: Record<ConceptualPreviewProps['variant'], string> = {
  education: 'sids',
  distribution: 'distribution360',
  crm: 'crm',
};

const bars = [
  { width: '75%', tone: 'bg-gradient-to-r from-yellow-400 to-white' },
  { width: '50%', tone: 'bg-gradient-to-r from-blue-300 to-white' },
  { width: '66%', tone: 'bg-gradient-to-r from-emerald-300 to-white' },
];

const CountValue: React.FC<{ metric: Metric; active: boolean; reduced: boolean }> = ({
  metric,
  active,
  reduced,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setValue(metric.target);
      return;
    }

    let frame = 0;
    let cancelled = false;
    const start = performance.now();
    const duration = 900;
    const tick = (now: number) => {
      if (cancelled) return;
      const progress = Math.min(1, Math.max(0, (now - start) / duration));
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(metric.target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [active, metric.target, reduced]);

  return <>{metric.format(value)}</>;
};

const ConceptualPreview: React.FC<ConceptualPreviewProps> = ({ variant, title }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const [activityIndex, setActivityIndex] = useState(0);
  const metrics = metricsByVariant[variant];
  const activities =
    getProductById(productIdByVariant[variant])
      ?.features.slice()
      .sort((a, b) => a.displayOrder - b.displayOrder)
      .slice(0, 4)
      .map((feature) => feature.title) ?? [];

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }

    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (!visible || reduced || activities.length < 2) return;
    const timer = window.setInterval(() => {
      setActivityIndex((current) => (current + 1) % activities.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [activities.length, reduced, visible]);

  return (
    <div
      ref={rootRef}
      className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-4 xs:p-5 sm:p-6 shadow-2xl"
    >
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
        {metrics.map((metric) => (
          <div key={metric.label} className={`rounded-xl p-3 ${metric.tone}`}>
            <p className="text-[10px] xs:text-xs opacity-80">{metric.label}</p>
            <p className="text-base xs:text-lg font-bold">
              <CountValue metric={metric} active={visible} reduced={reduced} />
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {bars.map((bar) => (
          <div key={bar.width} className="h-2 rounded-full bg-white/20 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-out motion-reduce:transition-none ${bar.tone}`}
              style={{ width: visible ? bar.width : '0%' }}
            />
          </div>
        ))}
      </div>
      {activities.length > 0 && (
        <div className="mt-4 rounded-xl bg-white/10 px-3 py-2" aria-live="polite">
          <p className="text-[10px] uppercase tracking-wider text-white/60">Recent activity</p>
          <p className="text-sm text-white font-medium">{activities[activityIndex]}</p>
        </div>
      )}
      <p className="mt-4 text-[10px] xs:text-xs text-white/70">
        Conceptual website preview – not actual product screenshots.
      </p>
    </div>
  );
};

export default ConceptualPreview;
