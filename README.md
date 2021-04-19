
# Isaac's Students API [EN-US]

> **API developed for Isaac's Coding Challenge** 
> 
> *"One of Isaac's challenges is to integrate with the ERPs of different schools, and abstract his different models in an easy way to be consumed."*
> 


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Contact](#contact)

## General info

Isaac gave me a challenge, where I should build an API that integrates with two schools and unifies its two different models in a single model that aggregates its data.

One school provided me with their data through a REST API, the other through a GraphQL API and in both it was possible to access a list of students, containing four students, or a single student based on their uuid/enrollment.

As a result this API was developed, unifying the two models and allowing the consultation of the list of students from the two schools - containing four students from each school - and the consultation of a single student from a given school by the school id and the uuid/enrollment of the student.

## Technologies
REST API developed with NodeJs and Express.

## Setup
You must install all dependencies using cmd:

`npm install`

To run locally use cmd:

`npm start`

After performing the previous steps, the API will be running locally. I suggest you start exploring the documentation through the endpoint:

`/api/docs`

Ex.: `localhost:3000/api/docs`

## Features

With this API it is possible to:

* List students `/ api / students` (Returns a list of 4 students from each school)

* Search for a student from a specific school according to the uuid/enrollment `/ api / school /: schoolId / student /: studentId`

* Consult the API documentation `/ api / docs`

School IDs are:

 - REST School: `sch01`
 - GraphQL School: `sch02`

## Contact
Created by [@ingridpitta](https://www.linkedin.com/in/ingridpitta/) - feel free to contact me!


# API de Estudantes do Isacc [PT-BR]

> **API desenvolvida para o Coding Challenge do Isaac** 
> 
> *"Um dos desafios do Isaac é se integrar aos ERPs de diferentes escolas, e abstrair seus diferentes modelos de uma forma fácil de ser consumida."*
> 


## Índice
* [Informações gerais](#informações-gerais)
* [Tecnologias](#tecnologias)
* [Instalação e Uso](#instalação-e-uso)
* [Funcionalidades](#funcionalidades)
* [Contato](#contato)

## Informações gerais
O Isaac me deu um desafio, onde eu deveria construir uma API que se integrasse com duas escolas e unificasse seus dois modelos - diferentes - em um único modelo que agregasse seus dados. 

Uma escola me fornecia seus dados através de uma API REST, a outra por uma API GraphQL e nas duas era possível acessar uma lista de alunos, contendo quatro alunos, ou um único aluno baseado no seu uuid/matrícula.

Como resultado essa API foi desenvolvida, unificando os dois modelos e permitindo a consulta da lista de estudantes das duas escolas - contendo quatro alunos de cada escola - e a consulta de um único aluno de uma determinada escola pelo id da escola e uuid/matrícula do aluno.

## Tecnologias
API REST desenvolvida com NodeJs e Express.

## Instalação e Uso
Você deve instalar todas as dependências através do cmd:

`npm install`

Para rodar localmente utilize o cmd:

`npm start`

Após realizar os passos anteriores, a API estará rodando localmente. Sugiro que inicie explorando a documentação através do endpoint: 

`/api/docs`

Ex.: `localhost:3000/api/docs`

## Funcionalidades
Com essa API é possível:

* Listar estudantes `/api/students` (Retorna uma lista com 4 estudantes de cada escola) 

* Buscar um estudante de uma escola específica de acordo com o uuid/matrícula do estudante `/api/school/:schoolId/student/:studentId` 

* Consultar a documentação da API `/api/docs`


Os IDs das escolas são:

 - Escola REST: `sch01`
 - Escola GraphQL: `sch02`

## Contato
Criado por [@ingridpitta](https://www.linkedin.com/in/ingridpitta/) - sinta-se à vontade para entrar em contato!