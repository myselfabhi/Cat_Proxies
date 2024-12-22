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

      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
          {title}
        </h3>
        <p className="text-xs text-[#A8A8A8] dark:text-gray-400 line-clamp-2">
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
    <div className="w-full border-[12px] border-[#fffefe] bg-[#fffefe] dark:bg-[#1E2327] rounded-2xl gap-6 mt-5">
      {/* Header */}
      <h2 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-2">
        Recent News & Updates
      </h2>

      {/* News Items */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
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
