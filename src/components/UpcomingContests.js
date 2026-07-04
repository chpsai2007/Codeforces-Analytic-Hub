import React from 'react';

function UpcomingContests({ contests, loading, error }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-md flex flex-col h-64">
      
      <h3 className="text-lg font-bold text-slate-100">
        Upcoming Contests
      </h3>

      <p className="text-sm text-slate-300 mt-1 mb-4">
        Live updates on upcoming scheduled Codeforces contests.
      </p>

      <div className="custom-scroll flex-grow overflow-y-auto space-y-3 pr-1">

        {loading ? (
          <p className="text-sm text-slate-400">
            Loading schedules...
          </p>
        ) : error ? (
          <p className="text-sm text-red-400">
            {error}
          </p>
        ) : contests.length > 0 ? (

          contests.map((c) => {
            const absSec = Math.abs(c.relativeTimeSeconds);
            const daysLeft = Math.floor(absSec / (3600 * 24));
            const hoursLeft = Math.floor((absSec % (3600 * 24)) / 3600);

            const relativeStr =
              daysLeft > 0
                ? `${daysLeft}d ${hoursLeft}h left`
                : `${hoursLeft}h left`;

            return (
              <div
                key={c.id}
                className="bg-slate-700 p-4 rounded-lg border border-slate-600 flex justify-between items-center hover:bg-slate-600 transition-colors"
              >
                <div className="truncate max-w-[70%]">

                  <a
                    href={`https://codeforces.com/contests/${c.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-blue-400"
                  >
                    {c.name}
                  </a>

                  <p className="text-sm text-slate-300 mt-1">
                    {new Date(
                      c.startTimeSeconds * 1000
                    ).toLocaleDateString()}
                  </p>

                </div>

                <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                  {relativeStr}
                </span>

              </div>
            );
          })

        ) : (

          <p className="text-sm text-slate-400">
            No scheduled contests found.
          </p>

        )}
      </div>

    </div>
  );
}

export default UpcomingContests;