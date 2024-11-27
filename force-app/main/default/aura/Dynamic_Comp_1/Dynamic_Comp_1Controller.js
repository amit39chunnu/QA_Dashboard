({
	/* 
	 *  $A.createComponent(param1,param2,param3);
	 *  Param1: 
	 *  1. It is a string value 
	 *  2. This will specify the name of the component 
	 *  3. It can be a standard Component or custom component 
	 *  Example : ui:button ,lightning :input ,lightning:button, c:myPage c:contactForm
	 *  Param2 : 
	 * 	1. It is a key value pair { "key":"value","key":"value"}
	 *  2. It is used set the attributes of the component which we re reffereing 
	 *  Example : 
	 * 	{"label":"Submit" ,"oncick":component.getRefference("c.methodName") ,"aura:id":"recId" }
	 *  Note :Incase if you want to set method name as action then we have give : component.getRefference("c:method")
	 * 
	 * Param3: 
	 * 1. It is a callback function 
	 * 2. function(cmp,status,errorMessage) 
	 *    a. cmp : It will reffere to the component created by param1,param2 
	 *    b. status : it will return the status of component creation
	 *    c. errorMessasge : This will return errorMessages if any
	 * 3. This callfunction is used to add dynamically created component to the parent component
	 * 
	 */
	createButtonDynamically : function(component, event, helper) {
		var db=component.find("newtag"); // db is reffering to the div tag 

        $A.createComponent(
        	"ui:button",
            {
                "label":"New Button",
                "press": component.getReference("c.showPressedButtonLabel")
            },
            function(bn)
            {   // bn is the newComponent created : i.e New Button
                var bdy=db.get("v.body"); //  get the attribute value of v.body
                bdy.push(bn); // bn is added to body of v.body 
                db.set("v.body",bdy);
            }
        );
        
	},
    removeButtonDynamically : function(component, event, helper){
        component.find("newtag").set("v.body",[]);
    },
    showPressedButtonLabel : function(component, event, helper){
        alert('You pressed:'+event.getSource().get("v.label"));
    }
})