package pageObjects;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import static utils.Utils.*;

public class InicialPage {
	Actions action = new Actions(driver);

	public InicialPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	@AndroidFindBy(xpath = "//android.widget.Button[@text='ALLOW']")
	private MobileElement botaoAllow;

	@AndroidFindBy(xpath = "//android.widget.Button[@text='SKIP']")
	private MobileElement botaoSkip;

	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/bottom_fab")
	private MobileElement botaoAddNota;

	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/text")
	private MobileElement botaoText;

	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_note")
	private MobileElement EscreverTexto;

	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/back_btn")
	private MobileElement botaoConfirmar;

	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/title")
	private MobileElement clicarNaNota;

	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/bottom_menu_color")
	private MobileElement botaoColor;

	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/btn6")
	private MobileElement botaoCorRoxa;

	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/main_btn1")
	private MobileElement selectColor;

	@AndroidFindBy(xpath = "//android.widget.LinearLayout[@index='6']")
	private MobileElement SeletorCorRoxa;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Delete']")
	private MobileElement botaoDelete1;

	@AndroidFindBy(xpath = "//android.widget.Button[@text='OK']")
	private MobileElement botaoOkDelet;

	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/page_more")
	private MobileElement botaoConfig;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Trash Can']")
	private MobileElement lixeira;

	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/bottom_menu_permenently_delete")
	private MobileElement permanentDelet;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Reminder']")
	private MobileElement botaoReminder;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/quick_setting_15min")
	private MobileElement setar15Min;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/button1")
	private MobileElement botaoDone;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='More']")
	private MobileElement botaoMore;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Check']")
	private MobileElement botaoCheck;

	public void criarNota() throws Exception {
		Thread.sleep(1000);
		botaoAllow.click();
		botaoSkip.click();
		botaoAddNota.click();
		botaoText.click();
		EscreverTexto.sendKeys("Testes");
		botaoConfirmar.click();
		botaoConfirmar.click();
	}

	public void clickAndHold() {
		action.clickAndHold(clicarNaNota).perform();
	}

	public void acionarBotaoColor() {
		botaoColor.click();
	}

	public void selecionarCorRoxa() {
		botaoCorRoxa.click();
	}

	public void acionarFiltroDeCores() {
		selectColor.click();
		SeletorCorRoxa.click();
	}

	public void acionarBotaoDelete1() {
		botaoDelete1.click();
	}

	public void acionarBotaoOkDelet() {
		botaoOkDelet.click();
	}

	public void irALixeira() {
		botaoConfig.click();
		lixeira.click();
	}

	public void acionarPermanentDelet() {
		permanentDelet.click();
	}
	
	public void acionarBotaoReminder() {
		botaoReminder.click();
	}

	public void setarTempo15Min() {
		setar15Min.click();
	}
	
	public void acionarBotaoDone() {
		botaoDone.click();
	}
	
	public void acionarBotaoMore() {
		botaoMore.click();
	}
	
	public void acionarBotaoCheck() {
		botaoCheck.click();
	}
}
