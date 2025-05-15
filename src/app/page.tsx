import AIStrategy from "@/components/ai-strategy/AIStrategySection";
import ChallengesLeaderboard from "@/components/challenges-leaderboard/Challenges-Leaderboard";
import CompetitorAnalysis from "@/components/competitor-analysis/CompetitorAnalysis";
import Hero from "@/components/Hero";
import KeywordExplorer from "@/components/keyword-explorer/KeywordExplorer";
import PlanPricing from "@/components/plan-pricing/Plan-Pricing";
import SiteExplorer from "@/components/site-explorer/SiteExplore";
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
