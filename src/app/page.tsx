import AIStrategy from "@/components/AIStrategy";
import ChallengesLeaderboard from "@/components/Challenges-Leaderboard";
import CompetitorAnalysis from "@/components/CompetitorAnalysis";
import Hero from "@/components/Hero";
import KeywordExplorer from "@/components/KeywordExplorer";
import PlanPricing from "@/components/Plan-Pricing";
import SiteExplorer from "@/components/SiteExplore";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <SiteExplorer />
      <KeywordExplorer />
      <CompetitorAnalysis />
      <AIStrategy />
      <ChallengesLeaderboard />
    <PlanPricing />
    </div>
  );
};

export default Home;
