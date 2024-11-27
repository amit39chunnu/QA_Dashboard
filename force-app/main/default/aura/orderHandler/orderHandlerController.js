({
	calc : function(component, event, helper) {
        
        var Price=Component.get("v.Price");
        var quant=component.get("v.quant");
        alert(Price);
        var total=price*quant;
        Component.set("v.total",total);
		
	}
})