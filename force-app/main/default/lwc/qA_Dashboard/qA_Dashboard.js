import { LightningElement, track, wire, api } from 'lwc';
import retrieveQuestions from '@salesforce/apex/QA_DashboardController.retrieveQuestions';

export default class QA_Dashboard extends LightningElement {
    @api items = [];
    @track data = {};
    @track totalRecountCount = 0;
    @track index = 1;
    @track currentRecord = 0;
    @track dataLoaded = false;
    @track RMQLoad = false;
    @track loadShow = false;
    @track loadFinish = false;
    @track questionAnswered = [];
    @track countCorrectAns = 0;
    @track percentageOfAns = 0;

    connectedCallback() {
        this.disableFinish = true;
    }

    @wire(retrieveQuestions)
    wiredQuestions({ error, data }) {
        if (data) {
            this.items = data;
            this.dataLoaded = true;
            this.totalRecountCount = data.length;
            this.data = this.items[this.currentRecord];
        } else if (error) {
            console.error('Error retrieving questions:', error);
        }
    }

    get isPreviousDisabled() {
        return this.index === 1;
    }

    get isNextDisabled() {
        return this.index === this.totalRecountCount;
    }

    get isFinishDisabled() {
        return this.questionAnswered.length < Math.ceil(this.totalRecountCount / 2);
    }

    previousHandler() {
        if (this.index > 1) {
            this.index--;
            this.updateCurrentRecord();
        }
    }

    nextHandler() {
        if (this.index < this.totalRecountCount) {
            this.index++;
            this.updateCurrentRecord();
        }
    }

    updateCurrentRecord() {
        this.currentRecord = this.index - 1;
        this.data = this.items[this.currentRecord];
    }

    handleChange(event) {
        const questionId = event.target.dataset.key;
        const optionId = event.target.dataset.id;
        const checkboxValue = event.target.checked;

        let question = this.items.find(item => item.Id === questionId);
        if (question) {
            let option = question.options.find(opt => opt.Id === optionId);
            if (option) {
                option.isChecked = checkboxValue;
            }
        }

        this.updateQuestionAnswered(questionId, checkboxValue);
    }

    updateQuestionAnswered(questionId, checkboxValue) {
        const answeredSet = new Set(this.questionAnswered);
        if (checkboxValue) {
            answeredSet.add(questionId);
        } else {
            let question = this.items.find(item => item.Id === questionId);
            const isStillChecked = question.options.some(opt => opt.isChecked);
            if (!isStillChecked) {
                answeredSet.delete(questionId);
            }
        }
        this.questionAnswered = Array.from(answeredSet);
    }

    handleMFRToggle(event) {
        const currentQuestion = this.items[this.currentRecord];
        if (currentQuestion) {
            currentQuestion.isRMQ = event.target.checked;
        }
    }

    handleRMQ() {
        this.dataLoaded = false;
        this.RMQLoad = true;
    }

    handleSubmit() {
        this.dataLoaded = false;
        this.RMQLoad = false;
        this.loadFinish = false;
        this.loadShow = true;
        this.countCorrectAns = 0;

        this.items.forEach(question => {
            const isCorrect = question.options.every(opt => opt.isChecked === opt.isCorrect);
            question.isCorrectQuestion = isCorrect;
            if (isCorrect) {
                this.countCorrectAns++;
            }
        });

        this.percentageOfAns = Math.round((this.countCorrectAns * 100) / this.totalRecountCount);
    }

    handleFinish() {
        this.loadFinish = true;
        this.dataLoaded = false;
        this.RMQLoad = false;
    }

    handleClickRMQ() {
        this.dataLoaded = true;
        this.RMQLoad = false;
        this.loadFinish = false;
    }
}
