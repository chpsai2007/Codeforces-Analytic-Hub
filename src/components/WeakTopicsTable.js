import React from 'react';

function WeakTopicsTable({ weakTopics }) {
  return (
    <section className="bg-slate-800 rounded-lg border border-slate-700 shadow-md overflow-hidden">
      
      <div className="p-6 border-b border-slate-700">
        <h3 className="text-lg font-bold text-slate-100">
          Top 3 Weakest Topics Analytics
        </h3>
        <p className="text-sm text-slate-300 mt-1">
          Identified from standard structural areas with 9 or more total submissions.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">

          <thead className="bg-slate-700 text-slate-200 text-sm uppercase">
            <tr>
              <th className="p-5 font-semibold">Topic / Tag Name</th>
              <th className="p-5 font-semibold">Total Submissions</th>
              <th className="p-5 font-semibold">Accepted Solutions</th>
              <th className="p-5 font-semibold">Success Percentage</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700 text-slate-300">
            {weakTopics.length > 0 ? (
              weakTopics.map((topic) => (
                <tr
                  key={topic.tagName}
                  className="hover:bg-slate-700 transition-colors"
                >
                  <td className="p-5 font-semibold text-white capitalize">
                    {topic.tagName}
                  </td>

                  <td className="p-5 text-slate-300">
                    {topic.totalCount}
                  </td>

                  <td className="p-5 text-green-400 font-semibold">
                    {topic.acceptedCount}
                  </td>

                  <td className="p-5 text-yellow-400 font-semibold">
                    {topic.percentage}%
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="p-6 text-center text-slate-400"
                >
                  Insufficient data to compute weakness sets (Requires ≥ 9 submissions).
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </section>
  );
}

export default WeakTopicsTable;