// app/sitemap.js - Comprehensive SEO Sitemap for AI Medical Scriber

const baseUrl = process.env.BASE_URL || 'https://www.aimedicalscriber.com';

async function getBlogs(lang = "es") {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/server-API/blogs?lang=${lang}&keys=_id`,
      {
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.warn(`Could not fetch blogs for sitemap (${lang}): ${error.message}`);
    return [];
  }
}

export const changefreq = {
  homepage: 'daily',
  mainPages: 'weekly',
  articles: 'weekly',
  blogPosts: 'weekly',
  policies: 'monthly',
};

export const priority = {
  homepage: 1.0,
  getStarted: 0.9,
  technology: 0.9,
  aboutUs: 0.8,
  articles: 0.8,
  customerCare: 0.8,
  policies: 0.5,
  terms: 0.5,
};

export default async function sitemap() {
  const [esBlogs, enBlogs] = await Promise.all([
    getBlogs("es"),
    getBlogs("en"),
  ]);

  const now = new Date();
  const lastModified = now.toISOString();

  const staticPages = [
    {
      path: '',
      lang: 'es',
      priority: priority.homepage,
      changefreq: changefreq.homepage,
    },
    {
      path: 'en',
      lang: 'en',
      priority: priority.homepage,
      changefreq: changefreq.homepage,
    },
    {
      path: 'get-started',
      lang: 'es',
      priority: priority.getStarted,
      changefreq: changefreq.mainPages,
    },
    {
      path: 'en/get-started',
      lang: 'en',
      priority: priority.getStarted,
      changefreq: changefreq.mainPages,
    },
    {
      path: 'technology',
      lang: 'es',
      priority: priority.technology,
      changefreq: changefreq.mainPages,
    },
    {
      path: 'en/technology',
      lang: 'en',
      priority: priority.technology,
      changefreq: changefreq.mainPages,
    },
    {
      path: 'about-us',
      lang: 'es',
      priority: priority.aboutUs,
      changefreq: changefreq.mainPages,
    },
    {
      path: 'en/about-us',
      lang: 'en',
      priority: priority.aboutUs,
      changefreq: changefreq.mainPages,
    },
    {
      path: 'articles',
      lang: 'es',
      priority: priority.articles,
      changefreq: changefreq.articles,
    },
    {
      path: 'en/articles',
      lang: 'en',
      priority: priority.articles,
      changefreq: changefreq.articles,
    },
    {
      path: 'customer-care',
      lang: 'es',
      priority: priority.customerCare,
      changefreq: changefreq.mainPages,
    },
    {
      path: 'en/customer-care',
      lang: 'en',
      priority: priority.customerCare,
      changefreq: changefreq.mainPages,
    },
    {
      path: 'policies',
      lang: 'es',
      priority: priority.policies,
      changefreq: changefreq.policies,
    },
    {
      path: 'en/policies',
      lang: 'en',
      priority: priority.policies,
      changefreq: changefreq.policies,
    },
    {
      path: 'terms-and-conditions',
      lang: 'es',
      priority: priority.terms,
      changefreq: changefreq.policies,
    },
    {
      path: 'en/terms-and-conditions',
      lang: 'en',
      priority: priority.terms,
      changefreq: changefreq.policies,
    },
  ];

  const staticUrls = staticPages.map((page) => {
    const url = page.path === '' || page.path === 'en' 
      ? baseUrl 
      : `${baseUrl}/${page.path}`;
    
    const alternateLanguages = {};
    if (page.lang === 'es') {
      alternateLanguages.es = url;
      alternateLanguages.en = url.replace(`${baseUrl}/`, `${baseUrl}/en/`);
    } else {
      alternateLanguages.en = url;
      alternateLanguages.es = url.replace(`${baseUrl}/en/`, `${baseUrl}/`);
    }

    return {
      url,
      lastModified,
      changefreq: page.changefreq,
      priority: page.priority,
      alternates: {
        languages: {
          ...alternateLanguages,
          'x-default': page.lang === 'es' ? baseUrl : `${baseUrl}/en`,
        },
      },
    };
  });

  const esArticleUrls = esBlogs.map((item) => {
    const id = item._id?.$oid || item._id;
    const url = `${baseUrl}/articles/${id}`;
    return {
      url,
      lastModified,
      changefreq: changefreq.blogPosts,
      priority: 0.7,
      alternates: {
        languages: {
          es: url,
          en: url.replace(`${baseUrl}/articles/`, `${baseUrl}/en/articles/`),
          'x-default': `${baseUrl}/en/articles/${id}`,
        },
      },
    };
  });

  const enArticleUrls = enBlogs.map((item) => {
    const id = item._id?.$oid || item._id;
    const url = `${baseUrl}/en/articles/${id}`;
    return {
      url,
      lastModified,
      changefreq: changefreq.blogPosts,
      priority: 0.7,
      alternates: {
        languages: {
          en: url,
          es: url.replace(`${baseUrl}/en/articles/`, `${baseUrl}/articles/`),
          'x-default': url,
        },
      },
    };
  });

  return [...staticUrls, ...esArticleUrls, ...enArticleUrls];
}

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
         xmlns:xhtml="http://www.w3.org/1999/xhtml"
         xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
         xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
         xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
         xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${(await sitemap()).map((page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.alternates?.languages ? Object.entries(page.alternates.languages).map(([lang, url]) => `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />`).join('') : ''}
  </url>`).join('')}
</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    }
  );
}
