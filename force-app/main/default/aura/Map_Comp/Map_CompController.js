({
	show: function(component, event, helper) {
		
        var myvalues=[];
        myvalues.push({key:'Name',value:'Satish'});
        myvalues.push({key:'City',value:'Hyd'});
        component.set("v.myList",myvalues);
	}
})