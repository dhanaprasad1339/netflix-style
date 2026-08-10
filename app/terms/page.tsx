"use client";

import { useRouter } from "next/navigation";

export default function TermsPage() {
  const router = useRouter();

  return (
    <main className="terms-page">

      {/* Header */}
      <header className="terms-header">

        <div
          className="terms-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </div>

        <div className="terms-header-links">
          <button onClick={() => router.push("/")}>
            Join Netflix
          </button>

          <button onClick={() => router.push("/login")}>
            Sign In
          </button>

          <button onClick={() => router.push("/help")}>
            Help Center
          </button>
        </div>

      </header>

      {/* Back */}
      <div className="terms-back">
        <button onClick={() => router.push("/help")}>
          ← Back to Help Home
        </button>
      </div>

      {/* Content */}
      <article className="terms-content">

        <h1>Netflix Terms of Use</h1>

        <p>
          Welcome to Netflix! Netflix provides a service that allows
          users to access entertainment content (“Netflix content”)
          over the Internet on certain Internet-connected TVs,
          computers and other devices (“Netflix supported devices”).
        </p>

        <p>
          Your contractual partner and consumer point of contact
          under these Terms of Use is Netflix Entertainment Services
          India LLP. These Terms of Use govern your use of the Netflix
          service.
        </p>

        <p>
          As used in these Terms of Use, “Netflix service” or
          “the service” means the service provided by Netflix for
          discovering and accessing Netflix content. This includes
          personalization, features and functionalities,
          recommendations and reviews, related websites,
          applications and user interfaces, as well as all content
          and software associated with the service.
        </p>

        {/* 1 */}
        <h2>1. The Netflix Service</h2>

        <h3>1.1. Access to the Netflix Service</h3>

        <p>
          To use the Netflix service you must have Internet access
          and a Netflix supported device. Some features, content,
          or offerings may be available at no cost and may be
          accessed without creating an account or providing a
          Payment Method, while other options require you to create
          a Netflix account or purchase a subscription.
        </p>

        <h3>1.2. Age Limitation</h3>

        <p>
          You must be at least 18 years of age to create a Netflix
          account or, where available, to become an Extra Member.
          Minors may only use the service under the supervision
          of an adult.
        </p>

        <h3>1.3. Offers</h3>

        <p>
          We may from time to time provide special promotional
          offers, plans or subscriptions (“Offers”). Offer
          eligibility is determined by Netflix at its sole
          discretion.
        </p>

        <h3>1.4. Account Sharing</h3>

        <p>
          The Netflix service and any content accessed through it
          are for your personal, non-commercial use only and may
          not be shared with anyone outside of your household
          unless you purchased an Extra Member account.
        </p>

        <h3>1.5. Access Limitations</h3>

        <p>
          You may access Netflix content primarily within the
          country in which you have established your account and
          only in geographic locations where we offer our service
          and have licensed such content.
        </p>

        <h3>1.6. Availability and Testing</h3>

        <p>
          The Netflix service, including Netflix content, is
          regularly updated. We do not guarantee that particular
          content will be available at any given time.
        </p>

        <h3>1.7. Downloading Content</h3>

        <p>
          Depending on the subscription plan, some Netflix content
          may be available for temporary download and offline
          viewing on certain supported devices.
        </p>

        <h3>1.8. Usage Rights and Restrictions</h3>

        <p>
          Subject to these Terms and only to the extent you are
          expressly authorised, we grant you a limited,
          non-exclusive, non-transferable right to access the
          Netflix service.
        </p>

        <ul>
          <li>Use the service for commercial purposes.</li>
          <li>Archive, reproduce or distribute content.</li>
          <li>Circumvent content protections.</li>
          <li>Use robots, spiders or automated scraping tools.</li>
          <li>Decompile or reverse engineer software.</li>
          <li>Manipulate the content of the service.</li>
          <li>Use data mining or extraction methods.</li>
          <li>Transmit malicious software or code.</li>
          <li>Use the service to train unauthorized systems.</li>
        </ul>

        <h3>1.9. Viewing Experience and Technical Requirements</h3>

        <p>
          The quality of Netflix content may vary from device to
          device and may be affected by your location, available
          bandwidth and Internet connection speed.
        </p>

        <div className="speed-box">

          <div>
            <strong>HD</strong>
            <span>3.0 Mbps per stream</span>
          </div>

          <div>
            <strong>Full HD</strong>
            <span>5.0 Mbps per stream</span>
          </div>

          <div>
            <strong>Ultra HD</strong>
            <span>15.0 Mbps per stream</span>
          </div>

        </div>

        <h3>1.10. Netflix Software and Updates</h3>

        <p>
          Netflix software is developed by, or for, Netflix and
          may solely be used for authorized access to Netflix
          content through supported devices.
        </p>

        <h3>1.11. Interactive Features</h3>

        <p>
          Netflix may offer interactive features such as live
          chat, polls, voting, multiplayer gaming and live events.
          Use of these features is subject to applicable rules
          and policies.
        </p>

        {/* 2 */}
        <h2>2. Subscription Terms</h2>

        <h3>2.1. Billing Cycle and Payment Terms</h3>

        <p>
          Your Netflix subscription will continue until terminated.
          To purchase a Netflix subscription, you will need to add
          one or more Payment Methods to your account.
        </p>

        <h3>2.2. Payment Methods</h3>

        <p>
          You authorize Netflix to charge any Payment Method
          associated with your account in case your primary
          Payment Method is declined or no longer available.
        </p>

        <h3>2.3. Updating your Payment Methods</h3>

        <p>
          You can update your Payment Methods through the
          Account page.
        </p>

        <h3>2.4. Advertisements and Commercial Content</h3>

        <p>
          Certain subscription experiences or special events may
          contain advertisements or commercial content depending
          on the applicable service offering.
        </p>

        <h3>2.5. Subscriptions Obtained Through Third Parties</h3>

        <p>
          Some subscriptions may be offered by third parties in
          conjunction with their own products and services.
        </p>

        <h3>2.6. Cancellation</h3>

        <p>
          You can cancel your subscription at any time through
          the Account page. Cancellation will take effect at the
          end of the applicable billing period.
        </p>

        <h3>2.7. Changes to the Price and Subscription Plans</h3>

        <p>
          Subscription plans and pricing may change from time to
          time. Users will be notified about applicable changes.
        </p>

        {/* 3 */}
        <h2>3. Extra Members</h2>

        <h3>3.1. Creation of an Extra Member Account</h3>

        <p>
          Where available, the Account Owner may purchase an
          Extra Member account for a person outside of the
          Account Owner’s household.
        </p>

        <h3>3.2. Cancellation or Changing Beneficiary</h3>

        <p>
          An Extra Member may cancel their account at any time.
          The Account Owner may also remove the Extra Member
          feature where applicable.
        </p>

        {/* 4 */}
        <h2>4. Account Access</h2>

        <p>
          You are responsible for any activity that occurs
          through the Netflix account. You should maintain
          control over devices used to access the service and
          not reveal login credentials or payment details to
          anyone.
        </p>

        {/* 5 */}
        <h2>5. Warranties and Limitations on Liability</h2>

        <p>
          The Netflix service is provided “as is” and without
          warranty or condition. The service may not always be
          uninterrupted or error-free.
        </p>

        {/* 6 */}
        <h2>6. Class Action Waiver</h2>

        <p>
          Where permitted under applicable law, claims may be
          brought only in an individual capacity and not as part
          of a class or representative proceeding.
        </p>

        {/* 7 */}
        <h2>7. Miscellaneous</h2>

        <h3>7.1. Governing Law</h3>

        <p>
          These Terms of Use shall be governed by and construed
          in accordance with the laws of India.
        </p>

        <h3>7.2. Unsolicited Materials</h3>

        <p>
          Netflix does not accept unsolicited materials or ideas
          for Netflix content.
        </p>

        <h3>7.3. Feedback</h3>

        <p>
          Netflix may use comments, information, ideas, concepts,
          reviews or other feedback provided through the service
          for purposes related to improving the service.
        </p>

        <h3>7.4. Customer Support</h3>

        <p>
          To find more information about the service and its
          features or if you need assistance with your account,
          please visit the Netflix Help Center.
        </p>

      </article>

      {/* Footer */}
      <footer className="terms-footer">

        <div className="terms-footer-logo">
          NETFLIX
        </div>

        <div className="terms-footer-links">

          <button onClick={() => router.push("/help")}>
            Help Center
          </button>

          <button onClick={() => router.push("/terms")}>
            Terms of Use
          </button>

          <button>
            Privacy
          </button>

          <button>
            Cookie Preferences
          </button>

          <button>
            Corporate Information
          </button>

        </div>

        <p>
          © 2026 Netflix Clone — Terms Demo
        </p>

      </footer>

    </main>
  );
}