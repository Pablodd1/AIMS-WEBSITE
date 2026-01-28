import { NextResponse } from "next/server";
import blogsEN from "../data/blogs.en.json";
import blogsES from "../data/blogs.es.json";

const datasets = { en: blogsEN, es: blogsES };

export async function GET(req, { params }) {
  try {
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") || "en";
    const { ID } = await params;

    const dataset = datasets[lang] || datasets.en;
    const blog = dataset.find((b) => String(b._id.$oid) === ID);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch blog", details: err.message },
      { status: 500 },
    );
  }
}
