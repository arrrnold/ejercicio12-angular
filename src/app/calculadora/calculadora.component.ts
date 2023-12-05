import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  resultado: number = 0;
  numero1: number = 0;
  numero2: number = 0;


  sumarNumeros() {
    // alert("Suma de numeros");
    this.resultado = this.numero1 + this.numero2;
  }

  restarNumeros() {
    // alert("Resta de numeros");
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicarNumeros() {
    // alert("Multiplicacion de numeros");
    this.resultado = this.numero1 * this.numero2;
  }

  dividirNumeros() {
    // alert("Division de numeros");
    if (this.numero2 == 0) {
      alert("No se puede dividir por 0");
    } else {
      this.resultado = this.numero1 / this.numero2;
    }



  }

}
