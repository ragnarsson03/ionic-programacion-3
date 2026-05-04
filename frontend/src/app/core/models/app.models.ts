/**
 * @interface ContactMessage
 * @description Contrato de datos para los mensajes del formulario de contacto.
 * Centralizar los tipos aquí ("Single Source of Truth") evita que un componente
 * envíe un número donde se espera un string. TypeScript bloqueará el error
 * ANTES de ejecutar el código, no después.
 */
export interface ContactMessage {
  nombre:   string;
  mensaje:  string;
  fecha:    Date;
}

/**
 * @interface MenuItem
 * @description Contrato de datos para los ítems del menú lateral (SideMenu).
 * Cada objeto que alimenta el @for del menú DEBE cumplir esta forma.
 */
export interface MenuItem {
  title: string;
  url:   string;
  icon:  string;
}

/**
 * @interface StackItem
 * @description Contrato de datos para las tecnologías mostradas en el Home.
 */
export interface StackItem {
  nombre:      string;
  descripcion: string;
  icono:       string;
  color:       string;
}
