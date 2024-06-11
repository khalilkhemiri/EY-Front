import { Component, OnInit } from '@angular/core';
import { Model } from 'survey-core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  title = 'Questionnaire';
  surveyModel!: Model;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(questions => {
      const surveyJson = {
        elements: questions.map(question => ({
          name: `question${question.id}`,
          title: question.value,
          type: 'text'
        }))
      };
      this.surveyModel = new Model(surveyJson);
    });
  }
}
