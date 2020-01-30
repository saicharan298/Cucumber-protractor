@Instant_Checkout_For_getgold_getplatinum_and_SoG
Feature: MKT-ICO-002-Instant Checkout
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: URL instant checkout For getgold,getplatinum and SoG
  When navigate to market page
  Then navigate to getgold
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then ICO-0020 Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then getgold order conformation is displayed
  When click on logout button
  Then navigate to getplatinum
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then ICO-0020 Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then getplatinum order conformation is displayed
  When click on logout button
  Then navigate to SoG
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then SoG Billing information are displayed
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then SoG order conformation is displayed
  When click on logout button