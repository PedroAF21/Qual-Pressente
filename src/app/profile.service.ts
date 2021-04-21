import { Injectable } from '@angular/core';
import {Profile} from './models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public profile: Array<Profile> = [
    {
      id: 1,
      nome: 'Pedro',
      sobrenome: 'Franco',
      email: 'pedroaf21@gmail.com',
      password: '123456',
    },
  ];

  public getProfileById(id: number): Profile {
    for (const obj of this.profile) {
      if (obj.id === id) {
        return obj;
      }
    }
  }

  public editarProfile(item: Profile) {
    for (const obj of this.profile) {
      if (item.id === obj.id) {
        break;
      }
    }
  }

  constructor() { }
}
