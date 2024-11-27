public class Contact_Fetch_Example {
	@AuraEnabled
    public static List<Contact> getContacts(Id accId){
        List<Contact> contacts =[select Id,LastName,FirstName,phone from Contact where accountId=:accId];
        return contacts;
    }
}