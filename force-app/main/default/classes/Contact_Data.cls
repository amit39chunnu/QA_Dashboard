public class Contact_Data {
	@AuraEnabled
    public static List<Contact> getAll(){
        List<Contact> contacts =[select id,lastname,firstname ,phone from Contact limit 5];
        return contacts;
    }
}