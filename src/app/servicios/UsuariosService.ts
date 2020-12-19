import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  endPoint ='http://127.0.0.1:8000/api/user'
  constructor(private http:HttpClient) { }

  usuarios(data){
    return this.http.get(`${this.endPoint}`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    }) ;
  }
  getById(id,token){
    return this.http.get<any>(`${this.endPoint}/${id}`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  filtro(data,token){
    return this.http.post(`${this.endPoint}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    }) ;
  }

  update(id, data,token): Observable<any> {
    return this.http.put<any>(`${this.endPoint}/${id}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }

  updateImagen(id, data,token): Observable<any> {
    return this.http.put<any>(`${this.endPoint}Imagen/${id}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  updateContra(data,token): Observable<any> {
    return this.http.post<any>(`http://127.0.0.1:8000/api/auth/recuperar`, data,{ headers:{
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
