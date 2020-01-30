
@Purchase_Digital_and_Physical_products
Feature: MKT-PPF-002-Physical products
Feature  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario:Purchase Digital and Physical products
  When navigate to market page
  When i move to read products
  Then Click on nonfiction link and verify
  When PPF-0010 Select Physical product
  Then PAP-0020 Product details are displayed
  Then Click on Add to cart
  When i move to listen products
  Then Click on espanol Listen Link and Verify
  When PPF-0070 Select Digital product
  Then Click on Add to cart
  When VR-0020 click on checkout button
  Then VR-0020 Click on the create an account
  Then PBP-0070 Enter Details in create Account
  Then PBP-0070 Enter Shipping information Location California
  When PPF-0030 Select Shipping speed
  Then PBP-0070 Enter Billing information California
  When PPF-0040 Click on Tax Exempt
  Then PPF-0040 Enter the Tax amount coupon
  Then PBP-0070 Enter Payment Method
  Then CO-0080 Click on place Order
  Then PPF-0070 Physical and Digital products order confirmation page is displayed
  When click on logout button
