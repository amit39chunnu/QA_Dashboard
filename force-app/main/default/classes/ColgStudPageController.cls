public class ColgStudPageController {
    public Id pageId					{get;set;}
    public College__c colg				{get;set;}
    public List<Student__c> studList 	{get;set;}
    public string SelectedStudentId { get; set; }
    public ColgStudPageController(){
        pageId = ApexPages.currentPage().getParameters().get('id');
        colg = new College__c();
        colg = [Select id,name,Address__c,University__c from College__c where id=:pageId];
        LoadData();
    }
    public void LoadData() {
        studList = [Select id, name,Email__c,Branch__c,College__c from Student__c where College__c =: pageId];
    }
    public void DeleteStudent()
    {
        System.debug('SelectedStudentId' +SelectedStudentId);
        // if for any reason we are missing the reference
        if (SelectedStudentId == null) {
            
            return;
        }
        
        // find the account record within the collection
        Student__c tobeDeleted = null;
        for(Student__c st : studList)
            if (st.Id == SelectedStudentId) {
                tobeDeleted = st;
                break;
            }
        
        //if account record found delete it
        if (tobeDeleted != null) {
            System.debug('Success' +tobeDeleted);
            Delete tobeDeleted;
        }
        
        //refresh the data
        LoadData();
    }
    public PageReference save(){
        PageReference page = new PageReference('apex/StudentPage?core.apexpages.request.devconsole=1');
        page.setRedirect(true);
        return page;
    }
}