
@Purchase_Two_Physical_products_Shipping_Location_California
Feature: MKT-PPF-003-Physical products
Feature  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario:Purchase  Two Physical product Shipping Location California
  When navigate to market page
  When i move to read products
  Then Click on nonfiction link and verify
  When PPF-0010 Select Physical product
  Then PAP-0020 Product details are displayed
  Then Click on Add to cart
  When i move to listen products
  Then Click on espanol Listen Link and Verify
  When PPF-0020 Select second physical product
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
  Then PPF-0050 Physical product order confirmation page is displayed
  When click on logout button

  
