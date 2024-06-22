import { Component, OnInit } from '@angular/core';
import { AxesService } from '../service/axes.service';
import { CriteriaService } from '../service/criteria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-axes',
  templateUrl: './axes.component.html',
  styleUrls: ['./axes.component.css'] // Correction ici
})
export class AxesComponent implements OnInit {
  cartes: any[] = [];
  selectedAxe: any;
  domaines: any[] = [];

  constructor(private AxesService: AxesService, private router: Router) {} 

  ngOnInit(): void {
    this.AxesService.getAllAxes().subscribe((data: any[]) => {
      this.cartes = data;
      console.log(this.cartes);
    });
  }

  toggleDropdown(carte: any, event: MouseEvent) {
    event.stopPropagation();
    if (this.selectedAxe && this.selectedAxe.id === carte.id) {
      this.selectedAxe = null;
      this.domaines = [];
    } else {
      this.selectedAxe = carte;
      this.AxesService.getDomainByAxeId(carte.id).subscribe((data: any) => {
        this.domaines = data;
        console.log('domains:', data);
      });
    }
  }

  onDomainChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const domaineId = Number(target.value);
    if (!isNaN(domaineId)) {
      this.router.navigate(['/criteria', domaineId]);
    }
  }
}