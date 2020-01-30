@Enable_and_Disable_formed_funding_for_existingaccount

Feature: MKT-FFC-002-Formed Funding Contribution
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Enable and disable formed funding for existing account
    When navigate to market page
    When i move to subscription products
    Then click on ondemand subscription
    Then VR-0020 sign in group details are displayed
    Then VR-0020 click on checkout button
    When VR-0020 Click on the create an account
    Then PBP-0070 Enter Details in create Account
    Then PBP-0070 Enter Billing information
    Then VR-0030 Enter Payment Method
    When VR-0030 Choose organization
    Then VR-0040 Place Order button is displayed and click on place order button
    When VR-0050 order conformation is displayed
    When VR-0060 Enter organization information
    Then SGB-0070 leader check list is displayed
    Then FFC-0120 click on Account
    Then FFC-0120 click on On Demand Subscription
    When FFC-0220 click on enable button in On Demand Subscription page
    Then FFC-0220 click on Accept Terms button
    When FFC-0220 Formed Funding is enable
    When FFC-0220 click on Enable Formed Funding
    Then FFC-0230 Formed funding Tab page is displayed
    Then FFC-0250 Disable button is displayed
    Then FFC-0250 click on disable button in formed funding page
    When FFC-0250 click on Disable formed funding
    Then FFC-0250 Campigan disable message is dispalyed
    When click on logout button in Account page


    
    











