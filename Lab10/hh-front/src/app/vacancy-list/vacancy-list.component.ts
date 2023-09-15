import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit{

  vacancies: Vacancy[] = [];
  newVac: string = "";
  vac_comp: number = 1;

  constructor(private route: ActivatedRoute, private vacancyServive: VacancyService) {
    this.vacancies = [];
  }
  addVacancy(){
    this.vacancyServive.createVacancy(this.vac_comp, this.newVac).subscribe((vac) => {
      this.vacancies.push(vac);
      this.newVac = '';
    });
  }
  deleteVacancy(id: number){
    this.vacancyServive.deleteVacancy(id).subscribe((vac) => {
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.id != id);
    })
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('company_id'));
      this.vac_comp = id;
      this.vacancyServive.getVacancies(id).subscribe((vacancies) => {
        this.vacancies = vacancies;
      })
    })
  }

}
