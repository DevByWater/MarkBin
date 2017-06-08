import { Meteor } from 'meteor/meteor';

import { Bins } from '../imports/collections/bins'


Meteor.startup(() => {
  // code to run on server at startupM
  Meteor.publish('bins', function(){
    return Bins.find({ owner_id: this.userId})
  })
});
