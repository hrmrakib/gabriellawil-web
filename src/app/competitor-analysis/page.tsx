import React from "react";
import CompetitorRanks from "@/components/competitor-analysis/CompetitorRanks";
import CompetitorStatistics from "@/components/competitor-analysis/CompetitorStatistics";
import CommonBanner from "@/components/common/CommonBanner";

const CompetitorAnalysisPage = () => {
  return (
    <div>
      <CommonBanner title='Competitor Analysis' path='/competitor-analysis' />
      <CompetitorStatistics />
      <CompetitorRanks />
    </div>
  );
};

export default CompetitorAnalysisPage;
