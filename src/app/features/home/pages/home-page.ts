import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home-page',
    imports: [RouterLink],
    template: `
    <section>
        <h1>PPW Angular 21</h1>
        <p>Proyecto incremental listo para crecer.</p>

        <!-- Paso 6: Enlace a la nueva feature -->
        <a routerLink="/profile" style="display: inline-block; margin-top: 1rem; padding: 0.5rem 1rem; background: #0f172a; color: white; text-decoration: none; border-radius: 4px;">
        Ver mi Perfil
        </a>
    </section>
    `,
})
export class HomePage {}