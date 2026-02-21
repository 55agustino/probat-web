# PROBAT - Sitio Web Corporativo

Sitio web de PROBAT, empresa especializada en baterías de litio con servicios de clasificación, recertificación, segunda vida y fabricación personalizada.

## Tecnologías

- **Next.js 16** - Framework React con App Router y lazy loading dinámico
- **React 19** - Con React Compiler habilitado
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Space Grotesk** - Tipografía personalizada
- **Vercel Speed Insights** - Monitoreo de rendimiento

## Estructura del Proyecto

```
probat-web/
├── app/
│   ├── globals.css          # Estilos globales y animaciones
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal (lazy loading de secciones)
├── components/
│   ├── Navbar.tsx           # Barra de navegación fija con logo animado GIF → WebP
│   ├── Hero.tsx             # Sección hero con grid animado estilo TRON
│   ├── RevealSection.tsx    # Sección de revelado con scroll
│   ├── InfoSection.tsx      # Información y contadores sobre PROBAT
│   ├── ServicesSection.tsx  # Servicios con imágenes y layout alternado
│   ├── ExamplesSection.tsx  # Slider de ejemplos de baterías por aplicación
│   ├── ContactSection.tsx   # Formulario de contacto con Web3Forms
│   ├── Footer.tsx           # Pie de página con navegación y servicios
│   └── WhatsAppButton.tsx   # Botón flotante de WhatsApp
└── public/
    ├── logow.webp            # Logo estático
    ├── gifff.gif             # Logo animado (intro)
    ├── CLASIFICACION.webp    # Imagen servicio clasificación
    ├── RECERTIFICACION.webp  # Imagen servicio recertificación
    ├── SEGUNDAVIDA.webp      # Imagen servicio segunda vida
    ├── FABRICACION.webp      # Imagen servicio fabricación
    ├── camioneta.webp        # Imagen vehículo
    ├── makingof1.webp        # Imagen proceso
    └── def/                  # Imágenes de la sección Ejemplos
```

## Secciones

1. **Hero** - Grid animado estilo TRON, título y subtítulo, indicador de scroll
2. **Reveal Section** - Animación de revelado al hacer scroll con texto de presentación
3. **Info Section** - Información de la empresa con contadores animados
4. **Services Section** - 4 servicios con imágenes WebP y layout alternado (Clasificación, Recertificación, Segunda Vida, Fabricación)
5. **Examples Section** - Slider interactivo con ejemplos de baterías por tipo de aplicación
6. **Contact Section** - Formulario funcional con Web3Forms, validación y mensajes de éxito/error
7. **Footer** - Navegación secundaria y listado de servicios

### Componentes adicionales

- **Navbar**: Navegación fija con transición GIF animado → logo WebP estático al cargar
- **WhatsApp Button**: Botón flotante para contacto directo

## Instalación y Desarrollo

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

## Configuración del Formulario de Contacto

El formulario usa **Web3Forms** (gratuito):

1. Regístrate en [web3forms.com](https://web3forms.com)
2. Obtén tu Access Key
3. Reemplaza en `components/ContactSection.tsx`:
   ```typescript
   access_key: "TU_ACCESS_KEY_AQUI"
   ```

## Personalización

### Colores
Los colores principales están en `tailwind.config.js` usando el esquema azul (`blue-500`, `blue-400`).

### Animaciones
Las animaciones personalizadas están en `app/globals.css`:
- `tron-trail-horizontal/vertical` - Pulsos del grid animado
- `fade-in-up` - Entrada de elementos
- `bounce` - Indicador de scroll

### Tipografía
Se usa **Space Grotesk** de Google Fonts para títulos y elementos destacados.

## Responsive

El sitio está optimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## Deployment

### Vercel (Recomendado)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

El proyecto está optimizado para Vercel con Speed Insights integrado.

## Licencia

Proyecto privado de PROBAT.
