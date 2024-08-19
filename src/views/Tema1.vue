<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Organismos causantes de enfermedades
    
    .cont_1_1
      p.p-relative(data-aos="fade-down") Los microorganismos son cruciales en el contexto de las enfermedades transmitidas por alimentos. La mayoría de estas enfermedades surgen debido a la presencia de microorganismos patógenos en los alimentos, donde se incuban y multiplican. 

      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-4(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.p-lg-5
          p.mb-0 #[strong Los microorganismos] pueden definirse como seres vivos unicelulares de tamaño diminuto. No pueden apreciarse a simple vista, ya que el ojo humano no tiene la capacidad de percibir objetos muy pequeños separados por una distancia inferior a 0,2 mm. 
      
      .row.mt-4.p-relative
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4(style="background-color:#DBECEB;border-radius:8px;")
            p Durante siglos, se desconoció la existencia de los microorganismos hasta la invención del microscopio en el siglo XVII y los avances tecnológicos posteriores, como el desarrollo del microscopio electrónico, que permitieron su identificación.
            p Puede decirse que un microorganismo es un organismo vivo tan pequeño que solo es visible mediante la utilización de aparatos tecnológicos que incrementan el rango de visión del ojo humano, es decir, los #[strong microscopios].  
            .row.mt-4
              .col-md-auto.mb-4.mb-md-0
                figure.m-auto.col-4.col-md-12
                  img(src="@/assets/curso/tema1/2.svg")
              .col-md
                p.mb-0 #[strong El desarrollo de la microbiología], la ciencia encargada de estudiar a los microorganismos, ha permitido descubrir una inmensa cantidad de estos a lo largo de los años. Se han creado diversas clasificaciones que incluyen bacterias, virus, protozoos, hongos, entre otros. Muchos de estos microorganismos cumplen funciones vitales en diversos procesos biológicos de los ecosistemas e incluso intervienen de manera positiva y necesaria en el funcionamiento del cuerpo humano.  
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/3.png")
      
      .col-xl-10.m-auto.mt-4.p-relative
        .p-4(style="background-color:#FCE7D5;border-radius:8px;" data-aos="fade-up")
          .row
            .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
              figure.m-auto.col-4.col-md-12
                img(src="@/assets/curso/tema1/4.png")
            .col-md(style="place-self:center;")
              p.mb-0 También hay microorganismos que tienen un efecto negativo en los entornos en donde se desarrollan. A estos se les denomina #[strong microorganismos patógenos] y son los causantes de las enfermedades de transmisión alimentaria.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/6.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 Agentes patógenos
    
    p(data-aos="fade-right") Un agente biológico patógeno puede definirse como todo ser vivo o ente que cause un daño biológico o algún tipo de enfermedad a cualquier otro organismo vivo con el cual entre en contacto. El agente patógeno es albergado en un huésped y su presencia en este tiene la finalidad de simplemente permitir la subsistencia del agente patógeno. 

    .cont_1_2.mt-4
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/7.png")
        .col-lg-7(data-aos="fade-left")
          .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#E9F5EC;border-radius:8px;")
            p La definición de agente patógeno abarca una gran variedad de organismos. Entre los más comunes se encuentran #[strong las bacterias, los hongos, los virus, los gusanos y los protozoos]. Los mencionados corresponden a los agentes patógenos infecciosos, ya que se tratan de organismos vivos.  
            p.mb-0 La relación existente entre #[strong los agentes patógenos y los alimentos] es que estos representan un medio de transmisión para los microorganismos infecciosos.  
      
      .col-xl-8.m-auto.mt-5.col-lg-10
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.p-4.p-xl-5(style="background-color:#ACDBB9;border-radius:8px;")
              figure.text-center
                img(src="@/assets/curso/tema1/8.svg" style="max-width:180px;display:inline;")
              p.mt-4 Un agente patógeno como una bacteria, un hongo o un virus puede llegar a introducirse en el interior de una porción de comida, comenzando su proceso de infección.
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.p-4.p-xl-5(style="background-color:#F9D0AC;border-radius:8px;")
              figure.text-center
                img(src="@/assets/curso/tema1/9.svg" style="max-width:180px;display:inline;")
              p.mt-4 Posteriormente, cuando el alimento es consumido por otro ser vivo, como una persona, comienza un nuevo proceso de infección en el organismo huésped.
      
    .col-xl-10.m-auto.mt-4
      .p-4(style="background-color:#E8E1D7;border-radius:8px;" data-aos="zoom-in")
        p.mb-0 Es importante destacar que los microorganismos patógenos representan un pequeño porcentaje en comparación con todos los microorganismos de la naturaleza. La mayoría de estos realizan labores y procesos benéficos. 








      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
