import React from 'react';

function StatCard({ title, value, subtext, valueClass = '' }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-md">
      <span className="block text-sm font-semibold text-slate-300 uppercase">{title}</span>
      <span className={`block text-3xl font-bold mt-1 ${valueClass}`}>{value}</span>
      <span className="block text-sm text-slate-400 mt-1">{subtext}</span>
    </div>
  );
}

export default StatCard;
