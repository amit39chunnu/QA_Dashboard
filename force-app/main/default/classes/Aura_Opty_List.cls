public class Aura_Opty_List {
	@AuraEnabled
    public static List<Opportunity> getOpty(){
        List<Opportunity> optyList =[select Name,StageName,CloseDate,Amount from Opportunity limit 5];
        return optyList;
    }
}