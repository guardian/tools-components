import angular  from 'angular';
import moment   from 'moment';

moment.locale('en', {
    relativeTime : {
        past:   "%d %s ago",
        s:  "seconds",
        m:  "a minute",
        mm: "%d minutes",
        h:  "an hour",
        hh: "%d hours",
        d:  "a day",
        dd: "%d days",
        M:  "a month",
        MM: "%d months",
        y:  "a year",
        yy: "%d years"
    }
});


var snapshotListItemCtrlMod = angular.module('SnapshotListItemCtrlMod', []);

var snapshotListItemCtrl = snapshotListItemCtrlMod.controller('SnapshotListItemCtrl', [
  '$scope',
  function($scope){
    var createdTime = moment(this.created);
    console.log(createdTime.fromNow());
  }
]);

export default snapshotListItemCtrlMod;
