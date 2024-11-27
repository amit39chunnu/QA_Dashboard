public class ContactCreate {
    @AuraEnabled
    public static boolean saveRecord(Contact con, Id accId) {
        System.debug('Contact:'+con);
        System.debug('AccountId:'+accId);
        Boolean flag;
     
       		con.OtherPhone='9876';
       		con.accountId=accId; // This contact is a child of given account : accId is the id of the account 
       		insert con;
            System.debug(con);
            flag=true;
       
        
        return flag;
        
    }  
}