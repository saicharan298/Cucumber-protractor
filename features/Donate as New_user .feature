@Donate_as_New_user
Feature: MKT-DTP-001-Donations Test Plan
    As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Donate as New_user 
  When navigate to market page
  When i move to listen products
  When PAP-0010 click on Talks
  Then PAP-0010 Talks page is displayed
  When PAP-0010 i click on Item
  Then PAP-0020 Product details is displayed
  Then Click on Add to cart
  When PBP-0060 Click on checkout option
  When PBP-0070 Click on create account
  Then PBP-0001 Enter Details in create Account
  Then PBP-0070 Enter Billing information
  Then PBP-0070 Enter Payment Method
  Then GFF-0130 click on continue button
  When DONATE-2.0 Review Order Panel is displayed
  Then DONATE-2.0 Donations Solicitation Message is displayed
  When DONATE-2.1 Click on Why donate?
  Then DONATE-2.1 Click on Close button in Popup window
  When DONATE-2.2 Enter dollar amount
  Then DONATE-2.2 Click on Donations Solicitation
  Then DONATE-2.3 Donation amount displayed in order summary
  When DONATE-2.3 Total Order amount displayed in order summary
  When DONATE-2.3 Change an amount in the Donations Form
  Then DONATE-2.2 Click on Donations Solicitation
  Then DONATE-2.3 Change Donation amount displayed in order summary
  When DONATE-2.3 Change Total Order amount displayed in order summary
  Then VR-0050 Place Order button is displayed and click on place order button
  When DONATE-3.0 Order and Donation Confirmation Page is displayed




  





  
