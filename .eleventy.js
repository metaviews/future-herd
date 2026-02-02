module.exports = function (eleventyConfig) {
eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addGlobalData("build", {
    year: new Date().getFullYear()
  });

  // Format dates consistently (no Nunjucks date filter needed)
  eleventyConfig.addFilter("postDate", (dateObj) => {
    if (!dateObj) return "";
    return new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    }).format(dateObj);
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
