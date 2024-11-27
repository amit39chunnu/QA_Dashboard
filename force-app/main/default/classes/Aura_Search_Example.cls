public class Aura_Search_Example {
	@AuraEnabled
    public static List<Account> getData(String industry){
        String query='select Name,Phone from Account where industry=\''+industry+'\'';
        //List<Account> accounts =[select Name,Phone from Account where industry=:industry];
        List<Account> accounts =Database.query(query);
        return accounts;
    }
}