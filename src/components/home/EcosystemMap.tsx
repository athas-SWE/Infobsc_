import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  EcosystemKind,
  ecosystemLinks,
  ecosystemNodeMap,
  ecosystemNodes,
  connectedIds,
} from '../../data/ecosystem';

type FilterId = 'all' | EcosystemKind;

const filters: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'product', label: 'Products' },
  { id: 'service', label: 'Services' },
  { id: 'technology', label: 'Technologies' },
];

const kindLabel: Record<EcosystemKind, string> = {
  product: 'Product',
  service: 'Service',
  technology: 'Technology',
};

const kindPlural: Record<EcosystemKind, string> = {
  product: 'Products',
  service: 'Services',
  technology: 'Technologies',
};

const ringLayout: Record<EcosystemKind, { radius: number; rotation: number }> = {
  product: { radius: 18, rotation: 0 },
  service: { radius: 32, rotation: 30 },
  technology: { radius: 44, rotation: 45 },
};

const nodeTone: Record<EcosystemKind, string> = {
  product: 'bg-blue-900 text-white border-blue-900',
  service: 'bg-white text-blue-900 border-blue-200',
  technology: 'bg-yellow-100 text-yellow-900 border-yellow-300',
};

const positionFor = (index: number, count: number, radius: number, rotation: number) => {
  const angle = ((rotation + (index * 360) / count - 90) * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle),
  };
};

const EcosystemMap: React.FC = () => {
  const [filter, setFilter] = useState<FilterId>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const placed = useMemo(() => {
    const groups: Record<EcosystemKind, typeof ecosystemNodes> = {
      product: [],
      service: [],
      technology: [],
    };
    ecosystemNodes.forEach((node) => groups[node.kind].push(node));

    return (Object.keys(groups) as EcosystemKind[]).flatMap((kind) =>
      groups[kind].map((node, index) => ({
        node,
        ...positionFor(index, groups[kind].length, ringLayout[kind].radius, ringLayout[kind].rotation),
      }))
    );
  }, []);

  const positionById = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>();
    placed.forEach((item) => map.set(item.node.id, { x: item.x, y: item.y }));
    return map;
  }, [placed]);

  const selected = selectedId ? ecosystemNodeMap.get(selectedId) : undefined;
  const relatedIds = selectedId ? connectedIds(selectedId) : [];
  const relatedSet = new Set(relatedIds);

  const isEmphasized = (id: string, kind: EcosystemKind) => {
    if (selectedId && (id === selectedId || relatedSet.has(id))) return true;
    if (selectedId && filter === 'all') return false;
    return filter === 'all' || kind === filter;
  };

  return (
    <section id="services" className="scroll-mt-24 bg-gray-50 py-16 xs:py-20">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-yellow-600 mb-3">
            Company ecosystem
          </p>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Products, services, and technologies
          </h2>
          <p className="text-base xs:text-lg text-gray-600">
            Products, services, and technologies sit on one map. Select any point to see what it does and where to go next.
          </p>
        </div>

        <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-900" /> Products
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full border border-blue-200 bg-white" /> Services
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" /> Technologies
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter the ecosystem">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                filter === item.id
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 items-start">
          <div>
            <div className="hidden lg:block">
              <div className="relative mx-auto aspect-square w-full max-w-[680px]" role="group" aria-label="Company ecosystem map">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
                  {[18, 32, 44].map((radius) => (
                    <circle key={radius} cx="50" cy="50" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="0.35" />
                  ))}
                  {ecosystemLinks.map((link) => {
                    const from = positionById.get(link.from);
                    const to = positionById.get(link.to);
                    if (!from || !to) return null;
                    const active = selectedId === link.from || selectedId === link.to;
                    const fromKind = ecosystemNodeMap.get(link.from)?.kind;
                    const toKind = ecosystemNodeMap.get(link.to)?.kind;
                    const touchesFilter =
                      filter === 'all' || fromKind === filter || toKind === filter;
                    return (
                      <line
                        key={`${link.from}-${link.to}`}
                        x1={from.x}
                        y1={from.y}
                        x2={to.x}
                        y2={to.y}
                        stroke={active ? '#1e3a8a' : '#94a3b8'}
                        strokeWidth={active ? 0.7 : 0.28}
                        opacity={active ? 1 : selectedId ? 0.15 : touchesFilter ? 0.55 : 0.15}
                      />
                    );
                  })}
                </svg>

                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-yellow-500 text-center text-xs font-bold text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                >
                  INFO BSC
                </button>

                {placed.map(({ node, x, y }) => {
                  const emphasized = isEmphasized(node.id, node.kind);
                  const selectedNode = node.id === selectedId;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      aria-pressed={selectedNode}
                      aria-label={`${node.label}, ${kindLabel[node.kind]}`}
                      onClick={() => setSelectedId(node.id)}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 ${nodeTone[node.kind]} ${
                        selectedNode ? 'ring-2 ring-yellow-400 scale-105' : ''
                      } ${emphasized ? 'opacity-100' : 'opacity-30'}`}
                    >
                      {node.shortLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:hidden space-y-5">
              {(['product', 'service', 'technology'] as EcosystemKind[]).map((kind) => (
                <div key={kind}>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    {kindPlural[kind]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {ecosystemNodes
                      .filter((node) => node.kind === kind)
                      .map((node) => (
                        <button
                          key={node.id}
                          type="button"
                          aria-pressed={selectedId === node.id}
                          onClick={() => setSelectedId(node.id)}
                          className={`rounded-full border px-3 py-2 text-sm font-semibold ${nodeTone[node.kind]} ${
                            selectedId === node.id ? 'ring-2 ring-yellow-400' : ''
                          } ${isEmphasized(node.id, node.kind) ? 'opacity-100' : 'opacity-40'}`}
                        >
                          {node.label}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            {selected ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-wide text-yellow-600 mb-2">
                  {kindLabel[selected.kind]}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{selected.label}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{selected.description}</p>
                {relatedIds.length > 0 && (
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Connected to</p>
                    <div className="flex flex-wrap gap-2">
                      {relatedIds.map((id) => {
                        const node = ecosystemNodeMap.get(id);
                        if (!node) return null;
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => setSelectedId(id)}
                            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-900"
                          >
                            {node.shortLabel}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
                <Link
                  to={selected.href}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
                >
                  {selected.cta}
                </Link>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-wide text-yellow-600 mb-2">INFO BSC</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Start anywhere</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose a product, service, or technology. The map highlights what it connects to, then you can open the product or talk with the team.
                </p>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default EcosystemMap;
