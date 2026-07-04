import React, { useState } from 'react';

function SearchBox({ onSearch, loading }) {
  const [handle, setHandle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = handle.trim();

    if (trimmed) {
      onSearch(trimmed);
    }
  };

  return (
    <section className="max-w-xl mb-10">
      <form onSubmit={handleSubmit}>
        
        <label
          htmlFor="handleInput"
          className="block text-sm font-semibold text-slate-200 mb-2"
        >
          Search Codeforces Handle
        </label>

        <div className="flex gap-3">

          <input
            type="text"
            id="handleInput"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="e.g. tourist, Benq, jiangly"
            className="w-full bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors disabled:bg-slate-600"
          >
            {loading ? 'Loading...' : 'Search'}
          </button>

        </div>

      </form>
    </section>
  );
}

export default SearchBox;