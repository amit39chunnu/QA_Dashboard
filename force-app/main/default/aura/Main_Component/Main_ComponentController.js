({
	doInit : function(component, event, helper) {
      $A.createComponent(
         "c:Calculator",
         {
 
         },
         function(newCmp){
            if (component.isValid()) {
               component.set("v.body", newCmp);
            }
         }
      );
   },
   NavigateComponent : function(component,event,helper) {
      $A.createComponent(
         "c:Event_Component_2",
         {
           "res" : event.getParam("result")
         },
         function(newCmp){
            if (component.isValid()) {
                component.set("v.body", newCmp);
            }
         }
      );
   }
})