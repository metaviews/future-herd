module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addGlobalData("build", {
    year: new Date().getFullYear()
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    if (!dateObj) return "";
    return new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    }).format(dateObj);
  });

  // Find an episode in the episodes collection by fileSlug (e.g. "episode-002")
  eleventyConfig.addFilter("episodeBySlug", (episodes, slug) => {
    if (!episodes || !slug) return null;
    return episodes.find((item) => item.fileSlug === slug) || null;
  });
  // Find a knowledge item in the knowledge collection by fileSlug (e.g. "strategic-mindsets-2050")
  eleventyConfig.addFilter("knowledgeBySlug", (items, slug) => {
    if (!items || !slug) return null;
    return items.find((item) => item.fileSlug === slug) || null;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
