@Gifting_Physical_Product
Feature: MKT-GFF-002-Gifting-2018

  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Gifting Physical Product 
  When navigate to market page
  When i move to read products
  Then Click on nonfiction link and verify
  When PPF-0010 Select Physical product
  Then PAP-0020 Product details are displayed
  Then Click on Add to cart
  Then VR-0020 click on checkout button
  Then VR-0020 Click on the create an account
  Then PBP-0070 Enter Details in create Account
  When GFF-0020 Click on Gift Information check box
  Then GFF-0030 About Gifting information is displayed
  When GFF-0040 Enter the Recipient Information
  Then GFF-0050 Gifting Information and Edit button are displayed
  Then PBP-0070 Enter Shipping information Location Colorado
  When Click on continue button
  Then PBP-0070 Enter Billing information Location Colorado
  Then PBP-0070 Enter Payment Method
  Then PBP-0070 Verify the Checkout Page
  When GFF-0100 Gifting Physical Product  order confirmation page is displayed
  Then ALP-0020 click on Account page
  When GFF-0070 click on Your Orders
  Then GFF-0080 Order detail modifications for Gift details are displayed




