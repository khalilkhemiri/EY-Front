import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { MissionsService } from '../service/missions.service';
import { CreateMission, Mission } from '../Model/missions'; 
import { parseISO } from 'date-fns'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  constructor(private missionService: MissionsService, private router: Router) {}

  showForm(): void {
    const htmlContent = `
    <style>
    .container {
      border: solid 1px #8d8d8d;
      padding: 20px;
      border-radius: 20px;
      background-color: #fff;
    }
    
    .container .heading {
      font-size: 1.3rem;
      margin-bottom: 20px;
      font-weight: bolder;
    }
    
    .form {
      max-width: 300px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .form .btn-container {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px;
    }
    
    .form .btn {
      padding: 10px 20px;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 3px;
      border-radius: 10px;
      border: solid 1px #1034aa;
      border-bottom: solid 1px #90c2ff;
      background: linear-gradient(135deg, #0034de, #006eff);
      color: #fff;
      font-weight: bolder;
      transition: all 0.2s ease;
      box-shadow: 0px 2px 3px #000d3848, inset 0px 4px 5px #0070f0,
        inset 0px -4px 5px #002cbb;
    }
    
    .form .btn:active {
      box-shadow: inset 0px 4px 5px #0070f0, inset 0px -4px 5px #002cbb;
      transform: scale(0.995);
    }
    
    .input-field {
      position: relative;
    }
    
    .input-field label {
      position: absolute;
      color: #8d8d8d;
      pointer-events: none;
      background-color: transparent;
      left: 15px;
      transform: translateY(0.6rem);
      transition: all 0.3s ease;
    }
    
    .input-field input {
      padding: 10px 15px;
      font-size: 1rem;
      border-radius: 8px;
      border: solid 1px #8d8d8d;
      letter-spacing: 1px;
      width: 100%;
    }
    
    .input-field input:focus,
    .input-field input:valid {
      outline: none;
      border: solid 1px #0034de;
    }
    
    .input-field input:focus ~ label,
    .input-field input:valid ~ label {
      transform: translateY(-51%) translateX(-10px) scale(0.8);
      background-color: #fff;
      padding: 0px 5px;
      color: black;
      font-weight: bold;
      letter-spacing: 1px;
      border: none;
      border-radius: 100px;
    }
    
    .form .passicon {
      cursor: pointer;
      font-size: 1.3rem;
      position: absolute;
      top: 6px;
      right: 8px;
    }
    
    .form .close {
      display: none;
    }
    
  </style>
  <div class="container">
    <div class="heading text-black">Creation projet </div>
    <form id="missionForm" class="form">
      <div class="input-field">
        <input required autocomplete="off" type="text" name="nom" id="nom"/>
        <label for="nom">Nom</label>
      </div>
      <div class="input-field">
        <input required autocomplete="off" type="date" name="dateDebut" id="dateDebut"/>
        <label for="DateDebut">Date Debut</label>
      </div>
      <div class="input-field">
        <input required autocomplete="off" type="date" name="dateFin" id="dateFin"/>
        <label for="DateFin">Date Fin</label>

      </div>
      <div class="btn-container">
      <button type="submit" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Ajouter</button>

      </div>
    </form>
    </div>
  
    `;
  
    Swal.fire({
      html: htmlContent,
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        popup: 'custom-popup-class'
      },
      didOpen: () => {
        const form = document.getElementById('missionForm') as HTMLFormElement;
        form.addEventListener('submit', (event) => {
          event.preventDefault();

          const nom = (document.getElementById('nom') as HTMLInputElement).value;
          const dateDebut = (document.getElementById('dateDebut') as HTMLInputElement).value;
          const dateFin = (document.getElementById('dateFin') as HTMLInputElement).value;
          const mission: CreateMission = {
            nom,
            dateDebut: new Date(dateDebut),
            dateFin: new Date(dateFin),
            enCours:1
          };

          this.submitForm(mission);
        });
      }
    });
  }

  submitForm(mission: CreateMission): void {
    this.missionService.createMission(mission).subscribe(response => {
      console.log('Mission créée:', mission);
      Swal.fire('Success', 'Mission créée avec succès', 'success');
    }, error => {
      console.error('Erreur lors de la création de la mission:', error);
      Swal.fire('Error', 'Une erreur est survenue lors de la création de la mission', 'error');
    });
  }
  navigateToAcceuil(): void {
    this.router.navigate(['/archive']); 
  }
}