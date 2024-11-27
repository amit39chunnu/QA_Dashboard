({
	show : function(component, event, helper) {
        var items=[{
            "label":"Salesforce",
            "name":"1",
            "expanded":true,
            "items":[
                {
                	"label":"Admin",
            		"name":"11",
            		"expanded":true,
                },
                {
                	"label":"Dev",
            		"name":"12",
            		"expanded":true,
            	  
                }
            ]
        },
        {
            "label":"Lightning",
            "name":"2",
            "expanded":true,
            "items":[
                {
                	"label":"Admin",
            		"name":"21",
            		"expanded":true,
                },
                {
                	"label":"Dev",
            		"name":"22",
            		"expanded":true,
            	  
                }
            ]
        }
       ];
        component.set("v.items",items);
	},
    call :function(component,event){
         //event.preventDefault();
        var map={'1':'Salesforce','2':'Lightning'};
        var val=event.getParam('name');
        component.set("v.selected",map[val]);
    }
})