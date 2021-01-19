
# origem do CSS


- no início, toda a estilização do site era realizada no próprio código HTML
- definir cor das fontes, cores de fundo, desenhar bordas, etc.
- ainda é possível fazer sites desse modo, mas não é considerado uma boa prática
- atualmente, toda a estilização do site é realizada em um arquivo separado, que é o CSS

- exemplo de código HTML com CSS:





<!--


<html>
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" scale="1.0">
    <title>Título da página</title>

    <style>

    h1 {
    color: red;
    background: black;
    }

    strong {
        color: red;
    }

    </style>

</head>

<body>
    <h1 style="color: blue">
    Título
    <strong style="color: red">
    da Página
    </h1>
    </strong>
</body>
</html>

-->

- atualmente, no cabeçalho do HTML, coloca-se um link para o arquivo CSS
- é utilizado o código: <link rel="stylesheet" href="style.css">



<!--

<html>
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" scale="1.0">
    <title>Título da página</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>
</body>

</html>

-->


