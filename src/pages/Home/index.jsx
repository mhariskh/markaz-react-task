import React, { useState, useContext } from "react";
import { StatsCard, GreetingCard, HeaderCard } from "../../components";
import { LoginContext } from "../../contexts/LoginContext";

export const Home = () => {
  const { user } = useContext(LoginContext);
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-12 gap-8 mb-5">
        <div className="col-span-12">
          <HeaderCard
            title="Home Page"
            description="Welcome to the Home Page"
            goToButtonText="Go to Profile Page"
            goToButtonLink="/dashboard/profile"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 mb-5">
        <div className="col-span-5">
          <StatsCard />
        </div>
        <div className="col-span-7">
          <GreetingCard userName={user.email} />
        </div>
      </div>
    </div>
  );
};

export default Home;
