import { Component } from '@angular/core';
import { AxesService } from '../service/axes.service';

@Component({
  selector: 'app-axes',
  templateUrl: './axes.component.html',
  styleUrls: ['./axes.component.css'] // Correction ici
})
export class AxesComponent {
  cartes: any[] = []; // Initialisez la propriété cartes
  selectedAxe: any; // Ajoutez cette propriété
  domaines: any[] = []; // Ajoutez cette propriété

  constructor(private Axeservice: AxesService) {}

  ngOnInit(): void {
    this.Axeservice.getAllAxes().subscribe((data: any[]) => {
      this.cartes = data;
      console.log(this.cartes)
    });
  }

  toggleDropdown(carte: any, event: MouseEvent) {
    event.stopPropagation(); // Empêche la propagation de l'événement de clic
    if (this.selectedAxe && this.selectedAxe.id === carte.id) {
      this.selectedAxe = null;
      this.domaines = [];
    } else {
      this.selectedAxe = carte;
      this.Axeservice.getDomainByAxeId(carte.id).subscribe((data: any) => {
  this.domaines = data;
  console.log('domains:' ,data);

});

    }
  }
  
}