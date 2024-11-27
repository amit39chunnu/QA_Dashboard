public class ListView_Example {
	@AuraEnabled
	public static List<ListView> getListViews() {
    	List<ListView> listviews = [SELECT Id, Name FROM ListView WHERE SobjectType = 'Contact'];
    	return listviews;
	}
}