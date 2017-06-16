import { Mongo } from 'meteor/mongo'
import Files from './files'

Meteor.methods({
    'bins.insert': function(){
        return Bins.insert({
            createdAt: new Date(),
            sharedWith: [],
            files: [],
            alias: '',
            owner_id: this.userId
        })
    },

    'bins.remove': function(bin){
        return Bins.remove(bin)
    },

    'bins.update': function(bin, newContent){
        return Bins.update(bin._id, { $set: {content: newContent}})
    },
    'bins.updateFiles': function(bin, newFile){
        return Bins.update(bin._id, { $push: { files: newFile}})
    },

    'bins.share': function(bin, email){
        return Bins.update(bin._id, { $push: { sharedWith: email }})
    }

})

export const Bins = new Mongo.Collection('bins')