import Image from "next/image"

const Line1 = [
  {
    src: "/images/logos/semrush.svg",
    alt: "semrush",
  },
  {
    src: "/images/logos/bitbrowser.svg",
    alt: "bitbrowser",
  },
  {
    src: "/images/logos/csharp.svg",
    alt: "c#",
  },
  {
    src: "/images/logos/lalicat.svg",
    alt: "lalicat",
  },
  {
    src: "/images/logos/dolphinantybrowser.svg",
    alt: "dolphinantybrowser",
  },
  {
    src: "/images/logos/selenium.svg",
    alt: "Digital Ocean",
  },
  {
    src: "/images/logos/gmail.svg",
    alt: "Adobe XD",
  },
  {
    src: "/images/logos/mulogin.svg",
    alt: "Airtable",
  },
  {
    src: "/images/logos/incogniton.svg",
    alt: "Gitlab",
  },
  {
    src: "/images/logos/kameleo.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/nstbrowser.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/undetectable.svg",
    alt: "MongoDB",
  },
]
const Line2 = [
  {
    src: "/images/logos/multilogin.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/octobrowser.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/gologin.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/puppeteer.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/c++.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/playwright.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/doubleverify.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/parsehub.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/react.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/octoparse.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/foxyproxy.svg",
    alt: "MongoDB",
  },
]
const Line3 = [
  {
    src: "/images/logos/vmlogin.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/ruby.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/javascript.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/integralAdscience.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/adspower.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/morelogin.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/shopify.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/proxifier.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/ghostbrowser.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/logos/python.svg",
    alt: "MongoDB",
  },
]

export default function LogoSection() {
  return (
    <div className="bg-white my-20 py-10 sm:py-20  z-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="flex justify-center">
          <h2 className="text-center max-w-4xl text-3xl leading-10 capitalize text-[#161616]">
            Compatible with Major Browsers, Programming Languages, and
            Development Tools
          </h2>
        </div>
        <div className="mt-12 flex justify-center">
          <div className=" max-w-7xl grid grid-cols-6 gap-5 sm:gap-x-16 sm:gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
            {Line1.map((logo) => (
              <div key={logo.alt} className="flex justify-center items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[44px] w-[44px]"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-6 sm:mt-10  max-w-6xl grid grid-cols-6 gap-5 sm:gap-x-16 sm:gap-y-10 sm:grid-cols-6 lg:grid-cols-11">
            {Line2.map((logo) => (
              <div key={logo.alt} className="flex justify-center items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[44px] w-[44px]"
                  width={100}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-6 sm:mt-10 max-w-5xl grid grid-cols-6 gap-5 sm:gap-x-16 sm:gap-y-10 sm:grid-cols-6 lg:grid-cols-10">
            {Line3.map((logo) => (
              <div key={logo.alt} className="flex justify-center items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[44px] w-[44px]"
                  width={100}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
