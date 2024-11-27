public with sharing class QA_DashboardController {
    public QA_DashboardController() {}

    @AuraEnabled(cacheable=true)
    public static List<Question> retrieveQuestions() {
        List<Question> questionList = new List<Question>();
        
        try {
            // Retrieve questions and their options
            for (Question__c question : [
                SELECT Id, Name, Type__c, Question__c, Domain__c, 
                       (SELECT Id, Name, Option__c, IsCorrect__c FROM Answer_Options__r) 
                FROM Question__c 
                WHERE IsActive__c = true 
                ORDER BY Name ASC 
                LIMIT 50000
            ]) {
                List<AnswerOption> optionList = new List<AnswerOption>();
                
                // Check for null and process options
                if (question.Answer_Options__r != null) {
                    for (Answer_Option__c option : question.Answer_Options__r) {
                        optionList.add(new AnswerOption(option, false));
                    }
                }

                // Add question to the list
                questionList.add(new Question(question, optionList, false, true));
            }
        } catch (Exception ex) {
            throw new AuraHandledException('Error retrieving questions: ' + ex.getMessage());
        }

        return questionList;
    }

    // Wrapper for questions
    public class Question {
        @AuraEnabled public Boolean isRMQ { get; set; }
        @AuraEnabled public String questionText { get; set; }
        @AuraEnabled public String Id { get; set; }
        @AuraEnabled public String type { get; set; }
        @AuraEnabled public String Name { get; set; }
        @AuraEnabled public Boolean isCorrectQuestion { get; set; }
        @AuraEnabled public List<AnswerOption> options { get; set; }

        public Question(Question__c question, List<AnswerOption> options, Boolean isRMQ, Boolean isCorrectQuestion) {
            this.questionText = question.Question__c;
            this.Id = question.Id;
            this.type = question.Type__c;
            this.Name = question.Name;
            this.options = options;
            this.isRMQ = isRMQ;
            this.isCorrectQuestion = isCorrectQuestion;
        }
    }

    // Wrapper for options
    public class AnswerOption {
        @AuraEnabled public String optionText { get; set; }
        @AuraEnabled public Boolean isCorrect { get; set; }
        @AuraEnabled public Boolean isChecked { get; set; }
        @AuraEnabled public String Id { get; set; }

        public AnswerOption(Answer_Option__c option, Boolean isChecked) {
            this.optionText = option.Option__c;
            this.Id = option.Id;
            this.isCorrect = option.IsCorrect__c;
            this.isChecked = isChecked;
        }
    }
}
