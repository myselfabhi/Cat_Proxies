/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function CookiesPolicy() {
  return (
    <section className="pb-16 overflow-hidden bg-white">
      <div className="flex flex-col justify-center items-center space-y-12">
        <Image
          src="/images/illustration/single-cat.svg"
          alt="Illustration of a single cat"
          className=""
          height={100}
          width={100}
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[32px]">Cookie Policy</h1>
        </div>
        <div className="px-4 md:px-16">
          <div className=" text-[16px] md:text-[24px] shadow-flag p-4 md:p-16 flex flex-col justify-left items-left text-gray-500 font-normal space-y-3">
            <p>Effective Date: 28 June 2024</p>

            <p>
              CatProxies ("we", "our", "us") uses cookies and similar tracking
              technologies to enhance your experience on our website
              catproxies.com and to analyze our traffic. This Cookies Policy
              explains what cookies are, how we use them, and your choices
              regarding their use.
            </p>
            <p>1. What Are Cookies?</p>
            <p>
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They help the website
              recognize your device and store some information about your
              preferences or past actions.
            </p>

            <p>2. How We Use Cookies</p>
            <p>We use cookies for various purposes, including:</p>
            <p>
              Essential Cookies: These cookies are necessary for the website to
              function properly. They enable you to navigate our site and use
              its features.
            </p>
            <p>
              Performance Cookies: These cookies collect information about how
              visitors use our site, such as which pages are visited most often.
              This data helps us improve the website's performance and your
              experience.
            </p>
            <p>
              Functionality Cookies: These cookies allow our site to remember
              choices you make, such as your username, language, or region, and
              provide enhanced, personalized features.
            </p>
            <p>
              Targeting/Advertising Cookies: These cookies are used to deliver
              advertisements relevant to you and your interests. They also help
              us measure the effectiveness of our advertising campaigns.
            </p>

            <p>3. Types of Cookies We Use</p>
            <p>
              Session Cookies: These cookies are temporary and expire once you
              close your browser.
            </p>
            <p>
              Persistent Cookies: These cookies remain on your device for a set
              period or until you delete them.
            </p>
            <p>First-Party Cookies: These cookies are set by our website.</p>
            <p>
              Third-Party Cookies: These cookies are set by a domain other than
              our website. For example, we use third-party analytics services
              that set cookies on our behalf.
            </p>

            <p>4. Third-Party Cookies</p>
            <p>
              We use third-party service providers, such as Google Analytics, to
              analyze the use of our website. These third parties may set
              cookies on your device to collect information about your online
              activities over time and across different websites.
            </p>

            <p>5. Your Choices Regarding Cookies</p>
            <p>
              You have several options to control or limit how cookies are used
              on your device:
            </p>
            <p>
              Browser Settings: Most web browsers allow you to manage your
              cookie preferences through the browser settings. You can set your
              browser to block or delete cookies. However, please note that if
              you disable cookies, some features of our website may not function
              properly.
            </p>
            <p>
              Opt-Out Tools: Some third parties provide tools for managing and
              opting out of certain cookies. For example, you can opt-out of
              Google Analytics by installing the Google Analytics Opt-out
              Browser Add-on.
            </p>

            <p>6. Changes to This Cookies Policy</p>
            <p>
              We may update our Cookies Policy from time to time. We will notify
              you of any changes by posting the new Cookies Policy on this page
              and updating the "Effective Date" at the top. You are advised to
              review this Cookies Policy periodically for any changes.
            </p>

            <p>7. Contact Us</p>
            <p>
              If you have any questions about this Cookies Policy or our use of
              cookies, please contact us at:
            </p>
            <p>support@catproxies.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
