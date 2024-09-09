<h1> Web Components </h1>
 <h2>O que são Web Components?</h2>

Web Components são tecnologias que permitem criar elementos (tags) personalizadas e reutilizáveis no HTML, CSS e JavaScript. 

Embora alguns frameworks já os tenham por padrão, ainda assim, é importante que o desenvolvedor saiba como funcionam os Web Components e como usar fora dos frameworks.

Eles facilitam a criação de componentes encapsulados que podem ser usados de maneira modular e consistente em diferentes partes de uma aplicação ou em diferentes projetos.

 A especificação de Web Components é composta por algumas tecnologias como:
 <ol>

<li><b>Custom Elements</b>: Permite definir novos tipos de elementos HTML com comportamento personalizado.</li>

<li><b>Shadow DOM</b>: Fornece encapsulamento de estilo e estrutura para evitar conflitos com o CSS e o HTML externos.</li>

<li><b>HTML Templates</b>: Permite definir trechos de HTML que podem ser reutilizados, mas que não são renderizados até que sejam explicitamente instanciados.</li>
</ol>
Mas ai, mesmo entendendo o conceito de Web Components e para que servem, ainda assim vem a seguinte pergunta:

<h2>Quando Utilizar Web Components?</h2>

<ol>
<li><strong>Modularidade e Reutilização</strong></li>
 <p>Quando você deseja criar componentes que possam ser reutilizados em diferentes partes de uma aplicação ou mesmo em diferentes projetos. Isso é especialmente útil em grandes aplicativos onde você precisa manter o código organizado e modular.</p>

<li><b>Encapsulamento</b></li>
 <p>Quando é necessário evitar conflitos de estilo e lógica entre diferentes partes da sua aplicação. O Shadow DOM permite encapsular o CSS e a estrutura HTML do componente, prevenindo que estilos externos ou scripts interfiram ou sejam afetados.</p>

<li><b>Manutenção</b></li>
  <p>Quando você quer criar uma biblioteca de componentes que podem ser facilmente atualizados e mantidos sem afetar o restante da aplicação.</p>
</ol>
De forma bem resumida, usamos o <strong> Web Components </strong> quando temos que repetir várias coisas dentro do nosso código. Um exemplo simples seria a criação de Cards para um site, Team de trabalho, onde você teria que repetir um monte de div´s para ter o seu resultado e adicionar uma estilização com Css, muito trabalho não é?

Com Web Components, conseguimos fazer tudo isso em único arquivo JavaScript que será responsável pela estilização do seu próprio component. 
