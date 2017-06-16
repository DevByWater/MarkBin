import { Mongo } from 'meteor/mongo'


Meteor.methods({
    'files.insert': function(bin, mode){
        return Files.insert ({
            createdAt: new Date(),
            content: '',
            modeSpec: mode,
            binId: bin._id
        })
    },
    'files.remove': function(file){
        return File.remove(file)
    },
    'files.update': function(file, newContent){
        return Files.update(file._id, {$set: {content: newContent}})
    }
})

export const Files = new Mongo.Collection('files')