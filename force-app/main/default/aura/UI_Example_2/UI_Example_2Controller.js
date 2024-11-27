({
	show : function(component, event, helper) {
		var aval=component.find("aval").get("v.value");
        // if you want to read the data using Id from script document.getElementById("idofelement")
        // <apex:inputText value="{!name}" />
        // <ui:inputText value="{!v.name}" />
        // <apex:inputText id="name" />
        // <ui:inputText aura:id="name" />
        var bval=component.find("bval").get("v.value");
        var cval=parseInt(aval)+parseInt(bval);
        component.find("cval").set("v.value",cval);
	},
    onGroup : function(component,event,helper){
        var selected=event.getSource().get("v.label");
        component.find("radioResult").set("v.value",selected);
    },
    onSingleSelectChange: function(cmp) {
         var selectCmp = cmp.find("InputSelectSingle");
         var resultCmp = cmp.find("singleResult");
         resultCmp.set("v.value", selectCmp.get("v.value"));
	 }
    
})