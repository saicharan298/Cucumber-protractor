
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
  Then Email_ID-3 Enter Username and password
  Then Click on Submit button
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
  
