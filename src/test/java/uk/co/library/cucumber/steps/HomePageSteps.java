package uk.co.library.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.library.cucumber.pages.HomePage;


public class HomePageSteps {
    @Given("^I am on HomePage$")
    public void iAmOnHomePage() {
    }

    @When("^I accept cookies$")
    public void iAcceptCookies() {
        new HomePage().acceptCookies();
    }

    @And("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String jobTitle){
        new HomePage().enterJobTitle(jobTitle);
    }

    @And("^I enter location \"([^\"]*)\"$")
    public void iEnterLocation(String location){
        new HomePage().enterLocation(location);
    }

    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance){
        new HomePage().selectDistance(distance);
    }

    @And("^I click on more search option link$")
    public void iClickOnMoreSearchOptionLink() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter minimum salary\"([^\"]*)\"$")
    public void iEnterMinimumSalary(String salaryMin){
        new HomePage().enterMinSalary(salaryMin);
    }

    @And("^I enter maximum salary \"([^\"]*)\"$")
    public void iEnterMaximumSalary(String salaryMax){
        new HomePage().enterMaxSalary(salaryMax);
    }

    @And("^I select salary type \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType){
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^I select job type \"([^\"]*)\"$")
    public void iSelectJobType(String jobType){
        new HomePage().selectJobType(jobType);
    }

    @And("^I click on find job button$")
    public void iClickOnFindJobButton() {
        new HomePage().clickOnFindJobsButton();
    }

}
