package uk.co.library.cucumber.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import uk.co.library.cucumber.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobTitle;

    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")
    WebElement location;

    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDown;

    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMin;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMax;

    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement findJobsBtn;

    @CacheLookup
    @FindBy(xpath = "//iframe[@id='gdpr-consent-notice']")
    WebElement acceptIFrame;

    @CacheLookup
    @FindBy(xpath = "//button[@id='save']")
    WebElement acceptCookiesButton;


    public void acceptCookies() {
        Reporter.log("Accept all cookies " + acceptCookiesButton.toString() + "<br>");
        driver.switchTo().frame(acceptIFrame);
        clickOnElement(acceptCookiesButton);
    }

    public void enterJobTitle(String jobtitle) {
        Reporter.log("Enter job title to job title field" + jobTitle.toString() + "<br>");
        sendTextToElement(jobTitle, jobtitle);
    }

    public void enterLocation(String loc) {
        Reporter.log("Enter location to location field" + location.toString() + "<br>");
        sendTextToElement(location, loc);
    }

    public void selectDistance(String distance) {
        Reporter.log("Select distance " + distance + " from distsance dropdown " + distanceDropDown.toString() + "<br>");
        selectByVisibleTextFromDropDown(distanceDropDown, distance);
    }

    public void clickOnMoreSearchOptionLink() {
        Reporter.log("Click on more search option " + moreSearchOptionsLink.toString() + "<br>");
        clickOnElement(moreSearchOptionsLink);
    }

    public void enterMinSalary(String minSalary) {
        Reporter.log("Enter min Salary " + minSalary + " to minimum salary field " + salaryMin.toString() + "<br>");
        sendTextToElement(salaryMin, minSalary);
    }

    public void enterMaxSalary(String maxSalary) {
        Reporter.log("Enter max Salary " + maxSalary + " to maximum salary field " + salaryMax.toString() + "<br>");
        sendTextToElement(salaryMax, maxSalary);
    }

    public void selectSalaryType(String sType) {
        Reporter.log("Select Salary Type " + sType + " from salary type dropdown " + salaryTypeDropDown.toString() + "<br>");
        selectByVisibleTextFromDropDown(salaryTypeDropDown, sType);
    }

    public void selectJobType(String jobType) {
        Reporter.log("Select Job Type " + jobType + " from job type dropdown " + jobTypeDropDown.toString() + "<br>");
        selectByVisibleTextFromDropDown(jobTypeDropDown, jobType);
    }

    public void clickOnFindJobsButton() {
        Reporter.log("click on find jobs button" + findJobsBtn.toString() + "<br>");
        clickOnElement(findJobsBtn);
    }

}
