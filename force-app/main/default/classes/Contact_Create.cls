public class Contact_Create {
	@AuraEnabled
    public static Boolean show(Contact con,Id accId){
        Boolean flag;
        con.accountId=accId;
        con.OtherPhone='0101001';
        con.HomePhone='00001111';
        insert con;
        flag=true;
        return flag;
    }
}