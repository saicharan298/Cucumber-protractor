@Instant_Checkout_For_BiaY_and_7daytrail
Feature: MKT-ICO-001-Instant Checkout
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: URL instant checkout For BiaY and 7daytrial
  When navigate to market page
  Then navigate to BiaY
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then BiaY Payment information is displayed
  Then BiYa Verify the Checkout Page
  Then BiaY order conformation is displayed
  When click on logout button
  Then navigate to 7daytrial
  When ICO-0040 7 days free trial page is displayed
  Then PBP-0070 Enter Details in create Account
  Then Trail Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then 7daytrial conformation is displayed
  When click on logout button