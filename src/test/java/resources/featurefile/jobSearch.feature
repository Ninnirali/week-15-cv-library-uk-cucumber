Feature: Job Search Test
  As a user I want to search for jobs on cv library uk website

  @smoke @sanity @regression
  Scenario Outline: verify Job Search Result Using Different Data
    Given I am on HomePage
    When I accept cookies
    And I enter job title "<jobTitle>"
    And I enter location "<location>"
    And I select distance "<distance>"
    And I click on more search option link
    And I enter minimum salary"<salaryMin>"
    And I enter maximum salary "<salaryMax>"
    And I select salary type "<salaryType>"
    And I select job type "<jobType>"
    And I click on find job button
    Then I verify the result "<result>"

    Examples:
      | jobTitle                  | location                 | distance       | salaryMin | salaryMax | salaryType | jobType   | result                                      |
      | Tester                    | Harrow                   | up to 5 miles  | 30000     | 500000    | Per annum  | Permanent | Permanent Tester jobs in Harrow on the Hill |
      | Software Tester           | London                   | up to 50 miles | 45000     | 70000     | Per month  | Any       | Software Tester jobs in London              |
      | Tester                    | London                   | up to 25 miles | 45000     | 70000     | Per month  | Any       | Tester jobs in London                       |
      | Driver                    | Harrow Green, Suffolk    | up to 35 miles | 25000     | 45000     | Per month  | Any       | Driver jobs in Harrow Green                 |
      | Recruitment Administrator | Norfolk                  | up to 75 miles | 25000     | 50000     | Per month  | Any       | Recruitment Administrator jobs in Norfolk   |
      | Nurse                     | Glasgow, Glasgow City    | up to 15 miles | 45000     | 70000     | Per month  | Any       | Nurse jobs in Glasgow                       |
      | Internal Sales Executive  | Edmonton, Greater London | up to 25 miles | 35000     | 70000     | Per month  | Any       | Internal Sales Executive jobs in Edmonton   |