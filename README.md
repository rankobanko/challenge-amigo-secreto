# Challenge Amigo Secreto — Versión Sorteo sin Repetición

Este proyecto es una aplicación web interactiva para organizar un **Amigo Secreto** de manera sencilla y sin mostrar públicamente la lista de participantes.  
La funcionalidad principal permite **ingresar nombres de participantes** y **realizar un sorteo donde cada nombre sale solo una vez**, evitando repeticiones.

---

# Características
- Agregar participantes de forma **secreta** (no se muestra la lista en pantalla).
- Evitar nombres duplicados.
- Realizar un sorteo aleatorio donde cada participante sale una sola vez.
- Mensaje de aviso cuando ya no quedan nombres por sortear.
- Persistencia de datos usando **LocalStorage**, para que los nombres permanezcan aunque se cierre o recargue la página.
- Diseño moderno con **HTML5 + CSS3**.

---

# Estructura del proyecto
```
challenge-amigo-secreto
│── index.html      # Estructura HTML
│── style.css       # Estilos visuales
│── app.js          # Lógica JavaScript
│── README.md       # Documentación del proyecto
```

---

# Instalación y ejecución
1. **Clona este repositorio** o descarga los archivos:
   ```bash
   git clone https://github.com/usuario/challenge-amigo-secreto.git
   ```
2. Abre la carpeta en tu editor de código.
3. No requiere instalación de dependencias.
4. **Ejecuta el proyecto** abriendo el archivo `index.html` en tu navegador.

---

# Tecnologías utilizadas
- **HTML5** → estructura de la página.
- **CSS3** → diseño atractivo y responsivo.
- **JavaScript** → lógica de programación, manejo de arrays, validaciones, persistencia en LocalStorage.

---

# Funcionamiento
1. El usuario ingresa un nombre en el campo de texto y pulsa **"Agregar"**.  
   - Si el nombre está vacío o ya existe, se muestra un mensaje de error.
   - Si es válido, se guarda en la lista de participantes (`amigos`) y en la lista de **disponibles para sorteo** (`amigosDisponibles`).

2. Al pulsar **"Sortear amigo"**:
   - Se elige un nombre aleatorio de `amigosDisponibles`.
   - Ese nombre se elimina de `amigosDisponibles` para que no vuelva a salir.
   - Se muestra en pantalla el nombre sorteado.

3. Cuando `amigosDisponibles` queda vacío:
   - Se muestra un mensaje indicando que **ya no hay más amigos por sortear**.

---

# Consideraciones
- Una vez agregado un nombre, no puede eliminarse ni verse en pantalla, para mantener el carácter **secreto** del juego.
- El sorteo es completamente aleatorio y no sigue un orden predefinido.
- Los datos se guardan en **LocalStorage**, por lo que no se perderán al recargar la página, pero sí si se borra el almacenamiento del navegador.

---

# Posibles mejoras
- Mostrar un contador de cuántos nombres quedan por sortear.
- Botón para **reiniciar el sorteo** sin tener que volver a ingresar todos los nombres.
- Versión con asignación tipo “cadena” para un juego de Amigo Secreto completo (cada persona tiene un único amigo asignado).
- Modo “navideño” con colores rojo, verde y dorado.

---

# Autor
Proyecto desarrollado como ejercicio de programación para fortalecer lógica y manipulación de DOM con JavaScript.
