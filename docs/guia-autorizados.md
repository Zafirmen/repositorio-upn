# Guia para usuarios autorizados

**Estudiantes avanzados, egresados y colaboradores externos**

---

## Requisitos previos

| Requisito | Descripcion |
|-----------|-------------|
| Cuenta de GitHub | Crear una cuenta en github.com |
| Notificacion de autorizacion | Recibir confirmacion del Departamento de Tecnologia |
| Conocimiento basico de Git | Manejo de fork, clone, commit, push, PR |

---

## Diferencia entre docentes y usuarios autorizados

| Accion | Docente | Usuario autorizado |
|--------|---------|-------------------|
| Crear rama directamente | Si | No |
| Hacer fork | Si | Si |
| Abrir PR desde rama | Si | No |
| Abrir PR desde fork | No | Si |
| Escritura en el repositorio original | Si | No |

---

## Paso 1: Realizar un fork del repositorio

1. Iniciar sesion en GitHub
2. Navegar al repositorio `tecnologia-upn`
3. Hacer clic en el boton "Fork" (esquina superior derecha)
4. Seleccionar la cuenta destino (puede ser la personal)
5. Hacer clic en "Create fork"

---

## Paso 2: Clonar el fork localmente

```bash
git clone https://github.com/[tu-usuario]/tecnologia-upn.git
cd tecnologia-upn