({
	fun : function(component,event) {
		 // component : This will reffer to the component on which this controller is defined .
        var button1=event.getSource(); // This will return the element on which event has occured
        var msg =button1.get('v.label');// This will return value of the element in case of button 
        								 // label name on the button will be returened.
        var result='You Have clicked on '+msg;
        component.set("v.result",result); //This will set the value of the attrute result
	}
})