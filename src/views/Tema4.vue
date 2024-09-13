<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Intoxicaciones más comunes transmitidas por alimentos
    
    .cont_4_1
      p(data-aos="fade-up") Algunas bacterias producen toxinas en el alimento antes de ser consumido, lo que provoca un envenenamiento conocido como infecciones alimentarias.  
      p.fw-bold(data-aos="fade-right") A continuación, se describen las bacterias más comunes que causan intoxicaciones por alimentos: 

      .tarjeta.tarjeta--azul.p-4.p-lg-5.mt-4.pb-lg-4(style="background-color:#ECE4D8;")
        SlyderA(tipo="b")
          .row.col-lg-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Shigelosis 
              p.mt-4 La Shigelosis es una enfermedad infecciosa causada por la bacteria Shigella. Se transmite a través de la materia fecal, y su presencia en los alimentos es señal de contaminación por heces. Los síntomas incluyen dolores abdominales, fiebre repentina, sangre en las heces, cólicos, dolores rectales, vómito, náuseas y diarrea. Esta bacteria también es responsable de la disentería bacilar. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema4/1.png')
          .row.col-lg-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Escherichia Coli 
              p.mt-4 Escherichia Coli, conocida como E. Coli, es una bacteria muy común que se encuentra en el tracto gastrointestinal y en la materia fecal de animales y humanos. Puede transmitirse a través de agua y alimentos contaminados. La mayoría de las bacterias de este tipo son inofensivas, pero algunas generan toxinas perjudiciales. Pueden causar gastroenteritis, cistitis, meningitis, peritonitis, mastitis, septicemia y neumonía. El periodo de incubación varía entre 8 y 24 horas. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema4/2.png')
          .row.col-lg-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5  Yersiniosis 
              p.mt-4 La Yersiniosis es una enfermedad infecciosa ocasionada por la bacteria Yersinia Enterocolitica. Se adquiere al ingerir alimentos contaminados, especialmente carne de cerdo mal cocida o cruda, o vegetales contaminados con estiércol. Los síntomas incluyen fiebre, dolor estomacal y diarrea con sangre. El periodo de incubación es de 4 a 7 días. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema4/3.png')
          .row.col-lg-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5  Infección por Vibrio 
              p.mt-4 El género Vibrio incluye bacterias patógenas para los seres humanos, comúnmente transmitidas a través de la ingestión de alimentos marinos. Vibrio Parahaemolyticus causa gastroenteritis febril y diarrea con sangre, y Vibrio Cholerae es responsable del cólera. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema4/4.png')
          .row.col-lg-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5  Salmonelosis 
              p.mt-4 La salmonelosis es una infección ocasionada por la bacteria Salmonella, comúnmente presente en los intestinos de los animales y transmitida a través de desechos fecales. Cuando los animales no se sacrifican en condiciones salubres e higiénicas, se incrementa el riesgo de que esta bacteria permanezca en el cuerpo del animal y contamine su carne. Salmonella Typhi y Salmonella entérica producen salmonelosis. Los principales síntomas son gastroenteritis, náuseas, vómito, diarrea, fiebre, escalofríos, dolores musculares y de cabeza, y sangre en las heces. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema4/5.png')
          .row.col-lg-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5  Campylobacter 
              p.mt-4 Campylobacter es una bacteria presente en el intestino del ganado vacuno y ovino, aves y perros. Las personas pueden contaminarse al ingerir carne infectada, especialmente pollo, o al consumir bebidas lácteas que no han sido pasteurizadas. La bacteria también puede transmitirse entre personas al entrar en contacto con la materia fecal de alguien enfermo, como en el caso de los pañales de bebés. Las bacterias Campylobacter atacan la capa interior que recubre el intestino grueso y delgado, ocasionando inflamación del intestino o enteritis. Los síntomas de infección aparecen entre 1 y 7 días después de ingerir el alimento contaminado. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema4/6.png')
      
      p.mt-5.fw-bold(data-aos="fade-right") Otras enfermedades son:  

      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 Bacillaceae 
        
    .cont_4_1
      p(data-aos="fade-right") Bacillaceae es un grupo de bacterias que incluye especies patógenas para el ser humano, como Bacillus Cereus, responsable de causar #[strong enteritis, diarrea y vómito]. Esta bacteria tiene un periodo de incubación de entre #[strong 8 y 16 horas] en el ser humano y puede llegar a este a través de productos derivados de #[strong la carne de pollo, cereales, harinas] e incluso algunas frutas como el durazno y la piña. Es común encontrar esta bacteria en los suelos y la tierra.  

      .col-xl-10.m-auto.mt-4
        .p-4(style="background-color:#DBECEB;border-radius:8px;" data-aos="fade-up")
          .row
            .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
              figure.m-auto.col-4.col-md-12
                img(src="@/assets/curso/tema4/7.png")
            .col-md(style="place-self:center;")
              p.mb-0 El proceso de infección se basa en la producción de toxinas preformadas por la bacteria. Cuando se ingieren pequeñas cantidades de la bacteria B. Cereus, no se genera ningún perjuicio para la persona. Sin embargo, cuando se trata de cantidades elevadas, puede generarse una intoxicación. 
      
      p.mt-4.fw-bold(data-aos="fade-right") Esta bacteria crea dos tipos de intoxicaciones: 

      .col-xl-8.m-auto.mt-4.col-lg-10
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.p-4.p-xl-5.text-center(style="background-color:#ACDBB9;border-radius:8px;")
              figure.text-center
                img(src="@/assets/curso/tema4/8.svg" style="max-width:150px;display:inline;")
              p.mt-4.mb-2.fw-bold Intoxicación diarreica
              p.mb-0  Enteritis, dolores estomacales y diarrea.
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.p-4.p-xl-5.text-center(style="background-color:#F9D0AC;border-radius:8px;")
              figure.text-center
                img(src="@/assets/curso/tema4/9.svg" style="max-width:150px;display:inline;")
              p.mt-4.mb-2.fw-bold Intoxicación emética
              p.mb-0 Náuseas y vómito.
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 Botulismo 
      
      p(data-aos="fade-left") El botulismo es una enfermedad infecciosa causada por la bacteria Clostridium Botulinum. Esta bacteria se encuentra generalmente en la tierra y produce una toxina conocida como botulínica, que es el elemento causal de la enfermedad. La bacteria C. Botulinum puede desarrollarse en ambientes carentes de oxígeno y en niveles de pH altos. Puede crecer en conservas de alimentos que no reciben un tratamiento térmico adecuado o que están en mal estado. 
      p.fw-bold(data-aos="fade-right") El botulismo causa parálisis en los músculos esqueléticos, ocasionando: 

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.text-center.p-4(style="background-color:#FCE7D5;")
          figure
            img(src="@/assets/curso/tema4/10.svg" style="max-width:120px;display:inline;")
          p.mb-0.mt-2 Dificultades en el habla
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.text-center.p-4(style="background-color:#FCE7D5;")
          figure
            img(src="@/assets/curso/tema4/11.svg" style="max-width:120px;display:inline;")
          p.mb-0.mt-2 Flacidez muscular
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.text-center.p-4(style="background-color:#FCE7D5;")
          figure
            img(src="@/assets/curso/tema4/12.svg" style="max-width:120px;display:inline;")
          p.mb-0.mt-2 Náuseas
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.text-center.p-4(style="background-color:#FCE7D5;")
          figure
            img(src="@/assets/curso/tema4/13.svg" style="max-width:120px;display:inline;")
          p.mb-0.mt-2 Visión doble
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.text-center.p-4(style="background-color:#FCE7D5;")
          figure
            img(src="@/assets/curso/tema4/14.svg" style="max-width:120px;display:inline;")
          p.mb-0.mt-2 Dolor abdominal
    
    .col-xl-10.m-auto.mt-4
      .p-4(style="background-color:#ECE4D8;border-radius:8px;" data-aos="fade-up")
        .row
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema4/15.svg")
          .col-md(style="place-self:center;")
            p.mb-0 Los síntomas se presentan entre 8 y 28 horas después de haber consumido el alimento contaminado.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/6.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 Staphylococcus 
    
    .cont_4_1
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          p Staphylococcus es un tipo de bacteria que se encuentra con frecuencia en la piel y en las fosas nasales de los animales y de las personas. La especie más reconocida es Staphylococcus Aureus. Se estima que un tercio de la población mundial alberga esta bacteria, pero no necesariamente presenta una infección. La contaminación de los alimentos con esta bacteria se da por el mal manejo y manipulación, sumado a la falta de sanidad e higiene. 
          p.fw-bold Una infección por Staphylococcus puede producir una gran variedad de enfermedades, desde infecciones de la piel y las mucosas hasta enfermedades más graves: 
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema4/16.png")
      
      .col-xl-10.m-auto.mt-5
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-11(data-aos="fade-right")
            .h-100.p-4(style="background-color:#F9D0AC;")
              .row
                .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
                  figure.m-auto.col-4.col-md-12
                    img(src="@/assets/curso/tema4/17.png")
                .col-md(style="place-self:center;")
                  p.fw-bold.mb-2 Infecciones de la piel y mucosas
                  p.mb-0 Foliculitis, forunculosis o conjuntivitis.
          .col-lg.mb-4.mb-lg-0.col-md-11(data-aos="fade-left")
            .h-100.p-4(style="background-color:#ACDBB9;")
              .row
                .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
                  figure.m-auto.col-4.col-md-12
                    img(src="@/assets/curso/tema4/18.png")
                .col-md(style="place-self:center;")
                  p.fw-bold.mb-2 Enfermedades graves
                  p.mb-0 Meningitis, endocarditis e inflamaciones gastrointestinales.
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 Factores influyentes en la gravedad de la enfermedad
      
      p(data-aos="fade-left") Las enfermedades de transmisión alimentaria no se desarrollan siempre bajo las mismas condiciones ni con la misma intensidad, ya que existen muchos factores que influyen en su desarrollo. Principalmente, estos factores están relacionados con las características físicas y bioquímicas de la persona, pero también hay factores relacionados con la comida. 
      p.fw-bold(data-aos="fade-right") Las condiciones relacionadas con las personas incluyen varias situaciones: 

      .col-xl-8.m-auto.mt-5.justify-content-center
        .row.col-md-11.col-lg-12.m-auto
          .col-lg-auto.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema4/19.png")
          .col-lg.ps-lg-0(data-aos="fade-up")
            .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#ECE4D8;")
              p.fw-bold Edad
              p.mb-0 La susceptibilidad a adquirir una enfermedad y su desarrollo avanzado varía según la edad. Los bebés y los ancianos son más vulnerables a las enfermedades, mientras que los jóvenes tienen mayor resistencia, lo que disminuye la probabilidad de contagio o avance de la enfermedad, incluso tras el contacto con el agente patógeno. 
        .row.col-md-11.col-lg-12.m-auto.mt-4
          .col-lg-auto.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema4/20.png")
          .col-lg.ps-lg-0(data-aos="fade-up")
            .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#ECE4D8;")
              p.fw-bold Sistema inmunológico. 
              p Este sistema, también conocido como sistema inmunitario, está compuesto por procesos biológicos y bioquímicos que defienden al cuerpo de enfermedades y agentes patógenos. Su eficacia varía entre individuos: 
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#F08C32;")
                  span Personas con hábitos de vida saludables (dieta balanceada, ejercicio, no fumar) suelen tener mejores defensas. 
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#F08C32;")
                  span Personas con sistemas inmunológicos debilitados debido a enfermedades degenerativas, autoinmunes o estilos de vida descuidados son más susceptibles a enfermedades.
  
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/6.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 Otros factores 
    
    p(data-aos="fade-left") Además de la edad y el sistema inmunológico, hay otros factores de menor relevancia que también influyen en la intensidad de una enfermedad: 

    .col-xl-10.m-auto.mt-4
      .p-4.p-xl-5(style="background-color:#D5EDDC;border-radius:8px;" data-aos="zoom-in")
        .row
          .col-lg-auto.mb-4.mb-lg-0
            figure.m-auto.col-7.col-md-5.col-lg-12
              img(src="@/assets/curso/tema4/21.svg")
          .col-lg(style="place-self:center;")
            .p-3.bg-white.d-flex.mb-2(style="border-radius:8px;")
              i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
              p.mb-0.ps-4 Variaciones de temperatura en el cuerpo.
            .p-3.bg-white.d-flex.mb-2(style="border-radius:8px;")
              i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
              p.mb-0.ps-4 Ubicación geográfica. La adaptabilidad de la persona al entorno y a las condiciones climáticas.
            .p-3.bg-white.d-flex.mb-0(style="border-radius:8px;")
              i.fas.fa-check-circle(style="color:#F08C32;place-self:center;")
              p.mb-0.ps-4 Nivel de adaptabilidad. Capacidad de adaptación a distintos entornos y climas.
    
    p.mt-4(data-aos="fadde-right") Estos factores determinan con qué intensidad una enfermedad afectará a una persona. La intensidad de una misma enfermedad puede variar significativamente, causando desde un simple malestar por unos días hasta la muerte en casos más graves. 





</template>

<script>
export default {
  name: 'Tema4',
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
