import AIStrategy from "@/components/ai-strategy/AIStrategy";
import CommonBanner from "@/components/common/CommonBanner";
import React from "react";

const AI = () => {
  return (
    <div>
      <CommonBanner title='AI Strategy' path='/ai-strategy' />
      <AIStrategy />
    </div>
  );
};

export default AI;
