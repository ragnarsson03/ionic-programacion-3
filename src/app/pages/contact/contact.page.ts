import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../core/services';
import { ContactMessage } from '../../core/models';

/**
 * @component ContactPage
 * @description Vista de Contacto Modularizada (SD2).
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {

  public contactForm!: FormGroup;
  public enviado: boolean = false;
  public mensajesHistorial: ContactMessage[] = [];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private toastCtrl: ToastController
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.cargarHistorial();
  }

  /**
   * Inicializa el formulario reactivo con validaciones.
   * Modificado: mensaje ahora requiere mínimo 1 carácter.
   */
  private initForm(): void {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email:  ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(1)]] // Requerimiento: Mínimo 1 carácter
    });
  }

  private cargarHistorial(): void {
    this.mensajesHistorial = this.contactService.obtenerHistorial().reverse();
  }

  public isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  public async enviarMensaje(): Promise<void> {
    if (this.contactForm.invalid) return;

    const { nombre, mensaje, email } = this.contactForm.value;
    const mensajeCompleto = `(Email: ${email}) - ${mensaje}`;
    this.contactService.enviar(nombre, mensajeCompleto);

    this.enviado = true;
    await this.presentToast('¡Mensaje enviado con éxito!', 'success', 'checkmark-circle');

    this.contactForm.reset();
    this.cargarHistorial();

    setTimeout(() => (this.enviado = false), 5000);
  }

  /**
   * Elimina un mensaje del historial local (Interaction: Delete/CRUD).
   */
  public eliminarMensaje(index: number): void {
    // Nota: El historial está revertido en la vista, calculamos el índice original
    const realIndex = this.mensajesHistorial.length - 1 - index;
    const historial = this.contactService.obtenerHistorial();
    historial.splice(realIndex, 1);
    this.cargarHistorial();
    this.presentToast('Mensaje eliminado del historial', 'danger', 'trash-outline');
  }

  private async presentToast(message: string, color: string, icon: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom',
      color,
      icon,
      cssClass: 'custom-toast',
      buttons: [{ text: 'OK', role: 'cancel' }]
    });
    await toast.present();
  }
}
