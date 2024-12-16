/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function DeliveryAgreement() {
  return (
    <section className=" pb-16 overflow-hidden bg-white">
      <div className="flex flex-col justify-center items-center space-y-12">
        <Image
          src="/images/illustration/single-cat.svg"
          alt="Illustration of a single cat"
          className="mt-16"
          height={100}
          width={100}
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[32px]">Delivery Agreement</h1>
        </div>
        <div className="px-4 md:px-16">
          <div className=" text-[16px] md:text-[24px] p-4 md:p-16 shadow-flag flex flex-col justify-left items-left text-gray-500 font-normal space-y-3">
            <p>Effective Date: 28 June 2024</p>

            <p>
              CatProxies ("we", "our", "us") is committed to providing reliable
              and efficient delivery of our proxy services. This Delivery
              Agreement outlines the terms and conditions regarding the delivery
              of proxy services purchased from our website catproxies.com
            </p>
            <p>1. Service Delivery</p>
            <p>1.1 Delivery Methods</p>
            <p>
              Our proxy services are delivered digitally and are accessible
              through your account dashboard on our website. Upon successful
              purchase, the proxy credentials will be available for immediate
              use, or within 60 minutes/hours, depending on the service
              purchased.
            </p>

            <p>1.2 Access Details</p>
            <p>You will receive the following details upon purchase:</p>
            <p>Proxy IP address</p>
            <p>Port number</p>
            <p>Username and password (if applicable)</p>

            <p>2. Delivery Charges</p>
            <p>
              Since our services are delivered digitally, there are no physical
              shipping charges. All charges are for the service itself and any
              applicable taxes or fees.
            </p>

            <p>3. Delivery Timeframes</p>
            <p>3.1 Instant Delivery</p>
            <p>
              Most of our proxy services are available instantly after the
              payment is confirmed. You will receive an email notification with
              access details, and the services will be accessible via your
              account dashboard.
            </p>

            <p>3.2 Delayed Delivery</p>
            <p>
              In some cases, there might be a short delay due to processing or
              verification requirements. Typically, this delay will not exceed
              48 hours. You will be notified via email in case of any delays.
            </p>

            <p>4. Order Processing</p>
            <p>
              Orders are processed immediately upon receipt of payment. You will
              receive an order confirmation email and an email with your proxy
              service details once the processing is complete.
            </p>

            <p>5. International Delivery</p>
            <p>
              Our proxy services are available for use globally. However,
              availability may vary based on regional regulations and
              restrictions. It is the customer's responsibility to ensure that
              using our proxy services complies with local laws.
            </p>

            <p>6. Service Activation and Configuration</p>
            <p>
              Upon delivery, you will receive detailed instructions on how to
              configure and use your proxies. If you encounter any issues, our
              support team is available to assist you at support@catproxies.com.
            </p>

            <p>7. Service Availability</p>
            <p>
              Our proxy services are designed to be available 24/7. However,
              there may be periods of downtime for maintenance or unforeseen
              technical issues. We strive to minimize any disruptions and will
              notify you in advance whenever possible.
            </p>

            <p>8. Lost or Compromised Credentials</p>
            <p>
              If you believe your proxy credentials have been lost or
              compromised, please contact our support team immediately at
              support@catproxies.com. We will close all plans of the old account
              and assist you in securing a new account. In certain cases, we
              might be able to transfer some of your plans to a new account.
            </p>

            <p>9. Changes to Delivery Details</p>
            <p>
              If you need to change any details related to your proxy service
              delivery, such as updating your contact email, please contact us
              as soon as possible at support@catproxies.com. We will do our best
              to accommodate your request.
            </p>

            <p>10. Customer Responsibilities</p>
            <p>10.1 Accurate Information</p>
            <p>
              You are responsible for providing accurate information during the
              purchase process. We are not responsible for any issues arising
              from incorrect information provided by the customer.
            </p>

            <p>10.2 Compliance</p>
            <p>
              You are responsible for ensuring that your use of our proxy
              services complies with all applicable laws and regulations.
            </p>

            <p>11. Contact Us</p>
            <p>
              If you have any questions about this Delivery Agreement, please
              contact us at:
            </p>
            <p>support@catproxies.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
