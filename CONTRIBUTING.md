# Guía para contribuir al repositorio

**Departamento de Tecnología - Universidad Pedagógica Nacional**

---

## Normas generales

1. Ninguna contribución se realiza directamente sobre la rama `main`
2. Toda contribución debe realizarse mediante un Pull Request (PR)
3. Cada PR debe ser revisado y aprobado por al menos un revisor autorizado
4. Los nombres de ramas deben seguir la convención establecida

---

## Flujo de trabajo para docentes

| Paso | Acción |
|------|--------|
| 1 | Crear una rama desde `main` con el formato `feature/nombre-del-proyecto` |
| 2 | Desarrollar el proyecto en la rama creada |
| 3 | Subir la rama al repositorio remoto |
| 4 | Abrir un Pull Request hacia la rama `main` |
| 5 | Esperar la revisión y aprobación |
| 6 | Una vez aprobado, fusionar el PR |

---

## Flujo de trabajo para usuarios autorizados (sin permisos de escritura)

| Paso | Acción |
|------|--------|
| 1 | Realizar un fork del repositorio principal |
| 2 | Clonar el fork en el entorno local |
| 3 | Crear una rama con el formato `feature/nombre-del-proyecto` |
| 4 | Desarrollar el proyecto en la rama creada |
| 5 | Subir los cambios al fork remoto |
| 6 | Abrir un Pull Request desde el fork hacia la rama `main` del repositorio original |
| 7 | Esperar la revisión y aprobación |

---

## Convención para nombres de ramas

| Tipo | Formato | Ejemplo |
|------|---------|---------|
| Nuevo proyecto | `feature/nombre-proyecto` | `feature/sistema-seguimiento-academico` |
| Corrección de errores | `fix/descripcion-breve` | `fix/metadatos-proyecto` |
| Actualización documentación | `docs/descripcion-breve` | `docs/actualizar-readme` |

---

## Estructura obligatoria para un nuevo proyecto

Todo proyecto subido al repositorio debe contener la siguiente estructura dentro de la carpeta correspondiente de la licenciatura:

| Archivo/Carpeta | Obligatorio | Descripción |
|----------------|-------------|-------------|
| `metadata.json` | Sí | Metadatos del proyecto (título, autores, tecnologías) |
| `banner.jpg` | Sí | Imagen insignia o portada del proyecto |
| `contenido.md` | Sí | Descripción extensa del proyecto |
| `/galeria` | No | Carpeta para imágenes adicionales |

---

## Formato de los commits

Se recomienda utilizar mensajes de commit claros y descriptivos:
formato: descripción breve

Ejemplos:
add: agregar proyecto de realidad aumentada
fix: corregir error en metadata.json
update: actualizar documentación del proyecto


---

## Revisión de Pull Requests

| Criterio | Descripción |
|----------|-------------|
| Estructura | El proyecto respeta la estructura de carpetas definida |
| Metadatos | El archivo metadata.json contiene todos los campos requeridos |
| Imagen | Existe un archivo banner.jpg en formato válido |
| Contenido | El archivo contenido.md tiene una descripción mínima del proyecto |

---

*Última actualización: 2025*