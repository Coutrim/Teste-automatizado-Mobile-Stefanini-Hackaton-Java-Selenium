package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.InicialPage;

public class TarefasSteps {

	InicialPage inicialPage = new InicialPage(driver);

	@Dado("que eu tenha uma nota criada")
	public void queEuTenhaUmaNotaCriada() throws Exception {
		inicialPage.criarNota();
	}

	@Quando("eu clicar e segurar sobre uma nota")
	public void euClicarESegurarSobreUmaNota() throws Exception {
		inicialPage.clickAndHold();
	}

	@Quando("clicar em color")
	public void clicarEmColor() {
		inicialPage.acionarBotaoColor();
	}

	@Quando("clicar na cor desejada")
	public void clicarNaCorDesejada() {
		inicialPage.selecionarCorRoxa();
	}

	@Quando("selecionar o filtro da cor desejada")
	public void selecionarOFiltroDaCorDesejada() {
		inicialPage.acionarFiltroDeCores();
	}

	@Entao("a nota aparece com a cor ja alterada")
	public void aNotaApareceComACorJaAlterada() {
		assertEquals("Testes", driver.findElement(By.xpath("//android.widget.TextView[@text='Testes']")).getText());
	}

	@Quando("clicar em delete")
	public void clicarEmDelete() {
		inicialPage.acionarBotaoDelete1();
	}

	@Quando("clicar em ok")
	public void clicarEmOk() {
		inicialPage.acionarBotaoOkDelet();
	}

	@Quando("ir ate a lixeira")
	public void irAteALixeira() {
		inicialPage.irALixeira();
	}

	@Quando("clicar em permanetly delete")
	public void clicarEmPermanetlyDelete() {
		inicialPage.acionarPermanentDelet();
	}

	@Entao("a nota e excluida")
	public void aNotaEExcluida() {
		assertTrue(driver.findElements(By.xpath("//android.widget.TextView[@text='Testes']")).isEmpty());
	}

	@Quando("clicar em Reminder")
	public void clicarEmReminder() {
		inicialPage.acionarBotaoReminder();
	}

	@Quando("clicar em Remind me in {int} minutes")
	public void clicarEmRemindMeInMinutes(Integer int1) {
		inicialPage.setarTempo15Min();
	}

	@Quando("clicar em Done")
	public void clicarEmDone() {
		inicialPage.acionarBotaoDone();
	}

	@Entao("o sistema exibe que o lembrete foi definido")
	public void oSistemaExibeQueOLembreteFoiDefinido() {
		assertTrue(driver.findElements(By.id("com.socialnmobile.dictapps.notepad.color.note:id/type_image")).isEmpty());
	}

	@Quando("clicar em More")
	public void clicarEmMore() {
		inicialPage.acionarBotaoMore();
	}

	@Quando("clicar em Check")
	public void clicarEmCheck() {
		inicialPage.acionarBotaoCheck();
	}

	@Entao("o sistema exibe que a nota ja foi marcada como concluida\\(checked)")
	public void oSistemaExibeQueANotaJaFoiMarcadaComoConcluidaChecked() throws Exception {
		Thread.sleep(1000);
		assertEquals("Uncheck", driver.findElement(By.xpath("//android.widget.TextView[@text='Uncheck']")).getText());
	}

}
