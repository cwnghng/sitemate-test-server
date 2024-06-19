import { ObjectId, Schema, model, Document } from 'mongoose';

export interface Issue {
  id: string;
  title: string;
  description: string;
}

export interface IssueDocument extends Issue, Omit<Document, 'id'> {}

const issueSchema = new Schema<IssueDocument>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

const IssueModel = model<IssueDocument>('issue', issueSchema);

export default IssueModel;
