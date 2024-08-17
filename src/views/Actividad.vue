<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Prevención y control de enfermedades transmitidas por los alimentos.',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los conceptos clave relacionados con la higiene alimentaria, la manipulación segura de alimentos y las prácticas seguras para evitar la propagación de estas enfermedades.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué significa ETAS?',
          imagen: require('@/assets/actividad/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Enfermedades Transmitidas por Alimentos Seguros. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Enfermedades Transmitidas por Agua y Sólidos. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Enfermedades Transmitidas por los Alimentos. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Enfermedades Transmitidas por Animales y Sólidos. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes microorganismos es considerado un patógeno en ETAS? ',
          imagen: require('@/assets/actividad/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: '<em>Escherichia coli. </em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Lactobacillus. </em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Penicillium. </em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Streptomyces. </em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de enfermedad es causada por bacterias, virus y parásitos en ETAS? ',
          imagen: require('@/assets/actividad/pregunta_3.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Tóxica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Infecciosa. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tóxico-infecciosa. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Higiénica. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes es un factor importante en la prevención de ETAS? ',
          imagen: require('@/assets/actividad/pregunta_4.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar el uso de utensilios. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Manipulación segura de alimentos. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No lavar las manos antes de cocinar. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenar los alimentos a temperatura ambiente. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de ETAS se produce por la ingestión de sustancias químicas o toxinas? ',
          imagen: require('@/assets/actividad/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Infecciosa. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tóxica. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tóxico-infecciosa. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Higiénica. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 6,
          texto:
            '¿Qué práctica es fundamental para prevenir la contaminación cruzada en la cocina? ',
          imagen: require('@/assets/actividad/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de utensilios compartidos. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso adecuado de pesticidas. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lavar y desinfectar utensilios de cocina. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cocinar alimentos a baja temperatura. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de ETAS es causada por infecciones que producen toxinas? ',
          imagen: require('@/assets/actividad/pregunta_3.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Infecciosa. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tóxica. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tóxico-infecciosa. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Higiénica. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes es un microorganismo patógeno que causa ETAS? ',
          imagen: require('@/assets/actividad/pregunta_4.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: '<em>Giardia. </em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Rhizobium. </em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Aspergillus. </em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Bacillus. </em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 9,
          texto: '¿Qué medida de higiene es esencial para prevenir ETAS? ',
          imagen: require('@/assets/actividad/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Cocción a baja temperatura. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Uso de utensilios sucios. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lavado de manos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenamiento a temperatura ambiente. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 10,
          texto:
            '¿Qué medida de prevención es crucial para evitar la proliferación de microorganismos en los alimentos? ',
          imagen: require('@/assets/actividad/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenamiento a temperatura ambiente. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cocinar los alimentos inmediatamente después de comprarlos. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Refrigeración adecuada de los alimentos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Utilizar utensilios de cocina de madera. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
      ],
      mensaje_final_aprobado:
        '¡Has completado el cuestionario exitosamente! Felicidades.',
      mensaje_final_reprobado:
        'No has alcanzado la puntuación mínima para aprobar. Te animamos a intentarlo de nuevo.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
