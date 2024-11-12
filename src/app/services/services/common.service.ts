import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService<Model> {

  constructor(private httpClient: HttpClient) {
  }

  public add(bean: Model, api_URL: string) {
    return this.httpClient.post<Model>(api_URL, bean);
  }

  public update(bean: Model, api_URL: string) {
    return this.httpClient.put<Model>(api_URL, bean);
  }

  public findList(api_URL: string) {
    return this.httpClient.get<Model[]>(`${api_URL}`);
  }

  public findById(api_URL: string) {
    return this.httpClient.get<Model>(api_URL);
  }

  public delete(api_URL: string) {
    return this.httpClient.delete(`${api_URL}`);
  }
}
