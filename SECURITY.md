# Política de Seguridad

**Departamento de Tecnología - Universidad Pedagógica Nacional**

---

## Reporte de vulnerabilidades

Si identifica alguna vulnerabilidad de seguridad en este repositorio, reporte de inmediato a través de los siguientes canales:

| Canal | Información |
|-------|-------------|
| Correo electrónico | seguridad@upn.edu.co |
| Reporte interno | Mesa de ayuda del Departamento de Tecnología |

**Tiempo de respuesta esperado:** 48 horas hábiles.

---

## Prácticas de seguridad aplicadas

| Práctica | Estado |
|----------|--------|
| Autenticación de dos factores (2FA) | Obligatoria para admin y docentes |
| Revisión de Pull Requests | Obligatoria antes de fusionar |
| Protección de rama `main` | Pushes directos deshabilitados |
| Force push | Deshabilitado en todas las ramas protegidas |
| Auditoría de miembros | Revisión mensual de equipos |

---

## Control de accesos por rol

| Rol | Acceso |
|-----|--------|
| Administrador | Acceso total al repositorio |
| Docentes registrados | Escritura en ramas de feature, lectura en `main` |
| Usuarios autorizados | Lectura y fork del repositorio |

---

## Configuración de la rama `main`

La rama `main` está configurada con las siguientes protecciones:

- Pushes directos: Deshabilitados
- Pull Requests requeridos: Sí
- Aprobaciones necesarias: Mínimo 1 revisor
- Force push: Deshabilitado
- Incluir administradores: Sí

---

## Contacto para incidentes

| Situación | Contacto |
|-----------|----------|
| Reporte de vulnerabilidad | seguridad@upn.edu.co |
| Problemas de acceso | tecnologia@upn.edu.co |
| Incidente crítico | Coordinación del Departamento de Tecnología |

---

*Para reportes urgentes, comunicarse directamente con la coordinación del departamento.*