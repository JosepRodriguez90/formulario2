import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {  //variable formBuilder de tipo FormBuilder

   }

   usuario: FormGroup; //usaurio es como si fuera un objeto
   submitted = false;

  ngOnInit(): void {

    this.usuario = this.formBuilder.group({

      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]

    });
  }

  get f(){
    return this.usuario.controls;
  }

  enviarDatos(){
    this.submitted = true;

    if(this.usuario.invalid){
      return;
    }

    Swal.fire({     //tot aixo es un tipo de missatge per feedback per dir que es correcta la informació, font de plantilles: https://sweetalert2.github.io/
      position: 'center',
      icon: 'success',
      title: 'Los datos son correctos',
      showConfirmButton: false,
      timer: 1500
    })


  }

}
