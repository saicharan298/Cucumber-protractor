@Instant_Checkout_For_lenlet_cart_getbronze_and_getsilver
Feature: MKT-ICO-003-Instant Checkout
-Instant Checkout  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: URL instant checkout For lenlet_cart,getbronze and getsilver
  When navigate to market page
  Then navigate to lenlet_cart
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then lenlet_cart Billing information are displayed
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then ICO-0030 order conformation is displayed
  When click on logout button
  Then navigate to getbronze
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then ICO-0020 Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then getbronze order conformation is displayed
  When click on logout button
  Then navigate to getsilver
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then ICO-0020 Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then getsilver order conformation is displayed
  When click on logout button



