@Account_page
Feature: MKT-ABP-001-Account page
    As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Account page 
    When navigate to market page
    Then Enter Details in create Account
    Then FFC-0290 Enter Billing information
    When FFC-0290 Enter payment method
    When ALP-0020 click on Account page
    When click on credit plan
    When ABP-0050 click on cancel credit plan
    Then ABP-0050 cancel credit plan prompt is displayed
    When click on logout button
    Given I navigate to "/"
    When navigate to market page
    When i click on login button and enter username and password
    When ALP-0020 click on Account page
    Then ABP-0010 account overview is displayed
    When ABP-0020 click on login settings
    Then ABP-0020 login details are displayed
    Then ABP-0020 Password settings are displayed
    When ABP-0030 click on payment method
    Then ABP-0030 payment method details is displayed
    When ABP-0060 click on your orders
    Then ABP-0070 orders page is displayed
    When ABP-0070 View details is displayed
    When click on logout button
  
