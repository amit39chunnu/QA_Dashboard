({
	show: function(component, event, helper) {
        var eventTest=$A.get("e.c:Test_Event_1");
        var name=component.find("name").get("v.value");
        console.log(name);
        eventTest.setParams({"empName":name});
        eventTest.fire();
	}
})