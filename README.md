# Future Forge
Este es un sistema que proporciona una prueba de orientación vocacional y prueba de estilos de aprendizaje. Con este proyecto lo que se espera es apoyar a las personas de todo tipo de edad, ya sean estudiantes o trabajadores a descubrir su potencial encontrando su area laboral que mejor se adapte a sus ideales, gustos y personalidad y puedan brindar un gran avance y apoyo al mundo laboral y logren sentirse realizados y felices, asi como tambien el poder descubir su mejor forma de aprendizaje y convertirse en grandes elementos para el mundo haciendo lo que mas les gusta y aprendiendo a su mejor manera.
## Instalación de frontend

Se debe copiar el link del repositorio <https://github.com/FidelNR/Future_Forge.git> y pegarlo en su terminal con la ruta donde se quiera guardar para ejecutar el comando git clone.
```

C:\> git clone https://github.com/FidelNR/Future_Forge.git
```

Luego, se debe navegar hasta la carpeta donde esta el proyecto para instalar las dependencias que el proyecto utiliza para funcionar con el comando:

```
npm install
```

## Ejecución

Por ultimo, para ejecutar el proyecto y ver su contenido y funcionamiento se utiliza el comando:

```
npm run dev
```

## Instalación del backend

Se deben realizar los mismos pasos de instalación del frontend, para desplegarlo sin problemas

Pero como paso extra, si es necesario, dentro de esta constante que se encuentra en App se debe descomentar y cambiar la URL que aparece en *origin* por la url que se usa cuando se ejecuta su frontend, si es la misma que ya se encuentra, no realice la modificación.

```js
const corsOptions = {
    //origin: 'http://localhost:5173', // URL desde la cual se permitirán las solicitudes
    methods: ['GET', 'POST'], // Métodos HTTP permitidos
    optionsSuccessStatus: 200 // Código de estado para respuestas OPTIONS exitosas
  };
```

Para su ejecución es tambien con el comando:

```
npm run dev
```
