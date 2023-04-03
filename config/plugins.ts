module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        articles: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
