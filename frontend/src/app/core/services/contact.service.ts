import { Injectable } from '@angular/core';
import { ContactMessage } from '../models';

/**
 * @service ContactService
 * @description Servicio singleton que gestiona la lógica de negocio del formulario.
 * En Angular, los servicios son clases inyectables que viven en memoria una sola vez
 * (patrón Singleton) gracias al decorador @Injectable({ providedIn: 'root' }).
 *
 * ¿Por qué separar esto de la vista?
 * → Principio SOLID de Responsabilidad Única: la vista dibuja, el servicio calcula.
 * → Si mañana conectamos una API real, solo modificamos ESTE archivo.
 */
@Injectable({
  providedIn: 'root' // Disponible globalmente sin importarlo en ningún módulo
})
export class ContactService {

  // Historial de mensajes enviados (almacenamiento temporal en memoria)
  private mensajes: ContactMessage[] = [];

  constructor() {}

  /**
   * @method enviar
   * @description Procesa un nuevo mensaje de contacto.
   * @param nombre  - Remitente del formulario
   * @param mensaje - Cuerpo del mensaje
   * @returns El objeto ContactMessage creado y almacenado
   */
  public enviar(nombre: string, mensaje: string): ContactMessage {
    const nuevoMensaje: ContactMessage = {
      nombre,
      mensaje,
      fecha: new Date()
    };

    this.mensajes.push(nuevoMensaje);

    console.log('--- [ContactService] Mensaje Registrado ---');
    console.log('De:', nuevoMensaje.nombre);
    console.log('Mensaje:', nuevoMensaje.mensaje);
    console.log('Fecha:', nuevoMensaje.fecha.toLocaleString());
    console.log(`Total acumulado: ${this.mensajes.length} mensaje(s)`);

    return nuevoMensaje;
  }

  /**
   * @method obtenerHistorial
   * @description Devuelve una copia inmutable del historial de mensajes.
   */
  public obtenerHistorial(): ContactMessage[] {
    return [...this.mensajes]; // Spread Operator: Copia defensiva
  }

}
