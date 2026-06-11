export interface BloqueCarta {
  tipo: 'texto' | 'pixel-art' | 'imagen' | 'vectorial'; // Añadido 'vectorial'
  contenido: string; // Aquí irá el texto, pixel art, URL de imagen o código SVG
}

export const contenidoOriginal: BloqueCarta[] = [
  {
    tipo: 'texto',
    contenido: 'Mi hermosa y amada Ale, espero que al menos nada salga mal hasta que te pueda mandar esta carta, eres tan... tan linda, preciosa, hermosa, de buenos sentimientos y muchos cosas que me gustan, enserio me vuelves loco, las cosas que dices pero me vuelve aún más loco las cosas que haces, sé que te preocupas por mí que realmente me amas y eso es tan tan tan lindoooo.'
  },
  {
    tipo: 'texto',
    contenido: 'Quiero darte todo el amor que pueda, como dije reiteradas e incontables veces, NO ME IMPORTA NADA DE LO QUE DIGAS O DIGAN, NADA ME HARÁ DEJARTE DE VER CON EL AMOR QUE TE TENGO. Cuando estaba escribiendo esta parte fue cuando por fin me explicaste todo lo de tus exs y lo que no te gusta amor.'
  },
  {
    tipo: 'texto',
    contenido: 'Lo que siento por ti, es aahhh haces acelerar mi corazón PERO ESTO NO ES UNA CARTE DE SAN VALENTIN, esto es una carta por tu cumpleaños, yo creo que es la primera vez que hago este esfuerzo por alguien, quizas no fui bueno antes pero quiero serlo por ti, quiero darte lo mejor de mí y que de verdad seas feliz estando conmigo, y bueno... te deseo un excelente cumpleaños y que la pases muy bonito con tu hermano. Oh no debía saber eso? Wuaaa dejame saber algunas cosas por mi cuenta amor!!!'
  },
  {
    tipo: 'texto',
    contenido: 'De todos modos quiero que la pases bien, cuando veas esto quizas ya me habrás contado eso pero esto es muestra de que ya lo sabía muejeje, yo tmb tengo una hermana btw, eso no te lo conté o no se quizas si lo haga cuando leas esto, despues de todo tengo hasta el 18 en lo que escribo esta carta, igual mira este gatito que logre poner para darle mi identidad.'
  },
  {
    tipo: 'imagen',
    contenido: 'https://cdn2.cdnstep.com/Umh5X6qQoJGRZUyi1LO6/0.png'
  },
  {
    tipo: 'texto',
    contenido: 'Te gustó?? Espero que si, hay tantas cosas que le estoy poniendo a esto, quiero que sea lo suficientemente detallado y que te guste, supongo que es estilo un poco gotico? Aunque no sé si tú lo seas pero por ahí va la cosa, desde que te conocí me haces feliz amor, nada de lo que has hecho ha disminuido mi amor por ti, lo siento igual, siento como mi corazón sigue latiendo igual de rápido cuando sale \"Escribiendo...\" Quiero que este cumpleaños sea muy bonito para ti, por ahora la prioridad es que seas feliz en tu día especial. Saber todo de ti puede esperar y sé que con el tiempo me dirás todo. Ahora mira este otro gatito que baila!!!'
  },
  
  {
    tipo: 'imagen',
    contenido: 'https://media.tenor.com/bDCEyZa9LYYAAAAj/dance-dancing.gif'
  },
  {
    tipo: 'texto',
    contenido: 'Espero que ese tambíen te guste, bueno tampoco quiero que la carta sea tan inmensa que te pases todo tu cumpleaños leyendola, y mientras escribo esto pienso en... que detalle le puedo dar para cerrar la carta??? Hablé de lo que siento por ti, de lo perfecta que eres, de como me haces vivir de nuevo y que te deseo un feliz feliz cumpleaños porque te lo mereces.'
  },
  {
    tipo: 'texto',
    contenido: 'Por ahora no tengo dudas de nada y me gusta estar así me haces extremadamente feliz y yo te haré feliz también hermosa, y bueno con lo que planeo para el final ya tengo una idea de que hacer, hmmmm pero le bajaré un poco la intensidad! Te amo te amo tanto y quiero estar contigo toda mi vida, solo sé que también quiero declararme pero ahhhhh en tu cumpleaños no lo sé!!!!!!!! '
  },
  {
    tipo: 'texto',
    contenido: 'Si lees esto escribeme \"Declarate pero en fa\" y lo hago con gusto, aunque la vrd podría ser q me ganes en declararte o incluso ya estemos saliendo antes de que leas esta carta, wuaaaa por qué es tan complicado lo que siento contigo???'
  }
];
