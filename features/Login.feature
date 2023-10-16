Feature: Login to SauceDemo

  @positive 
  Scenario: Successful login
    Given I am on the SauceDemo login page
    When I enter the username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be logged in

  @negative
  Scenario: Unsuccessful login
    Given I am on the SauceDemo login page
    When I enter the username "locked_out_user" and password "invalid_password"
    And I click the login button
    Then I should see an error message

    @neutral
    Scenario: Unsuccessful login
        Given I am on the SauceDemo login page
        When I enter the username "locked_out_user" and password "invalid_password"
        And I click the login button
        Then I should be logged in