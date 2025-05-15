import React from "react";
import CompetitorRanks from "@/components/competitor-analysis/CompetitorRanks";
import CompetitorStatistics from "@/components/competitor-analysis/CompetitorStatistics";

const CompetitorAnalysisPage = () => {
  return (
    <div>
      <CompetitorStatistics />
      <CompetitorRanks />
    </div>
  );
};

export default CompetitorAnalysisPage;
