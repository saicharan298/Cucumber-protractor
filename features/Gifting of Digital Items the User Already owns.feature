@Gifting_of_Digital_Items_the_User_Already_owns
Feature: MKT-GFF-003-Gifting-2018

  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Gifting of Digital Items the User Already owns 
  When navigate to market page
  Then Email_ID-4 Enter Username and password
  Then Click on Submit button
  When i move to read products
  When PBP-0010 Read products are displayed
  Then PBP-0010 Click on fiction in Read link
  When PBP-0020 Click on product
  When PBP-0030 click on Add to cart button
  When PBP-0060 Click on checkout option
  Then CO-0080 Enter CVV
  Then CO-0080 Click on place Order
  Then GFF-0060 Order Confirmation is displayed 
  When i move to read products
  Then PBP-0010 Click on fiction in Read link
  When GFF-0140 Click on Library product
  Then GFF-0140 Click on ADD TO CART button
  When PBP-0060 Click on checkout option
  When GFF-0020 Click on Gift Information check box
  Then GFF-0030 About Gifting information is displayed for Digital products
  When GFF-0040 Enter the Recipient Information
  Then CO-0080 Enter CVV
  Then PPF-0080 Click on place Order
  Then GFF-0120 order confirmation page is displayed 
  When i move to read products
  Then PBP-0010 Click on fiction in Read link
  When GFF-0140 Click on Library product
  Then GFF-0140 Click on ADD TO CART button
  When i move to listen products
  When PAP-0010 click on Talks
  Then PAP-0010 Talks page is displayed
  When PAP-0020 i click on Item
  Then PAP-0020 Product details is displayed
  Then Click on Add to cart
  When PBP-0060 Click on checkout option
  Then CO-0080 Enter CVV
  Then GFF-0140 Click on continue button
  Then GFF-0150 REMOVE ITEMS button is displayed
  When GFF-0150 click on REMOVE ITEMS button
  Then VR-0040 Place Order button is displayed and click on place order button
  When VR-0130 order conformation is displayed

 




