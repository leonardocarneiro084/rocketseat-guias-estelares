

# a cascata (cascading)

- a acascata surgiu para resolver situações em que existem muitas regras para o mesmo elemento 
- qual delas o navegador deve aplicar?

* o arquivo CSS é lido de cima p/ baixo
- aplica-se primeiro a regra que aparece primeiro no código (ex: linha 1, depois linha 2, etc.)

- é levado em consideração 3 fatores
1. origem do estilo 
2. especificidade
3. importância


## cascata

inline > tag style > tag link

inline (estilo definido dentro de cada tag no arquivo HTML)
tag style (é adicionado a tag <style> no HTML onde todo o estilo será realizado)
tag link (no cabeçalho <head> é colocado uma tag <link> que aponta para um arquivo CSS externo)


### a especificidade

- é um cálculo matemático
- cada seletor e origem do estilo possuem valores a serem considerados

0. seletor universal, combinators, negation pseudo-class (:not())
1. element type selector, pseudo-elements (::before, ::after)
10. classes, attribute selectors ([type="radio"])
100. ID selector
1000. inline

#### a regra !important

* cuidado, evite o uso!
* não é considerado uma boa prática!
* quebra o fluxo natural da cascata


