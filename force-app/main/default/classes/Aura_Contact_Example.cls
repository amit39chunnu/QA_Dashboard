public class Aura_Contact_Example {
	@AuraEnabled
    public static List<Contact> getContacts(){
    	List<Contact> contacts =[select id,name,phone,email from Contact limit 10];
        return contacts;
    }
}