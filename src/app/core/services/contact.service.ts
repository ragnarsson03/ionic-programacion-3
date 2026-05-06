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

    console.log('--- [ContactService] Enviando a WhatsApp ---');
    console.log('Remitente:', nuevoMensaje.nombre);

    // 🚀 WOW FACTOR (Sin Backend Físico):
    // Usamos la API pública de WhatsApp para generar un enlace "Click to Chat" con 
    // los datos del formulario inyectados dinámicamente como parámetros URL.
    const textBase = `Hola Samir, te escribo desde la UNETI App.\n\n*👤 Remitente:* ${nombre}\n*📝 Mensaje:* ${mensaje}`;
    const urlWa = `https://wa.me/584149083826?text=${encodeURIComponent(textBase)}`;
    
    // Abre WhatsApp Web o la App Móvil en una pestaña nueva con el mensaje listo.
    window.open(urlWa, '_blank');

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
