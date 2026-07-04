import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ChartsSection({ difficultyData, topicData }) {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const barInstanceRef = useRef(null);
  const pieInstanceRef = useRef(null);

  useEffect(() => {
    if (!barChartRef.current) return;

    if (barInstanceRef.current) {
      barInstanceRef.current.destroy();
    }

    const ctx = barChartRef.current.getContext('2d');

    barInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: difficultyData.labels,
        datasets: [
          {
            data: difficultyData.values,
            backgroundColor: '#2563eb',
            borderRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#94a3b8',
              font: {
                size: 11
              }
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#334155'
            },
            ticks: {
              color: '#94a3b8',
              precision: 0
            }
          }
        }
      }
    });

    return () => {
      if (barInstanceRef.current) {
        barInstanceRef.current.destroy();
        barInstanceRef.current = null;
      }
    };
  }, [difficultyData]);

  useEffect(() => {
    if (!pieChartRef.current) return;

    if (pieInstanceRef.current) {
      pieInstanceRef.current.destroy();
    }

    const ctx = pieChartRef.current.getContext('2d');

    const colors = [
      '#2563eb',
      '#16a34a',
      '#f59e0b',
      '#ef4444',
      '#8b5cf6',
      '#06b6d4',
      '#ec4899',
      '#84cc16',
      '#f97316',
      '#14b8a6'
    ];

    pieInstanceRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: topicData.labels,
        datasets: [
          {
            data: topicData.values,
            backgroundColor: colors,
            borderColor: '#1e293b',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '45%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#cbd5e1',
              font: {
                size: 11
              },
              boxWidth: 14
            }
          }
        }
      }
    });

    return () => {
      if (pieInstanceRef.current) {
        pieInstanceRef.current.destroy();
        pieInstanceRef.current = null;
      }
    };
  }, [topicData]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-md">
        <h3 className="text-lg font-bold text-slate-100 mb-4">
          Solved Problem Difficulty
        </h3>

        <div className="h-72">
          <canvas ref={barChartRef}></canvas>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-md">
        <h3 className="text-lg font-bold text-slate-100 mb-4">
          Topic Wise Distribution
        </h3>

        <div className="h-72 flex justify-center items-center">
          <canvas ref={pieChartRef}></canvas>
        </div>
      </div>

    </section>
  );
}

export default ChartsSection;