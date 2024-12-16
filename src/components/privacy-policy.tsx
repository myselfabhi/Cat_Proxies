/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function PrivacyPolicy() {
  return (
    <section className="pb-16 overflow-hidden bg-white">
      <div className="flex flex-col justify-center items-center space-y-12">
        <Image
          src="/images/illustration/single-cat.svg"
          alt="Illustration of a single cat"
          className=" mt-16 max-w-xs mx-auto"
          height={100}
          width={100}
        />
        <div className="flex flex-col justify-center items-center text-center sm:text-left">
          <h1 className="font-bold text-[32px] sm:text-[32px]">
            Privacy Policy
          </h1>
        </div>
        <div className="px-4 md:px-16">
          <div className="text-[16px] md:text-[24px] sm:text-[24px] shadow-flag p-4 sm:p-16 flex flex-col justify-center items-center text-center sm:items-start sm:text-left text-gray-500 font-normal space-y-4">
            <p>Effective Date: 28 June 2024</p>
            <p>
              CatProxies (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website catproxies.com, use our services, or
              interact with us in other ways. Please read this Privacy Policy
              carefully. If you do not agree with the terms of this Privacy
              Policy, please do not access the site or use our services.
            </p>
            <p>1. Information We Collect</p>
            <p>1.1 Personal Data</p>
            <p>
              When you register for an account, purchase our services, or
              contact us, we may collect the following personal information:
            </p>
            <p>Email address</p>
            <p>Payment information</p>
            <p>Any other information you voluntarily provide</p>
            <p>1.2 Usage Data</p>
            <p>
              We automatically collect certain information when you visit our
              site or use our services, including:
            </p>
            <p>IP address</p>
            <p>Browser type and version</p>
            <p>Operating system</p>
            <p>Referring website</p>
            <p>Pages you visit on our site</p>
            <p>Time and date of your visit</p>
            <p>Time spent on those pages</p>
            <p>Other diagnostic data</p>
            <p>1.3 Cookies and Tracking Technologies</p>
            <p>
              We use cookies and similar tracking technologies to track activity
              on our site and hold certain information. Cookies are files with a
              small amount of data that may include an anonymous unique
              identifier.
            </p>
            <p>2. How We Use Your Information</p>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <p>To provide, operate, and maintain our services</p>
            <p>To process transactions and send related information</p>
            <p>
              To manage your account, including account creation, login, and
              verification
            </p>
            <p>To improve our website and services</p>
            <p>
              To communicate with you, including sending updates, security
              alerts, and support messages
            </p>
            <p>
              To monitor and analyze usage and trends to improve your experience
            </p>
            <p>
              To detect, prevent, and address technical issues and fraudulent
              activities
            </p>
            <p>3. Sharing Your Information</p>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except as described below:
            </p>
            <p>
              Service Providers: We may share your information with third-party
              service providers who perform services on our behalf, such as
              payment processing, data analysis, email delivery, hosting
              services, customer service, and marketing assistance.
            </p>
            <p>
              Business Transfers: In the event of a merger, acquisition, or sale
              of all or a portion of our assets, your information may be
              transferred to the acquiring entity.
            </p>
            <p>
              Legal Requirements: We may disclose your information if required
              to do so by law or in response to valid requests by public
              authorities (e.g., a court or a government agency).
            </p>
            <p>4. Security of Your Information</p>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>
            <p>5. Your Data Protection Rights</p>
            <p>
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <p>
              Access: You have the right to request access to the personal data
              we hold about you.
            </p>
            <p>
              Correction: You have the right to request that we correct any
              information you believe is inaccurate or incomplete.
            </p>
            <p>
              Deletion: You have the right to request that we delete your
              personal data, under certain conditions.
            </p>
            <p>
              Objection: You have the right to object to our processing of your
              personal data, under certain conditions.
            </p>
            <p>
              Restriction: You have the right to request that we restrict the
              processing of your personal data, under certain conditions.
            </p>
            <p>
              Data Portability: You have the right to request that we transfer
              the data that we have collected to another organization, or
              directly to you, under certain conditions.
            </p>
            <p>
              To exercise these rights, please contact us at
              support@catproxies.com
            </p>
            <p>6. Changes to This Privacy Policy</p>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Effective Date&quot; at the top. You are
              advised to review this Privacy Policy periodically for any
              changes.
            </p>
            <p>7. Contact Us</p>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p>support@catproxies.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
