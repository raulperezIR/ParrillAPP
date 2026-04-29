---
name: Asado Hub
colors:
  surface: '#fdf9f3'
  surface-dim: '#dddad4'
  surface-bright: '#fdf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ed'
  surface-container: '#f1ede7'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e6e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#5b403f'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0ea'
  outline: '#8f6f6e'
  outline-variant: '#e4bebc'
  surface-tint: '#bb152c'
  primary: '#b7102a'
  on-primary: '#ffffff'
  primary-container: '#db313f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b1'
  secondary: '#5b5d74'
  on-secondary: '#ffffff'
  secondary-container: '#ddddf9'
  on-secondary-container: '#5f6178'
  tertiary: '#7b542b'
  on-tertiary: '#ffffff'
  tertiary-container: '#966c41'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#e0e0fc'
  secondary-fixed-dim: '#c4c4df'
  on-secondary-fixed: '#181a2e'
  on-secondary-fixed-variant: '#43455b'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#fdf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e6e2dc'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 20px
---

## Brand & Style

El concepto central de este sistema de diseño es "El Ritual del Fuego". Busca capturar la esencia de una reunión alrededor de la parrilla: la calidez de las brasas, la solidez de la madera y la energía de una buena charla entre amigos. El tono es **informal, divertido y vibrante**, eliminando cualquier barrera de seriedad corporativa para centrarse en la hospitalidad y el disfrute.

El estilo visual es una mezcla de **Tactile Modernism** con toques de **High-Contrast Bold**. Se utilizan superficies que evocan texturas orgánicas, pero con una ejecución limpia y geométrica. El objetivo es que la interfaz se sienta tan robusta como una tabla de picar y tan acogedora como el calor del carbón encendido. La experiencia debe evocar una respuesta emocional de anticipación, hambre y comunidad.

## Colors

La paleta cromática se inspira directamente en los elementos del asado:
- **Rojo Fuego (Primary):** Un rojo vibrante y energético que dirige la acción y estimula el apetito. Se usa para CTAs y elementos críticos.
- **Carbón (Secondary):** Un azul casi negro, profundo y sólido. Aporta el contraste necesario y la legibilidad en textos principales.
- **Madera/Roble (Tertiary):** Un tono cálido que suaviza la interfaz y se utiliza en elementos decorativos, estados secundarios y fondos de tarjetas.
- **Crema Ceniza (Neutral):** Un fondo cálido, lejos del blanco puro quirúrgico, para mantener la sensación rústica y acogedora.

El sistema utiliza un modo claro por defecto para maximizar la legibilidad bajo la luz del día (ideal para eventos al aire libre), apoyándose en contrastes fuertes para asegurar la visibilidad.

## Typography

La tipografía de este sistema de diseño prioriza la cercanía y la claridad. 
- **Plus Jakarta Sans** se utiliza para titulares. Sus formas redondeadas y modernas transmiten optimismo y un aire contemporáneo, funcionando perfectamente en pesos "Bold" y "ExtraBold" para dar énfasis a los nombres de los asados y los totales a pagar.
- **Be Vietnam Pro** se encarga del cuerpo de texto y etiquetas. Es una fuente extremadamente legible con un toque cálido que no cansa la vista, ideal para listas de compras, nombres de invitados y descripciones de cortes de carne.

Se recomienda usar un tracking ligeramente más abierto en las etiquetas en mayúsculas para mejorar la jerarquía visual en componentes pequeños como chips o badges.

## Layout & Spacing

El sistema de espaciado se basa en un ritmo de **8px**, permitiendo una composición armónica y fácil de escalar. 

El modelo de layout es un **grid fluido** de 12 columnas para pantallas de escritorio y 4 columnas para dispositivos móviles. Dado que la gestión de un asado suele ocurrir "sobre la marcha" o al lado de la parrilla, se priorizan los márgenes generosos (20px en móvil) para evitar toques accidentales y mejorar la legibilidad en exteriores. Se fomenta el uso de espacios en blanco amplios para separar las distintas fases del evento (confirmación, compras, gastos).

## Elevation & Depth

La jerarquía visual en este sistema de diseño no se apoya en sombras etéreas, sino en **capas tonales y bordes estructurales**. 

- **Capas Tonales:** Se utilizan sutiles cambios en el color de fondo para separar contenedores. Una tarjeta de "Corte de Carne" puede tener un fondo ligeramente más oscuro que el fondo principal.
- **Bordes Sólidos:** Para reforzar el aspecto rústico y "hecho a mano", los elementos clave (como tarjetas de resumen) utilizan un borde fino (1px a 2px) en color Carbón con una opacidad del 10%.
- **Sombras de Contacto:** Solo se permiten sombras en elementos interactivos de nivel superior (como botones de acción principal o modales), utilizando una sombra con poco desenfoque y un ligero tinte del color primario para simular que el objeto está físicamente sobre la mesa.

## Shapes

El lenguaje de formas es **Rounded (redondeado)**. Evitamos las esquinas afiladas para mantener la sensación de amigabilidad y seguridad.

- Los botones y contenedores principales utilizan un radio de **0.5rem (8px)**.
- Los elementos de gran tamaño, como las tarjetas de invitación o los modales de "Asado Confirmado", utilizan un radio de **1rem (16px)**.
- Los inputs y campos de formulario siguen la norma de los botones para mantener la consistencia en el "toolset" del usuario.

Esta redondez suaviza el contraste del color Rojo Fuego y el tono Carbón, logrando un equilibrio entre energía y confort.

## Components

Los componentes de este sistema de diseño deben sentirse robustos y directos:

- **Buttons:** Deben ser altos (mínimo 48px) y con tipografía en peso Bold. El botón primario es Rojo Fuego con texto blanco. El secundario es de color Carbón.
- **Cards:** Se diseñan como "tablas de madera digital". Utilizan fondos color Crema Ceniza o Madera suave, con bordes definidos y espaciado interno amplio (24px).
- **Chips:** Ideales para filtrar tipos de carne o estados de pago (Pendiente, Pagado, En brasa). Usan el color Madera con texto en Carbón.
- **Input Fields:** Fondos claros con bordes que se vuelven Rojo Fuego al recibir el foco. Las etiquetas siempre deben ser visibles para evitar confusiones durante la organización.
- **El Termómetro (Componente Especial):** Una barra de progreso personalizada que indica qué tan cerca está el evento de completarse (desde la creación hasta que todos pagaron). Usa un degradado de naranja a rojo.
- **Listas de Amigos:** Avatares circulares con bordes gruesos y un sistema de "check" rústico para marcar la asistencia.