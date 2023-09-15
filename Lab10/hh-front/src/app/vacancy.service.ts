import { Injectable } from '@angular/core';
import {Company, Vacancy} from "./models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = "http://127.0.0.1:8000"

  constructor(private client: HttpClient) { }

  getVacancies(company_id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${company_id}/vacancies/`)
  }

  createVacancy(company_id: number, name: string): Observable<Vacancy>{
    return this.client.post<Vacancy>(
      `${this.BASE_URL}/api/companies/${company_id}/vacancies/`,
      {name: name, company_id: company_id}
    )
  }

  deleteVacancy(vac_id: number): Observable<any>{
  return this.client.delete(`${this.BASE_URL}/api/vacancies/${vac_id}/`)
  }

}
