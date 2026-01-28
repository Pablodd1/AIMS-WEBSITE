// app/sitemap.js

// 👇 Server-side fetching function for dynamic blogs
async function getBlogs(lang = "es") {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/server-API/blogs?lang=${lang}&keys=_id`,
      {
        next: { revalidate: 60 }, // ISR caching for performance
      },
    );
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.warn(
      `Could not fetch blogs for sitemap (${lang}): ${error.message}`,
    );
    return [];
  }
}

export default async function sitemap() {
  const baseUrl = process.env.BASE_URL;

  // Fetch articles for both languages
  const [esBlogs, enBlogs] = await Promise.all([
    getBlogs("es"),
    getBlogs("en"),
  ]);

  // Generate multilingual URLs for blogs
  const articleUrls = esBlogs.map((item) => {
    const id = item._id.$oid;
    console.log(id);
    return {
      url: `${baseUrl}/articles/${id}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/articles/${id}`,
          es: `${baseUrl}/articles/${id}`,
        },
      },
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  // General static pages (both languages)
  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "get-started", priority: 0.9 },
    { path: "articles", priority: 0.8 },
    { path: "technology", priority: 0.8 },
    { path: "customer-care", priority: 0.8 },
    { path: "policies", priority: 0.6 },
    { path: "terms-and-conditions", priority: 0.6 },
    { path: "about-us", priority: 0.7 },
  ];

  const staticUrls = staticPages.flatMap((page) => {
    const url = `${baseUrl}/${page.path}`;
    const enUrl = `${baseUrl}/en/${page.path}`;
    return [
      {
        url,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page.priority,
        alternates: {
          languages: {
            en: enUrl,
            es: url,
          },
        },
      },
    ];
  });
  console.log([...staticUrls, ...articleUrls]);
  // Combine and return
  return [...staticUrls, ...articleUrls];
}
