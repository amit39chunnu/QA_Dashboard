({
	show: function(component, event, helper) {
		// component.getEvent("eventName")
        var ev=$A.get("e.c:secondEvent");
        ev.setParams({"Description":"This is application event"});
        ev.fire();
	}
})