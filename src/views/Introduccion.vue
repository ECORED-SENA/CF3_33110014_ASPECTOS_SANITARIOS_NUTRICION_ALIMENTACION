<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cont_intro
      .row
        .col-lg-8(data-aos="fade-right" style="place-self:center;")
          p Las enfermedades transmitidas por los alimentos (ETAS) representan un desafío significativo para la salud pública a nivel mundial. Estas enfermedades se originan por el consumo de alimentos o agua contaminados con agentes patógenos, tales como bacterias, virus, parásitos y toxinas producidas por microorganismos. La incidencia de ETAS es alarmante y puede ocasionar brotes epidémicos que afectan a grandes segmentos de la población, generando consecuencias graves tanto para la salud individual como para el bienestar colectivo. 
        .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/intro1.png")
      
      .row.mt-4
        .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          figure.m-auto.col-10.col-md-8.col-lg-12
            img(src="@/assets/curso/intro2.svg")
        .col-lg(data-aos="fade-left")
          .p-4.h-100.d-flex.align-content-center(style="background-color:#F9D0AC;")
            p.mb-0 El conocimiento y comprensión de los organismos causantes de estas enfermedades son fundamentales para implementar medidas preventivas efectivas. A través de este componente formativo, se proporciona una descripción detallada de los principales microorganismos patógenos, sus características y los mecanismos por los cuales contaminan los alimentos. Este conocimiento es esencial para que los manipuladores de alimentos y los profesionales de la salud puedan identificar y mitigar los riesgos asociados con las ETAS. 
      
      p.mt-4(data-aos="fade-up") Además de la identificación de los agentes patógenos, es crucial entender las prácticas de manipulación y procesamiento de alimentos que pueden prevenir la contaminación. Este componente  no solo se enfoca en la teoría, sino que también ofrece directrices prácticas para asegurar la seguridad alimentaria. Al equipar a los aprendices con esta información, se busca promover un entorno alimentario más seguro y saludable, minimizando la incidencia de enfermedades transmitidas por los alimentos y mejorando la calidad de vida de la población. 

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
