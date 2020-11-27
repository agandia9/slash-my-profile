# SlashProfileApp

## Hola😄
En este documento detallaré las decisiones técnicas que he llevado a cabo en este proyecto, así como puntos principales y fuertes del mismo.
Descripción general: desarrollo de un panel de usuario con geolocalización distribuida en cards.

## Components
### Profile-card
Este componente renderiza el perfil de usuario, que contiene a su vez, otro componente <profile-img>.
En la parte inferior veremos el formulario hecho con forms reactivos, me decidí por usar éstos ya que tengo experiencia con ellos y tienen grandes beneficios a la hora de implementarlos, son fácilmente escalables, son completos y fáciles de utilizar.
Los campos *name* y *mail* son obligatorios por Validators del propi Form, además, éste último tiene un Validador adicional de formato de email.
Los mensajes de error aparecen cuando la directiva *ngIf detecta que hay un error de validación en alguno de sus campos.

### Profile-img
Renderiza la imagen por defecto si detecta que no hay otra imagen anteriormenete subida a la API de Cloudinary, una vez clickemos en el botón de edición, podremos subir una nueva imagen y ésta, al ser devuelta por la api, se almacenará en una variable array *responses*, pudiendo la imagen acceder a la útltima posición de la misma (concretamente al param URL) y cambiando la imagen por defecto por ella.
Escogí utilizar Cloudinary porque, aunque no tuviera experiencia previa trabajando una API de manejo de fotos y videos (toda mi experiencia con fotos pasa por un backend propio), la ví interesante y cumplía con la función deseada. Aún así, siguiendo los tutoriales ofrecidos por el propio portal de Cloudinary, se me ha hecho muy complicado implementarlo junto con el package *ng2-file-upload* (es el que ellos recomiendan usar). No he podido separar la lógica en un servicio aparte porque el objeto propio [uploader] almacena la foto escogida y debe convivir en el mismo contexto donde se haga la petición a Cloudinary. Aún así pienso que en un poco más de tiempo lo podría haber resuelto.

### Profile-map
El componente del mapa renderiza un objeto AGM soportado por el propio paquete @agm (utilicé éste ya que tengo experiencia con él y es de fácil implementación), además, tenemos un botón para volver a localizarnos en el mapa por si hemos cambiado de posición. La función locate() llama a una a su vez a otra en un servicio aparte llamado *agm.service*, éste se encarga de localizarnos con la función propia del navegador *getCurrentPosition* y devuelve las coordenadas al componente, pudiendo éste actualizar sus vars *lat y lng* y refrescando el Marker de agm con la nueva posición.

### Page init-page
Landing de inicio. Ésta page renderiza la propia toolbar y los dos componentes profile-map y profile-card.
Únicamente de presentación.

## Consideraciones generales

### Angular 10 + Material
Aunque se especificaba la utilización de Angular 4 para esta prueba, decidí hacerla en la versión 10 ya que, contando con experiencia en las versiones 2, 6 y 8 vi que era una muy buena oportunidad para probar una vez más la versión 10. Además, he utilizado Angular Material para los componentes como inputs y buttons, tengo experiencia en estos componentes y creo que son de mucha utilidad, son muy rehusables y adaptables, además pude observar que el diseño de la propuesta final enviada por correo concordaba con el propio diseño que yo ya tenia interiorizado de Material.

### Sass
He utilizado Sass definiendo estilos y variables que se utilizan en otros componentes, como pueden ser colores o width para las mediaqueries. También lo he usado para redifinir alguna propiedad de Angular Material que no terminaba de encajar con la propuesta final.

### ENV
Las variables de entorno en environments/envorinment.ts están vacías por defecto, os hago llegar las claves que yo mismo he utilizado por otro medio.
