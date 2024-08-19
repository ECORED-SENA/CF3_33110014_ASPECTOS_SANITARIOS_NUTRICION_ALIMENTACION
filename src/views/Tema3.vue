<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Enfermedades de transmisión alimentaria (ETAS) 
    
    .cont_3_1
      p.p-relative(data-aos="fade-right") Las enfermedades de transmisión alimentaria, también conocidas como ETAS, son enfermedades que se originan en las personas debido a la ingesta de alimentos contaminados por microorganismos. Las ETAS también pueden ser transmitidas a través de líquidos, especialmente el agua. 

      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-4(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.p-lg-5
          p.mb-0 Estas enfermedades se manifiestan a través de diversos síntomas, que tienden a presentarse poco tiempo después de haber ingerido el alimento contaminado. Los tiempos de manifestación varían entre una hora y varios días. Entre los síntomas más comunes asociados a las enfermedades alimentarias se encuentran #[strong el vómito, la diarrea, el dolor estomacal, la indigestión e incluso la fiebre]. 
      
      .p-relative
        .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
          .row
            .col-auto.pe-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/6.svg")
            .col.ps-2(style="place-self:center;")
              h3.mb-0.pe-5 Clasificación de las ETAS 
        
        p(data-aos="fade-right") Hay diversos tipos de enfermedades de transmisión alimentaria, cada uno diferenciado por una serie de características y factores que van desde el tipo de microorganismo que las origina, las toxinas involucradas, hasta los procesos aplicados en su preparación y manipulación. Pueden clasificarse como enfermedades infecciosas, tóxicas y tóxico-infecciosas. Esta clasificación se puede establecer si la enfermedad es de tipo microbiano, viral o parasitario. 
        p.fw-bold(data-aos="fade-left") A continuación, se describen las clasificaciones mencionadas. 

        .titulo_tercero(data-aos="fade-right")
          h5.mb-0 De tipo infeccioso 
        
        p(data-aos="fade-left") Son enfermedades en las que actúa un microorganismo, ya sea una bacteria, un hongo o un protozoo que se reproduce en el interior del organismo huésped. La propagación de la infección es proporcional a la velocidad a la cual se reproducen los microorganismos. 
        p.fw-bold(data-aos="fade-right") A continuación, se presenta una lista de las enfermedades infecciosas más comunes y los síntomas que ocasionan: 

      .cont_3_2.mt-4.pt-4.pt-lg-5
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure.m-auto.col-7.col-md-6.col-lg-12
              img(src="@/assets/curso/tema3/3.svg")
          .col-lg-8(data-aos="fade-left" style="place-self:center;")
            SlyderF(columnas="col-lg-6 p-4")
              .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
                figure
                  img(src="@/assets/curso/tema3/4.png")
                p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Brucelosis 
                p Fiebre ondulante, adenopatía, endocarditis y neumonía. 
              .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
                figure
                  img(src="@/assets/curso/tema3/5.png")
                p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Carbunco 
                p Fiebre, pápula cutánea, septicemia. 
              .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
                figure
                  img(src="@/assets/curso/tema3/6.png")
                p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Cólera 
                p Fiebre, diarrea, vómitos y deshidratación. 
              .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
                figure
                  img(src="@/assets/curso/tema3/7.png")
                p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Difteria  
                p Fiebre y amigdalitis (membrana en la garganta: lesiones en la piel). 
              .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
                figure
                  img(src="@/assets/curso/tema3/8.png")
                p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Erisipela  
                p Fiebre, eritema, prurito y dolor. 
              .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
                figure
                  img(src="@/assets/curso/tema3/9.png")
                p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Fiebre Q 
                p Fiebre alta, cefalea intensa, mialgia, confusión, vómitos y diarrea.
              .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
                figure
                  img(src="@/assets/curso/tema3/10.png")
                p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Fiebre tifoidea  
                p Fiebre alta, bacteriemia, cefalalgia, estupor, tumefacción de la mucosa nasal, lengua tostada, úlceras en el paladar, diarrea y perforación intestinal. 
              .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
                figure
                  img(src="@/assets/curso/tema3/11.png")
                p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Legionelosis  
                p Fiebre y neumonía. 
              .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
                figure
                  img(src="@/assets/curso/tema3/12.png")
                p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Neumonía  
                p Fiebre alta, expectoración amarillenta y/o sanguinolenta y dolor torácico. 
              .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
                figure
                  img(src="@/assets/curso/tema3/13.png")
                p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Tuberculosis 
                p Fiebre, cansancio, sudor nocturno y necrosis pulmonar. 
              .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
                figure
                  img(src="@/assets/curso/tema3/14.png")
                p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Tétanos 
                p Fiebre y parálisis. 

      .p-relative
        .titulo_tercero(data-aos="fade-right")
          h5.mb-0 De tipo tóxico  
        
        p(data-aos="fade-left") Son enfermedades relacionadas con la presencia de agentes contaminantes tales como componentes químicos sintéticos y naturales, cuyo contacto con el interior del cuerpo humano produce reacciones perjudiciales y daña los diferentes sistemas biológicos. Estos agentes contaminantes pueden provenir de diversos productos industriales utilizados en algún momento del proceso agrícola o de manufactura del alimento.  
      
        .row.mt-4
          .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
            .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#ECF5F5;border-radius:8px;")
              p.mb-0 Un ejemplo es la utilización de insecticidas y plaguicidas en los cultivos agrícolas, que en algunas ocasiones permanecen en el producto como residuos. La utilización de fertilizantes químicos también puede dejar residuos en los alimentos que posteriormente son ingeridos por las personas, causándoles enfermedades.
          .col-lg-5(data-aos="fade-left")
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema3/15.png")
    
    p.mt-4(data-aos="fade-right") Sin embargo, el mayor factor que influye en la contaminación de un producto no son los químicos que tengan contacto con él, sino las inadecuadas prácticas de manufactura y la falta de limpieza e higiene en su manipulación. 

    .titulo_tercero(data-aos="fade-right")
      h5.mb-0 De tipo tóxico-infeccioso  
    
    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Algunas enfermedades transmitidas por los alimentos pueden generar una combinación de infecciones e intoxicaciones.Usualmente están relacionadas con enfermedades transmitidas por alimentos cuando las bacterias patógenas o virus entran en el organismo de una persona y tienen la capacidad de secretar toxinas, que terminan siendo las responsables de que se contraigan enfermedades o intoxicaciones. 
        p.fw-bold Hay tres tipos de toxinas que actúan en las enfermedades de tipo tóxico-infeccioso: 
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-9.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/16.png")
    
    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/17.png")
      .col-lg(data-aos="fade-left")
        AcordionA.acordion_b1(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Exotoxinas de superficie celular activa")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color:#F08C32;")
                span Se adhieren a la superficie de las células del organismo.  
              li.d-flex
                i.fas.fa-check-circle(style="color:#F08C32;")
                span Interfieren con los receptores de señales propios de las células.  
              li.d-flex
                i.fas.fa-check-circle(style="color:#F08C32;")
                span Ocasionan complicaciones en el funcionamiento normal de las rutas de señalización intercelulares.  
              li.d-flex
                i.fas.fa-check-circle(style="color:#F08C32;")
                span Pueden llegar a producir choques tóxicos en la persona. 
          .row(titulo="Exotoxinas de tipo citotóxico")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color:#F08C32;")
                span Actúan directamente sobre las células del organismo, destruyéndolas o alterando su funcionamiento.  
              li.d-flex
                i.fas.fa-check-circle(style="color:#F08C32;")
                span Pueden causar la lisis (ruptura) de las células, lo que conduce a la liberación de su contenido y a una respuesta inflamatoria.  
              li.d-flex
                i.fas.fa-check-circle(style="color:#F08C32;")
                span Afectan principalmente a células específicas como las del hígado, riñón o sistema nervioso. 
          .row(titulo="Exotoxinas de tipo neurotóxico")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color:#F08C32;")
                span Afectan el sistema nervioso, interfiriendo con la transmisión de señales nerviosas.
    
    p.mt-4.fw-bold(data-aos="fade-right") La interferencia de las toxinas en la señalización celular afecta:

    .p-3.mt-4(style="max-width:fit-content;background-color:#F9D0AC;" data-aos="fade-up")
      ul.lista-ul.mb-0
        li.d-flex.mb-0
          i.fas.fa-check-circle(style="color:#F08C32;")
          span La capacidad de respuesta de los órganos y las partes del cuerpo contaminadas.
    .p-3.mt-2(style="max-width:fit-content;background-color:#F9D0AC;" data-aos="fade-up")
      ul.lista-ul.mb-0
        li.d-flex.mb-0
          i.fas.fa-check-circle(style="color:#F08C32;")
          span Desemboca en problemas globales del cuerpo humano, ya que este funciona como un sistema interconectado.
    
    .titulo_tercero(data-aos="fade-right")
      h5.mb-0 De tipo microbiano
    
    p(data-aos="fade-left") Esta categoría guarda similitud con las enfermedades de tipo infeccioso, ya que se caracteriza por la presencia de microorganismos o microbios en la persona en donde se presenta la enfermedad.  

    .col-xl-10.m-auto.mt-4
      .p-4(style="background-color:#DBECEB;border-radius:8px;" data-aos="fade-up")
        .row
          .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
            figure.m-auto.col-4.col-md-12
              img(src="@/assets/curso/tema3/18.png")
          .col-md(style="place-self:center;")
            p.mb-0 La diferencia entre este tipo de enfermedad y las de carácter infeccioso es que en esta categoría únicamente se consideran los agentes patógenos unicelulares y se descartan otros tipos de agentes patógenos. 
    
    .titulo_tercero(data-aos="fade-right")
      h5.mb-0 De tipo viral 
    
    p(data-aos="fade-left") Las enfermedades virales están relacionadas con la presencia de virus. Siguen un proceso similar de transmisión al de otros tipos de microorganismos. Su presencia en los alimentos les garantiza la posibilidad de subsistencia y al ser ingeridos por las personas, proceden a habitar en el organismo del nuevo huésped. A continuación, se explica cómo actúan los virus, responsables de muchas enfermedades. 

    .cont_3_3.mt-4.pt-4.pb-4.pt-xl-5.pb-xl-5
      .tarjeta.p-4.bg-white
        PasosB.color-acento-contenido
          .row.col-xl-11.m-auto(titulo="Identificación y fijación")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Identificación y fijación 
              p Los virus constituyen un significativo porcentaje de agentes patógenos que producen enfermedades. Su proceso de fijación en el interior de una persona se hace atacando directamente a las células. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema3/20.png')
          .row.col-xl-11.m-auto(titulo="Entrada en la célula")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Entrada en la célula 
              p Los virus hacen una ruptura en la membrana celular de las células atacadas y se introducen en su interior. Una vez allí, utilizan los ácidos nucleicos de estas para reproducirse, creando nuevas proteínas víricas. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema3/21.png')
          .row.col-xl-11.m-auto(titulo="Reproducción viral")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Reproducción viral 
              p El proceso de reproducción de los virus en el interior de la célula ocasiona que esta se sature, hasta el punto en que no es posible albergar más cantidad de virus y la célula se fragmenta, lo que le ocasiona la muerte. Los nuevos virus proceden entonces a infectar nuevas células y así continúan reproduciéndose e infectando el organismo que los alberga. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema3/22.png')
          .row.col-xl-11.m-auto(titulo="Variaciones en el mecanismo de acción")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Variaciones en el mecanismo de acción 
              p Sin embargo, no todos los virus actúan de la misma manera. Existen diversas variaciones en sus formas de operar; algunos efectúan su proceso reproductivo mediante la utilización del ARN, mientras que otros utilizan el ADN de las células. Esto depende de la constitución química de cada virus y los ácidos nucleicos que componen su estructura proteínica. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema3/23.png')
          .row.col-xl-11.m-auto(titulo="Infección sin destrucción celular")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Infección sin destrucción celular 
              p Incluso hay virus que no matan a las células, sino que las infectan y comienzan un proceso reproductivo, pero abandonan la célula antes de que esta se sature, manteniéndolas vivas y permitiendo la producción continua de nuevos virus. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema3/24.png')
    
    .col-xl-10.m-auto.mt-4
      .p-4(style="background-color:#ECE4D8;border-radius:8px;" data-aos="fade-up")
        .row
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema3/25.svg")
          .col-md(style="place-self:center;")
            p.mb-0 Estas variaciones en las formas de operar de cada virus, las condiciones químicas y biológicas de cada organismo que atacan, y sus propias variaciones estructurales y morfológicas, dan lugar a una gran diversidad de enfermedades víricas.  
    
    p.mt-4.fw-bold(data-aos="fade-right") A continuación, se nombran algunas enfermedades comunes y los síntomas que ocasionan en las personas (aunque no todas proceden de las ETAS). 

    .cont_3_2.mt-4.pt-4.pb-4.pt-xl-5.pb-xl-5
      SlyderF(columnas="col-xl-4 col-lg-6 p-4")
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/26.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Dengue 
          p Fiebre, dolor intenso en las articulaciones y músculos, inflamación de los ganglios linfáticos y erupción ocasional de la piel. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/27.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Fiebre amarilla 
          p Fiebre alta, ictericia, sangrado de nariz y boca, vómito negro, bradicardia a pesar de la fiebre y deshidratación. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/28.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Fiebre hemorrágica de Ébola  
          p Fiebre alta, postración, mialgia, artralgias, dolor abdominal, cefalea y erupciones hemorrágicas en todo el cuerpo. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/29.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Gripe 
          p Fiebre, astenia, anorexia, cefalea, malestar general, tos seca, dolor de garganta, gastroenteritis, vómito y diarrea. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/30.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Hepatitis A 
          p Inflamación del hígado, fiebre, cansancio, náuseas y diarrea. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/31.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Herpes 
          p Ampollas cutáneas en la boca (herpes labial), en los genitales (herpes genital) o en la piel (herpes zóster). 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/32.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Mononucleosis  
          p Fiebre, faringitis, inflamación de los ganglios linfáticos y fatiga. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/33.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Parotiditis (paperas)  
          p Fiebre, cefalea, dolor e inflamación de las glándulas salivales. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/34.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Peste porcina  
          p Fiebre, anorexia, leucopenia, temblores, parálisis, muerte. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/35.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Poliomielitis  
          p Inflamación en las neuronas motoras de la columna vertebral y del cerebro, que ocasiona parálisis y atrofia muscular. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/36.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Rabia 
          p Fiebre, vómitos, confusión, agresividad, alucinaciones, convulsiones, parálisis, diplopía, hidrofobia, coma y muerte. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/37.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Resfriado común  
          p Estornudos, secreción, congestión, picor nasal, dolor de garganta, tos, cefalea y malestar general. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/38.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Rubéola  
          p Fiebre, cefalea, erupciones en la piel, malestar general, enrojecimiento de los ojos, faringitis e inflamación dolorosa de ganglios alrededor de la nuca. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/39.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Sarampión  
          p Fiebre, erupciones en la piel, tos, rinitis, diarrea, neumonía y encefalitis. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/40.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Varicela 
          p Fiebre, cefalea, malestar general, anorexia y erupción cutánea en forma de ampollas. 
        .tarjeta.text-center.p-4.pt-lg-5.cont_tarjeta_slyderf
          figure
            img(src="@/assets/curso/tema3/41.png")
          p.mt-3.fw-bold.m-auto.ps-4.pe-4.mb-2(style="max-width:fit-content;background-color:#31A854;") Viruela 
          p Fiebre alta, malestar, cefalea y fuerte erupción cutánea en forma de pústulas que dejan graves cicatrices en la piel.
    
    .titulo_tercero(data-aos="fade-right")
      h5.mb-0 De tipo parasitarias  
    
    p(data-aos="fade-left") Estas enfermedades corresponden a aquellas ocasionadas por la presencia de un organismo parásito en el interior de una persona.  En el siguiente video, se explora el ciclo vital de los parásitos y su impacto en los organismos hospedadores. 

    figure.mt-4(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)






</template>

<script>
export default {
  name: 'Tema3',
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
