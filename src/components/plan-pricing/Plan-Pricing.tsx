import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$50",
    description: "Perfect for beginners and side projects",
    features: [
      { name: "Full access to Site Explorer", included: true },
      { name: "Keyword Explorer searches", included: true },
      { name: "Competitor Analysis reports", included: false },
      { name: "AI Marketing & SEO recommendations", included: false },
      { name: "Priority support (for Pro & Elite)", included: false },
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$100",
    description: "For growing teams and serious marketers",
    features: [
      {
        name: "Full access to Site Explorer",
        included: true,
        highlighted: true,
      },
      { name: "Keyword Explorer searches", included: true, highlighted: true },
      {
        name: "Competitor Analysis reports",
        included: true,
        highlighted: true,
      },
      {
        name: "AI Marketing & SEO recommendations",
        included: true,
        highlighted: true,
      },
      {
        name: "Priority support (for Pro & Elite)",
        included: true,
        highlighted: true,
      },
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "$150",
    description: "Maximum power for agencies and SEO pros",
    features: [
      { name: "Full access to Site Explorer", included: true },
      { name: "Keyword Explorer searches", included: true },
      { name: "Competitor Analysis reports", included: true },
      { name: "AI Marketing & SEO recommendations", included: true },
      { name: "Priority support (for Pro & Elite)", included: true },
    ],
    highlighted: false,
  },
];

export default function PlanPricing() {
  return (
    <section className='w-full bg-[#FFF5E9] py-16 md:py-28'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-8 text-center md:mb-12'>
          <h2 className='mb-16 text-4xl md:text-[68px] font-bold text-[#5D2F04]'>
            <span className='rounded-lg bg-[#FBCE98] px-3 py-1'>Plans</span> &
            Pricing
          </h2>
          <h3 className='mb-4 text-3xl md:text-5xl font-bold text-[#5D2F04]'>
            Choose Your Growth Plan
          </h3>
          <p className='mb-16 mx-auto max-w-[600px] text-xl text-[#9D5006]/80'>
            Flexible plans to match your goals — whether you&apos;re just
            starting out or scaling fast
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative max-w-[393px] rounded-lg border ${
                plan.highlighted
                  ? "border-[#F9A94B] bg-[#E67E22]"
                  : "border-[#E67E22]/20 bg-[#FFFFFF]"
              } p-6 shadow-sm`}
            >
              <div className='my-5 pb-5 flex items-center justify-between border-b-2 border-b-[#FBCE98]'>
                <div className='w-1/2'>
                  <h3
                    className={`text-2xl font-semibold pb-1.5 ${
                      plan.highlighted ? "text-white" : "text-[#494747]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-base ${
                      plan.highlighted ? "text-white/80" : "text-[#7B7777]"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className='flex items-center justify-center h-full'>
                  <div
                    className={`inline-block rounded-lg ${
                      plan.highlighted
                        ? "bg-white text-[#5A370C]"
                        : "bg-[#FFCF8B] text-[#5A370C]"
                    } px-4 py-2 text-2xl font-bold`}
                  >
                    {plan.price}
                  </div>
                </div>
              </div>

              <div className='my-8 space-y-4'>
                {plan.features.map((feature, index) => (
                  <div key={index} className='flex items-start gap-2'>
                    <div
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        feature.included
                          ? "bg-[#F7941E] text-white"
                          : `${
                              plan.highlighted ? "bg-white" : "bg-[#FBCE98]"
                            } text-gray-400`
                      }`}
                    >
                      <Check className='h-3 w-3' />
                    </div>
                    <span
                      className={`text-base text-[#5F5C5C] ${
                        plan.highlighted ? "text-white" : "text-[#5A370C]"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href='/checkout'
                className={`w-full rounded-lg mb-6 ${
                  plan.highlighted
                    ? "bg-white text-[#E67E22] hover:bg-white/90"
                    : "bg-[#E67E22] text-white hover:bg-[#D35400]"
                } px-4 py-3 font-medium transition-colors`}
              >
                Purchase Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
