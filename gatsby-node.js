const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/data": path.resolve(__dirname, "src/data/index"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/context": path.resolve(__dirname, "src/context/"),
        "@/css": path.resolve(__dirname, "src/assets/css/"),
        "@/images": path.resolve(__dirname, "src/assets/images/"),
      },
    },
  });
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allInventoryJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  console.log("gatsby node console", data.data.allInventoryJson.edges);

  if (data.errors) {
    console.log("error retrieving data", data.errors);
    return;
  }

  const inventoryTemplate = require.resolve(
    "./src/templates/inventory-template.js"
  );

  data.data.allInventoryJson.edges.forEach(edge => {
    createPage({
      path: `/inventory/${edge.node.slug}/`,
      component: inventoryTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
