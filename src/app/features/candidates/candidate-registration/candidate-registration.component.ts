import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.scss']
})
export class CandidateRegistrationComponent {
  selectedLanguage = 'es'; // Idioma predeterminado, en este caso, español

  onLanguageChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    // Aquí puedes implementar la lógica para cambiar el idioma
    // Por ejemplo, cargar las traducciones en el idioma seleccionado
    // y aplicarlas a las etiquetas del formulario.
    // Puedes utilizar un servicio de traducción o un archivo de traducciones.
  }
}
