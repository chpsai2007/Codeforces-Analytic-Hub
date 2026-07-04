import React from 'react';

function RecentActivityTable({ submissions }) {
  return (
    <section className="bg-slate-800 rounded-lg border border-slate-700 shadow-md overflow-hidden">

      <div className="p-6 border-b border-slate-700">
        <h3 className="text-lg font-bold text-slate-100">
          Recent Platform Activity (Last 7 Submissions)
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">

          <thead className="bg-slate-700 text-slate-200 text-sm uppercase">
            <tr>
              <th className="p-5 font-semibold">Problem</th>
              <th className="p-5 font-semibold">Language</th>
              <th className="p-5 font-semibold">Status</th>
              <th className="p-5 font-semibold">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700 text-slate-300">
            {submissions.length > 0 ? (
              submissions.map((item) => {
                let colorCode = "text-red-400";

                if (item.verdict === "OK")
                  colorCode = "text-green-400 font-semibold";
                else if (item.verdict === "TESTING")
                  colorCode = "text-yellow-400";

                const labelString =
                  item.verdict === "OK"
                    ? "Accepted"
                    : item.verdict
                    ? item.verdict.replace(/_/g, " ")
                    : "UNKNOWN";

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-700 transition-colors"
                  >
                    <td className="p-5">
                      <a
                        href={`https://codeforces.com/contest/${item.contestId}/problem/${item.problem.index}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {item.problem.name} ({item.problem.index})
                      </a>
                    </td>

                    <td className="p-5 text-slate-300">
                      {item.programmingLanguage}
                    </td>

                    <td className={`p-5 ${colorCode}`}>
                      {labelString}
                    </td>

                    <td className="p-5 text-slate-300">
                      {new Date(
                        item.creationTimeSeconds * 1000
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="p-6 text-center text-slate-400"
                >
                  No recorded submissions found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </section>
  );
}

export default RecentActivityTable;