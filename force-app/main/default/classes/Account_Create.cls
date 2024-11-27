public class Account_Create {
	@AuraEnabled
    public static String create(Account acc){
        String result ;
        try{
            insert acc;
            result='Record Inserted Successfully with Id :'+acc.Id;
        }catch(Exception e){
            result='Insertion Failed :'+e.getMessage();
        }
        return result;
    }
}