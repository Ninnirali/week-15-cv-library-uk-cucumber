package uk.co.library.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import uk.co.library.cucumber.pages.ResultPage;

public class ResultPageSteps {
    @Then("^I verify the result \"([^\"]*)\"$")
    public void iVerifyTheResult(String result) {
        String expectedResult= result;
        String actualResult = new ResultPage().getText();
        Assert.assertEquals("Results page is not displayed", expectedResult,actualResult);
    }
}
