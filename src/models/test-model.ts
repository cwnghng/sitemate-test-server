import _ from 'lodash';
import { ObjectId, Schema, model } from 'mongoose';

export interface Test {
  _id: ObjectId;

  name: string;
  age: number;
  details: {
    [key: string]: any;
  };
  admin_details: {
    [key: string]: any;
  };

  created_at: Date;
  updated_at: Date;
}

export interface TestPublicDetails
  extends Omit<Test, 'admin_details' | 'created_at' | 'updated_at'> {}

export interface TestPrivateDetails extends Omit<Test, 'admin_details'> {}

export interface TestDocument extends Test, Omit<Document, '_id'> {
  toPublicObject: () => TestPublicDetails;
  toPrivateObject: () => TestPrivateDetails;
  toAdminObject: () => Test;
}

const testSchema = new Schema<TestDocument>(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    details: { type: Schema.Types.Mixed, required: true, default: {} },
    admin_details: { type: Schema.Types.Mixed, required: true, default: {} },
  },
  { timestamps: true },
);

testSchema.methods.toPublicObject =
  function toPublicObject(): TestPublicDetails {
    return _.pick(this, ['_id', 'name', 'age', 'details']);
  };

testSchema.methods.toPrivateObject =
  function toPrivateObject(): TestPrivateDetails {
    return _.pick(this, [
      '_id',
      'name',
      'age',
      'details',
      'created_at',
      'updated_at',
    ]);
  };

testSchema.methods.toAdminObject = function toAdminObject(): Test {
  return this.toObject();
};

const TestModel = model<TestDocument>('Test', testSchema);

export default TestModel;
