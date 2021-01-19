
# at-rules (regras da @)

* está relacionado com o comportamento do CSS
* começa com o sinal de '@'  seguido do identificador e valor

## exemplos comuns

@import
@media
@font-face
@keyframes


- @import           /* serve para incluir um CSS externo
                    exemplo: 
                    @import: "http://local.com/style.css";
                    @import: url("http://local.com/style.css");

                    */

- @media            /* regras condicionais para dispositivos
                    exemplo: 
                    
                    @media (min-width: 500px) {
                        /* rules here */
                    }

                    */

- @font-face        /* fontes externas
                    exemplo:
                    @font-face {
                        /* rules here */
                    }

                    */


- @key-frames       /* animações
                    exemplo:
                    @keyframes nameofanimation {
                        /* rules here */
                    }

                    */



