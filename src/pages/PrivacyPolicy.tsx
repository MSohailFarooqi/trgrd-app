import Breadcrum from "../component/Breadcrum";
import PrivacyComponent from "../component/privacy/PrivacyComponent";

function PrivacyPolicy() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 text-white space-y-6 mb-20">
        <Breadcrum
          title="Privacy Policy"
          company="trgrd"
          date="Effective Date: July 3, 2025"
        />
        <p className="text-center font-bold mb-10">
          Welcome to My Trgrd. Your privacy is important to us. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website and/or use our mobile
          application ("Service"). By using the Service, you consent to the
          practices described below.
        </p>
        <PrivacyComponent />
      </div>
    </>
  );
}

export default PrivacyPolicy;
