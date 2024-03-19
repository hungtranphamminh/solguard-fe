import Description from "@/components/Landing/Description";
import Features from "./Features";
import IdealCustomer from "./Ideal";
export default function LandingPage() {
  return (
    <div className="w-full pt-[88px]">
      <Description />
      <Features />
      <IdealCustomer />
    </div>
  );
}
