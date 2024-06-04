# Future Forge
Este es un sistema que proporciona una prueba de orientación vocacional y prueba de estilos de aprendizaje. Con este proyecto lo que se espera es apoyar a las personas de todo tipo de edad, ya sean estudiantes o trabajadores a descubrir su potencial encontrando su area laboral que mejor se adapte a sus ideales, gustos y personalidad y puedan brindar un gran avance y apoyo al mundo laboral y logren sentirse realizados y felices, asi como tambien el poder descubir su mejor forma de aprendizaje y convertirse en grandes elementos para el mundo haciendo lo que mas les gusta y aprendiendo a su mejor manera.
## Instalación de frontend

Se debe copiar el link del repositorio <https://github.com/FidelNR/FutureForgeApp.git> y pegarlo en su terminal con la ruta donde se quiera guardar para ejecutar el comando git clone. Por ejemplo yo lo hago en la carpeta C, usted lo puede hacer donde prefiera.
```

C:\> git clone https://github.com/FidelNR/FutureForgeApp.git
```

Luego, se debe navegar hasta la carpeta donde esta el proyecto para instalar las dependencias que el proyecto utiliza para funcionar con el comando:

```
npm install
```

## Cambio de IP
Algo muy importante que se debe hacer es el **cambiar la IP** que se este usando al momento de ejecutar el proyecto, ya que de eso depende la conexión con el proyecto del Backend, sino se realiza este paso **no se podra tener comunicación con la API**. Para realizar este paso es sencillo, primero se debe saber en que IP esta conectada su computadora, se puede saber usando el CMD o terminal de su computadora, si no sabe como a continuación vienen los comandos:

### Saber IP en Windows
Busca CMD o Terminal, escribe este comando y da enter:
```
ipconfig
```

### Saber IP en Mac
Abre la terminal, pega el comando a continuación y da enter:
```
hostname -I
```

### Saber IP en Linux
Abre la terminal, pega el comando a continuación y da enter:
```
ip a 
```
o tambien puede ser
```
ifconfig
```
Una vez que sepas tu IP en el proyecto busca en la raiz un archivo llamado *Ip.js*, veras que es solo una constante, entre las comillas debes de pegar tu IP y con eso, en todo lado que se hagan operaciones a la API se haran sin problema.
```js
//ip.js
export default ip = 'x.x.x.x'; //Pega tu IP entre las comillas
```

***Nota**

Se debe cuidar que la IP dentro de las comillas no tenga ningun espacio en blanco al inicio o al final , ya que no funcionara la conexión y marcara error.
## Ejecución

Por ultimo, para ejecutar el proyecto y ver su contenido y funcionamiento se utiliza el comando:

```
npm start
```

## Instalación del backend
Para instalar el proyecto del backend que es la API que realiza las llamadas a la base de datos, se debe visitar dando click a este link:

<https://github.com/FidelNR/FutureForgeback.git>