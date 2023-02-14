import { StatsCard, GreetingCard } from "../../components";
import { LoginContext } from "../../contexts/LoginContext";

export const Home = () => {
  const { userName } = useContext(LoginContext);
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-12 gap-8 mb-5">
        <div className="col-span-3">
          <StatsCard />
        </div>
        <div className="col-span-9">
          <GreetingCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
