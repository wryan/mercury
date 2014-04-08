Template.inningItem.helpers({
    inningDaysRemaining: function() {
	var today = new Date();
	var diff = Math.floor(this.endDate.getTime() - today.getTime());   
	var day = 1000*60*60*24;
	var days = Math.floor(diff/day);	
	if (days < 0) return 0;	
	return days;
    }
});

