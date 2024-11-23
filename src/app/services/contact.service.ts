import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contact } from '../model/contact.interface';

@Injectable ({
    providedIn: 'root'
})
export class ContactService { 

    private http = inject(HttpClient);

    list(){
        return this.http.get<Contact[]>('http://localhost:8080/contactos/api/contacts');
    }
    get(id: number){
        return this.http.get<Contact>(`http://localhost:8080/contactos/api/contacts/${id}`);
    }
    create(contact: Contact){
        return this.http.post<Contact>('http://localhost:8080/contactos/api/contacts',contact);
    }
    update(id: number, contact: Contact){
        return this.http.put<Contact>(`http://localhost:8080/contactos/api/contacts/${id}`, contact);
    }
    delete(id: number){
       return this.http.delete<void>(`http://localhost:8080/contactos/api/contacts/${id}`);
    }

}