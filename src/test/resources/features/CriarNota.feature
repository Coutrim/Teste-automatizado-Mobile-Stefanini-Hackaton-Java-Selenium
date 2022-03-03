#language: pt
#encoding: UTF-8

Funcionalidade: Criar nota e uma Checklist

Eu como um usuário do app 
Quero criar uma nota de texto e uma Checklist com 3 itens ou mais
Para organizar minhas tarefas

@AlterandoCor
Cenario: Alterando cor de uma nota
Dado que eu tenha uma nota criada
Quando eu clicar e segurar sobre uma nota
E clicar em color
E clicar na cor desejada
E selecionar o filtro da cor desejada
Entao a nota aparece com a cor ja alterada

@ExcluindoNota
Cenario: excluindo uma nota 
Dado que eu tenha uma nota criada
Quando eu clicar e segurar sobre uma nota
E clicar em delete
E clicar em ok
E ir ate a lixeira 
E eu clicar e segurar sobre uma nota
E clicar em permanetly delete
E clicar em ok
Entao a nota e excluida

@DefinindoLembrete
Cenario: Definindo lembrete em uma nota
Dado que eu tenha uma nota criada
Quando eu clicar e segurar sobre uma nota
E clicar em Reminder
E clicar em Remind me in 15 minutes
E clicar em Done
Entao o sistema exibe que o lembrete foi definido

@MarcandoComoChecked
Cenario: Marcando nota como concluida(checked)
Dado que eu tenha uma nota criada
Quando eu clicar e segurar sobre uma nota
E clicar em More
E clicar em Check
Quando eu clicar e segurar sobre uma nota
E clicar em More
Entao o sistema exibe que a nota ja foi marcada como concluida(checked)











