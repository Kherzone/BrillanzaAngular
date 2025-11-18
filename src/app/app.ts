// src/app/app.ts (Versión COMPLETA Y FUNCIONAL)

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// --- 1. IMPORTAMOS LAS CLASES DE TUS COMPONENTES ---
// (Asumiendo que se llaman 'Navbar', 'Hero', 'Servicios', 'Contacto', y 'Footer'
// en sus respectivos archivos .ts, igual que tu clase se llama 'App')
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Servicios } from './components/servicios/servicios';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true, // Esto indica que es un componente autónomo
  
  // --- 2. USAMOS ESOS COMPONENTES AQUÍ ---
  // Este es el paso que te falta. Aquí "abrimos las cajas de LEGO".
  imports: [
    RouterOutlet, // Dejamos el que ya estaba
    
    // Y añadimos todos los componentes que usará app.html
    Navbar,
    Hero,
    Servicios,
    Contacto,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landing-angular');
}