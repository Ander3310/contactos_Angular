import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { RouterModule } from '@angular/router';
import { Contact } from '../model/contact.interface';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule

@Component({
  selector: 'app-contact-list',
  standalone: true,  // Esta propiedad indica que el componente es independiente (sin módulo)
  imports: [RouterModule, CommonModule],  // Añadir CommonModule aquí
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export default class ContactListComponent implements OnInit {

  private contactService = inject(ContactService);

  contacts: Contact[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.contactService.list()
      .subscribe((contacts) => {
        this.contacts = contacts;  // Aquí asignamos correctamente la respuesta a 'this.contacts'
      });
  }

  deleteContact(contact: Contact) {
    this.contactService.delete(contact.id)
      .subscribe(() => {
        this.loadAll();
      });
  }

  trackContact(index: number, contact: Contact): number {
    return contact.id;  // Suponiendo que cada contacto tiene un campo 'Id' único
  }
}
