@Change_payment_method_from_Pay_By_Check_to_Credit_Card

Feature: MKT-SSC-004-Change payment method from Pay By Check to Credit Card

  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Change payment method from Pay By Check to Credit Card
  When navigate to market page
  When Click on subscription link
  Then click on Group ondemand subscription
  Then VR-0020 sign in group details are displayed
  When VR-0020 click on checkout button
  When VR-0020 Click on the create an account
  Then PBP-0070 Enter Details in create Account
  Then PBP-0070 Enter Billing information
  When PBC-0010 click on pay by check
  Then PBC-0020 Enter Purchase Order
  When Click on Choose organization
  Then VR-0050 Place Order button is displayed and click on place order button
  When PBC-0030 order conformation is displayed
  Then SALES-1.0 navigate to magento
  When SALES-1.0 Enter Username and password
  When SALES-1.0 Click on SALES button
  When SALES-1.0 Click on Product Subscription
  Then SALES-1.0 Click on View button in purchased subscription
  Then SALES-1.0 Click on Edit Profile
  When SALES-NEW_4.0 Click on Payment method and select Credit Card
  Then SALES-NEW_4.0 Select Add New Card
  When SALES-1.1 Enter Payment Details
  Then SALES-1.2 Click on Update Profile
  When SALES-1.2 Click on Generate Order
  When SALES-NEW_4.0 Card Details information is displayed




