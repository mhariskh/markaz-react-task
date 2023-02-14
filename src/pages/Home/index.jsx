import { StatsCard, TotalStatsCard } from "../../components";

export const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-3">
          <TotalStatsCard />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <StatsCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
