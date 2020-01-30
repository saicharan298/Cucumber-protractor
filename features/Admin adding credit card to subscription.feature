@Sales_Staff_Credit_Card_Processing_Test_Plan
Feature: MKT-SSC-001-Admin adding credit card to subscription

  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Admin adding credit card to subscription
  When navigate to market page
  When Click on subscription link
  Then click on Group ondemand subscription
  Then VR-0020 sign in group detail is displayed
  Then VR-0020 click on checkout button
  When VR-0020 Click on the create an account
  Then PBP-0003 Enter Details in create Account
  Then PBP-0070 Enter Billing information
  Then VR-0030 Enter Payment Method
  When VR-0030 Choose organization
  Then VR-0040 Place Order button is displayed and click on place order button
  When VR-0050 order conformation is displayed
  When VR-0060 Enter organization information
  Then SGB-0070 leader check list is displayed
  Then SALES-1.0 navigate to magento
  When SALES-1.0 Enter Username and password
  When SALES-1.0 Click on SALES button
  Then SALES-1.0 Product Subscription is displayed
  When SALES-1.0 Click on Product Subscription
  Then SALES-1.0 Click on View button in purchased subscription
  When SALES-1.0 Payment information is displayed
  Then SALES-1.0 Click on Edit Profile
  When SALES-1.0 Click on Card Details dropdown and verify
  Then SALES-1.1 Click on Add New Card button
  When SALES-1.1 Enter Billing information For New credit Card
  When SALES-1.1 Enter Payment Details
  Then SALES-1.2 Click on Update Profile
  When SALES-1.2 Click on Generate Order
  Then I navigate to "/"
  When navigate to market page
  When ALP-0020 click on Account page
  When ABP-0030 click on payment method
  Then ABP-0030 payment method details is displayed
  Then ABP-0040 edit page is displayed in payment method
  
  
  

  

  
   
