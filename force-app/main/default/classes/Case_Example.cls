public class Case_Example {
    public List<Case> cases {Set;get;}
    public void invoke(){
        cases =[select subject,Priority,Status from Case limit 5];
    }
}