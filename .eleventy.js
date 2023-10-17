module.exports = function(eleventyConfig) {

    // Copy the `media/` directories for each article
    eleventyConfig.addPassthroughCopy("articles/**/media/");

    return {
        dir: {
            includes: "_includes",
            input: ".",
            output: "_site"
        }
    };

};