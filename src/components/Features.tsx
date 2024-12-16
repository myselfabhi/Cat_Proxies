import Image from "next/image"

export default function FeaturesSection() {
  return (
    <div className=" z-10 mb-20 lg:py-10 lg:px-8 mx-2 px-8 sm:py-24">
      <div className="mx-auto max-w-7xl lg:px-6 md:px-6 ">
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x lg:p-6 sm:p-0 bg-white shadow-flag divide-gray-300 rounded-lg">
          <div className="flex-1 p-4 sm:p-2 sm:mt-3 flex items-center justify-center">
            <div className="flex space-x-3 items-center">
              <Image
                src="/images/icons/database.svg"
                alt=""
                className="h-[30px] w-[30px]"
                height={400}
                width={400}
              />
              <p className="text-[16px] font-sora font-normal text-gray-500">
                10M Global <br /> Residential IPs
              </p>
            </div>
          </div>
          <div className="flex-1 p-4 sm:p-2 flex items-center justify-center">
            <div className="flex space-x-3 items-center">
              <Image
                src="/images/icons/location-icon.svg"
                alt=""
                className="h-[30px] w-[30px]"
                height={400}
                width={400}
              />
              <p className="text-[16px] font-sora font-normal text-gray-500">
                Free Country, state,
                <br />
                city & ISP targeting
              </p>
            </div>
          </div>
          <div className="flex-1 p-4 sm:p-2 flex items-center justify-center">
            <div className="flex space-x-3 items-center lg:mt-0 sm:mt-3">
              <Image
                src="/images/icons/battery-full-icon.svg"
                alt=""
                className="h-[30px] w-[30px]"
                height={400}
                width={400}
              />
              <p className="text-[16px] font-sora font-normal text-gray-500">
                99.9% Uptime <br />
                Reliable IPs
              </p>
            </div>
          </div>
          <div className="flex-1 p-4 sm:p-2 flex items-center justify-center">
            <div className="flex space-x-3 items-center">
              <Image
                src="/images/icons/lightening-icon.svg"
                alt=""
                className="h-[30px] w-[30px]"
                height={400}
                width={400}
              />
              <p className="text-[16px] font-sora font-normal text-gray-500">
                ~0.5s response time
                <br />
                on average
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
