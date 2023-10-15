# Feature: Sample Feature

#   Scenario: Opening Google
#     Given I am on the Google homepage
#     When I search for "Cucumber.js"
#     Then I should see search results


Feature: Login to SauceDemo

  Scenario: Successful login
    Given I am on the SauceDemo login page
    When I enter the username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be logged in