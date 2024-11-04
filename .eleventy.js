module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: ".",          // Root directory as input
      output: "docs",      // Output directory for GitHub Pages
      includes: "_includes",
      data: "_data"
    }
  };
};
