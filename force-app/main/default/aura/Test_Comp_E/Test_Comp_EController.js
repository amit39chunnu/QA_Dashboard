({
	getFruits : function(component, event, helper) {
        var fruits = _map.getFruits(); // Get the list of fruits from external Java Script Library 
        console.log(fruits);
        component.set("v.externalList", fruits); 
    }
})