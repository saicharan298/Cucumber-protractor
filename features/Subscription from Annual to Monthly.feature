@Change_Subscription_from_Annual_to_Monthlyl
Feature: MKT-SSC-002-Change Subscription from Annual to Monthly

  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Change Subscription from Annual to Monthly
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
  Then SALES-1.0 navigate to magento
  When SALES-1.0 Enter Username and password
  When SALES-1.0 Click on SALES button
  When SALES-1.0 Click on Product Subscription
  Then SALES-1.0 Click on View button in purchased subscription
  Then SALES-1.0 Click on Edit Profile
  When SALES-NEW_1.0 Click on Product name dropdown and verify
  When SALES-NEW_1.0 Click on Subscription from Monthly
  Then SALES-1.0 Click on Card Details dropdown and verify
  Then SALES-1.1 Click on Add New Card button
  When SALES-1.1 Enter Billing information For New credit Card
  When SALES-1.1 Enter Payment Details
  Then SALES-1.2 Click on Update Profile
  When SALES-NEW_1.0 Change Monthly amount is displayed
  When SALES-1.2 Click on Generate Order
  
