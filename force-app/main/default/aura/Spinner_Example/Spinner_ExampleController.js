({
	show : function(component, event, helper) {
		var names=['Ram','Kiran','Prasad'];
        component.set("V.names",names);
	},
    init: function (cmp) {
        var items = [	
            {
                "label":"HYD",
                "name":"1",
                "expanded":true,
                "metatext":"city",
                "items":[
                    {
                     "label":"SRNagar",
                     "name":"11",
                     "expanded":true,
                    },
                    {
                        "label":"LBNagar",
                        "name":"12",
                        "expanded":true
                        
                    }
                ]
            },
            {
                "label":"BAN",
                "name":"2",
                "expanded":true
            }
        ];
        cmp.set('v.items', items);
    }
})