import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoPrimasService {

  endPoint ='http://127.0.0.1:8000/api/ingresoMateriasPrimas'
  constructor(private http:HttpClient) { }

  list(token){
    return this.http.get(`${this.endPoint}`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    }) ;
  }
  getById(id,token){
    return this.http.get<any>(`${this.endPoint}/${id}`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  detalles(id,token){
    return this.http.get<any>(`${this.endPoint}Detalles/${id}`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  create(data,token): Observable<any> {
    return this.http.post<any>(`${this.endPoint}`,data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  update(id, data,token): Observable<any> {
    return this.http.put<any>(`${this.endPoint}/${id}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }

  //
}
