const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
			"./assets/": "/assets/",
      "./hog/assets/": "/hog/assets/",
      "./CNAME": "/CNAME",
		})
};
