package uk.co.library.cucumber.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import uk.co.library.cucumber.utility.Utility;

public class ResultPage extends Utility {

    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    public ResultPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(tagName = "h1")
    WebElement resultText;

    public String getText(){
        waitUntilVisibilityOfElementLocated(By.tagName("h1"),20);
        log.info("Get text of find job result"  + resultText.getText());
        return getTextFromElement(resultText);
    }

    }
