@Formed_Funding_On_Demand_Subscription_Account_page

Feature: MKT-FFC-003-Formed Funding Contribution
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Formed Funding On Demand Subscription Account page
  When navigate to market page
  Then FFC-0110 click on login button and enter Formed funding user details
  When ALP-0020 click on Account page
  Then FFC-0120 click on On Demand Subscription
  When FFC-0130 On Demand Subscription page is displayed
  Then FFC-0140 Formed Funding Tab is displayed
  When FFC-0150 Click on Formed Funding Tab
  Then FFC-0160 Formed Funding page is displayed
  When FFC-0170 click ALL dropdown
  Then FFC-0180 click on Hide button in Visisbility
  When FFC-0180 Hide APPEALS button is displayed
  Then FFC-0180 click on Hide APPEALS button
  When FFC-0190 click on Show button in Hide
  Then FFC-0190 click on Show APPEALS button is displayed
  Then FFC-0190 click on Show APPEALS button
  When FFC-0200 Formed Funding History is displayed
  Then FFC-0210 click on Edit in Formed funding
  When click on logout button in Account page
