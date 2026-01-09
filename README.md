# PROBAT - Sitio Web Corporativo

Sitio web de PROBAT, empresa especializada en baterías de litio con servicios de clasificación, recertificación, segunda vida y fabricación personalizada.

## 🚀 Tecnologías

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Space Grotesk** - Tipografía personalizada

## 📋 Estructura del Proyecto

```
probat-web/
├── app/
│   ├── globals.css          # Estilos globales y animaciones
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página principal
├── components/
│   ├── Hero.tsx              # Sección hero con grid animado
│   ├── Navbar.tsx            # Barra de navegación fija
│   ├── RevealSection.tsx     # Sección de revelado con scroll
│   ├── InfoSection.tsx       # Información sobre PROBAT
│   ├── ServicesSection.tsx   # Servicios con imágenes
│   ├── ContactSection.tsx    # Formulario de contacto
│   └── WhatsAppButton.tsx    # Botón flotante de WhatsApp
└── public/
    ├── CLASIFICACION.png     # Imagen servicio clasificación
    ├── RECERTIFICACION.png   # Imagen servicio recertificación
    ├── SEGUNDAVIDA.png       # Imagen servicio segunda vida
    └── FABRICACION.webp      # Imagen servicio fabricación
```

## 🎨 Características

### Secciones Principales

1. **Hero Section**
   - Grid animado tipo TRON con pulsos
   - Título y subtítulo personalizables
   - Indicador de scroll animado

2. **Reveal Section**
   - Animación de revelado al hacer scroll
   - Texto informativo sobre PROBAT

3. **Info Section**
   - Información detallada de la empresa
   - Diseño limpio y legible

4. **Services Section**
   - 4 servicios con imágenes y descripciones
   - Grid animado con pulsos TRON
   - Layout alternado (imagen izq/der)
   - Servicios: Clasificación, Recertificación, Segunda Vida, Fabricación

5. **Contact Section**
   - Formulario de contacto funcional
   - Integración con Web3Forms
   - Validación de campos
   - Mensajes de éxito/error

### Componentes Adicionales

- **Navbar**: Navegación fija con logo y enlaces
- **WhatsApp Button**: Botón flotante para contacto directo

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📧 Configuración del Formulario de Contacto

El formulario usa **Web3Forms** (gratis):

1. Regístrate en [web3forms.com](https://web3forms.com)
2. Obtén tu Access Key
3. Reemplaza en `components/ContactSection.tsx`:
   ```typescript
   access_key: "TU_ACCESS_KEY_AQUI"
   ```

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js` y usan el esquema azul (`blue-500`, `blue-400`).

### Animaciones
Las animaciones personalizadas están en `app/globals.css`:
- `tron-trail-horizontal/vertical` - Pulsos animados
- `fade-in-up` - Entrada de elementos
- `bounce` - Indicador de scroll

### Tipografía
Se usa **Space Grotesk** de Google Fonts para títulos y elementos destacados.

## 📱 Responsive

El sitio está completamente optimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🚀 Deployment

### Vercel (Recomendado)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

El proyecto está optimizado para Vercel. Solo conecta tu repositorio.

## 📄 Licencia

Proyecto privado de PROBAT.
