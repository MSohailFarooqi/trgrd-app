import { Link } from "react-router-dom";

function TermsConditions() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
        <p className="leading-relaxed">
          By accessing or using the My Trgrd mobile application or website ("the
          Service"), you agree to be bound by these Terms and our
          <Link
            to="/privacy"
            className="underline text-blue-400 cursor-pointer px-1"
          >
            Privacy Policy.
          </Link>
          If you do not agree to these Terms, do not use our services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">
          2. Description of the Service
        </h2>
        <p className="leading-relaxed">My Trgrd allows users to:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>Browse flies for both freshwater and saltwater fishing</li>
          <li>
            View details such as price, availability, hook size, class, and
            images
          </li>
          <li>Create and manage personalized digital “flyBoxes”</li>
          <li>Add selected flies to their flyBox</li>
          <li>View their profile, order history, and account settings</li>
        </ul>
        <p className="leading-relaxed mt-2">
          The service is subject to change and may be modified or discontinued
          without notice.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">3. User Eligibility</h2>
        <p className="leading-relaxed">To use the Service, you must:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>
            Be at least 13 years old (or the age of digital consent in your
            country)
          </li>
          <li>Have the legal capacity to enter into these Terms</li>
          <li>
            Provide accurate, complete, and current registration information
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">4. User Accounts</h2>
        <p className="leading-relaxed">When you create an account with us:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>
            You are responsible for maintaining the confidentiality of your
            credentials
          </li>
          <li>You are solely responsible for activities under your account</li>
          <li>
            You agree to notify us immediately of any unauthorized access or
            security breach
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">5. Intellectual Property</h2>
        <p className="leading-relaxed">
          All content, features, and functionality, including but not limited
          to:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>App design, UI/UX</li>
          <li>Logos, icons, and images</li>
          <li>Database structure and fly data</li>
          <li>Code, design systems, and software</li>
        </ul>
        <p className="leading-relaxed mt-2">
          Are the exclusive property of My Trgrd or its licensors, protected by
          copyright, trademark, and other laws.
        </p>
        <p className="leading-relaxed mt-2">You may not:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>Reproduce, distribute, modify, or create derivative works</li>
          <li>
            Use the content for commercial purposes without written permission
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">6. User-Generated Content</h2>
        <p className="leading-relaxed">
          When you create and name a FlyBox or submit information:
          <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
            <li>You retain ownership of your content</li>
            <li>
              You grant My Trgrd a non-exclusive, royalty-free, worldwide
              license to use, display, and improve the Service based on user
              behavior
            </li>
            <li>
              You agree not to submit harmful, misleading, or illegal content
            </li>
          </ul>
          <p className="leading-relaxed mt-2">
            We reserve the right to remove or restrict any content that violates
            these Terms or our policies.
          </p>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">7. Orders and Payments</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>Prices and availability of flies are subject to change</li>
          <li>
            By placing an order, you confirm that you are legally authorized to
            use the payment method
          </li>
          <li>
            We reserve the right to cancel or refuse any order due to suspected
            fraud or pricing errors
          </li>
        </ul>
        <p className="leading-relaxed mt-2">
          Note: Actual inventory and shipping of physical products (if
          applicable) may be managed by third-party vendors.
        </p>
      </section>
    </>
  );
}

export default TermsConditions;
