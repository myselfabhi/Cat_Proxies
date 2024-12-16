import React from "react"
import Image from "next/image"

export default function TermsOfService() {
  return (
    <section className="pb-16 overflow-hidden bg-white">
      <div className="flex flex-col justify-center items-center space-y-12">
        <Image
          src="/images/illustration/single-cat.svg"
          alt="illustration"
          className="mt-16 max-w-xs mx-auto"
          height={100}
          width={100}
        />
        <div className="flex flex-col justify-center items-center text-center sm:text-left">
          <h1 className="font-bold text-[32px]">Fair Usage Policies</h1>
        </div>
        <div className="px-4 md:px-16">
          <div className=" text-[16px] md:text-[24px] shadow-flag p-4 md:p-16 flex flex-col justify-left items-left text-gray-500 font-normal space-y-3">
            <p>Effective Date: 28 June 2024</p>

            <p>
              At CatProxies, we are committed to providing high-quality,
              reliable services to all our customers. This Fair Usage Policy
              &quot;Policy&quot; is designed to ensure that all customers can
              use our services fairly and equitably. By using our services, you
              agree to comply with this Policy.
            </p>

            <p>1. Purpose</p>
            <p>
              The purpose of this Policy is to prevent improper use of our
              services that could negatively impact the experience of other
              customers. This Policy outlines what constitutes fair usage and
              the actions we may take if we detect unfair usage.
            </p>

            <p>2. Fair Usage</p>
            <p>2.1 General Principles</p>
            <p>
              Equitable Access: Our services are intended to be used by all
              customers in a manner that does not adversely affect the
              performance or availability of the services for others.
            </p>
            <p>
              Reasonable Use: Customers are expected to use our services in a
              reasonable manner. Excessive usage that goes beyond typical or
              expected usage patterns may be considered unfair.
            </p>

            <p>2.2 Specific Guidelines</p>
            <p>
              Bandwidth: Excessive consumption of bandwidth that impacts other
              customers may be subject to limitations or restrictions.
            </p>
            <p>
              Connections: Overuse of concurrent connections that disrupts the
              service for others is prohibited.
            </p>
            <p>
              Resource Allocation: Using resources in a way that unfairly
              monopolizes system resources, such as CPU, memory, or storage, is
              not allowed.
            </p>

            <p>3. Prohibited Activities</p>
            <p>
              Unfair usage includes, but is not limited to, the following
              activities:
            </p>
            <p>
              Automated Usage: Using bots or automated scripts to access or use
              the services in a manner that generates excessive load.
            </p>
            <p>
              Spamming: Sending large volumes of unsolicited messages or
              requests.
            </p>
            <p>
              Unauthorized Access: Attempting to gain unauthorized access to our
              services, other accounts, or systems.
            </p>
            <p>
              Malicious Activities: Engaging in activities that are harmful to
              our services or other customers, such as distributing malware or
              launching denial-of-service attacks.
            </p>

            <p>4. Monitoring and Enforcement</p>
            <p>4.1 Monitoring</p>
            <p>
              We monitor usage patterns to identify and address any instances of
              unfair usage. This monitoring is conducted in accordance with our
              Privacy Policy.
            </p>

            <p>4.2 Enforcement</p>
            <p>
              If we detect any activity that violates this Policy, we may take
              the following actions:
            </p>
            <p>
              Warning: Issuing a warning to the customer regarding the detected
              unfair usage.
            </p>
            <p>
              Temporary Suspension: Temporarily suspending the customer&apos;s
              access to the services to mitigate the impact on other customers.
            </p>
            <p>
              Service Restriction: Limiting or throttling the customer&apos;s
              usage to bring it within acceptable limits.
            </p>
            <p>
              Termination: Terminating the customer&apos;s account for repeated
              or severe violations of this Policy.
            </p>

            <p>5. Your Responsibilities</p>
            <p>
              As a customer, you are responsible for ensuring that your use of
              our services complies with this Policy. You should:
            </p>
            <p>
              Monitor Your Usage: Regularly review your usage to ensure it
              remains within reasonable limits.
            </p>
            <p>
              Respond to Warnings: Promptly address any warnings or
              notifications from us regarding your usage.
            </p>
            <p>
              Report Issues: Notify us immediately if you believe your account
              has been compromised or if you observe any suspicious activity.
            </p>

            <p>6. Changes to This Policy</p>
            <p>
              We may update this Fair Usage Policy from time to time. We will
              notify you of any changes by posting the new Policy on this page
              and updating the &quot;Effective Date&quot; at the top. You are
              advised to review this Policy periodically for any changes.
            </p>

            <p>7. Contact Us</p>
            <p>
              If you have any questions about this Fair Usage Policy, please
              contact us at:
            </p>
            <p>support@catproxies.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
