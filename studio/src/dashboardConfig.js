export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "612d398f222dc245195eb78b",
                  title: "Sanity Studio",
                  name: "gatsby-prismic-starter-prist-studio",
                  apiId: "1d0fa05c-1d4f-48e3-b727-698403b45829",
                },
                {
                  buildHookId: "612d398f60675a2c4333f149",
                  title: "Blog Website",
                  name: "gatsby-prismic-starter-prist",
                  apiId: "cc124b3a-1c5e-4997-a2c6-6e29535d06d7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kumarrishabh0707/gatsby-prismic-starter-prist",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://gatsby-prismic-starter-prist.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
