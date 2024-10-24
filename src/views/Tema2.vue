<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Clasificación de los microorganismos y agentes patógenos 
    
    .cont_2_1
      p(data-aos="fade-up") La clasificación de los microorganismos y agentes patógenos se basa en sus características morfológicas, fisiológicas y genéticas. Los microorganismos se dividen principalmente en bacterias, virus, hongos y protozoos. 

      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_2_1 2.1 Bacterias
      
      p(data-aos="fade-right") Las bacterias constituyen una gran porción de los seres vivos del mundo, inclusive son consideradas el organismo más abundante de todo el planeta.

      .col-xl-10.m-auto.mt-4.p-relative
        .p-4(style="background-color:#DBECEB;border-radius:8px;" data-aos="fade-up")
          .row
            .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
              figure.m-auto.col-4.col-md-12
                img(src="@/assets/curso/tema2/1.png")
            .col-md(style="place-self:center;")
              p.mb-0 Son organismos unicelulares (compuestos por una sola célula) y son de tipo procariota, lo cual indica que son células carentes de núcleo. Estos microorganismos tienen la capacidad de habitar y adaptarse a cualquier tipo de entorno, ya sea en la tierra, en el agua, en el interior de otros organismos, en alimentos e incluso en medios ácidos.

      .row.mt-4
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4(style="background-color:#FCE7D5;border-radius:8px;")
            p.mb-0 El término bacteria también hace referencia a una de las tres grandes clasificaciones de los seres vivientes, estas tres son: #[strong bacterias, arqueas y eucariontes], en donde se abarcan a todos los seres vivos y posteriormente se dividen en diversos niveles de clasificación. Existe una gran cantidad de subdivisiones en la clasificación de las bacterias, ordenadas según sus características morfológicas y las condiciones del entorno en donde pueden desarrollarse, conocidas como filos. 
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/2.png")
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 Funciones de las bacterias 
      
      .row
        .col(style="place-self:center;" data-aos="fade-right")
          p Las bacterias son responsables de cumplir funciones vitales en todos los ecosistemas del planeta. Puede decirse incluso que si estas no existiesen, no habría vida en el planeta. 
          p.mb-0 En lo referente al cuerpo humano, se sabe que las bacterias son responsables de causar algunas enfermedades, pero la mayoría de las veces tienen un efecto benéfico. Normalmente, no se tiene conciencia de que en el interior del cuerpo hay una gran cantidad de bacterias que todo el tiempo desarrollan funciones vitales para la vida. Entre estas funciones se encuentran: 
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/3.svg")
      
      .col-xl-10.m-auto.mt-5
        .p-4.p-xl-5(style="background-color:#D5EDDC;border-radius:8px;" data-aos="zoom-in")
          .row
            .col-lg-auto.mb-4.mb-lg-0
              figure.m-auto.col-7.col-md-5.col-lg-12
                img(src="@/assets/curso/tema2/4.svg")
            .col-lg(style="place-self:center;")
              .p-3.bg-white.d-flex.mb-2(style="border-radius:8px;")
                i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
                p.mb-0.ps-4 La producción de vitaminas.
              .p-3.bg-white.d-flex.mb-2(style="border-radius:8px;")
                i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
                p.mb-0.ps-4 La fermentación de los alimentos ingeridos que ayuda en la digestión.
              .p-3.bg-white.d-flex(style="border-radius:8px;")
                i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
                p.mb-0.ps-4 La ayuda en el combate de enfermedades que atacan al cuerpo humano.
    
    .cont_2_1
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 Bacterias patógenas 
      
      p(data-aos="fade-right") Las bacterias patógenas resultan perjudiciales para otros seres vivos. Existen aproximadamente #[strong 200 especies de bacterias patógenas], responsables de causar gran parte de las enfermedades infecciosas en personas, animales y plantas. 
      p.fw-bold(data-aos="fade-left") La forma en que estas bacterias afectan a las personas varía según varios factores: 

      .col-xl-10.m-auto.mt-4
        .p-4.p-xl-5(style="background-color:#D5EDDC;border-radius:8px;" data-aos="zoom-in")
          .row
            .col-lg-auto.mb-4.mb-lg-0
              figure.m-auto.col-7.col-md-5.col-lg-12
                img(src="@/assets/curso/tema2/5.svg")
            .col-lg(style="place-self:center;")
              .p-3.bg-white.d-flex.mb-2(style="border-radius:8px;")
                i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
                p.mb-0.ps-4 La especie de la bacteria.
              .p-3.bg-white.d-flex.mb-2(style="border-radius:8px;")
                i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
                p.mb-0.ps-4 Las características del organismo que hospeda la bacteria.
              .p-3.bg-white.d-flex(style="border-radius:8px;")
                i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
                p.mb-0.ps-4 La temperatura a la que la bacteria es sometida.
      
      p.fw-bold.mt-5(data-aos="fade-right") Estos factores determinan: 

      .col-xl-10.m-auto.mt-4
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-11(data-aos="fade-right")
            .h-100.p-4(style="background-color:#F9D0AC;")
              .row
                .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
                  figure.m-auto.col-4.col-md-12
                    img(src="@/assets/curso/tema2/6.svg")
                .col-md(style="place-self:center;")
                  p.mb-0 La capacidad de multiplicación de las bacterias.
          .col-lg.mb-4.mb-lg-0.col-md-11(data-aos="fade-left")
            .h-100.p-4(style="background-color:#ACDBB9;")
              .row
                .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
                  figure.m-auto.col-4.col-md-12
                    img(src="@/assets/curso/tema2/7.svg")
                .col-md(style="place-self:center;")
                  p.mb-0 La posibilidad de que se activen los procesos de producción de toxinas, que finalmente son las causas de las enfermedades infecciosas.
      
      p.mt-4(data-aos="fade-right") Además, estas bacterias se transportan a través del aire y los insectos que actúan como vectores de infección. Cuando las bacterias tienen contacto con un organismo y logran entrar en su interior, se ven sometidas a diversas situaciones que pueden determinar si la persona sufrirá o no una infección. Por ejemplo: 

      .p-4.mt-4(style="background-color:#ECF5F5;" data-aos="zoom-in")
        .row
          .col-md.mb-4.mb-md-0(style="place-self:center;")
            p.mb-0 Si se trata de una persona sana y con un sistema inmunológico funcional, la probabilidad de adquirir la enfermedad se ve disminuida. Si se dan condiciones favorables para el desarrollo de las bacterias, la enfermedad prosperará. 
          .col-md-auto(style="place-self:center;")
            figure.m-auto.col-7.col-md-12
              img(src="@/assets/curso/tema2/8.svg")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 Virus
    
    .cont_2_1
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#FCE7D5;border-radius:8px;")
            p.mb-0 Los virus son agentes infecciosos. No se trata de organismos unicelulares como las bacterias, ya que se componen propiamente de sustancias, en lugar de órganos celulares. Las sustancias que los componen consisten en su mayoría de ácidos nucleicos o ADN, cubiertos por una membrana de proteína o lípidos. Se caracterizan por necesitar habitar en el interior de otros organismos para poder desarrollarse y multiplicarse. 
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/9.png")
      
      p.mt-5.fw-bold(data-aos="fade-right") Los virus se presentan en: 

      .col-xl-9.col-lg-11.m-auto.mt-4
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.text-center.p-4.p-xl-5.pt-xl-4(style="background-color:#ACDBB9;border-radius:8px;")
              figure
                img(src="@/assets/curso/tema2/10.svg" style="max-width:100px;display:inline;")
              p.mt-4.fw-bold.mb-0 El interior de animales.
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.text-center.p-4.p-xl-5.pt-xl-4(style="background-color:#ACDBB9;border-radius:8px;")
              figure
                img(src="@/assets/curso/tema2/11.svg" style="max-width:100px;display:inline;")
              p.mt-4.fw-bold.mb-0 El interior de plantas.
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.text-center.p-4.p-xl-5.pt-xl-4(style="background-color:#ACDBB9;border-radius:8px;")
              figure
                img(src="@/assets/curso/tema2/12.svg" style="max-width:100px;display:inline;")
              p.mt-4.fw-bold.mb-0 La infección de otros microorganismos como las bacterias.

      .titulo_tercero(data-aos="fade-right")
        h5.mb-0 Características de los virus
      
      p(data-aos="fade-left") Su tamaño es tan pequeño que no son visibles ni siquiera con la ayuda de un microscopio óptico, requiriéndose de aparatos más avanzados como los microscopios electrónicos.

      .col-xl-10.m-auto.mt-4
        .p-4.p-xl-5(style="background-color:#D5EDDC;border-radius:8px;" data-aos="zoom-in")
          .row
            .col-lg-auto.mb-4.mb-lg-0(style="place-self:center;")
              figure.m-auto.col-7.col-md-5.col-lg-12
                img(src="@/assets/curso/tema2/13.svg")
            .col-lg(style="place-self:center;")
              p.fw-bold.mb-4 Las formas de transmisión de los virus son: 
              .p-3.bg-white.d-flex.mb-2(style="border-radius:8px;")
                i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
                p.mb-0.ps-4 Transmisión por aire.
              .p-3.bg-white.d-flex.mb-2(style="border-radius:8px;")
                i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
                p.mb-0.ps-4 Transmisión por líquidos.
              .p-3.bg-white.d-flex.mb-2(style="border-radius:8px;")
                i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
                p.mb-0.ps-4 Transmisión por alimentos.
              .p-3.bg-white.d-flex(style="border-radius:8px;")
                i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
                p.mb-0.ps-4 Transmisión por contacto físico de una persona a otra.
    
    p.mt-4(data-aos="fade-right") Los virus siempre actúan como parásitos, ya que necesitan habitar en las células de un organismo vivo para propagarse y causar enfermedades. 

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3 Protozoos
    
    .cont_2_1
      p(data-aos="fade-right") Los protozoos corresponden a un tipo de microorganismos de carácter eucariota, lo que indica que son organismos celulares que poseen un núcleo propio.  

      .col-xl-10.m-auto.mt-4
        .p-4(style="background-color:#DBECEB;border-radius:8px;" data-aos="flip-up")
          .row
            .col-lg-auto.mb-4.mb-lg-0(style="place-self:center;")
              figure.m-auto.col-9.col-md-6.col-lg-12
                img(src="@/assets/curso/tema2/14.svg")
            .col-lg.pe-lg-5(style="place-self:center;")
              p.mb-0 Se caracterizan por habitar en medios líquidos de diversas condiciones, ya sea en aguas saladas o dulces. Estos microorganismos tienen conductas parasitarias, al igual que las bacterias patógenas. Se transmiten entre organismos a través de medios acuosos o mediante la ingestión de líquidos infectados. 
      
      p.mt-4(data-aos="fade-right") Si los protozoos son albergados por un organismo huésped en donde encuentran las condiciones propicias para su reproducción, pueden liberar toxinas de manera natural, propias de sus procesos de alimentación. Estas toxinas resultan perjudiciales para el cuerpo humano y son responsables de la producción de enfermedades. 
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_4 2.4 Hongos
    
    .cont_2_1
      p(data-aos="fade-right") Al igual que los protozoos, los hongos son organismos eucariotas con núcleo propio. Existen hongos formados por tejidos de células que constituyen una gran variedad de clasificaciones dentro de la ecología. 

      .col-xl-10.m-auto.mt-4
        .p-4(style="background-color:#DBECEB;border-radius:8px;" data-aos="flip-up")
          .row
            .col-lg-auto.mb-4.mb-lg-0(style="place-self:center;")
              figure.m-auto.col-9.col-md-6.col-lg-12
                img(src="@/assets/curso/tema2/15.svg")
            .col-lg.pe-lg-5(style="place-self:center;")
              p.mb-0 Estos hongos se caracterizan por su capacidad de adaptarse fácilmente a diversos entornos ambientales y condiciones de terreno. Además de este tipo de hongos, existen hongos en forma de microorganismos unicelulares, por lo cual se puede deducir que el tamaño de los hongos varía en gran medida.
      
      p.mt-4(data-aos="fade-right") Entre la clasificación de los hongos existen otras divisiones, tales como el #[strong moho y la levadura].

      .col-xl-8.m-auto.mt-5.col-lg-10
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.p-4.p-xl-5(style="background-color:#ACDBB9;border-radius:8px;")
              figure.text-center
                img(src="@/assets/curso/tema2/16.svg" style="max-width:200px;display:inline;")
              p.mt-4 El moho es una especie particular de hongo que se reproduce y se moviliza a través de esporas, siendo el aire su medio de transmisión.
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.p-4.p-xl-5(style="background-color:#FCE7D5;border-radius:8px;")
              figure.text-center
                img(src="@/assets/curso/tema2/17.svg" style="max-width:200px;display:inline;")
              p.mt-4 La levadura es otro tipo de hongo unicelular, caracterizado por su capacidad de fermentación, lo que la ha convertido en un insumo utilizado a nivel industrial y doméstico.








</template>

<script>
export default {
  name: 'Tema2',
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
