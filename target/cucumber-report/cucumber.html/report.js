$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "As a user I want to search for jobs on cv library uk website",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "verify Job Search Result Using Different Data",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter minimum salary\"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter maximum salary \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 20,
      "id": "job-search-test;verify-job-search-result-using-different-data;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 21,
      "id": "job-search-test;verify-job-search-result-using-different-data;;2"
    },
    {
      "cells": [
        "Software Tester",
        "London",
        "up to 50 miles",
        "45000",
        "70000",
        "Per month",
        "Any",
        "Software Tester jobs in London"
      ],
      "line": 22,
      "id": "job-search-test;verify-job-search-result-using-different-data;;3"
    },
    {
      "cells": [
        "Tester",
        "London",
        "up to 25 miles",
        "45000",
        "70000",
        "Per month",
        "Any",
        "Tester jobs in London"
      ],
      "line": 23,
      "id": "job-search-test;verify-job-search-result-using-different-data;;4"
    },
    {
      "cells": [
        "Driver",
        "Harrow Green, Suffolk",
        "up to 35 miles",
        "25000",
        "45000",
        "Per month",
        "Any",
        "Driver jobs in Harrow Green"
      ],
      "line": 24,
      "id": "job-search-test;verify-job-search-result-using-different-data;;5"
    },
    {
      "cells": [
        "Recruitment Administrator",
        "Norfolk",
        "up to 75 miles",
        "25000",
        "50000",
        "Per month",
        "Any",
        "Recruitment Administrator jobs in Norfolk"
      ],
      "line": 25,
      "id": "job-search-test;verify-job-search-result-using-different-data;;6"
    },
    {
      "cells": [
        "Nurse",
        "Glasgow, Glasgow City",
        "up to 15 miles",
        "45000",
        "70000",
        "Per month",
        "Any",
        "Nurse jobs in Glasgow"
      ],
      "line": 26,
      "id": "job-search-test;verify-job-search-result-using-different-data;;7"
    },
    {
      "cells": [
        "Internal Sales Executive",
        "Edmonton, Greater London",
        "up to 25 miles",
        "35000",
        "70000",
        "Per month",
        "Any",
        "Internal Sales Executive jobs in Edmonton"
      ],
      "line": 27,
      "id": "job-search-test;verify-job-search-result-using-different-data;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7983612499,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify Job Search Result Using Different Data",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter minimum salary\"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter maximum salary \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 141002900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 20340046401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 791785901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "HomePageSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 204844000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 271667700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 357871001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 171222200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 24
    }
  ],
  "location": "HomePageSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 136064799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 197619700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 127966000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 208453100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "ResultPageSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 8727947601,
  "status": "passed"
});
formatter.after({
  "duration": 880472700,
  "status": "passed"
});
formatter.before({
  "duration": 4137270001,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify Job Search Result Using Different Data",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Software Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 50 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter minimum salary\"45000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter maximum salary \"70000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Any\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Software Tester jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 30900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 20198434500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Tester",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 818001000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "HomePageSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 139530801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 50 miles",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 222628001,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 375346700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 175889300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70000",
      "offset": 24
    }
  ],
  "location": "HomePageSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 129892701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 242096700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 123986499,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 167261999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Tester jobs in London",
      "offset": 21
    }
  ],
  "location": "ResultPageSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 5103928801,
  "status": "passed"
});
formatter.after({
  "duration": 817177501,
  "status": "passed"
});
formatter.before({
  "duration": 4052473799,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify Job Search Result Using Different Data",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter minimum salary\"45000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter maximum salary \"70000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Any\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Tester jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 32500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 20242551800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 381730700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "HomePageSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 503180100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 137963800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 258836600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 260995300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70000",
      "offset": 24
    }
  ],
  "location": "HomePageSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 150327001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 119288300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 169741200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 158085901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester jobs in London",
      "offset": 21
    }
  ],
  "location": "ResultPageSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 4970710400,
  "status": "passed"
});
formatter.after({
  "duration": 1142544100,
  "status": "passed"
});
formatter.before({
  "duration": 3831167900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify Job Search Result Using Different Data",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Driver\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Harrow Green, Suffolk\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 35 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter minimum salary\"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter maximum salary \"45000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Any\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Driver jobs in Harrow Green\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 32601,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 20198894699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Driver",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 449188499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow Green, Suffolk",
      "offset": 18
    }
  ],
  "location": "HomePageSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 513507701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 35 miles",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 129856000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 534777300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 220803800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 24
    }
  ],
  "location": "HomePageSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 130647801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 116914501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 64461401,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 149711499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Driver jobs in Harrow Green",
      "offset": 21
    }
  ],
  "location": "ResultPageSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 6936584600,
  "status": "passed"
});
formatter.after({
  "duration": 1097389700,
  "status": "passed"
});
formatter.before({
  "duration": 3811548100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify Job Search Result Using Different Data",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Recruitment Administrator\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Norfolk\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 75 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter minimum salary\"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter maximum salary \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Any\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Recruitment Administrator jobs in Norfolk\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 20222084900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Recruitment Administrator",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 745996900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Norfolk",
      "offset": 18
    }
  ],
  "location": "HomePageSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 121018301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 75 miles",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 162153200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 374629201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 189155299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 24
    }
  ],
  "location": "HomePageSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 143088100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 114845300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 182928500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 186275899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Recruitment Administrator jobs in Norfolk",
      "offset": 21
    }
  ],
  "location": "ResultPageSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 6610896299,
  "status": "passed"
});
formatter.after({
  "duration": 876436200,
  "status": "passed"
});
formatter.before({
  "duration": 4043400700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify Job Search Result Using Different Data",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Nurse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Glasgow, Glasgow City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter minimum salary\"45000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter maximum salary \"70000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Any\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Nurse jobs in Glasgow\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 497201,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 20202475800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nurse",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 566358200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow, Glasgow City",
      "offset": 18
    }
  ],
  "location": "HomePageSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 325165201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 71579700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 202146800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 383365100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70000",
      "offset": 24
    }
  ],
  "location": "HomePageSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 99937000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 163966400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 129008400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 211744200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nurse jobs in Glasgow",
      "offset": 21
    }
  ],
  "location": "ResultPageSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 5217323901,
  "status": "passed"
});
formatter.after({
  "duration": 826380100,
  "status": "passed"
});
formatter.before({
  "duration": 4033226101,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify Job Search Result Using Different Data",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Internal Sales Executive\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Edmonton, Greater London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter minimum salary\"35000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter maximum salary \"70000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Any\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Internal Sales Executive jobs in Edmonton\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 20243564200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Sales Executive",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 350488200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edmonton, Greater London",
      "offset": 18
    }
  ],
  "location": "HomePageSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 681406600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 229547199,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 381250800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 156215599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70000",
      "offset": 24
    }
  ],
  "location": "HomePageSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 105340000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 105333100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 61397100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 149542701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Sales Executive jobs in Edmonton",
      "offset": 21
    }
  ],
  "location": "ResultPageSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 6632399800,
  "status": "passed"
});
formatter.after({
  "duration": 1270832900,
  "status": "passed"
});
});