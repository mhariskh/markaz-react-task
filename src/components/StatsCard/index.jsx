const STATS = [
  {
    id: 1,
    title: "Total Markaz Businesses   ",
    count: 80,
    color: "#0066ff",
  },
  {
    id: 2,
    title: "Total Markaz Users",
    count: 3000,
    color: "#0066ff",
  },
  {
    id: 3,
    title: "Total Markaz Product Sales",
    count: 1021,
    color: "#0066ff",
  },
  {
    id: 4,
    title: "Total Markaz Employees",
    count: 2321,
    color: "#0066ff",
  },
];

export const StatsCard = () => {
  return (
    <div className="h-full w-full rounded-[20px] bg-white lg:max-w-[600px]">
      <div className="flex h-full flex-col  justify-between backdrop:">
        {STATS.map((stat) => (
          <div
            key={stat.id}
            className="w-full border-b  py-6 px-8 last-of-type:border-b-0 lg:px-14"
          >
            <span
              className="text-center text-4xl font-bold"
              style={{ color: stat.color }}
            >
              {stat.count}+
            </span>
            <p className="font-light">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
