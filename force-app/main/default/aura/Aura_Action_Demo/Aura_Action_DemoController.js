({
	pressDiv: function(component, event) {
      
            component.set("v.message","This is a dummy message from me");
       
    },
    pressButton: function(cmp, event) {
        var div = cmp.find("displayResult");
        if (div) {
            div.getElement().innerHTML = "Button Action is Pressed";
        }
    },
})