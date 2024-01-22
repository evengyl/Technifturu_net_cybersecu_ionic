import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular"

@Injectable({
    providedIn: 'root'
})
export class StorageService
{

    private _storage! : Storage

    constructor(private readonly storage : Storage){
        this.init()
    }

    async init(){
        this._storage = await this.storage.create()
    }

    async get(key : string)
    {
        return await this._storage.get(key)
    }

    async set(key : string, value : any)
    {
        await this._storage.set(key, value)
    }

    async reset()
    {
        await this._storage.clear()
    }
}