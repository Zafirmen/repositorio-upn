# Guia para docentes

**Como contribuir al repositorio del Departamento de Tecnologia**

---

## Requisitos previos

| Requisito | Descripcion |
|-----------|-------------|
| Cuenta de GitHub | Crear una cuenta en github.com si no se tiene |
| Invitacion al repositorio | Recibir invitacion por correo electronico |
| Autenticacion de dos factores | Activar 2FA en la cuenta de GitHub |

---

## Paso 1: Acceder al repositorio

1. Iniciar sesion en GitHub
2. Aceptar la invitacion al repositorio `tecnologia-upn`
3. Navegar a la direccion del repositorio proporcionada por el administrador

---

## Paso 2: Crear una rama para el nuevo proyecto

Desde la interfaz web de GitHub:

1. Ir a la pestana "Code"
2. Hacer clic en la rama actual (generalmente "main")
3. En el campo "Find or create a branch", escribir: `feature/nombre-del-proyecto`
4. Hacer clic en "Create branch"

---

## Paso 3: Agregar los archivos del proyecto

1. Navegar a la carpeta `licenciaturas/[nombre-de-la-licenciatura]/`
2. Crear una nueva carpeta con el nombre del proyecto
3. Dentro de la nueva carpeta, agregar:
   - Un archivo `metadata.json` (usar el template en `/_templates`)
   - Un archivo `banner.jpg` (imagen insignia)
   - Un archivo `contenido.md` (descripcion del proyecto)
   - Una carpeta `galeria/` (opcional, para mas imagenes)

---

## Paso 4: Abrir un Pull Request

1. Ir a la pestana "Pull requests"
2. Hacer clic en "New pull request"
3. Seleccionar: `base: main` ← `compare: feature/nombre-del-proyecto`
4. Verificar los cambios
5. Hacer clic en "Create pull request"
6. Agregar un titulo y descripcion del PR
7. Solicitar revision al administrador o a otro docente

---

## Paso 5: Esperar la revision

- El administrador o revisor designado revisara el PR
- Si hay observaciones, se notificaran en el PR
- Realizar las correcciones necesarias
- Una vez aprobado, el PR sera fusionado

---

## Recomendaciones importantes

| Aspecto | Recomendacion |
|---------|---------------|
| Nombres de archivos | Usar minusculas y guiones, sin espacios ni caracteres especiales |
| Imagen banner | Tamano recomendado: 1200x600 pixeles, formato JPG o PNG |
| Metadatos | Completar todos los campos obligatorios |
| Pull Requests | Un PR debe contener un solo proyecto |

---

## Contacto para soporte

| Situacion | Contacto |
|-----------|----------|
| Problemas de acceso | tecnologia@upn.edu.co |
| Dudas sobre el flujo | Administrador del repositorio |
| Error tecnico | Reportar en el repositorio con un issue |

---

*Documento actualizado: 2025*