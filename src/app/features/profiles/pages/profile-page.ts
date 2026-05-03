import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-profile-page',
    standalone: true,
    template: `
    <section>
        <h2>Perfil de Usuario</h2>

        <!-- Paso 2: Interpolación de Signals -->
        <h1>{{ fullName() }}</h1>
        <p>Edad: {{ age() }}</p>

        <!-- Paso 3: Botón para actualizar estado -->
        <button type="button" (click)="changeData()">Cambiar datos</button>

        <hr />

        <!-- Paso 5: Categoría de edad con @switch -->
        <h3>Categoría de Edad</h3>
        @switch (ageCategory()) {
        @case ('minor') {
            <p>Menor de edad</p>
        }
        @case ('young') {
            <p>Joven</p>
        }
        @case ('adult') {
            <p>Adulto</p>
        }
        @default {
            <p>Senior</p>
        }
        }

        <hr />

        <!-- Paso 4: Renderizado de habilidades con @if y @for -->
        <h3>Habilidades</h3>
        @if (skills().length > 0) {
        <ul>
            @for (skill of skills(); track skill) {
            <li>{{ skill }}</li>
            }
        </ul>
        } @else {
        <p>No hay habilidades registradas.</p>
        }
    </section>
    `
})
export class ProfilePage {
  // Estado local con Signals
    readonly firstName = signal('John');
    readonly lastName = signal('Tigre');
    readonly age = signal(24);
    readonly skills = signal(['Angular', 'TypeScript', 'HTML']);

  // Valores derivados con Computed
    readonly fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

    readonly ageCategory = computed(() => {
    const value = this.age();
    if (value < 18) return 'minor';
    if (value < 30) return 'young';
    if (value < 60) return 'adult';
    return 'senior';
    });

  // Método para actualizar las Signals
    changeData() {
    this.firstName.set('Ana');
    this.lastName.set('González');
    this.age.set(22);
    }
}