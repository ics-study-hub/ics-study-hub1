import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Encapsulates state and variable values for this collection. */
class StuffsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'StuffsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      reason: {
        type: String,
        allowedValues: ['Homework Help', 'Finding a Study Session', 'Exam Preparation', 'Questions'],
        defaultValue: 'Homework Help',
      },
      owner: String,
      date: String,
      description: String,
      findGroup: {
        type: String,
        allowedValues: ['Yes', 'No'],
        defaultValue: 'Yes',
      },
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Stuffs = new StuffsCollection();
