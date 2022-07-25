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
                    "6154a15032a9a209e3adf5ae",
                  title: "Sanity Studio",
                  name: "macash-home-loans-studio",
                  apiId: "8e75f63d-32fb-4460-b60f-cc2309d1ef3b",
                },
                {
                  buildHookId: "6154a150d5ca3f00aac18ea2",
                  title: "Blog Website",
                  name: "macash-home-loans",
                  apiId: "b4b5c3c2-7d8c-489f-912a-97e685d67b41",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hamletavetisian/macash-home-loans",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://macash-home-loans.netlify.app",
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
