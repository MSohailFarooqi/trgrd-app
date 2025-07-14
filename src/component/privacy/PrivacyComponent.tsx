function PrivacyComponent() {
  return (
    <>
      {/* 1. Information We Collect */}
      <section
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
        data-aos-duration="1500"
      >
        <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>

        <h3 className="font-semibold mt-2">a) Personal Information</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>Full name</li>
          <li>Email address</li>
          <li>Profile image (if uploaded)</li>
          <li>Trgrd names and descriptions</li>
          <li>Order history</li>
        </ul>

        <h3 className="font-semibold mt-4">b) Device & Usage Data</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>Device type, operating system, and version</li>
          <li>IP address</li>
          <li>Browser type and version (for web users)</li>
          <li>App version</li>
          <li>App usage logs (e.g., time spent, pages/screens viewed)</li>
          <li>Crash and diagnostic data</li>
        </ul>

        <h3 className="font-semibold mt-4">c) Location Data</h3>
        <p className="leading-relaxed mt-1">
          We may collect approximate location data to suggest relevant fly types
          (optional and with permission).
        </p>

        <h3 className="font-semibold mt-4">
          d) Cookies and Tracking Technologies
        </h3>
        <p className="leading-relaxed mt-1">
          Our website may use cookies and similar tracking technologies to:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>Maintain user sessions</li>
          <li>Analyze user behavior</li>
          <li>Improve website performance</li>
        </ul>
        <p className="leading-relaxed mt-1">
          You can disable cookies in your browser settings, but this may affect
          the Service’s functionality.
        </p>
      </section>

      {/* 2. How We Use Your Information */}
      <section>
        <h2 className="text-2xl font-bold mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Provide and maintain the Service</li>
          <li>Personalize your user experience (e.g., recommended flies)</li>
          <li>Process and manage orders</li>
          <li>
            Communicate with you about your account, activity, or support
            requests
          </li>
          <li>Improve app features and design</li>
          <li>Monitor usage trends and performance</li>
          <li>Comply with legal requirements</li>
        </ul>
      </section>

      {/* 3. How We Share Your Information */}
      <section>
        <h2 className="text-2xl font-bold mb-2">
          3. How We Share Your Information
        </h2>
        <p className="leading-relaxed">
          We do not sell or rent your personal information. We may share
          information only as follows:
        </p>

        <h3 className="font-semibold mt-2">
          a) With Third-Party Service Providers
        </h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>Hosting providers</li>
          <li>Analytics platforms (e.g., Google Analytics, Firebase)</li>
          <li>Payment processors (if e-commerce features are used)</li>
        </ul>
        <p className="leading-relaxed mt-1">
          They are only authorized to use your information as necessary to
          provide services on our behalf.
        </p>

        <h3 className="font-semibold mt-4">b) Legal Requirements</h3>
        <p className="leading-relaxed mt-1">We may disclose information:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>If required by law, subpoena, or legal process</li>
          <li>To investigate or prevent fraud, abuse, or security threats</li>
          <li>To enforce our Terms and Conditions</li>
        </ul>
      </section>

      {/* 4. Your Data Rights */}
      <section>
        <h2 className="text-2xl font-bold mb-2">4. Your Data Rights</h2>
        <p className="leading-relaxed">
          Depending on your jurisdiction, you may have the right to:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>Access the personal information we hold about you</li>
          <li>Correct inaccuracies in your information</li>
          <li>Request deletion of your data</li>
          <li>Object to processing or restrict certain uses</li>
          <li>Withdraw consent where applicable</li>
        </ul>
        <p className="leading-relaxed mt-2">
          To exercise any of these rights, contact us at: 📧{" "}
          <span className="underline">privacy@trgrd.com</span>
          <br />
          We will respond within 30 days, as required by applicable law.
        </p>
      </section>

      {/* 5. Data Retention */}
      <section>
        <h2 className="text-2xl font-bold mb-2">5. Data Retention</h2>
        <p className="leading-relaxed">
          We retain your personal information for as long as your account is
          active or as needed to:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>Provide services</li>
          <li>Comply with legal obligations</li>
          <li>Resolve disputes</li>
          <li>Enforce agreements</li>
        </ul>
        <p className="leading-relaxed mt-2">
          When no longer required, your data will be securely deleted or
          anonymized.
        </p>
      </section>

      {/* 6. Security Measures */}
      <section>
        <h2 className="text-2xl font-bold mb-2">6. Security Measures</h2>
        <p className="leading-relaxed">
          We take appropriate security measures to protect your information,
          including:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ms-4">
          <li>SSL encryption on all data transfers</li>
          <li>Secure cloud storage with limited access</li>
          <li>Routine monitoring for vulnerabilities</li>
        </ul>
        <p className="leading-relaxed mt-2">
          While we strive to protect your information, no system is 100% secure.
          Use the Service at your own risk.
        </p>
      </section>

      {/* 7. Children's Privacy */}
      <section>
        <h2 className="text-2xl font-bold mb-2">7. Children’s Privacy</h2>
        <p className="leading-relaxed">
          Our Service is not intended for children under 13 (or the age of
          digital consent in your region). We do not knowingly collect data from
          children. If we become aware of it, we will delete such data promptly.
        </p>
      </section>

      {/* 8. International Users */}
      <section>
        <h2 className="text-2xl font-bold mb-2">8. International Users</h2>
        <p className="leading-relaxed">
          If you are accessing the Service from outside [Your Country], you
          understand that your data may be transferred to and processed in
          countries where data protection laws may differ. We will ensure
          appropriate safeguards are in place.
        </p>
      </section>

      {/* 9. Third-Party Links */}
      <section>
        <h2 className="text-2xl font-bold mb-2">9. Third-Party Links</h2>
        <p className="leading-relaxed">
          Our Service may contain links to third-party websites or services. We
          are not responsible for their privacy practices. Please review their
          privacy policies before providing any information.
        </p>
      </section>

      {/* 10. Changes to This Policy */}
      <section>
        <h2 className="text-2xl font-bold mb-2">10. Changes to This Policy</h2>
        <p className="leading-relaxed">
          We may update this Privacy Policy from time to time. When we do, we
          will update the "Effective Date" at the top of this page and notify
          users via in-app or web notice if the changes are significant.
        </p>
      </section>

      {/* 11. Contact Us */}
      <section>
        <h2 className="text-2xl font-bold mb-2">11. Contact Us</h2>
        <p className="leading-relaxed">
          If you have any questions about this Privacy Policy or wish to
          exercise your rights, please contact us at:
          <br />
          📧 <span className="underline">privacy@trgrd.com</span>
          <br />
          🏢 <span>[Your Company Address, City, Country]</span>
        </p>
      </section>
    </>
  );
}

export default PrivacyComponent;
