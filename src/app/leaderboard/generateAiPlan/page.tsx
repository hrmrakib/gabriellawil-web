import MarketingPlanGenerator from "@/components/challenges-leaderboard/GenerateMerketingPlan";
import CommonBanner from "@/components/common/CommonBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <CommonBanner title='Leaderboard' path='/leaderboard' />
      <MarketingPlanGenerator />
    </div>
  );
};

export default page;
