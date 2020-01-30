@Check_Out
Feature: MKT-C0-001-Check Out
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Check_Out
  When navigate to market page
  When Email_ID-1 Enter Username and password
  Then Click on Submit button
  When i move to listen products
  Then Click on espanol Listen Link and Verify
  When i move to watch products
  Then click on feature film link and verify
  Then Click on Product in watch
  Then Click on Add to cart
  When i move to listen products
  Then click on Talks
  Then Click on Product2 in Talks
  Then Click on Add to cart
  Then PBP-0060 click on incart icon
  Then CO-0010 Verify Check Out in Cart
  When PBP-0060 click on incart icon
  Then CO-0030 delete product from Cart
  When PBP-0060 click on incart icon
  When Click on Checkout in Cart Summary
  Then CO-0080 Enter CVV
  Then CO-0080 Click on place Order
  When click on get credit plan in market view
  When click on credits
  Then CO-0080 Enter CVV
  Then CO-0080 Click on place Order
  Then CPS-0090 Available credits are displayed
  When i move to watch products
  Then click on Documentreies link and verify
  Then click on watch Documentreies product1
  Then Click on Add to cart
  When i move to listen products
  Then Click on audio dramas Link and Verify
  Then Click on Product in Audio Dramas
  Then Click on Add to cart
  When PBP-0060 click on incart icon
  When Click on Checkout in Cart Summary
  Then CO-0100 Click on Apply credits
  Then CO-0080 Enter CVV
  Then CO-0080 Click on place Order
  Then CPS-0080 Order Confirmation is displayed
  When click on logout button
  
  
  


