
@Topic_Share_page_improvements_Test_Plan

Feature: MKT-TS-002-Topic shares
   As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Topic Share page improvements Test Plan
  Then TS-0130 click on video product ondemand page without user
  When TSI-2 GET FREE TRAIL link is displayed
  When navigate to market page
  When i move to subscription products
  Then click on ondemand subscription
  Then VR-0020 sign in group detail is displayed
  Then VR-0020 click on checkout button
  When VR-0020 Click on the create an account
  Then PBP-0070 Enter Details in create Account
  Then PBP-0070 Enter Billing information
  Then VR-0030 Enter Payment Method
  When VR-0030 Choose organization
  Then VR-0040 Place Order button is displayed and click on place order button
  When VR-0050 order conformation is displayed
  When VR-0060 Enter organization information
  Then SGB-0070 leader check list is displayed
  Given I navigate to "/"
  When Watch link is hovered
  Then LPA-0040 Click on Watch Movies and Verify with parish admin
  When TS-0010 click on product in movies link
  When TS-0010 click on play button
  Then TS-0020 share model dialog page is displayed
  Then TS-0030 share icons are displayed
  When TS-0060 click on facebook
  Given I navigate to "/"
  Then LPA-0010 click on login button
  Then TS-0110 click on topicshares in on demand page
  When TSI-1 Click on Share Item
  Then TSI-5 Source title is displayed
  Then TSI-6 Share Item Discription is displayed
  When TSI-3 Thumbnail of item and description are displayed
  Then TS-0050 click on play button
  Then i click on account and logout for parish
  
