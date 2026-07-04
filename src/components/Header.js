import React from 'react';

function Header() {
  return (
    <header className="mb-10 rounded-2xl bg-slate-900 border border-slate-700 shadow-lg px-8 py-6">
     <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Codeforces Analytics Hub</h1>
    <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">
        A simple profile analytics tool tracking problem distributions, topics, and unsolved targets.
      </p>
    </header>
  );
}

export default Header;
