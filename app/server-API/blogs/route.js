import { NextResponse } from "next/server";
import blogsEN from "./data/blogs.en.json";
import blogsES from "./data/blogs.es.json";

// Map languages to JSON datasets
const datasets = { en: blogsEN, es: blogsES };

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const lang = searchParams.get("lang") || "en";
    const keys = (searchParams.get("keys") || "")
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);

    // Fallback to English if invalid lang
    const dataset = datasets[lang] || datasets.en;

    // If no keys provided → return full dataset quickly
    if (keys.length === 0) {
      return NextResponse.json(dataset, { status: 200 });
    }

    // Pick only requested keys per blog
    const filtered = dataset.map((item) => {
      const obj = {};
      for (const key of keys) if (key in item) obj[key] = item[key];
      return obj;
    });

    return NextResponse.json(filtered, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch blogs", details: err.message },
      { status: 500 },
    );
  }
}
