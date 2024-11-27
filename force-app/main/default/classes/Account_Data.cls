public class Account_Data {
	@AuraEnabled
    public static List<Account> getAccounts(String accIndustry){
        List<Account> accounts =[select Id,Name,Phone,Rating,Ownership from Account where industry=:accIndustry];
        return accounts;
    }
}