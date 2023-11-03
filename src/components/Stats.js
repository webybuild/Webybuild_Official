import React, { useState, useEffect } from "react";

const initialStats = [
  {
    data: 0,
    title: "Years",
    symbol: "+",
  },
  {
    data: 0,
    title: "Apps Developed",
    symbol: "+",
  },
  {
    data: 0,
    title: "Countries Served",
    symbol: "+",
  },
  {
    data: 0,
    title: "Satisfaction",
    symbol: "%",
  },
];

const targetStats = [
  {
    data: 5,
    title: "Years",
    symbol: "+",
  },
  {
    data: 99,
    title: "Apps Developed",
    symbol: "+",
  },
  {
    data: 12,
    title: "Countries Served",
    symbol: "+",
  },
  {
    data: 100,
    title: "Satisfaction",
    symbol: "%",
  },
];

const Stats = () => {
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    const incrementStats = () => {
      setStats((prevStats) => {
        return prevStats.map((item, idx) => {
          const currentData = item.data;
          const targetData = targetStats[idx].data;
          let newData = currentData + 1;
          if (newData > targetData) {
            newData = targetData;
          }
          return { ...item, data: newData };
        });
      });
    };

    const interval = setInterval(incrementStats, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-14 bg-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <li
              key={idx}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <h4 className="text-4xl multi_color_heading font-semibold">
                {item.data}
                {item.symbol}
              </h4>
              <p className="mt-3 text-gray-600 text-lg font-light">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
