# Stitch Design Reference

## How to use this file
This file contains the exported Stitch design code.
Use it EXCLUSIVELY as visual reference to extract:
- Layout structure and section order
- Colors, spacing and sizing decisions
- Typography hierarchy and content
- Component composition and proportions

## What NOT to do with this code
- Do not copy any inline styles
- Do not copy class names or CSS from Stitch
- Do not use any HTML structure directly
- Ignore any fonts loaded by Stitch — use the ones defined in FRONTEND_SKILL.md

## What TO do
Rebuild every section from scratch following FRONTEND_SKILL.md,
using this code only to understand what the design looks like.

---

## Pages

### Landing Page (Home)
[código de Stitch de la home]



<!DOCTYPE html>

<html class="light" lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>DevStudio | Kinetic Gallery Systems</title>
<!-- Fonts & Icons -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;family=Manrope:wght@200..800&amp;family=Wix+Madefor+Text:ital,wght@0,400..800;1,400..800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "outline": "#757777",
                    "secondary-fixed-dim": "#cad5e5",
                    "on-surface": "#2d2f2f",
                    "on-primary-fixed": "#220900",
                    "tertiary-container": "#e8fcae",
                    "on-error-container": "#520c00",
                    "primary-fixed-dim": "#e9834d",
                    "secondary-container": "#d8e3f4",
                    "tertiary-fixed": "#e8fcae",
                    "on-surface-variant": "#5a5c5c",
                    "surface-bright": "#f6f6f6",
                    "tertiary-dim": "#46551a",
                    "on-primary": "#fff0ea",
                    "inverse-primary": "#f99058",
                    "error-dim": "#b92902",
                    "primary": "#964311",
                    "primary-fixed": "#f99058",
                    "on-primary-container": "#4f1d00",
                    "secondary": "#525c6a",
                    "on-tertiary-fixed": "#404f14",
                    "on-primary-fixed-variant": "#5d2400",
                    "surface-container-lowest": "#ffffff",
                    "surface-container-highest": "#dbdddd",
                    "surface-container-high": "#e1e3e3",
                    "surface-dim": "#d2d5d5",
                    "tertiary": "#526225",
                    "error": "#b02500",
                    "on-secondary-fixed-variant": "#525c6a",
                    "inverse-on-surface": "#9c9d9d",
                    "outline-variant": "#acadad",
                    "primary-container": "#f99058",
                    "on-tertiary-fixed-variant": "#5c6c2e",
                    "background": "#f6f6f6",
                    "error-container": "#f95630",
                    "secondary-fixed": "#d8e3f4",
                    "inverse-surface": "#0c0f0f",
                    "on-background": "#2d2f2f",
                    "surface-variant": "#dbdddd",
                    "on-secondary-fixed": "#36404d",
                    "surface": "#f6f6f6",
                    "primary-dim": "#863804",
                    "on-secondary": "#ecf3ff",
                    "on-tertiary": "#e7fbae",
                    "on-secondary-container": "#485360",
                    "surface-container": "#e7e8e8",
                    "tertiary-fixed-dim": "#daeea1",
                    "surface-tint": "#964311",
                    "secondary-dim": "#46515e",
                    "on-error": "#ffefec",
                    "surface-container-low": "#f0f1f1",
                    "on-tertiary-container": "#526225",
                    "accent-custom": "#FE945C",
                    "accent-light": "#EBFFB1",
                    "secondary-text": "#99A4B3"
            },
            "borderRadius": {
                    "DEFAULT": "1rem",
                    "lg": "2rem",
                    "xl": "3rem",
                    "full": "9999px"
            },
            "fontFamily": {
                    "headline": ["Plus Jakarta Sans"],
                    "body": ["Wix Madefor Text"],
                    "label": ["Manrope"]
            }
          },
        },
      }
    </script>
<style>
        body { font-family: 'Wix Madefor Text', sans-serif; background-color: #ffffff; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .hero-gradient-text {
            background: linear-gradient(135deg, #964311 0%, #FE945C 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .mesh-gradient {
            background-color: #ffffff;
            background-image: 
                radial-gradient(at 0% 0%, rgba(254, 148, 92, 0.15) 0px, transparent 50%),
                radial-gradient(at 100% 0%, rgba(235, 255, 177, 0.2) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(150, 67, 17, 0.1) 0px, transparent 50%),
                radial-gradient(at 0% 100%, rgba(232, 252, 174, 0.2) 0px, transparent 50%);
        }
        .services-gradient {
            background: linear-gradient(180deg, #E0F2FE 0%, rgba(254, 148, 92, 0.08) 100%);
        }
    </style>
</head>
<body class="bg-surface-container-lowest text-on-surface">
<!-- Top Navigation Shell -->
<nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 rounded-full mt-6 mx-auto w-[90%] max-w-5xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
<div class="text-xl font-bold tracking-tighter text-slate-900 dark:text-white font-headline">
            DevStudio
        </div>
<div class="hidden md:flex items-center gap-8 font-headline text-sm tracking-tight font-medium">
<a class="text-slate-900 dark:text-white font-semibold hover:text-[#FE945C] transition-colors duration-300" href="#">Servicios</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#FE945C] transition-colors duration-300" href="#">Proyectos</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#FE945C] transition-colors duration-300" href="#">Contacto</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#FE945C] transition-colors duration-300" href="#">ES/EN</a>
</div>
<button class="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2 rounded-full text-sm font-semibold scale-95 active:scale-90 transition-transform">
            Hablemos →
        </button>
</nav>
<main class="pt-32">
<!-- Hero Section -->
<section class="max-w-7xl mx-auto px-6 text-center">
<h1 class="text-5xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.95] text-on-surface mb-8 max-w-5xl mx-auto">
                Diseñamos el <span class="hero-gradient-text">mañana</span> digital hoy.
            </h1>
<p class="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-16 leading-relaxed font-body">
                Un estudio boutique dedicado a transformar visiones complejas en experiencias táctiles, rápidas y emocionalmente inteligentes.
            </p>
<!-- Large Ultra-Modern Workspace Image Frame -->
<div class="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] bg-surface-container-low">
<img class="w-full h-full object-cover" data-alt="ultra-modern minimalist design studio interior with massive floor-to-ceiling windows, sleek architectural furniture, and clean white surfaces under bright natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEJ9aZzr9DdGjTB7GYEuHVe6IjxcMdCsvRw1_SCirMF4S58mteFwo9VntgYRBtKlLdEq9y711486lL8J3xtxK6EpIoZPRLdXv1YfVV_idNIGmStEO4p6EL_5okj1bYFHpsLl2keTSOfpOHOaBr4vXCG5B_2GlQvNYBkpoRJlm9LE56VTJ6VmcJdN05ehDlT9tU8JgGuggccKI-pMyMxmly7WeV0t4InP4T7BJndckrkjNvoWHSNP6co8xrmsPTI6TfpTOOIQvIp9M"/>
<div class="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
</div>
</section>
<!-- Vision Section -->
<section class="py-[120px] bg-white text-center px-6">
<div class="max-w-4xl mx-auto">
<span class="material-symbols-outlined text-4xl text-[#FE945C] mb-8" data-icon="star">star</span>
<h2 class="text-5xl md:text-7xl font-body font-bold italic tracking-tight text-on-surface leading-tight mb-10">
            If you can dream it,<br/>we can build it.
        </h2>
<p class="text-xl md:text-2xl font-body text-secondary-text leading-relaxed max-w-3xl mx-auto">
            Nuestro enfoque se centra en crear soluciones <span class="text-[#FE945C] font-semibold">personalizadas</span>, humanas y técnicamente excelentes. Creemos que cada línea de código debe tener un propósito <span class="text-[#FE945C] font-semibold">estratégico</span> para impulsar tu negocio hacia el futuro.
        </p>
</div>
</section>
<!-- Services Section -->
<section class="py-32 services-gradient">
<div class="max-w-7xl mx-auto px-6">
<div class="mb-16">
<p class="text-[#FE945C] text-xs font-bold tracking-[0.2em] mb-4 uppercase">Servicios</p>
<h2 class="text-4xl md:text-5xl font-body font-bold text-slate-900">Lo que construimos</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Service Card 1 -->
<div class="group bg-white p-10 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
<div class="w-14 h-14 rounded-full bg-accent-light/30 flex items-center justify-center mb-8">
<span class="material-symbols-outlined text-2xl text-accent-custom" data-icon="code">code</span>
</div>
<h3 class="text-2xl font-body font-bold mb-4">Desarrollo Web</h3>
<p class="text-secondary-text leading-relaxed">Diseñamos y desarrollamos sitios y aplicaciones web rápidas, escalables y con una experiencia de usuario impecable.</p>
</div>
<!-- Service Card 2 -->
<div class="group bg-white p-10 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
<div class="w-14 h-14 rounded-full bg-accent-light/30 flex items-center justify-center mb-8">
<span class="material-symbols-outlined text-2xl text-accent-custom" data-icon="brush">brush</span>
</div>
<h3 class="text-2xl font-body font-bold mb-4">Diseño UX/UI</h3>
<p class="text-secondary-text leading-relaxed">Creamos interfaces intuitivas y visualmente poderosas que conectan con los usuarios y elevan tu producto digital.</p>
</div>
<!-- Service Card 3 -->
<div class="group bg-white p-10 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
<div class="w-14 h-14 rounded-full bg-accent-light/30 flex items-center justify-center mb-8">
<span class="material-symbols-outlined text-2xl text-accent-custom" data-icon="settings_suggest">settings_suggest</span>
</div>
<h3 class="text-2xl font-body font-bold mb-4">Software a Medida</h3>
<p class="text-secondary-text leading-relaxed">Construimos soluciones tecnológicas personalizadas adaptadas exactamente a los procesos y objetivos de tu negocio.</p>
</div>
</div>
</div>
</section>
<!-- Projects Grid Section -->
<section class="py-24 bg-surface-container-low/50">
<div class="max-w-7xl mx-auto px-6">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 class="text-sm font-label font-bold text-[#FE945C] tracking-widest uppercase mb-4">Portafolio Seleccionado</h2>
<h3 class="text-5xl font-headline font-bold tracking-tight">Proyectos que <br/>definen estándares.</h3>
</div>
<button class="px-8 py-4 rounded-full bg-surface-container-highest text-secondary font-bold hover:bg-surface-container-high transition-colors">
                        Ver Proyectos
                    </button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-16">
<!-- Project 1 -->
<div class="group">
<div class="aspect-[16/10] bg-surface-container-high rounded-lg overflow-hidden mb-8">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="minimalist dashboard interface design for a financial technology app with elegant data visualizations and clean typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXu2zLVe8GBQlyMtnwLie0ZW6kOWYS7btFiukFOQICFuqhcdzZb-U67LF3zjXxlHcVvBPcpAzbmNVpy_M9OsiVcbEoeCpSpgWLbcXXa-HtibUudN-itQZW5dg6W4kl86gzx283Cdyw4KYQn2dG_jUFFICzUlc0AsARfJChzCUAHQG24ltCzUNVPclTfq5Co2nNQcP50gUJQCwo1i39ViLTY8zBME2pp204DD8-HYwGSK8X-eR6dpsVEaemdLNgeJj-gHjJc7Yrp8Lg"/>
</div>
<div class="flex justify-between items-start">
<div>
<h4 class="text-2xl font-headline font-bold mb-2">Nexus FinTech</h4>
<p class="text-secondary">Rediseño integral de plataforma bancaria</p>
</div>
</div>
</div>
<!-- Project 2 -->
<div class="group">
<div class="aspect-[16/10] bg-surface-container-high rounded-lg overflow-hidden mb-8">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="close up of a high-end luxury e-commerce website mobile view featuring smooth scrolling and high-resolution product photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkY2xNoYDAspkSK4l4S3ofUy-MXYTX2q7ssl8iQjvk00qKShZ15nE7u7pGB8WI5LfKiFKxuOAiG0Cg-jlx2TfyzkDP5iyP6Haa498tDZWkLsSqKkujDl5LF7AZ72CjxdBFbShik3N2Bom2zhaQdWqLQgysNiyYD7z-JQxFqqvOto029gcIfWxdSrO3OdZpfEAX5Mv88swFE5mTa-C7_vCrFsQe8ovdFmzfysHjQ8BWAYQHvyUnArK3MpX7wsWFOqt3SWWWB5bG6ts"/>
</div>
<div class="flex justify-between items-start">
<div>
<h4 class="text-2xl font-headline font-bold mb-2">Aura E-commerce</h4>
<p class="text-secondary">Experiencia de compra de lujo 3D</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section with Mesh Gradient -->
<section class="py-32 px-6">
<div class="max-w-5xl mx-auto mesh-gradient rounded-xl p-16 md:p-24 text-center relative overflow-hidden">
<div class="relative z-10">
<h2 class="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter mb-8 text-on-surface">
                        ¿Listo para construir el <br/>siguiente nivel?
                    </h2>
<p class="text-lg text-secondary max-w-xl mx-auto mb-12">
                        Estamos agendando proyectos para el tercer trimestre de 2025. Hablemos sobre tu visión.
                    </p>
<div class="flex flex-col md:flex-row items-center justify-center gap-4">
<button class="w-full md:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-[#FE945C] to-[#FFB38C] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#FE945C]/30 transition-all">
                            Iniciar proyecto
                        </button>
</div>
</div>
</div>
</section>
</main>
<!-- Footer Shell -->
<footer class="bg-white dark:bg-slate-950 full-width py-12 flex flex-col items-center gap-6 w-full border-t border-surface-container">
<div class="text-lg font-black text-slate-900 dark:text-white font-headline">
            DevStudio
        </div>
<div class="flex gap-8 font-body text-xs tracking-wide">
<a class="text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-opacity opacity-80 hover:opacity-100" href="#">Instagram</a>
<a class="text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-opacity opacity-80 hover:opacity-100" href="#">LinkedIn</a>
<a class="text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-opacity opacity-80 hover:opacity-100" href="#">GitHub</a>
<a class="text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-opacity opacity-80 hover:opacity-100" href="#">X</a>
</div>
<div class="text-slate-400 dark:text-slate-600 font-body text-xs tracking-wide">
            © 2025 DevStudio. Kinetic Gallery Systems.
        </div>
</footer>
</body></html>

---

### Proyectos
<!DOCTYPE html>

<html class="light" lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Manrope:wght@400;500;600&amp;family=Wix+Madefor+Text:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-tertiary-fixed": "#404f14",
                    "on-primary-fixed-variant": "#5d2400",
                    "secondary-fixed-dim": "#cad5e5",
                    "secondary": "#525c6a",
                    "background": "#f6f6f6",
                    "inverse-on-surface": "#9c9d9d",
                    "on-secondary-fixed-variant": "#525c6a",
                    "tertiary": "#526225",
                    "surface-variant": "#dbdddd",
                    "on-secondary-fixed": "#36404d",
                    "tertiary-container": "#e8fcae",
                    "error": "#b02500",
                    "secondary-dim": "#46515e",
                    "primary-container": "#fe945c",
                    "inverse-primary": "#fe945c",
                    "surface-container-high": "#e1e3e3",
                    "surface-container-highest": "#dbdddd",
                    "on-tertiary-fixed-variant": "#5c6c2e",
                    "outline": "#757777",
                    "primary": "#964311",
                    "on-background": "#2d2f2f",
                    "secondary-container": "#d8e3f4",
                    "on-error-container": "#520c00",
                    "on-tertiary": "#e7fbae",
                    "surface-bright": "#f6f6f6",
                    "on-primary-container": "#4f1d00",
                    "inverse-surface": "#0c0f0f",
                    "surface-container-low": "#f0f1f1",
                    "on-primary": "#fff0ea",
                    "on-error": "#ffefec",
                    "surface": "#ffffff",
                    "on-primary-fixed": "#220900",
                    "surface-dim": "#d2d5d5",
                    "on-tertiary-container": "#526225",
                    "tertiary-fixed": "#e8fcae",
                    "primary-fixed-dim": "#e9834d",
                    "error-dim": "#b92902",
                    "surface-container": "#e7e8e8",
                    "on-surface-variant": "#5a5c5c",
                    "on-surface": "#2d2f2f",
                    "tertiary-fixed-dim": "#daeea1",
                    "on-secondary-container": "#485360",
                    "outline-variant": "#99a4b3",
                    "surface-tint": "#964311",
                    "tertiary-dim": "#46551a",
                    "primary-fixed": "#f99058",
                    "error-container": "#f95630",
                    "secondary-fixed": "#d8e3f4",
                    "primary-dim": "#863804",
                    "surface-container-lowest": "#ffffff",
                    "on-secondary": "#ecf3ff"
            },
            "borderRadius": {
                    "DEFAULT": "1rem",
                    "lg": "2rem",
                    "xl": "3rem",
                    "full": "9999px"
            },
            "fontFamily": {
                    "headline": ["Plus Jakarta Sans"],
                    "body": ["Wix Madefor Text"],
                    "label": ["Wix Madefor Text"]
            }
          },
        },
      }
    </script>
<style>
        body { font-family: 'Wix Madefor Text', sans-serif; }
        .glass { backdrop-filter: blur(20px); }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
    </style>
</head>
<body class="bg-surface text-on-surface selection:bg-primary-container selection:text-white">
<!-- TopNavBar predicted component implementation -->
<nav class="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full bg-white/80 backdrop-blur-lg shadow-[0_20px_50px_rgba(254,148,92,0.1)] z-50 flex justify-between items-center px-8 py-3 w-full no-border tonal-shift">
<div class="text-2xl font-black tracking-tighter text-gray-900 font-['Plus_Jakarta_Sans']">DevStudio</div>
<div class="hidden md:flex items-center space-x-8">
<a class="text-gray-600 hover:text-gray-900 transition-colors font-['Plus_Jakarta_Sans'] font-medium tracking-tight hover:scale-105 transition-transform duration-300" href="#">Servicios</a>
<a class="text-orange-600 font-bold font-['Plus_Jakarta_Sans'] tracking-tight hover:scale-105 transition-transform duration-300" href="#">Proyectos</a>
<a class="text-gray-600 hover:text-gray-900 transition-colors font-['Plus_Jakarta_Sans'] font-medium tracking-tight hover:scale-105 transition-transform duration-300" href="#">Contacto</a>
</div>
<button class="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-full font-bold scale-95 active:scale-90 transition-all hover:shadow-lg hover:shadow-primary-container/20">
            Hire Us
        </button>
</nav>
<main class="pt-32 pb-20">
<!-- Hero Section -->
<section class="max-w-7xl mx-auto px-6 mb-20">
<div class="flex flex-col items-start gap-4">
<span class="px-4 py-1.5 bg-primary-container/10 text-primary-container font-bold text-xs tracking-widest uppercase rounded-full">PORTAFOLIO</span>
<h1 class="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-none text-on-surface max-w-4xl">
                    Nuestros Proyectos
                </h1>
<p class="text-xl md:text-2xl text-outline-variant font-medium max-w-2xl mt-4 leading-relaxed">
                    Construimos soluciones digitales de alto impacto que fusionan estética impecable con rendimiento tecnológico de vanguardia.
                </p>
</div>
</section>
<!-- Filters -->
<section class="max-w-7xl mx-auto px-6 mb-16 overflow-x-auto">
<div class="flex items-center gap-3 min-w-max pb-4">
<button class="px-8 py-3 bg-on-surface text-surface rounded-full font-bold transition-all hover:scale-105">Todos</button>
<button class="px-8 py-3 bg-surface-container-low text-secondary rounded-full font-bold hover:bg-primary-container/10 hover:text-primary-container transition-all hover:scale-105">Web</button>
<button class="px-8 py-3 bg-surface-container-low text-secondary rounded-full font-bold hover:bg-primary-container/10 hover:text-primary-container transition-all hover:scale-105">App</button>
<button class="px-8 py-3 bg-surface-container-low text-secondary rounded-full font-bold hover:bg-primary-container/10 hover:text-primary-container transition-all hover:scale-105">Diseño</button>
<button class="px-8 py-3 bg-surface-container-low text-secondary rounded-full font-bold hover:bg-primary-container/10 hover:text-primary-container transition-all hover:scale-105">Software</button>
</div>
</section>
<!-- Projects Grid (Vertical List) -->
<section class="max-w-7xl mx-auto px-6 space-y-24">
<!-- Project 1 -->
<article class="group flex flex-col md:flex-row gap-8 md:gap-16 items-center">
<div class="w-full md:w-3/5 aspect-[16/10] overflow-hidden rounded-[2rem] bg-surface-container-low">
<img class="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Modern sleek mobile application UI showing a futuristic finance dashboard with clean gradients and elegant typography in a light environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA586wiCkd3VPqEs_cwnoiTBZRVNmWle2tUQdvOpgvNT80DEG6BMA4y0oPg3w7qDX9rVtRs0S1_XD9L0RTSeEqT5A7BBsh3PyvajjZlrZmu5TCLX3Sx9SgLYUIB3uCeT-65wlc8xrCQbNzmuVWDyONiHUsWDKCq5OeNB2qEvYA6VwjYzfMSQerCVC5RUeH1As43U4LgKPFWzZd52P6B8iTAHEeuNwQAef5Bewfyb8x1fwY0vyJWuMgsMFsI5GYOmsTDTqi65ZJwfts"/>
</div>
<div class="w-full md:w-2/5 flex flex-col items-start gap-4">
<span class="text-outline-variant font-bold text-sm uppercase tracking-widest">Fintech / Mobile App</span>
<h3 class="text-4xl font-headline font-bold text-on-surface leading-tight">Nexus Mobile Wallet</h3>
<p class="text-lg text-secondary leading-relaxed font-body">
                        Una experiencia de banca digital redefinida para la generación Z. Implementamos un sistema de diseño modular y una arquitectura escalable en React Native.
                    </p>
<a class="flex items-center gap-2 text-primary-container font-bold group/link mt-2 text-lg" href="#">
                        Ver caso de estudio 
                        <span class="material-symbols-outlined transition-transform group-hover/link:translate-x-2">arrow_forward</span>
</a>
</div>
</article>
<!-- Project 2 -->
<article class="group flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center">
<div class="w-full md:w-3/5 aspect-[16/10] overflow-hidden rounded-[2rem] bg-surface-container-low">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Minimalist desktop web interface for an architectural firm featuring expansive white space and high-contrast photography of modern buildings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDehzhcvwQwYWoz6scscCS8TPwGLR3F1yALVGC8uNmYQ6vmD-juQtvXS0dVU5d1AT5jtdzdlW_xqZaYCsx2QcR8wa4qxljzn7VMJ2UQsFePG1Cl65GQZGwrPN5qZcvnSZx4UHGJHMKUl98gJ6X2NXd2xiEldkSYI3LiDYwjc1PB04nmcq2Cj6vM1heR11K-iy4DXZ7-F8nrEW21lJe10__N9PGU1BYttFyXBYK9-kHG5Oy-kHAVc4e4lr2ZifbGUV4y0ZInv6g8uG4"/>
</div>
<div class="w-full md:w-2/5 flex flex-col items-start gap-4">
<span class="text-outline-variant font-bold text-sm uppercase tracking-widest">Architecture / Web</span>
<h3 class="text-4xl font-headline font-bold text-on-surface leading-tight">Skyline Collective</h3>
<p class="text-lg text-secondary leading-relaxed font-body">
                        Plataforma web de alto rendimiento con animaciones fluidas y carga ultra-rápida. Enfocada en mostrar el portafolio de una firma de arquitectura de lujo.
                    </p>
<a class="flex items-center gap-2 text-primary-container font-bold group/link mt-2 text-lg" href="#">
                        Ver caso de estudio 
                        <span class="material-symbols-outlined transition-transform group-hover/link:translate-x-2">arrow_forward</span>
</a>
</div>
</article>
<!-- Project 3 -->
<article class="group flex flex-col md:flex-row gap-8 md:gap-16 items-center">
<div class="w-full md:w-3/5 aspect-[16/10] overflow-hidden rounded-[2rem] bg-surface-container-low relative">
<div class="absolute inset-0 bg-gradient-to-tr from-tertiary-container/30 to-transparent"></div>
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Abstract data visualization dashboard with vibrant green and orange highlights on a clean white digital interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBccpYoPGfhzup9cO7S2ZA-QIZVaAXPfNVoftUzO2pUGdUWPy2KWoCanF3IZkULpUDxxMdT2u6w65btPgPmwSdPp63P__DjzvBIUjIvFVgpfju1w_4oNNrtkTzXpl_GtaQPzitq3zMvWsIM-qjD3vQNVuz_lHYJQEJSQhSAqo0uncgMcNfi1GQ1my7-1o8gprdGaOFhAEnixnYFGelBSbvBZSKzNDNmGo2RkT5I--7vjkzNAEiBk1d-fOT4UWtbA1yBgaY7fhP5-40"/>
</div>
<div class="w-full md:w-2/5 flex flex-col items-start gap-4">
<span class="text-outline-variant font-bold text-sm uppercase tracking-widest">SaaS / Dashboards</span>
<h3 class="text-4xl font-headline font-bold text-on-surface leading-tight">Vortex Analytics</h3>
<p class="text-lg text-secondary leading-relaxed font-body">
                        Panel de control inteligente que procesa millones de datos en tiempo real. Diseño centrado en la legibilidad y la toma de decisiones basada en insights.
                    </p>
<a class="flex items-center gap-2 text-primary-container font-bold group/link mt-2 text-lg" href="#">
                        Ver caso de estudio 
                        <span class="material-symbols-outlined transition-transform group-hover/link:translate-x-2">arrow_forward</span>
</a>
</div>
</article>
</section>
<!-- Final CTA Banner -->
<section class="max-w-7xl mx-auto px-6 mt-32">
<div class="relative w-full rounded-[3rem] bg-surface-container overflow-hidden py-24 px-12 text-center flex flex-col items-center gap-8">
<!-- Abstract visual accents -->
<div class="absolute top-0 right-0 w-96 h-96 bg-primary-container/20 blur-[100px] rounded-full -mr-20 -mt-20"></div>
<div class="absolute bottom-0 left-0 w-96 h-96 bg-tertiary-container/40 blur-[100px] rounded-full -ml-20 -mb-20"></div>
<h2 class="text-5xl md:text-7xl font-headline font-extrabold text-on-surface relative z-10 max-w-4xl tracking-tight">
                    ¿Listo para construir algo grande?
                </h2>
<p class="text-xl text-secondary max-w-2xl relative z-10 font-medium">
                    Transformamos tu visión en una realidad digital tangible. Hablemos sobre tu próximo desafío.
                </p>
<button class="relative z-10 mt-4 bg-gradient-to-br from-primary to-primary-container text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1 active:scale-95">
                    Escribinos ahora
                </button>
</div>
</section>
</main>
<!-- Footer predicted component implementation -->
<footer class="bg-gray-50 w-full rounded-t-[3rem] mt-20 tonal-shift via surface-container-low font-['Wix_Madefor_Text'] text-sm leading-relaxed">
<div class="flex flex-col md:flex-row justify-between items-center px-12 py-10 max-w-7xl mx-auto w-full">
<div class="mb-6 md:mb-0">
<div class="text-lg font-bold text-gray-900 mb-2">DevStudio</div>
<div class="text-gray-500">© 2024 DevStudio. Kinetic Excellence.</div>
</div>
<div class="flex flex-wrap justify-center gap-8">
<a class="text-gray-500 hover:text-orange-500 transition-colors opacity-80 hover:opacity-100" href="#">Privacy</a>
<a class="text-gray-500 hover:text-orange-500 transition-colors opacity-80 hover:opacity-100" href="#">Terms</a>
<a class="text-gray-500 hover:text-orange-500 transition-colors opacity-80 hover:opacity-100" href="#">Twitter</a>
<a class="text-gray-500 hover:text-orange-500 transition-colors opacity-80 hover:opacity-100" href="#">LinkedIn</a>
</div>
</div>
</footer>
</body></html>

---

### Contacto
<!DOCTYPE html>

<html class="light" lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Manrope:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary": "#FE945C",
                    "primary-container": "#ffdbcc",
                    "on-primary": "#ffffff",
                    "secondary": "#525c6a",
                    "background": "#f6f6f6",
                    "surface": "#f6f6f6",
                    "on-surface": "#2d2f2f",
                    "outline": "#757777",
                    "outline-variant": "#acadad",
                    "surface-container-low": "#f0f1f1",
                    "surface-container-lowest": "#ffffff",
                    "on-background": "#2d2f2f",
                    "custom-accent": "#99A4B3"
            },
            "borderRadius": {
                    "DEFAULT": "1rem",
                    "lg": "2rem",
                    "xl": "3rem",
                    "full": "9999px"
            },
            "fontFamily": {
                    "headline": ["Plus Jakarta Sans"],
                    "body": ["Manrope"],
                    "label": ["Manrope"]
            }
          },
        },
      }
    </script>
<style>
        body { font-family: 'Manrope', sans-serif; }
        .font-plus-jakarta-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-surface-container-lowest text-on-background selection:bg-primary-container selection:text-on-primary">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-sm">
<div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
<div class="text-2xl font-black tracking-tighter text-gray-900 dark:text-white font-plus-jakarta-sans">
                STUDIO DUO
            </div>
<div class="hidden md:flex space-x-12 items-center font-plus-jakarta-sans tracking-tight">
<a class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">Servicios</a>
<a class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">Proyectos</a>
<a class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">Sobre Nosotros</a>
<a class="text-primary border-b-2 border-primary pb-1" href="#">Contacto</a>
</div>
<button class="md:hidden text-on-background">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
<main class="pt-32">
<!-- Section 1: Hero -->
<section class="max-w-7xl mx-auto px-8 mb-16">
<div class="max-w-4xl">
<h1 class="text-6xl md:text-[80px] font-extrabold font-plus-jakarta-sans leading-[1.1] tracking-tight text-on-background mb-8">
                    ¿Hablamos? Contanos tu próximo <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#ffb18a]">gran proyecto.</span>
</h1>
<p class="text-xl text-secondary max-w-2xl font-light leading-relaxed">
                    Estamos listos para transformar tus ideas en experiencias digitales excepcionales. Unite a la lista de empresas que confían en Studio Duo.
                </p>
</div>
</section>
<!-- Section 2: Contact Form (Moved to top as per request) -->
<section class="max-w-7xl mx-auto px-8 mb-24">
<form class="max-w-4xl space-y-12">
<div class="space-y-2">
<label class="text-xs uppercase tracking-widest font-bold text-outline">Nombre</label>
<input class="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant/50 text-lg" placeholder="Tu nombre completo" type="text"/>
</div>
<div class="space-y-2">
<label class="text-xs uppercase tracking-widest font-bold text-outline">Email</label>
<input class="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant/50 text-lg" placeholder="hola@tuempresa.com" type="email"/>
</div>
<div class="space-y-2">
<label class="text-xs uppercase tracking-widest font-bold text-outline">Mensaje</label>
<textarea class="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant/50 text-lg resize-none" placeholder="Contanos sobre tus objetivos y plazos..." rows="4"></textarea>
</div>
</form>
</section>
<!-- Section 3: Contact Info & Budget with Gradient Background -->
<section class="w-full py-24 text-white bg-gradient-to-br from-[#99A4B3] to-primary">
<div class="max-w-7xl mx-auto px-8">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<!-- Contact Info -->
<div class="space-y-12">
<div>
<h3 class="text-xs uppercase tracking-widest font-bold text-primary-container mb-6">Info de Contacto</h3>
<div class="space-y-4">
<p class="text-3xl font-plus-jakarta-sans font-bold">hello@studioduo.com</p>
<p class="text-xl opacity-90">+34 912 345 678</p>
</div>
</div>
<div>
<h3 class="text-xs uppercase tracking-widest font-bold text-primary-container mb-6">Ubicación</h3>
<p class="text-xl opacity-90">Calle de la Innovación 42, 28001 Madrid, España</p>
</div>
<div class="flex gap-6">
<a class="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-custom-accent transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">share</span>
</a>
<a class="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-custom-accent transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">camera</span>
</a>
<a class="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-custom-accent transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">alternate_email</span>
</a>
</div>
</div>
<!-- Budget CTA -->
<div class="flex flex-col gap-8">
<button class="bg-white text-gray-900 py-8 px-12 rounded-full font-plus-jakarta-sans font-extrabold text-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-between group shadow-2xl">
                            Pide tu presupuesto
                            <span class="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
<p class="text-sm text-white/70 text-center">Respuesta garantizada en menos de 24 horas.</p>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-white dark:bg-gray-950 w-full py-12 border-t border-gray-100">
<div class="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto font-plus-jakarta-sans text-sm uppercase tracking-widest">
<p class="text-gray-500 dark:text-gray-400 mb-8 md:mb-0">
                © 2024 Studio Duo. Built with Kinetic Gallery principles.
            </p>
<div class="flex gap-12">
<a class="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Dribbble</a>
<a class="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">GitHub</a>
<a class="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>
</body></html>

---

### Sobre Nosotros
<!DOCTYPE html>

<html class="light" lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "tertiary-fixed-dim": "#daeea1",
                    "on-tertiary": "#e7fbae",
                    "secondary-fixed-dim": "#cad5e5",
                    "secondary-fixed": "#d8e3f4",
                    "surface-tint": "#964311",
                    "secondary": "#525c6a",
                    "on-tertiary-fixed-variant": "#5c6c2e",
                    "surface-dim": "#d2d5d5",
                    "on-surface": "#2d2f2f",
                    "on-primary": "#fff0ea",
                    "background": "#f6f6f6",
                    "surface-bright": "#f6f6f6",
                    "on-secondary-fixed-variant": "#525c6a",
                    "error-container": "#f95630",
                    "surface-container-lowest": "#ffffff",
                    "surface-container-highest": "#dbdddd",
                    "on-secondary-container": "#485360",
                    "on-primary-fixed": "#220900",
                    "outline-variant": "#acadad",
                    "surface-container-high": "#e1e3e3",
                    "primary-container": "#f99058",
                    "primary-fixed-dim": "#e9834d",
                    "tertiary": "#526225",
                    "tertiary-container": "#e8fcae",
                    "on-tertiary-fixed": "#404f14",
                    "inverse-surface": "#0c0f0f",
                    "tertiary-fixed": "#e8fcae",
                    "error-dim": "#b92902",
                    "on-secondary-fixed": "#36404d",
                    "surface": "#f6f6f6",
                    "on-tertiary-container": "#526225",
                    "on-secondary": "#ecf3ff",
                    "on-error-container": "#520c00",
                    "on-background": "#2d2f2f",
                    "surface-container-low": "#f0f1f1",
                    "surface-variant": "#dbdddd",
                    "outline": "#757777",
                    "on-primary-container": "#4f1d00",
                    "tertiary-dim": "#46551a",
                    "inverse-primary": "#f99058",
                    "surface-container": "#e7e8e8",
                    "inverse-on-surface": "#9c9d9d",
                    "on-primary-fixed-variant": "#5d2400",
                    "primary-fixed": "#f99058",
                    "error": "#b02500",
                    "primary": "#964311",
                    "primary-dim": "#863804",
                    "on-error": "#ffefec",
                    "on-surface-variant": "#5a5c5c",
                    "secondary-container": "#d8e3f4",
                    "secondary-dim": "#46515e"
            },
            "borderRadius": {
                    "DEFAULT": "1rem",
                    "lg": "2rem",
                    "xl": "3rem",
                    "full": "9999px"
            },
            "fontFamily": {
                    "headline": ["Plus Jakarta Sans"],
                    "body": ["Manrope"],
                    "label": ["Manrope"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Manrope', sans-serif;
            background-color: #ffffff;
        }
        h1, h2, h3 {
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .glass-nav {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
        }
        .kinetic-gradient {
            background: linear-gradient(135deg, #964311 0%, #f99058 100%);
        }
        .lime-accent-gradient {
            background: linear-gradient(135deg, #f99058 0%, #e8fcae 100%);
        }
    </style>
</head>
<body class="text-on-background">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 glass-nav shadow-[0_8px_30px_rgb(254,148,92,0.04)]">
<div class="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
<div class="text-2xl font-black tracking-tighter text-zinc-900">DevStudio</div>
<div class="hidden md:flex items-center space-x-10 font-['Plus_Jakarta_Sans'] font-medium tracking-tight">
<a class="text-zinc-600 hover:text-orange-500 transition-colors duration-300" href="#">Work</a>
<a class="text-zinc-600 hover:text-orange-500 transition-colors duration-300" href="#">Services</a>
<a class="text-orange-600 font-bold border-b-2 border-orange-500 transition-colors duration-300" href="#">About</a>
<a class="text-zinc-600 hover:text-orange-500 transition-colors duration-300" href="#">Contact</a>
</div>
<button class="bg-primary hover:bg-primary-dim text-white px-8 py-2.5 rounded-full font-bold scale-95 active:scale-90 transition-all duration-300">
                Get Started
            </button>
</div>
</nav>
<!-- Hero Section -->
<section class="pt-32 pb-20 md:pt-48 md:pb-32 px-8 max-w-7xl mx-auto overflow-hidden">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div class="space-y-8">
<h1 class="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.95]">
                    Diseñamos el futuro, <span class="text-primary-fixed">píxel a píxel.</span>
</h1>
<p class="text-xl md:text-2xl text-secondary max-w-lg leading-relaxed">
                    Somos un estudio boutique enfocado en elevar marcas digitales a través de diseño disruptivo y tecnología de punta.
                </p>
<div class="flex gap-4">
<span class="inline-block w-12 h-1 bg-primary-container rounded-full mt-4"></span>
</div>
</div>
<div class="relative">
<div class="rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
<img alt="Studio Workspace" class="w-full h-[500px] object-cover" data-alt="modern minimalist design studio interior with clean white desks large windows bright sunlight and ergonomic furniture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaKQiBXtjrsIWig3GAN0EDV2my-AmNnReqj8foCrECkvtXtAVniNH5r_MLmqUyO_y4Gzn-ZwPvWHMuCqiJ0btE6lfker1LOy193y34J6VWMaJVQTeVMhkMdC7MT-tMx6ItmtrMm4q2Y39IY2aZsVYSnlcE38gCy-iTB-rcXII_vlNfxL8KQQjwCFIqXNOr6T9VIKPh0k9hq-XQHbKpAIsssWJOm4nYzxV7xnJrpvQuGQTST9YgofAc_MGCJeLPwjsmavZeC5O4Dak"/>
</div>
<div class="absolute -bottom-8 -left-8 w-48 h-48 lime-accent-gradient rounded-full opacity-20 blur-3xl"></div>
</div>
</div>
</section>
<!-- History / Mission / Vision -->
<section class="bg-surface-container-low py-32 px-8">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
<div class="space-y-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">history</span>
<h2 class="text-3xl font-bold tracking-tight">Historia</h2>
</div>
<p class="text-lg text-secondary leading-relaxed font-body">
                    Nacidos en el corazón de la era digital, comenzamos como un colectivo de soñadores buscando redefinir la interacción humana con las máquinas.
                </p>
</div>
<div class="space-y-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">rocket_launch</span>
<h2 class="text-3xl font-bold tracking-tight">Misión</h2>
</div>
<p class="text-lg text-secondary leading-relaxed font-body">
                    Empoderar a las empresas con herramientas digitales que no solo funcionen, sino que inspiren y generen un impacto emocional duradero.
                </p>
</div>
<div class="space-y-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">visibility</span>
<h2 class="text-3xl font-bold tracking-tight">Visión</h2>
</div>
<p class="text-lg text-secondary leading-relaxed font-body">
                    Ser el referente global de la estética funcional, fusionando el arte con la ingeniería para crear el estándar del mañana.
                </p>
</div>
</div>
</section>
<!-- Team Section -->
<section class="py-32 px-8 max-w-7xl mx-auto">
<div class="mb-20">
<h2 class="text-5xl font-extrabold tracking-tighter mb-4">Nuestro Equipo</h2>
<p class="text-xl text-secondary">Mentes creativas detrás de cada línea de código.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
<!-- Team Member 1 -->
<div class="group relative bg-surface-container-lowest rounded-lg p-8 transition-all duration-500 hover:bg-surface-container-low">
<div class="flex flex-col md:flex-row gap-8 items-center">
<div class="w-48 h-48 rounded-full overflow-hidden shrink-0 border-4 border-surface-container-high transition-transform duration-500 group-hover:scale-105">
<img alt="Designer" class="w-full h-full object-cover" data-alt="portrait of a creative professional man with glasses in a bright studio environment smiling confidently" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8oTajVivWxgRswbCVbxDoFBd0oRmEk0qxCobnXoTWqxVHys4tgLraAjvNcJX_4ELFWlSmoc0SDP4HVqwHJw4ikQ4X2-l6JuelWf9IdioYlRFHgAk49rxTiugXj0EKXAvaYL6Z3doFIkXKmNFCXBc7W1r_pL3qoDF1Ff-wawIIkERcLO8b16_PhfPT1nH_S6YXsH-HjuvdMNzl4DMhpkmug4U_FXDfhiqU6KU5jwyExosWm2W0gddiZ6gjUOVOma9GCKPi0r5fY8w"/>
</div>
<div class="space-y-3 text-center md:text-left">
<p class="text-primary-fixed font-bold tracking-widest text-xs uppercase">Founder &amp; Design Lead</p>
<h3 class="text-4xl font-bold">Julian Rossi</h3>
<p class="text-secondary leading-relaxed">Visionario del diseño que cree que la simplicidad es la máxima sofisticación.</p>
</div>
</div>
</div>
<!-- Team Member 2 -->
<div class="group relative bg-surface-container-lowest rounded-lg p-8 transition-all duration-500 hover:bg-surface-container-low">
<div class="flex flex-col md:flex-row gap-8 items-center">
<div class="w-48 h-48 rounded-full overflow-hidden shrink-0 border-4 border-surface-container-high transition-transform duration-500 group-hover:scale-105">
<img alt="Developer" class="w-full h-full object-cover" data-alt="portrait of a professional female software engineer in a modern office setting looking intelligent and focused" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAILEmVpQ8acpkcyP_WVw4gFD-eSoWn2220p44X6lnd4g0bsWTQnFgF0pi_-3wGVhau4qytZqkadm50Ejj1ZYzyOgANyqM7D9vokZyfdk0MuqJnXwFben6fnvKw6gMRKQa_8JgUeIrypfJlzau0v4N9BoCYDeYhEodk5GcgM9LBuNWBMzo4wGjV5hjVUDFGLoFOyWfEmmlWzDv0lbMh3iqA4tvPgYqBjin05kjbGTMaDvWejMiBUOASs70LOQO_GPMoeXhT_wWFlhc"/>
</div>
<div class="space-y-3 text-center md:text-left">
<p class="text-primary-fixed font-bold tracking-widest text-xs uppercase">CTO &amp; Core Developer</p>
<h3 class="text-4xl font-bold">Elena Vance</h3>
<p class="text-secondary leading-relaxed">Arquitecta de sistemas complejos, transformando ideas abstractas en realidad escalable.</p>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="mx-8 mb-32">
<div class="max-w-7xl mx-auto lime-accent-gradient rounded-xl p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
<div class="relative z-10 space-y-8">
<h2 class="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-primary-container leading-none">
                    ¿Listo para empezar?
                </h2>
<p class="text-xl md:text-2xl text-on-primary-container/80 max-w-2xl mx-auto">
                    Hagamos que tu visión sea la realidad que el mundo está esperando ver.
                </p>
<div class="pt-8">
<button class="bg-primary hover:bg-primary-dim text-white text-xl px-12 py-5 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
                        Hablemos
                    </button>
</div>
</div>
<!-- Decorative Elements -->
<div class="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
</div>
</section>
<!-- Footer -->
<footer class="w-full py-12 bg-zinc-50 flex flex-col md:flex-row justify-between items-center px-12 border-t border-zinc-200/50">
<div class="mb-6 md:mb-0">
<div class="text-lg font-bold text-zinc-800">DevStudio</div>
<p class="text-zinc-500 text-sm tracking-wide mt-2">© 2024 DevStudio. Kinetic momentum for the digital age.</p>
</div>
<div class="flex gap-8 font-['Plus_Jakarta_Sans'] text-sm tracking-wide">
<a class="text-zinc-500 hover:text-zinc-900 underline decoration-orange-500/30 transition-opacity" href="#">Privacy Policy</a>
<a class="text-zinc-500 hover:text-zinc-900 underline decoration-orange-500/30 transition-opacity" href="#">Terms of Service</a>
<a class="text-zinc-500 hover:text-zinc-900 underline decoration-orange-500/30 transition-opacity" href="#">Twitter</a>
<a class="text-zinc-500 hover:text-zinc-900 underline decoration-orange-500/30 transition-opacity" href="#">LinkedIn</a>
</div>
</footer>
</body></html>