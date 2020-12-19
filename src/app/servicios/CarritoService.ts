import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  endPoint ='http://127.0.0.1:8000/api/carrito'
  constructor(private http:HttpClient) { }

  listPrima(token){
    return this.http.get(`${this.endPoint}Prima`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    }) ;
  }
  listEmpaque(token){
    return this.http.get(`${this.endPoint}Empaque`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    }) ;
  }
  createPrima(data,token): Observable<any> {
    return this.http.post<any>(`${this.endPoint}Prima`,data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  createEmpaque(data,token): Observable<any> {
    return this.http.post<any>(`${this.endPoint}Empaque`,data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  updatePrima(id, data,token): Observable<any> {
    return this.http.put<any>(`${this.endPoint}Prima/${id}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  updateEmpaque(id, data,token): Observable<any> {
    return this.http.put<any>(`${this.endPoint}Empaque/${id}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  delete(id,token): Observable<any> {
    return this.http.delete<any>(`${this.endPoint}/${id}`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
}
