@Formed_Funding_Contribution_product_setup_and_Account_page
Feature: MKT-FFC-004-Formed Funding Contribution
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: FORMED Funding Contribution product setup
    When navigate to market page
    Then Email_ID-3 Enter Username and password
    Then Click on Submit button
    Given I navigate to "/"
    Then FFC-0020 Navigate to community page
    Then FFC-0120 click on Account
    Then FFC-0120 click on On Demand Subscription
    When FFC-0220 click on enable button in On Demand Subscription page
    Then FFC-0220 click on Accept Terms button
    When FFC-0220 click on Enable Formed Funding
    Then Navigate to community page
    Then FFC-0030 Formed Funding goal is displayed and click on Contribute button
    Then FFC-0040 Formed Funding Campaign page is displayed
    When FFC-0050 Enter the credit card Cvv number
    Then FFC-0060 Conformation Contribution is displayed
    When ALP-0020 click on Account page

Scenario: FORMED Funding Contribution Account page

    Then FFC-0020 Navigate to community page
    Then FFC-0030 Click on Our Community in Community Tab
    Then FFC-0030 Formed Funding goal is displayed and click on Contribute button
    When FFC-0280 click on monthly and Contribution is entered
    Then FFC-0280 Next button is enable and click on Next button
    Then FFC-0290 Enter Billing information
    When FFC-0290 Enter payment method
    Then FFC-0300 Order conformation page is displayed
    When ALP-0020 click on Account page
    Then FFC-0310 click on Formed Contribution Account page and Edit the payment method
    Then FFC-0310 change the Monthly amount
    When FFC-0330 click on Edit button in Monthly Recurring Amount
    Then FFC-0330 change the Contribution amount
    Then FFC-0330 changed Contribution amount is displayed
    Then Navigate to community page
    Then FFC-0030 Click on Our Community in Community Tab
    Then FFC-0030 Formed Funding goal is displayed and click on Contribute button
    When FFC-0280 click on monthly and Contribution is entered
    Then FFC-0280 click on Next button
    When FFC-0340 Formed funding Account prompt is displayed
    Then FFC-0340 click on Go To Account page
    When FFC-0320 click on cancel contribution
    Then FFC-0320 Formed Contribution status is inactive






  



  

