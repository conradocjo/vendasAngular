import { Injectable } from '@angular/core';
import { URL_API } from '../shared/urlApi';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected urlApi: string = URL_API;

  constructor() { }
}
