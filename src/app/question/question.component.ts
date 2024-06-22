import { Component, OnInit } from '@angular/core';
import { Model } from 'survey-core';
import { QuestionService } from '../service/question.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../Model/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  title = 'Questionnaire';
  surveyModel!: Model;

  constructor(private questionService: QuestionService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const criteriaId = Number(params.get('id'));
      if (!isNaN(criteriaId)) {
        this.questionService.getQuestionByCriteria(criteriaId).subscribe((questions: Question[]) => {
          const surveyJson = {
            
            elements: questions.map((question) => ({
              name: question.value,
              title: question.value,
              type: 'text'
            }))
          };
          console.log(questions)
          this.surveyModel = new Model(surveyJson);
        });
      }
    });
  }

}
