({
   show : function(component, event, helper) {
       var evt =$A.get("e.c:Example_Evt");
       evt.setParams({"testWord":"Satish Myla"});
       evt.fire();
	}
})