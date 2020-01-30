@Activate_dialog_organization
Feature: MKT-ADO-001-Activate dialog organization
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Activate dialog organization
  When navigate to market page
  When Click on subscription link
  Then click on Group ondemand subscription
  Then VR-0020 sign in group detail is displayed
  When VR-0020 click on checkout button
  When VR-0020 Click on the create an account
  Then PBP-0002 Enter Details in create Account
  Then PBP-0070 Enter Billing information
  Then SGB-0010 Enter Payment Method with Form fund
  Then SGB-0020 agree for terms of Funding
  Then SGB-0020 Set goal
  When SGB-0020 Click on Continue to Organisation
  When VR-0040 Choose organization
  Then VR-0050 Place Order button is displayed and click on place order button
  Then SGB-0030 summary Page is displayed
  Then SGB-0040 Click on Setup group and verify
  Then VR-0060 Enter organization information
  Then SGB-0070 leader check list is displayed
  

