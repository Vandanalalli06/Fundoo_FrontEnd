import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient: HttpClient) { }

  postService(url: string, data: any, token: boolean = false, options: any) {
    console.log(data)

    return this.httpclient.post(url, data, token && options)
  }
  getService(url: string, token: boolean = false, options: any) {
    return this.httpclient.get(url, token && options)
  }
  putService(url: string, updateNote: any, token: boolean = false, options: any) {
    return this.httpclient.put(url, updateNote, token && options)
  }

}