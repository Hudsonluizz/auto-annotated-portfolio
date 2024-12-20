---
type: PageLayout
title: NIDEA - ISEIB
colors: colors-b
backgroundImage:
  type: BackgroundImage
  url: /images/Background-azulespecial-isieb.png
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: >-
      NIDEA - Núcleo de Pesquisa Identidades, Deficiência, Educação &
      Acessibilidades.
    subtitle: ''
    styles:
      self:
        height: screen
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-3
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
        fontWeight: 400
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
    actions: []
    text: >+
      As Faculdades ISEIB têm investido continuamente no desenvolvimento de
      pesquisas e na melhoria de suas práticas, consolidando seu compromisso com
      a inovação e a inclusão. Dentro desse contexto, destaca-se o **Núcleo de
      Pesquisa Identidades, Deficiências, Educação & Acessibilidade (NIDEA),**
      dedicado a investigar e promover a acessibilidade educacional em suas
      múltiplas dimensões.


      O NIDEA concentra seus estudos em temas como identidade e diversidade,
      voltados para a criação de ambientes acadêmicos inclusivos, que valorizem
      a singularidade de cada indivíduo e promovam o aprendizado acessível para
      todos. Este núcleo de pesquisa é composto por profissionais e acadêmicos
      de diversas áreas, que colaboram para desenvolver estratégias pedagógicas
      e recursos acessíveis, de forma a garantir que todos os estudantes possam
      alcançar seu pleno potencial dentro do ambiente acadêmico.


      Assim, as Faculdades ISEIB reafirmam seu papel ativo na construção de uma
      educação transformadora e acessível, ampliando oportunidades e promovendo
      o respeito às diferenças.


      > ![](/images/CARTAZES%20-%20EDUCA%C3%87%C3%83O%20ESPECIAL.png)

  - type: HeroSection
    title: Compartilhando
    subtitle: ''
    actions:
      - type: Button
        label: Veja mais
        altText: ''
        url: 'https://www.youtube.com/@Canal_Oficial_Faculdades_ISEIB'
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
        borderStyle: solid
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    media:
      type: VideoBlock
      title: Lei
      url: 'https://www.youtube.com/watch?v=Uqw3-_V-ySc'
      elementId: ''
      autoplay: false
      loop: false
      muted: false
      controls: true
      aspectRatio: '16:9'
    text: >
      Para ampliar o acesso ao conhecimento por meio de eventos digitais, como
      webinars, aulas e atualizações desenvolvidas pelo corpo docente. Essas
      iniciativas reforçam nosso compromisso com a inovação, complementando os
      esforços do Núcleo de Pesquisa Identidades, Deficiências, Educação &
      Acessibilidade (NIDEA). Este núcleo promove estudos focados em identidade
      e diversidade, desenvolvendo ambientes acadêmicos inclusivos e estratégias
      pedagógicas que asseguram o aprendizado acessível para todos. Assim, as
      Faculdades ISEIB seguem construindo uma educação transformadora e
      acessível, promovendo respeito às diferenças e ampliando oportunidades
      para que todos possam alcançar seu potencial pleno no ambiente acadêmico.
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions: []
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/simbolos.md
      - content/pages/projects/brinquedotecas.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
    subtitle: Ações
  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: "Quer saber mais ou participar ? ...\U0001F4AC"
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: Nome
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Sobre nome
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: E-mail
          isRequired: true
          width: 1/2
          type: EmailFormControl
        - name: address
          label: Address
          hideLabel: true
          placeholder: Telefone - WhatsApp
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: updatesConsent
          label: Aceito receber as atualizações por e-mail ou WhatsApp
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: "Enviar \U0001F680"
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
    text: |
      Nos envie a sua mensagem...
---
