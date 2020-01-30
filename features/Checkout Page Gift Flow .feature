@Checkout_Page_Gift_Flow
Feature: MKT-GFF-001-Gifting-2018

  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Checkout Page Gift Flow 
  When navigate to market page
  When GFF-0010 navigate to subscriptions
  Then GFF-0010 On Demand and Gift Subscriptions are displayed
  When GFF-0010 Click on Gift Subscriptions
  Then GFF-0010 Giftable Products are displayed
  Then GFF-0020 Click on Credit Plan Gift
  Then Click on Add to cart
  Then VR-0020 click on checkout button
  Then VR-0020 Click on the create an account
  Then PBP-0004 Enter Details in create Account
  When GFF-0020 Click on Gift Information check box
  Then GFF-0030 About Gifting information is displayed for Digital products
  When GFF-0040 Enter the Recipient Information
  Then GFF-0050 Gifting Information and Edit button are displayed
  Then PBP-0070 Enter Billing information
  Then PBP-0070 Enter Payment Method
  Then PBP-0070 Verify the Checkout Page
  When GFF-0060 Giftable order confirmation page is displayed
  Then ALP-0020 click on Account page
  When GFF-0070 click on Your Orders
  Then GFF-0080 Order detail modifications for Gift details are displayed
  When click on logout button
  Then I navigate to "/"
  When navigate to market page
  Then GFF-0110 i click on login button and enter username and password
  When VR-0020 click on checkout button
  When GFF-0020 Click on Gift Information check box
  Then GFF-0110 Gifting Restrictions prompt is displayed





