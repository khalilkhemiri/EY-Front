import { Component, Input, OnInit } from '@angular/core';
import { CriteriaService } from '../service/criteria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrl: './criteria.component.css'
})
export class CriteriaComponent implements OnInit {
  cartes: any[] = [];

  constructor(private route: ActivatedRoute, private CriteriaService: CriteriaService,private router: Router) {} 

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const domaineId = Number(params.get('id'));
      if (!isNaN(domaineId)) {
        this.CriteriaService.getCriteriaByDomainId(domaineId).subscribe((data: any[]) => {
          this.cartes = data;
          console.log(this.cartes);
        });
      }
    });
  }
  onCriteriaSelect(criteriaId: number) {
    this.router.navigate(['/questions', criteriaId]);
  }
}
