import { Mongo } from 'meteor/mongo';

export const postColl = new Mongo.Collection('posts');