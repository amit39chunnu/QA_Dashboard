({
	show : function(component, event, helper) {
		var name=component.find("name").get("v.value");
        var phone=component.find("phone").get("v.value");
        var age=component.find("age").get("v.value");
        console.log(name);
        console.log(phone);
        console.log(age);
	}
})