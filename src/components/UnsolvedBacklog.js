import React from 'react';

function UnsolvedBacklog({ backlog }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-md flex flex-col h-64">
      
      <h3 className="text-lg font-bold text-slate-100">
        Unsolved Backlog
      </h3>

      <p className="text-sm text-slate-300 mt-1 mb-4">
        Problems attempted but not solved successfully.
      </p>

      <div className="custom-scroll flex-grow overflow-y-auto flex flex-wrap gap-2 content-start pr-1">
        {backlog.length > 0 ? (
          backlog.map((prob) => {
            const key = `${prob.contestId}-${prob.index}`;

            return (
              <a
                key={key}
                href={`https://codeforces.com/contest/${prob.contestId}/problem/${prob.index}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 text-slate-200 text-sm px-3 py-1 rounded border border-slate-600 hover:bg-red-700 hover:text-white transition-colors"
              >
                {prob.contestId}{prob.index}
              </a>
            );
          })
        ) : (
          <span className="text-sm text-slate-400">
            No pending unsolved problems.
          </span>
        )}
      </div>

    </div>
  );
}

export default UnsolvedBacklog;