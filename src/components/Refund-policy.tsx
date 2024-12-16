import Image from "next/image"

export default function RefundPolicy() {
  return (
    <section className="pb-16 overflow-hidden bg-white">
      <div className="flex flex-col justify-center items-center space-y-12">
        <Image
          src="/images/illustration/single-cat.svg"
          alt=""
          className=" max-w-xs mx-auto"
          height={100}
          width={100}
        />
        <div className="flex flex-col justify-center items-center text-center sm:text-left">
          <h1 className="font-bold text-[32px] sm:text-[32px]">
            Refund Policy
          </h1>
        </div>
        <div className="px-4 md:px-16">
          <div className=" text-[16px] md:text-[24px] shadow-flag p-4 md:p-16 flex flex-col justify-left items-left text-gray-500 font-normal space-y-3">
            <p>Effective Date: 28 June 2024</p>
            <p>
              At CatProxies, we strive to ensure the satisfaction of our
              customers. This Refund Policy outlines the conditions under which
              refunds may be granted for purchases made on our website
              catproxies.com or through our services.
            </p>
            <p>1. General Refund Policy</p>
            <p>
              We follow a strict no-refund policy. However, we understand that
              there may be exceptional circumstances where a refund is
              necessary. If you encounter any problems that you believe require
              serious attention, please contact our support team immediately.
            </p>
            <p>2. Conditions for Refunds</p>
            <p>Refunds may be considered under the following conditions:</p>
            <p>
              Service Issues: If the service you purchased is not delivered as
              described or if there are technical issues that prevent you from
              using the service, you may be eligible for a refund.
            </p>
            <p>
              Billing Errors: If you believe there has been a billing error,
              please contact us within 24 hours of the transaction to resolve
              the issue.
            </p>
            <p>3. Requesting a Refund</p>
            <p>To request a refund, please follow these steps:</p>
            <p>
              Contact Support: Reach out to our support team at
              support@catproxies.com with your order details and a description
              of the issue you are experiencing.
            </p>
            <p>
              Provide Documentation: Be prepared to provide any relevant
              documentation or evidence to support your claim (e.g.,
              screenshots, error messages).
            </p>
            <p>
              Submit within 24 Hours: All refund requests must be submitted
              within 24 hours of purchase. Requests received after this period
              may not be considered.
            </p>
            <p>4. Processing Refunds</p>
            <p>
              Evaluation: Our support team will evaluate your request and may
              contact you for additional information if necessary.
            </p>
            <p>
              Decision: We will notify you of the outcome of your refund request
              within 1 business day.
            </p>
            <p>
              Refund Method: If approved, refunds will be processed using the
              original payment method. Please note that it may take several
              business days for the refund to appear on your account, depending
              on your bank or payment provider.
            </p>
            <p>5. Non-Refundable Items</p>
            <p>
              Certain items and services are non-refundable, including but not
              limited to:
            </p>
            <p>
              Digital products or services that have been fully delivered or
              accessed
            </p>
            <p>Custom or personalized services once work has commenced</p>
            <p>
              Any other products or services explicitly marked as non-refundable
              at the time of purchase
            </p>
            <p>6. Contact Us</p>
            <p>
              If you have any questions about this Refund Policy or need
              assistance with a refund request, please contact us at:
            </p>
            <p>support@catproxies.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
