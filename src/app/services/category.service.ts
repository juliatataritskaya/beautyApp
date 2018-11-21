import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BaseHttpService} from './base.http.service';
import {environment} from '../../environments/environment';
import {Category} from '../category.model';

@Injectable()
export class CategoryService  extends BaseHttpService {

  private static categoryUrl = environment.serverUrl + 'categories';

  constructor (protected http: HttpClient) {
    super(http);
  }

  public getCategories (): any {
    return new Observable (observer => {
      this.get(CategoryService.categoryUrl, {}).subscribe((data) => {
        observer.next(data);
      }, (error) => {
        console.log(error);
      });
    });
  }

}
