@Audio_page
Feature: MKT-PAP-001-Audio page
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there  

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Purchase audio product Page 
  When navigate to market page
  When i click on listen
  When PAP-0020 i click on Item
  Then PAP-0020 Product details is displayed
  Then Click on Add to cart
  When PBP-0060 click on incart icon
  Then PBP-0060 Added product details is dispalyed
  When PBP-0060 click on title
  When PAP-0050 click on product in you may also like
  Then Click on Add to cart
  When PBP-0060 click on incart icon
  When PBP-0060 click on remove option
  When PBP-0060 Click on checkout option
  Then CO-0040 Create Account and Continue login is displayed
  When PBP-0070 Click on create account
  Then PBP-0001 Enter Details in create Account
  Then PBP-0070 Enter Billing information
  Then PBP-0070 Enter Payment Method
  Then PBP-0070 Verify the Checkout Page
  Then PBP-0070 Order Confirmation is displayed 
  When click on logout button
  
