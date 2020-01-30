@Search_page
Feature: MKT-SPP-001-Search page
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are ther

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Purchase search product Page 
  When navigate to market page
  When SPP-0020 click on the search icon
  Then SPP-0030 Search product page is displayed
  Then SPP-0040 select Available ON DEMAND
  Then SPP-0040 ON DEMAND products is displayed
  When SPP-0050 click on filter product
  Then SPP-0050 Product details are displayed
  When SPP-0040 select one or more attribute filter
  When i move to listen products
  Then SPP-0060 Product page is displayed
  When SPP-0040 click on watch in left side view
  Then SPP-0040 Watch sub options are displayed
  When SPP-0040 click on Listen in left side view
  Then SPP-0040 Listen sub options are displayed
  When SPP-0040 click on Read in left side view
  Then SPP-0040 Read sub options are displayed
  Then SPP-0070 featured drop down is displayed
  When SPP-0080 Click on product
  Then SPP-0080 product details are displayed
  
