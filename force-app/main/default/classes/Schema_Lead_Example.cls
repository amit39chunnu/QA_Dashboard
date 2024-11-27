/* This is a schema programming to fetch the list of picklist options form the given field from the given object */
public class Schema_Lead_Example {
	@AuraEnabled
    public static List<String> getData(String objName,String fieldName){
        /* getGlobalDescribe() : 
         * Map<String,Schema.SobjectType>  getGlobalDescribe() : This will return the all the objects in the salesforce 
         *  in the form of map where object Name is the key and objectType as value ;
         */
        Map<String,Schema.SobjectType> objectMap =Schema.getGlobalDescribe();
        // Get the objectType by passing objname as key to the map
        Schema.SobjectType objType=objectMap.get(objName);
        // Get the descrition of an object 
        Schema.DescribeSobjectResult  objectResult =objType.getDescribe();
        // From the description of an object get all the fields 
        Map<String,Schema.SobjectField > fldMap =objectResult.fields.getMap();
        // field Name is the key and fieldType is value 
        //Get the description of given field
        Schema.DescribeFieldResult fldResult=fldMap.get(fieldName).getDescribe();
        // From the description of a given field get the picklist options 
        List<Schema.PicklistEntry> entries =fldResult.getPickListValues();
        List<String> names =new List<String>();
        for(Schema.PicklistEntry p: entries){
            names.add(p.getLabel());
        }
        return names;
    }
}