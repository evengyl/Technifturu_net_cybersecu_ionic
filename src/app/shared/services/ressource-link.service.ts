import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
})
export class RessourceLinkService
{
    constructor(private readonly storage : StorageService){
        this.init()
    }

    async init(){
        await this.storage.init()
    }

    async get(key : string)
    {
        return await this.storage.get(key)
    }

    async set(key : string, value : any)
    {
        return await this.storage.set(key, value)
    }

    async reset()
    {
        await this.storage.reset()
    }

}