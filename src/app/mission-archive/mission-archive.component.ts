import { Component } from '@angular/core';
import { Mission } from '../Model/missions';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';
import { MissionsService } from '../service/missions.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-mission-archive',
  templateUrl: './mission-archive.component.html',
  styleUrl: './mission-archive.component.css'
})
export class MissionArchiveComponent {
  displayedEmployees: Mission[] = []; // Ajoutez cette ligne pour déclarer la propriété displayedEmployees

  employees!: Mission[] ;
  employeesPerPage = 5; // Nombre d'employés à afficher par page
  currentPage = 1; // Page actuelle
  constructor(private employeeService: MissionsService,private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    
          this.employeeService.getAllMissions().subscribe(
            (data) => {
              this.employees = data.filter(mission => mission.enCours === 0);
  
              const startIndex = (this.currentPage - 1) * this.employeesPerPage;
              const endIndex = startIndex + this.employeesPerPage;
              this.displayedEmployees = this.employees.slice(startIndex, endIndex);
            },
            (error) => console.log(error)
          );
        }
      
    
  
  
  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.getEmployees();
  }
  addNewEmployee(){
    this.router.navigate(['createemployee']);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  detail(id: number){
    this.router.navigate(['detail', id]);
  }
  deleteEmployee(id: number){
    this.employeeService.deleteMission(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
 


  

}
