import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const deeperLinkSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    source: { type: String, required: true }
  },
  { _id: false }
);

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true, enum: ["Technology", "Science"] },
    description: { type: String, required: true },
    readTime: { type: String, required: true },
    content: { type: Schema.Types.Mixed, required: true },
    deeperLinks: { type: [deeperLinkSchema], default: [] }
  },
  { timestamps: true }
);

export type ArticleDocument = InferSchemaType<typeof articleSchema>;
const Article: Model<ArticleDocument> = mongoose.models.Article || mongoose.model<ArticleDocument>("Article", articleSchema);

export default Article;
