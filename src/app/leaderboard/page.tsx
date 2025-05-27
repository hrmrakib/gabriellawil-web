import AIPoweredMarketingPlan from "@/components/challenges-leaderboard/AI-PoweredMarketingPlan";
import LeaderboardProfile from "@/components/challenges-leaderboard/LeaderboardProfile";
import CommonBanner from "@/components/common/CommonBanner";
import React from "react";

const Leaderboard = () => {
  return (
    <div>
      <CommonBanner title='Leaderboard' path='/leaderboard' />
      <AIPoweredMarketingPlan />

      <LeaderboardProfile />
    </div>
  );
};

export default Leaderboard;
