@Formed_Funding_Contribution
Feature: MKT-FFCD-001-Formed Funding
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: FORMED Funding Contribution
  When navigate to market page
  Then Email_ID-2 Enter Username and password
  When Click on Submit button
  Given I navigate to "/"
  Then FFC-0020 Navigate to community page
  Then FFC-0030 Formed Funding goal is displayed and click on Contribute button
  Then FFC-0040 Formed Funding Campaign page is displayed
  When FFC-0050 Enter the credit card Cvv number
  Then FFC-0060 Conformation Contribution is displayed
  When ALP-0020 click on Account page
  When FFC-0070 click on View button in Account page
  Then I navigate to "/"
  Then FFC-0020 Navigate to community page
  Then FFC-0030 Click on Our Community in Community Tab
  Then FFC-0090 Formed Funnding Contribution is displayed


  



  

