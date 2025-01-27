const NewsItem = ({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 py-5">
      <img
        src={image}
        alt={title}
        className="w-full lg:w-20 lg:h-16 sm:w-20 sm:h-20 rounded-md object-cover"
      />

      <div className="flex-1 gap-[1px]">
        <h3 className="text-sm font-satoshi font-bold text-black dark:text-gray-200 mb-1">
          {title}
        </h3>
        <p className="text-sm font-medium text-[#555555] dark:text-gray-400 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  )
}

const NewsSection = () => {
  const newsData = [
    {
      title: "How to use CatProxies on MoreLogin Browser",
      description:
        "Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy.",
      image: "/cat_news.svg",
    },
    {
      title: "How to use CatProxies on MoreLogin Browser",
      description:
        "Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy.",
      image: "/cat_news.svg",
    },
    {
      title: "How to use CatProxies on MoreLogin Browser",
      description:
        "Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy.",
      image: "/cat_news.svg",
    },
    {
      title: "How to use CatProxies on MoreLogin Browser",
      description:
        "Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy.",
      image: "/cat_news.svg",
    },
  ]

  return (
    <div className="w-full mx-auto border-[12px] dark:border-[#1E2327] border-[#fffefe] bg-[#fffefe] shadow-extrasoft dark:bg-[#1E2327] rounded-2xl gap-6 px-6 py-6 mb-12">
      {/* Header */}
      <h2 className=" font-satoshi font-medium text-[#262626] dark:text-gray-200 mb-2">
        Recent News & Updates
      </h2>

      {/* News Items */}
      <div className="divide-y divide-[#E0E0E0] dark:divide-gray-700">
        {newsData.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            image={news.image}
          />
        ))}
      </div>
    </div>
  )
}

export default NewsSection
