({
	calc: function(component, event, helper) {
		var price=component.get("v.Price");
        var quant=component.get("v.quant");
        alert(price);
        var total=price*quant;
        component.set("v.total",total);
	}
})