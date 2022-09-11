import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home'},
    { title: 'Menú', url: '/menu', icon: 'reader'},
    { title: 'Reservas', url: '/reservas', icon: 'today'},
    { title: 'Mesas', url: '/mesas', icon: 'clipboard'},
    { title: 'Pedidos', url: '/pedidos', icon: 'receipt'},
    { title: 'Caja', url: '/caja', icon: 'wallet'},
    { title: 'Boleta', url: '/boleta', icon: 'print'},
    { title: 'Cerrar sesion', url: '/login', icon: 'log-out'},
  ];
  constructor() {}
}
