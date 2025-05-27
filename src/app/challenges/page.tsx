import React from "react";
import AIPoweredMarketingPlan from "@/components/challenges-leaderboard/AI-PoweredMarketingPlan";
import LeaderboardProfile from "@/components/challenges-leaderboard/LeaderboardProfile";
import CommonBanner from "@/components/common/CommonBanner";

const Challenges = () => {
  return (
    <div>
      <CommonBanner title='Challenges' path='/challenges' />
      
      <AIPoweredMarketingPlan />

      <LeaderboardProfile />
    </div>
  );
};

export default Challenges;
 