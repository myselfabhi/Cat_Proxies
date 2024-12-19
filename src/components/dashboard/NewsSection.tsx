const NewsItem = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 py-5">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full sm:w-20 sm:h-20 rounded-md object-cover"
      />

      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

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
  ];

  return (
    <div className="w-full px-6 py-7 bg-white dark:bg-gray-800 rounded-2xl mb-10">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
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
  );
};

export default NewsSection;
