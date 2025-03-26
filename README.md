# Linterna React

Este es un proyecto en React que simula una linterna con baterías intercambiables. La linterna puede encenderse o apagarse dependiendo del estado de las baterías y muestra un efecto visual cuando está encendida.

## Características
- Simulación visual de una linterna con efectos de luz.
- Uso de props para controlar el estado de la linterna y las baterías.
- Diseño responsivo: Tamaño reducido en dispositivos móviles.

## Tecnologías utilizadas
- React.js
- Tailwind CSS

## Instalación y ejecución

### 1. Clonar el repositorio
```sh
 git clone https://github.com/tu_usuario/linterna-react.git
 cd linterna-react
```

### 2. Instalar dependencias
```sh
 npm install
```

### 3. Ejecutar la aplicación
```sh
 npm run dev
```

## Uso
- La linterna se enciende o apaga dependiendo de su estado (`isOn`).
- Se pueden agregar baterías (`batery_one` y `batery_two`).
- El diseño cambia en dispositivos móviles para mejorar la experiencia de usuario.

## Componentes principales

### `Lintern`
Muestra la linterna con su luz, el mango y las baterías.

#### Props:
- `batery_one`: Estado de la primera batería.
- `batery_two`: Estado de la segunda batería.
- `isOn`: Booleano que indica si la linterna está encendida.

### `Batery`
Representa una batería visualmente.

#### Props:
- `state`: Indica el estado de la batería.

## Autor
Desarrollado por **Ariff De Jesús Martínez Martínez**

## Licencia
Este proyecto está bajo la licencia MIT.

