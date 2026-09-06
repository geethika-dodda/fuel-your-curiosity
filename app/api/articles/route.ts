import { articles } from "@/lib/articles";
import Article from "@/models/Article";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  if (!process.env.MONGODB_URI) {
    return Response.json({ articles, source: "local" });
  }

  try {
    await connectToDatabase();
    const storedArticles = await Article.find().sort({ createdAt: -1 }).lean();
    return Response.json({ articles: storedArticles.length > 0 ? storedArticles : articles, source: storedArticles.length > 0 ? "mongodb" : "local" });
  } catch {
    return Response.json({ articles, source: "local" });
  }
}
