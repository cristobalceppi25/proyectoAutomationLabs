# QA Automation Project — E-commerce Testing

## Descripción del proyecto

Proyecto de aseguramiento de calidad (QA) enfocado en probar las principales funcionalidades de una tienda e-commerce mediante pruebas manuales y automatizadas.

El proyecto utiliza la página [Shop QA Automation Labs](https://shop.qaautomationlabs.com/) como sitio para realizar las pruebas. Se desarrollaron casos de prueba documentados en Excel y se automatizó una parte importante de estos utilizando Playwright con TypeScript.

El objetivo es practicar y demostrar habilidades de testing funcional, diseño de casos de prueba, automatización de pruebas UI y documentación de defectos.

## Objetivos

- Diseñar y documentar casos de prueba funcionales.
- Automatizar escenarios de prueba utilizando Playwright.
- Validar formularios, mensajes de error y reglas de validación.
- Comprobar funcionalidades de búsqueda, filtros y ordenamiento de productos.
- Verificar el comportamiento del carrito de compras, cantidad y total de un producto y total de la compra.
- Probar el flujo de checkout y la persistencia de los datos entre etapas.
- Registrar defectos observados y conservar evidencia de las pruebas.
- Mejorar la mantenibilidad de las pruebas mediante una estructura organizada y reutilizable.

## Alcance de las pruebas

Las pruebas abarcan los siguientes módulos:

- **Registro:** creación de cuentas y validación de campos.
- **Inicio de sesión:** acceso con credenciales válidas e inválidas.
- **Productos:** navegación, filtros, búsqueda, ordenamiento y detalle de productos.
- **Carrito de compras:** agregar y eliminar productos, modificar cantidades y verificar totales.
- **Checkout:** navegación al proceso de compra, validación de formularios y conservación de datos.
- **Validaciones negativas:** campos vacíos, formatos incorrectos y otros escenarios de entrada inválida.

El alcance concreto de cada escenario está documentado en el archivo Excel.

## Pruebas manuales y automatizadas

El proyecto cuenta con un archivo Excel que documenta los casos de prueba manuales, los pasos a seguir, resultados esperados, resultados obtenidos y la información de seguimiento correspondiente.

Una parte importante de estos escenarios también se implementó mediante pruebas automatizadas con Playwright.

## Tecnologías y herramientas

- **Playwright:** automatización de pruebas end-to-end.
- **TypeScript:** implementación de los tests.
- **Node.js y npm:** entorno de ejecución y gestión de dependencias.
- **Visual Studio Code:** entorno de desarrollo.
- **Git y GitHub:** control de versiones y publicación del proyecto.
- **Excel:** documentación y seguimiento de los casos de prueba.

## Requisitos previos

- Node.js y npm instalados.
- Git instalado.
- Acceso a internet para abrir la aplicación bajo prueba.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/cristobalceppi25/proyectoAutomationLabs
```

Entrar en la carpeta del proyecto:

```bash
cd proyectoAutomationLabs
```

Instalar las dependencias:

```bash
npm install
```

Instalar los navegadores necesarios para Playwright:

```bash
npx playwright install
```

## Ejecución de las pruebas

Ejecutar toda la suite:

```bash
npx playwright test
```

Ejecutar las pruebas en un navegador específico:

```bash
npx playwright test --project=chromium
```

Abrir el reporte HTML después de la ejecución:

```bash
npx playwright show-report
```

El reporte permite revisar los resultados, identificar pruebas fallidas y consultar los detalles de los errores.

## Evidencia de ejecución

El proyecto conserva capturas de pantalla de determinados escenarios, especialmente aquellos en los que resulta útil visualizar el estado de la aplicación antes y después de una acción.

La evidencia se utiliza como apoyo para analizar los resultados y documentar los comportamientos observados. Las capturas disponibles dependen del escenario ejecutado y de la configuración de cada prueba.

## Estado del proyecto

Este repositorio forma parte de un proyecto de aprendizaje práctico orientado al desarrollo de habilidades de QA y automatización de pruebas.

La suite se encuentra en evolución: se revisan los casos de prueba, las aserciones, la evidencia y la correspondencia entre la documentación manual y el código automatizado.

## Próximas mejoras

- Revisar y ampliar las aserciones de los escenarios automatizados.
- Mejorar la trazabilidad entre casos manuales, pruebas automatizadas y defectos.
- Incorporar la generación de reportes y evidencia de manera consistente.
- Configurar la ejecución automática mediante GitHub Actions.
- Ampliar la cobertura con pruebas de API y, posteriormente, consultas SQL cuando corresponda.

