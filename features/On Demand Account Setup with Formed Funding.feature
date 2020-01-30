@On_Demand_Account_Setup_with_Formed_Funding

Feature: MKT-FFC-005-Formed Funding Contribution
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: On Demand Account Setup with Formed Funding 
  When navigate to market page
  Then Email_ID-2 Enter Username and password
  When Click on Submit button
  Given I navigate to "/"
  Then FFC-0020 Navigate to community page
  Then FFC-0120 click on Account
  When FFC-0150 Click on Formed Funding Tab
  Then FFC-0160 Formed Funding page is displayed
