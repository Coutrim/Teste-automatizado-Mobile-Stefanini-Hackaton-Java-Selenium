$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CriarNota.feature");
formatter.feature({
  "name": "Criar nota e uma Checklist",
  "description": "Eu como um usu�rio do app \nQuero criar uma nota de texto e uma Checklist com 3 itens ou mais\nPara organizar minhas tarefas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Alterando cor de uma nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@AlterandoCor"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu tenha uma nota criada",
  "keyword": "Dado "
});
formatter.match({
  "location": "TarefasSteps.queEuTenhaUmaNotaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar e segurar sobre uma nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "TarefasSteps.euClicarESegurarSobreUmaNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em color",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarEmColor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar na cor desejada",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarNaCorDesejada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o filtro da cor desejada",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.selecionarOFiltroDaCorDesejada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a nota aparece com a cor ja alterada",
  "keyword": "Entao "
});
formatter.match({
  "location": "TarefasSteps.aNotaApareceComACorJaAlterada()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "excluindo uma nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@ExcluindoNota"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu tenha uma nota criada",
  "keyword": "Dado "
});
formatter.match({
  "location": "TarefasSteps.queEuTenhaUmaNotaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar e segurar sobre uma nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "TarefasSteps.euClicarESegurarSobreUmaNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em delete",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarEmDelete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em ok",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarEmOk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ir ate a lixeira",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.irAteALixeira()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar e segurar sobre uma nota",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.euClicarESegurarSobreUmaNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em permanetly delete",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarEmPermanetlyDelete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em ok",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarEmOk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a nota e excluida",
  "keyword": "Entao "
});
formatter.match({
  "location": "TarefasSteps.aNotaEExcluida()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Definindo lembrete em uma nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@DefinindoLembrete"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu tenha uma nota criada",
  "keyword": "Dado "
});
formatter.match({
  "location": "TarefasSteps.queEuTenhaUmaNotaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar e segurar sobre uma nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "TarefasSteps.euClicarESegurarSobreUmaNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Reminder",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarEmReminder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Remind me in 15 minutes",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarEmRemindMeInMinutes(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Done",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarEmDone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe que o lembrete foi definido",
  "keyword": "Entao "
});
formatter.match({
  "location": "TarefasSteps.oSistemaExibeQueOLembreteFoiDefinido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Marcando nota como concluida(checked)",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@MarcandoComoChecked"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu tenha uma nota criada",
  "keyword": "Dado "
});
formatter.match({
  "location": "TarefasSteps.queEuTenhaUmaNotaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar e segurar sobre uma nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "TarefasSteps.euClicarESegurarSobreUmaNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em More",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarEmMore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Check",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarEmCheck()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar e segurar sobre uma nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "TarefasSteps.euClicarESegurarSobreUmaNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em More",
  "keyword": "E "
});
formatter.match({
  "location": "TarefasSteps.clicarEmMore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe que a nota ja foi marcada como concluida(checked)",
  "keyword": "Entao "
});
formatter.match({
  "location": "TarefasSteps.oSistemaExibeQueANotaJaFoiMarcadaComoConcluidaChecked()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
});