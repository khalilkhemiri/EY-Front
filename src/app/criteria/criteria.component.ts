import { Component } from '@angular/core';
import { CriteriaService } from '../service/criteria.service';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrl: './criteria.component.css'
})
export class CriteriaComponent {
  cartes: any[] = []; // Initialisez la propriété cartes

  constructor(private CriteriaService: CriteriaService) {}

  ngOnInit(): void {
    this.CriteriaService.getAllCriteria().subscribe((data: any[]) => {
      this.cartes = data;
      console.log(this.cartes)
    });
  }
}
