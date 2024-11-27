public class Account_Insert_1 {
	@AuraEnabled
    public static Lead create(Lead myLead){
         upsert myLead;
         return myLead;
    }
}