# Minha API

Este pequeno projeto foi desenvolvido na pós-graduação em Desenvolvimento Full Stack. Trata-se de um MVP criado para ilustrar os conceitos aprendidos durante o curso.

O objetivo aqui é criar uma API funcional que gerencie informações de funcionários, incluindo seus nomes, vendas realizadas, porcentagens de comissão, e calcular automaticamente o valor das comissões. Este projeto visa demonstrar habilidades práticas em desenvolvimento Full Stack com Python, Flask e integração com um frontend simples.

---
## Como executar 


Será necessário ter todas as libs python listadas no `requirements.txt` instaladas.
Após clonar o repositório, é necessário ir ao diretório raiz, pelo terminal, para poder executar os comandos descritos abaixo.

> É fortemente indicado o uso de ambientes virtuais do tipo [virtualenv](https://virtualenv.pypa.io/en/latest/installation.html). 
> Lembre-se de acessar o diretório meu_app_API antes de executar os comandos a seguir.

```
(env)$ pip install -r requirements.txt
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `requirements.txt`.

Para executar a API  basta executar:

```
(env)$ flask run --host 0.0.0.0 --port 5000
```

Em modo de desenvolvimento é recomendado executar utilizando o parâmetro reload, que reiniciará o servidor
automaticamente após uma mudança no código fonte. 

```
(env)$ flask run --host 0.0.0.0 --port 5000 --reload
```

Abra o [http://localhost:5000/#/](http://localhost:5000/#/) no navegador para verificar o status da API em execução.
