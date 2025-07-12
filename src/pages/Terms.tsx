import Breadcrum from "../component/Breadcrum";
import TermsConditions from "../component/terms/TermsConditionsComponent";

function Terms() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 text-white space-y-6 mb-20">
        <Breadcrum
          title="Terms & Conditions"
          company="trgrd"
          date="Effective Date: July 3, 2025"
        />
        <p className="text-center font-bold mb-10">
          Welcome to My Trgrd. By downloading, installing, or using our mobile
          application or website, you agree to be bound by the following Terms
          and Conditions. Please read them carefully.
        </p>
        <TermsConditions />
      </div>
    </>
  );
}

export default Terms;
