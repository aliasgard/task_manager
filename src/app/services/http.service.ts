import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private httpClient:HttpClient) { }
    public getData(url) {
        return this.httpClient.get(url);
    }
    
    public addData(url, obj){
        return this.httpClient.post(url,obj);
    }

    public deleteData(url){
        return this.httpClient.delete(url);
    }

    public updateData(url, obj){
        return this.httpClient.put(url,obj);
    }
}