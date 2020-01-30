import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
var expects = chai.use(chaiAsPromised).expect;
import {browser, by, element, protractor, $} from 'protractor';
import {defineSupportCode, StepDefinitionParam, TableDefinition} from 'cucumber';
import * as _ from 'lodash';
import {expect} from '../../support/hooks';
import { Key } from 'protractor/node_modules/@types/selenium-webdriver';
import { callbackify } from 'util';
import { Driver } from 'selenium-webdriver/opera';
import { F_OK } from 'constants';
import { async } from 'q';
import { equal } from 'assert';
import * as fs from 'fs';

const readline = require('readline');
let randomMail ="";
var globalObject:Object;
// var Data:any;
defineSupportCode(function ({Given, Then, When}) {
    function delay(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
		Given('I navigate to {path}', async (path: string) => {
			await browser.get(path);
			await delay(5000);
			browser.waitForAngular();
			await delay(15000);
	});
	When('navigate to market page', async () => {
		await delay(5000);
		element(by.xpath("//a[@href='https://market.beta.formed.org']")).click();
		await delay(5000);
		browser.waitForAngular();
	
	});
	When('Click on market page', async () => {
		await delay(10000);
		element(by.xpath("//a[@href='https://market.beta.formed.org/']")).click();
		await delay(6000);
		browser.waitForAngular();
	});
	When('Click on Start shopping', async () => {
		await delay(10000);
		element(by.xpath(".//*[@id='amasty-shopby-product-list']/section/a")).click();
    });
	When('i click on login button and enter username and password', async () => {
        await delay(20000);
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("rajeshnakka.cmc@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("123456");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
		await delay(1000);
		browser.waitForAngular();
		await delay(8000);
	});
	When('GFF-0110 i click on login button and enter username and password', async () => {
        await delay(20000);
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("srkr6828@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Hoey@123");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
		await delay(1000);
		browser.waitForAngular();
		await delay(8000);
	});
	When('login button and enter username and password', async () => {
        await delay(10000);
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("invalid8498034@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Raj@2016");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
		await delay(1000);
		browser.waitForAngular();
		await delay(8000);
    });
    When('ALA-0010 click on login button and enter username and password', async () => {
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("test1+girardt100@formed.org");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("formed18!");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
		await delay(15000);
    });
    When('ALP-0020 click on Account page', async () => {
		await delay(10000);
        element(by.xpath(".//*[@id='account-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
		await delay(3000);
        browser.waitForAngular();
    });
    Then('FFC-0310 click on Formed Contribution Account page and Edit the payment method', async () => {
        await delay(5000);
        element(by.xpath(".//a[@href='https://market.beta.formed.org/formed/account/subscriptions/']")).click();
		await delay(5000);
		browser.waitForAngular();
		await delay(10000);
		element(by.xpath("//*[@id='formed-account-subscription-accordion']/div[2]/div[1]/div/div/span[2]")).click();
		await delay(5000);
        element(by.xpath("//*[@id='formed-account-subscription-accordion']/div[2]/div[2]/div[2]/div[1]/div/div[2]/div[3]/span[2]/a")).click();
		await delay(1000);
		browser.waitForAngular();
		await delay(3000);
    });
    Then('FFC-0310 change the Monthly amount', async () => {
        await delay(5000);
        element(by.xpath("//*[@id='update-payment__form-modal']/select")).click();
		await delay(5000);
		element(by.xpath("//*[@id='update-payment__form-modal']/select/option[3]")).click();
        await delay(5000);
        element(by.xpath("/html/body/div[3]/aside[5]/div[2]/footer/button[1]/span")).click();
		await delay(5000);	
		element(by.xpath("/html/body/div[4]/aside[6]/div[2]/footer/button")).click();
		await delay(5000);
    });
    Then('FFC-0330 change the Contribution amount', async () => {
        await delay(5000);
        element(by.xpath("//*[@id='change_recurring_amount']")).click();
        await delay(3000);
        element(by.xpath("//*[@id='change_recurring_amount_input-ff']")).sendKeys('1');
        await delay(3000);
        element(by.xpath(".//*[@class='change-recurring-amount-btn']")).click();
        await delay(4000);
    });
    When('FFC-0330 click on Edit button in Monthly Recurring Amount', async () => {
        await delay(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='change_recurring_amount']"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='change_recurring_amount']")).click();
        await delay(2000);
    });
    When('ALP-0030 click On Demand Subscription in Account page', async () => {
        await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
        await delay(10000);
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        await delay(8000);
	});
	When('i click on login user with out purchase product', async () => {
        await delay(5000);
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("catholic123456888@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Honey@123");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
		await delay(2000);
	});
	Then('FFC-0330 changed Contribution amount is displayed', async () => {
		await delay(2000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[2]/div[1]/div/div")).getText()).to.eventually.equal('Recurring contribution amount successfully changed from $100.00 to $1,100.00.');
		browser.manage().timeouts().implicitlyWait(3000);
	});
	Then('ABP-0010 plan details are displayed', async () => {
		await delay(10000);
		await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[3]/div[1]/div[3]/div/div[1]/div/div[1]/span[2]"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
		await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[3]/div[1]/div[3]/div/div[1]/div/div[3]/span[2]"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
	});
	When('ABP-0010 click on account overview', async () => {
		await delay(5000);
		element(by.xpath(".//*[@id='account-nav']/ul/li[1]/a")).click();                  
		await delay(1000);
		browser.waitForAngular();
	});
	When('ABP-0010 account overview is displayed', async () => {
		await delay(7000);
		await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/p"))).to.eventually.exist;
	    browser.manage().timeouts().implicitlyWait(3000);
	});
	When('ABP-0020 click on login settings', async () => {
		await delay(5000);
		element(by.xpath(".//a[@href='https://market.beta.formed.org/customer/account/edit/']")).click();
		await delay(5000);
		browser.waitForAngular();
	});
	Then('ABP-0020 login details are displayed', async () => {
		await delay(7000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[2]/div[2]/a[1]"))).to.eventually.exist;
		await delay(5000);
		element(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[2]/div[2]/a[1]")).click();
		await delay(1000);
		browser.waitForAngular();
	});
	Then('ABP-0020 Password settings are displayed', async () => {
		await delay(7000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[1]/input"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[2]/input"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[3]/input"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[2]/div[3]/a[1]"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[2]/div[2]/div/input[1]"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
	});
	When('ABP-0030 click on payment method', async () => {
		await delay(5000);
		element(by.xpath("//a[@href='https://market.beta.formed.org/magedelight_cybersource/cards/listing/']")).click();
		await delay(1000);
		browser.waitForAngular();                                                                                   
	});
	Then('ABP-0030 payment method details is displayed', async () => {
		await delay(5000);
		await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[3]/div[1]/div[3]/div[1]/strong"))).to.eventually.exist;
	    browser.manage().timeouts().implicitlyWait(3000)        
		await expect(browser.findElement(by.xpath("//*[@id='my-saved-cards-table']/tbody/tr/td[5]/span/a"))).to.eventually.exist;
		await delay(1000);
	});
	Then('ABP-0040 edit page is displayed in payment method', async () => {
		await delay(5000);
		element(by.xpath("//*[@id='my-saved-cards-table']/tbody/tr/td[5]/span/a")).click();
		await delay(3000);
		await expect(browser.findElement(by.xpath("//*[@id='update-credit-card__form-modal']/div[1]/fieldset[1]/h2"))).to.eventually.exist;
		await delay(1000);
		element(by.xpath("/html/body/div[5]/aside[2]/div[2]/header/button")).click();
		await delay(3000);
	});
	When('ABP-0050 click on credit plan', async () => {
		await delay(5000);
		element(by.xpath("//a[@href='https://market.beta.formed.org/formed/account/subscriptions/']")).click();
		browser.waitForAngular();
		await delay(5000);
		element(by.xpath("//*[@id='formed-account-subscription-accordion']/div[2]/div[1]/div/div/span[2]")).click();
		await delay(5000);
		browser.waitForAngular();
	});
	When('click on credit plan', async () => {
		await delay(5000);
		element(by.xpath("//a[@href='https://market.beta.formed.org/formed/account/subscriptions/']")).click();
		browser.waitForAngular();
		await delay(5000);
		element(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[1]/div/div/span[3]/time")).click();
		await delay(5000);
		browser.waitForAngular();
	});
	Then('ABP-0050 credit plan details are displayed', async () => {
		await delay(5000);
		await expect(browser.findElement(by.xpath("//*[@id='formed-account-subscription-accordion']/div[2]/div[2]/div[2]/div/div[1]/div/div[1]/span[2]/a"))).to.eventually.exist;
		await delay(7000);
	});
	Then('ABP-0050 Click on Account Activate status', async () => {
		await delay(5000);
		element(by.xpath("//*[@id='formed-account-subscription-accordion']/div[2]/div[2]/div[2]/div/div[1]/div/div[1]/span[2]/a")).click();
		await delay(5000);
		await expect(browser.findElement(by.xpath("//*[@id='amasty-shopby-product-list']/div[1]/ul/li[3]/form/button"))).to.eventually.exist;
		await delay(2000);
		element(by.xpath("//*[@id='amasty-shopby-product-list']/div[1]/ul/li[3]/form/button")).click();
		await delay(10000);
		element(by.xpath(".//*[@class='counter-number']")).click();
		await delay(12000);
		element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
		await delay(15000);
		element(by.xpath("//*[@id='magedelight_cybersource_cc_cid']")).sendKeys('123');
		await delay(3000);
		element(by.xpath("//*[@id='checkout-step-payment']/div/div[3]/div/button/span")).click();
		await delay(5000);
		element(by.xpath("//*[@id='checkout-step-review']/div[5]/div/button")).click();
		await delay(15000);
		await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[2]"))).to.eventually.exist;
		await delay(7000);
	});
		Then('ABP-0050 credit plan subscription is displayed', async () => {
		await delay(7000);
        element(by.xpath("//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/div/p[2]/a[1]")).click();
		await delay(1000);
		browser.waitForAngular();
		await delay(7000);                    
		await expect(browser.findElement(by.xpath("//*[@id='amasty-shopby-product-list']/div[1]/ul/li[1]/div[2]"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
	});
		When('ABP-0050 click on cancel credit plan', async () => {
		element(by.xpath(".//*[@id='cancel-credit-plan-btn']")).click();
		await delay(2000);
		browser.waitForAngular();
	});
		Then('ABP-0050 cancel credit plan prompt is displayed', async () => {
		await delay(7000);	
		await expect(browser.findElement(by.xpath(".//*[@class='cancel-credit-plan-btn']"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(5000);
		await expect(browser.findElement(by.xpath(".//*[@class='keep-credit-plan-btn']"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(5000);
		element(by.xpath(".//*[@class='cancel-credit-plan-btn']")).click();
		await delay(2000);
		browser.waitForAngular();
	});
		When('ABP-0060 click on your orders', async () => {
		await delay(5000);
		element(by.xpath("//a[@href='https://market.beta.formed.org/sales/order/history/']")).click();
		await delay(1000);
		browser.waitForAngular();
		await delay(5000);
	});
       Then('GFF-0080 Order detail modifications for Gift details are displayed', async () => {
	   await delay(5000);
       await expect(browser.findElement(by.xpath(".//*[@id='order-details']/div[3]/h2"))).to.eventually.exist;
	   browser.manage().timeouts().implicitlyWait(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='order-details']/div[1]/h2"))).to.eventually.exist;
	   browser.manage().timeouts().implicitlyWait(3000);
	   
    });
	 When('GFF-0070 click on Your Orders', async () => {
		await delay(5000);
		element(by.xpath("//a[@href='https://market.beta.formed.org/sales/order/history/']")).click();
		await delay(1000);
		browser.waitForAngular();
		await delay(4000);
	    element(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[5]/a/span")).click();
		await delay(10000);
	});
		Then('ABP-0070 orders page is displayed', async () => {
		await delay(5000);	
		await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[5]/a/span"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[1]"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
		element(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[5]/a/span")).click();
		await delay(2000);
		browser.waitForAngular();
	});
		Then('ABP-0070 View details is displayed', async () => {
		await delay(4000);	
		await expect(browser.findElement(by.xpath("//*[@id='order-details']/div[2]/div/h2"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='order-details']/div[1]/h2"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
	});
	When('click on logout button',async () => {
		await delay(5000);
		element(by.xpath(".//*[@id='account-dropdown-button']")).click();
		await delay(3000);
		element(by.xpath(".//*[@id='account-dropdown']/div/a[4]")).click();
		await delay(5000);
		browser.waitForAngular();
		await expect(browser.findElement(by.xpath(".//*[@id='login-dropdown-button']"))).to.eventually.exist;
		await delay(3000);
	 });
	 When('i move to shops products', async () => {
	    await delay(5000);
        browser.actions().mouseMove(element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']"))).perform();
        await delay(5000);
	});
	When('i move to study products', async () => {
	    await delay(5000);
        browser.actions().mouseMove(element(by.linkText("Study"))).perform();
        await delay(5000);
	});
	When('i move to watch products', async () => {
	    await delay(5000);
        browser.actions().mouseMove(element(by.linkText("Watch"))).perform();
        await delay(1000);
	});
	When('i move to listen products', async () => {
	    await delay(5000);
        browser.actions().mouseMove(element(by.linkText("Listen"))).perform();
		await delay(2000);
	});
	When('i click on listen', async () => {
	    await delay(5000);
        element(by.linkText("Listen")).click();
		await delay(2000);
	});
	When('i move to read products', async () => {
	    await delay(5000);
        browser.actions().mouseMove(element(by.linkText("Read"))).perform();
        await delay(1000);
	});
	When('i move to subscription products', async () => {
	    await delay(10000);
        browser.actions().mouseMove(element(by.linkText("Subscriptions"))).perform();
        await delay(2000);                              
	});
	When('Click on subscription link', async () => {
	    await delay(7000);
        element(by.linkText("Subscriptions")).click();
        await delay(2000);                              
	});
	When('PAP-0010 click on Talks', async () => {
		await delay(7000);
		element(by.xpath(".//*[@href='https://market.beta.formed.org/shop-products/listen/talks.html']")).click();
		await delay(1000);
		browser.waitForAngular();
        await delay(5000);
	});
	When('PPF-0020 click on second physical product', async () => {
		await delay(10000);
        element(by.xpath("//*[@id='amasty-shopby-product-list']/div[4]/ol/li[2]/div/a/img")).click();
        await delay(20000);
	});
	Then('PAP-0010 Talks page is displayed', async () => {
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='sorter']"))).to.eventually.exist;
        browser.manage().timeouts().implicitlyWait(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        browser.manage().timeouts().implicitlyWait(3000);
    });
    When('PAP-0020 i click on Item', async () => {
		await delay(5000);
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
		await delay(1000);
		browser.waitForAngular();
	});
	When('PAP-0010 i click on Item', async () => {
		await delay(5000);
        element(by.xpath("//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img")).click();
		await delay(1000);
		browser.waitForAngular();
	});
	Then('PAP-0020 Product details is displayed', async () => {    
		await delay(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
        browser.manage().timeouts().implicitlyWait(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(5000);
	});
	Then('PAP-0020 Product details are displayed', async () => {    
		await delay(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
        browser.manage().timeouts().implicitlyWait(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(5000);
    });
    Then('PAP-0020 Text, You May Also Like, Product card in right column with image, Add to cart button are displayed', async () => {
        await expect(browser.findElement(by.xpath(".//*[@id='related-products-slider']/div/div/div[1]/a/div/img"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='related-products-slider']/div/div/div[1]/a/span"))).to.eventually.exist;
		await delay(5000);   
		await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
        await delay(5000); 
	});
	Then('Click on Add to cart', async () => {     
		await delay(3000);
        element(by.xpath(".//*[@id='product-addtocart-button']")).click();    
        await delay(5000);
	});
	Then('GFF-0020 Click on Credit Plan Gift', async () => {     
		await delay(5000);   
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img")).click();    
		await delay(1000);
		browser.waitForAngular();
		await delay(5000);
	});
	When('PBP-0060 click on incart icon',async () => {
		await delay(5000);
		browser.navigate().refresh()
	    await delay(10000);
		element(by.xpath(".//*[@class='counter-number']")).click();
		await delay(3000);
	});
	Then('PBP-0060 Added product details is dispalyed',async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='mini-cart']/li/div/span/img"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='top-cart-btn-checkout']"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='mini-cart']/li/div/div/strong[1]/a"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
	});      
	 When('PBP-0060 click on title',async () => {
		await delay(5000);
		await expect(browser.findElement(by.xpath(".//*[@id='mini-cart']/li/div/div/strong[1]/a"))).to.eventually.exist;
		browser.manage().timeouts().implicitlyWait(3000);
	    element(by.xpath(".//*[@id='mini-cart']/li/div/div/strong[1]/a")).click();
		await delay(1000);
		browser.waitForAngular();
	});
	When('PAP-0050 click on product in you may also like', async () => {
		await delay(3000);
        element(by.xpath(".//*[@id='related-products-slider-desktop']/div/div/div[1]/a/div/img")).click();
		await delay(1000);
		browser.waitForAngular();
	});
	When('Click on Product in Audio Dramas', async () => {
		await delay(5000);
        element(by.xpath("//*[@id='amasty-shopby-product-list']/div[3]/ol/li[5]/div/a/img")).click();
		await delay(1000);
		browser.waitForAngular();
	});
	When('PBP-0050 click on product in you may also like', async () => {
		await delay(5000);
        element(by.xpath(".//*[@id='related-products-slider-desktop']/div/div/div[3]/a/div/img")).click();
		await delay(2000);
		browser.waitForAngular();
	});
	When('PBP-0060 click on remove option',async () => {
	    element(by.xpath(".//*[@id='mini-cart']/li[2]/div/div/div[2]/div/a")).click();
		await delay(3000);
		browser.waitForAngular();
		await delay(3000);
	});
	Then('PBP-0060 Item Remove prompt is displayed and click on OK button',async () => {
		await expect(browser.findElement(by.xpath(".//*[@class='action-secondary action-dismiss']"))).to.eventually.exist;
	    await delay(3000);
	    element(by.xpath(".//*[@class='action-primary action-accept']")).click();
        await delay(10000);
	});
   When('Click on Checkout option',async () => {
		element(by.xpath(".//*[@class='counter qty']")).click();
		await delay(15000);
		browser.navigate().refresh()
	    await delay(10000);
		element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
		await delay(20000);		
   });
   When('PBP-0070 Click on create account',async () => {
	   await delay(10000);
		element(by.xpath(".//*[@id='checkout-step-billing']/div/div/a")).click();
		await delay(1000);		
		browser.waitForAngular();
 });
 When('PBP-0060 Click on checkout option',async () => {
	browser.navigate().refresh()
	await delay(10000);
	element(by.xpath(".//*[@class='counter qty']")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
	await delay(20000);
 });
 Then('PBP-0070 Enter Billing information', async () => { 
    await delay(10000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='12']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("60014");
	await delay(5000);
});
Then('PBP-0070 Enter Payment Method', async () => { 
	await delay(10000);
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4242424242424242");
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[2]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("123");
	await delay(3000);
	element(by.xpath(".//*[@id='checkout-step-payment']/div/div[3]")).click();
	await delay(5000);
});
Then('PBP-0070 Verify the Checkout Page', async () => { 
	element(by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-step-review']/div[5]/div/button")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(10000);
});

Then('PBP-0070 Click on purchase product in library page', async () => { 
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img")).click();
	await delay(1000);
	browser.waitForAngular();
});
Then('PBP-0070 View in library is displayed', async () => {   
	await delay(5000);   
	await expect(browser.findElement(by.xpath(".//*[@id='product-viewinlibrary-button']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000);
});
Then('PBP-0070 Enter Billing information California', async () => { 
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='12']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("60014");
	await delay(5000);	
});
Then('PBP-0070 Enter Billing information Location Colorado', async () => { 
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='13']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("80111");
	await delay(5000);	
});
Then('PBP-0070 Enter Billing information Location Nevada', async () => { 
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='39']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("89151");
	await delay(5000);	
});
Then('PBP-0070 Enter Billing information Location New Jersey', async () => { 
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='41']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("07002");
	await delay(5000);	
});
Then('PBP-0070 Enter Billing information Location Illinois', async () => { 
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='23']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("60620");
	await delay(5000);	
});
Then('PBP-0070 Order Confirmation is displayed for Group', async () => {         
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[5]/button"))).to.eventually.exist;
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div/div[1]/strong"))).to.eventually.exist;
	await delay(10000);
	element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[5]/button")).click();
	await delay(10000);
	element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[5]/button")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(10000);
});
Then('PBP-0070 Enter Shipping information Location Colorado', async () => { 
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='13']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("80111");
	await delay(15000);	
});
Then('PBP-0070 Enter Shipping information Location Nevada', async () => { 
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='39']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("89151");
	await delay(5000);	
});
Then('PBP-0070 Enter Shipping information Location New Jersey', async () => { 
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='41']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("07002");
	await delay(15000);	
});
Then('PBP-0070 Enter Shipping information Location Illinois', async () => { 
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='23']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("60620");
	await delay(5000);
});
Then('PBP-0070 Enter Shipping information Location California', async () => { 
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='12']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("60014");
	await delay(5000);
});
Then('PPF-0030 Select Shipping speed', async () => { 
	await delay(10000);
    element(by.xpath(".//*[@id='checkout-shipping-method-load']/div[2]/label/span")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-step-shipping']/div[6]/div/button")).click();
	await delay(5000);
});
Then('Click on continue button', async () => { 
	await delay(10000);
	element(by.xpath(".//*[@id='checkout-step-shipping']/div[6]/div/button")).click();
	await delay(5000);
});
Then('PBP-0070 select Shipping Service Speed', async () => { 
	await expect(browser.findElement(by.xpath(".//*[@id='checkout-shipping-method-load']/div[5]/label/span"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@id='checkout-shipping-method-load']/div[5]/label/span")).click();
	await delay(10000);
});
Then('GFF-0130 click on continue button', async () => { 
	await delay(5000);
	element(by.xpath("//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
	await delay(5000);
});
Then('Click on Submit button', async () => { 
	await delay(3000);
	element(by.xpath("//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys('Raj@2016');
	await delay(3000); 
	element(by.xpath("//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
	await delay(6000); 
});
Then('Click on Submit button in Ondemand', async () => { 
	await delay(3000);
	element(by.xpath("//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys('Raj@2016');
	await delay(3000); 
	element(by.xpath("//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
	await delay(6000); 
});
Then('GFF-0060 Order Confirmation is displayed', async () => {         
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[2]/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);   
	await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/mylibrary/']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('PBP-0070 Order Confirmation is displayed', async () => {         
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[2]/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(5000);
	await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/mylibrary/']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(5000);
	element(by.xpath(".//*[@href='https://market.beta.formed.org/mylibrary/']")).click();
	await delay(3000);
	browser.waitForAngular();
	//element(by.linkText("Order Date")).isDisplayed();
	//element(by.linkText("1Year FORMED On Demand Gift Subscription")).isDisplayed();
	//element(by.linkText("Payment summary")).isDisplayed();
	//element(by.linkText("Sent to: Fname Lname")).isDisplayed();
	//element(by.linkText("rajeshnakka.c212c@gmail.com")).isDisplayed();
});
When('PBP-0070 Click on view in library', async () => {
  await delay(3000);
  element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[5]/button")).click();
  await delay(10000);
});
When('PPF-0040 Click on Tax Exempt', async () => {
	await delay(3000);
	element(by.xpath(".//*[@id='tax-code']")).click();
	await delay(5000);
});
  Then('PPF-0040 Enter the Tax amount coupon', async () => {   
	  await delay(5000);   
	  element(by.xpath(".//*[@id='tax-code']")).sendKeys('Avalara');
	  await delay(10000);
	  element(by.xpath(".//*[@id='tax-form']/div[1]/div[2]/div/button")).click();
	  await delay(10000);
  });
Then('Click on Product in watch', async () => {
   element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
   await delay(2000);
   browser.waitForAngular();
});
When('CO-0010 Click on Watch in Digital products', async () => {
	await delay(8000);
	element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/a/label/div")).click();
	await delay(10000);
});
Then('Click on Product2 in Talks', async () => {
	await delay(15000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
	await delay(10000);  
}); 
Then('CO-0010 Verify Check Out in Cart', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='mini-cart']/li[1]/div/div/strong[1]/a"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@id='mini-cart']/li[1]/div/div/strong[1]/a")).click();
	await delay(10000);
 });
 Then('CO-0020 Cart should contain added products', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-alreadyincart-button']"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath(".//*[@id='product-alreadyincart-button']")).click();
	await delay(10000);
  });
  Then('CO-0030 delete product from Cart', async () => {
   element(by.xpath(".//*[@id='mini-cart']/li[2]/div[1]/div/div/div/a")).click();
   await delay(2000);
   browser.waitForAngular();
  });
  When('PBC-0040 click on Entercoupon', async () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='discount-code']"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath(".//*[@id='discount-code']")).sendKeys('testgas');
	await delay(5000);
	element(by.xpath(".//*[@id='discount-form']/div/div[2]/div/button")).click();
	await delay(5000);
});
Then('PBC-0100 TOTAL amount is displayed', async () => {
	await delay(10000);
	await expect(element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div/div[11]/div[2]/strong/span")).getText()).to.eventually.equal("$625.00");
	browser.manage().timeouts().implicitlyWait(3000);           
});
  Then('CO-0040 Create Account and Continue login is displayed', async () => {
	await delay(7000);
	await expect(browser.findElement(by.xpath(".//*[@id='checkout-step-billing']/p/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000);
	await expect(browser.findElement(by.xpath(".//*[@href='/customer/account/create?onSuccess=onestepcheckout']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000);
	await delay(4000);
  });
  Then('PBC-0020 Enter Purchase Order', async () => { 
    await delay(5000);
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[3]/div[2]/div[1]/div/input")).sendKeys("test");
	await delay(5000);
});
  Then('Click on Checkout in Cart Summary', async () => {  
	await delay(10000);     
	element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click(); 
	await delay(2000);   
	browser.waitForAngular();
});
Then('CO-0050 Enter Details in create Account', async () => {
	var x = 9999999;
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("5000");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("sair7989@gmail.com");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("krishna@123");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Krishna@123");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
	await delay(20000);   
});  
When('VR-0020 Click on the create an account', async () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath("//*[@id='checkout-step-billing']/div/div/a"))).to.eventually.exist;
    await delay(3000);
	element(by.xpath("//*[@id='checkout-step-billing']/div/div/a")).click();
	await delay(5000);
	browser.waitForAngular();
});
When('SGB-0060 Conformation prompt is displayed', async () => {
	await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@value='OK']"))).to.eventually.exist;
    await delay(3000);
    element(by.xpath(".//*[@value='OK']")).click();
	await delay(10000);
	//html/body/div[5]/div/div/group-finish-init/div[2]/div[2]/div/div/p/button
});
Then('SGB-0070 leader check list is displayed', async () => {
	await delay(25000);
	browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("//*[@id='leaders-wrapper']/div[2]/div[1]/div[1]/div/a/button"))).to.eventually.exist;
    await delay(3000);
});
Then('CPS-0060 Enter Billing Information', async () => { 
	browser.navigate().refresh()
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
	await delay(5000);
	//element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
	await delay(5000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
	
	await delay(5000);
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
	await delay(1000);
	//element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
	await delay(1000);
	element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
	await delay(10000);
});
Then('CPS-0060 Enter Payment Method', async () => { 
        
	//await delay(5000);
	//element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
	
	await delay(5000);
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4111111111111111");
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[7]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[3]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("222");
	await delay(1000);
	element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[6]/div/button")).click();
	await delay(10000);
});
When('i click on user name drop down', async () => {  
	element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	await delay(3000);
});
When('ABP-0010 click on get credit plan', async () => {
	await delay(20000);
	element(by.xpath("html/body/header/section[2]/div[8]/div/a/span")).click();
	await delay(1000);
	browser.waitForAngular();
});
Then('click on watch Feature Films product', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[5]/div/a/img")).click();
	await delay(20000);
});
When('click on credits', async () => {
    await delay(10000);
	await expect(browser.findElement(by.xpath("//*[@id='amasty-shopby-product-list']/div[1]/ul/li[1]/form/button"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000);
	element(by.xpath("//*[@id='amasty-shopby-product-list']/div[1]/ul/li[1]/form/button")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(3000);
	element(by.xpath(".//*[@class='counter qty']")).click();
	await delay(3000);
	browser.navigate().refresh()
	await delay(10000);
	element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
	await delay(1000);
	browser.waitForAngular();
});
Then('CO-0080 Enter CVV', async () => {
	browser.waitForAngular();
	await delay(20000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys('123');
	await delay(3000);
});
Then('CO-0080 Click on place Order', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-step-review']/div[5]/div/button")).click();
	await delay(5000);
	browser.waitForAngular();
});
Then('PPF-0080 Click on place Order', async () => {
	await delay(15000);
	element(by.xpath("//*[@id='checkout-step-payment']/div/div[3]/div/button/span")).click();
	await delay(5000);
	element(by.xpath("//*[@id='checkout-step-review']/div[5]/div/button/span")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
});
Then('GFF-0140 Click on continue button', async () => {
	await delay(10000);
	element(by.xpath("//*[@id='checkout-step-payment']/div/div[3]/div/button/span")).click();
	await delay(15000);
});
When('click on watch document product', async () => {
	await delay(5000);
	element(by.xpath("html/body/header/section[3]/section/div[1]/div[2]/div/ul/li[2]/div/a")).click();
	await delay(15000);
});
Then('click on watch document', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[8]/div/div/strong/a")).click();
	await delay(15000);
});
Then('click on watch document1', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[13]/div/a/img")).click();
	await delay(15000);
});
Then('CPS-0080 Order Confirmation is displayed', async () => { 
	await delay(15000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[2]/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/header/h1"))).to.eventually.exist;
	await delay(5000);
});
Then('PPF-0050 Physical product order confirmation page is displayed', async () => { 
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@class='item-category-title']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('PPF-0070 Physical and Digital products order confirmation page is displayed', async () => { 
	await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@class='item-category-title']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/mylibrary/']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('CPS-0010 there is get credit plan', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("html/body/header/section[2]/div[8]/div/a/span"))).to.eventually.exist;
	//element(by.xpath("html/body/header/section[1]/div[8]/div/a/span")).isDisplayed();
});
Then('click on product', async () => {
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img")).click();
	await delay(10000);
});
Then('CPS-0020 Get Credit Plan prompt is displayed', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("html/body/header/section[2]/div[8]/div/a/span"))).to.eventually.exist;
	await delay(10000);
});       
When('CPS-0030 i click on get credits plan', async () => {      
  element(by.linkText("Get Credit Plan")).click();
  await delay(1000);
  browser.waitForAngular();
});
Then('CPS-0030 get credits plan link is displayed', async () => {      
 await delay(7000)
 await expect(browser.findElement(by.xpath(".//*[@id='offer-dt']/p[4]/a/button"))).to.eventually.exist;
 browser.manage().timeouts().implicitlyWait(3000);
}); 
When('CPS-0050 Click on Monthly credit plan', async () => {  
   await delay(5000);        
   element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[2]/form/button")).click();
   await delay(1000);
   browser.waitForAngular();
});	
Then('CPS-0090 Available credits are displayed', async () => { 
	await delay(5000);
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@class='counter amount']"))).to.eventually.exist;
	await delay(5000);
});
Then('Account option is dispalyed in user drop down', async () => {     
    await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
When('i click on account', async () => {       
    element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
	await delay(2000);
	browser.waitForAngular();
	await delay(3000);
});	
When('CPS-0100 Click on Annual credit plan', async () => {          
	await delay(3000);
	await expect(browser.findElement(by.xpath("//*[@id='amasty-shopby-product-list']/div[1]/ul/li[4]/form/button"))).to.eventually.exist;
    await delay(5000);
    element(by.xpath("//*[@id='amasty-shopby-product-list']/div[1]/ul/li[4]/form/button")).click();
    await delay(5000);
});
Then('CPS-0100 Click on Change credit plan', async () => {  
	await delay(2000);       
	element(by.xpath("//a[@href='https://market.beta.formed.org/formed/account/subscriptions/']")).click();
	browser.waitForAngular();
	await delay(5000);
	element(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[1]/div/div/span[3]")).click();
	await delay(5000);
	element(by.xpath("//a[@href='/creditplans.html']")).click();
	await delay(4000);
});
Then('CPS-0110 Click on Cancel Credit Plan', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/formed/account/subscriptions/']")).click();
	browser.waitForAngular();
	await delay(5000);
	element(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[1]/div/div/span[3]")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='cancel-credit-plan-btn']")).click();
	await delay(10000);
	element(by.xpath(".//*[@class='cancel-credit-plan-btn']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(7000);
});
Then('CO-0050 Verify Details in create Account', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(30000)
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(30000)
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(30000)
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(30000)
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000)
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000)
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label/span[2]"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(30000)
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000)
});
When('click on get credit plan in market view', async () => {
	await delay(6000);
	element(by.linkText("Get Credit Plan")).click();
	await delay(1000);
	browser.waitForAngular;
});
Then('click on watch Documentreies product1', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[9]/div/a/img")).click();
	await delay(1000);
	browser.waitForAngular();
});
Then('CO-0100 Click on Apply credits', async () => {
	await delay(10000);
	element(by.xpath(".//*[@id='checkout-review-table']/tbody/tr[1]/td[2]/div/div/div[3]/label/span")).click();
	await delay(5000);
});
Then('FFC-0020 Navigate to community page', async () => {
	await delay(10000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
	await delay(15000); 
});
Then('Navigate to community page', async () => {
	await delay(10000);
    element(by.xpath("//a[@href='https://beta.formed.org//community']")).click();
	await delay(1000);
	browser.waitForAngular(); 
});
Then('FFC-0030 Formed Funding goal is displayed and click on Contribute button', async () => {
	await delay(8000);
	element(by.xpath("//*[@id='community-tabs']/ul/li[1]/a/tab-heading/div/h2")).click();
	await delay(3000); 
    element(by.xpath(".//*[@class='btn btn-inverted btn-large']")).click();
	await delay(3000); 
	browser.waitForAngular();
});
Then('FFC-0030 Click on Our Community in Community Tab', async () => {
	await delay(15000);
	element(by.xpath("//*[@id='community-tabs']/ul/li[1]/a/tab-heading/div/h2")).click();
	await delay(3000); 
});
Then('FFC-0280 click on monthly and Contribution is entered', async () => {
	await delay(10000);
	element(by.xpath(".//*[@id='product-options-wrapper']/div/div[1]/div[2]/div/label/span")).click();
	await delay(1000); 
	browser.waitForAngular();
	await delay(5000);
	element(by.xpath(".//*[@id='product-options-wrapper']/div/div[2]/input")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='product-options-wrapper']/div/div[2]/input")).sendKeys('100');
	await delay(3000);
});
When('FFC-0340 Formed funding Account prompt is displayed', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("html/body/div[3]/aside[1]/div[2]/footer/button"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='has-recurring-modal']/p"))).to.eventually.exist;
	await delay(3000);
});
Then('FFC-0340 click on Go To Account page', async () => {
	await delay(5000);
	element(by.xpath("html/body/div[3]/aside[1]/div[2]/footer")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(3000);
});
Then('FFC-0280 click on Next button', async () => {
	await delay(8000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(10000);
});
Then('FFC-0280 Next button is enable and click on Next button', async () => {
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(10000);
	element(by.xpath(".//*[@id='checkout-step-billing']/div[1]/div/select")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-step-billing']/div[1]/div/select/option[2]")).click();
	await delay(10000);
});
Then('FFC-0290 Enter Billing information', async () => {
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(2000);
	element(by.xpath(".//*[@value='12']")).click();
	await delay(2000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("60014");
	await delay(2000);	
	element(by.xpath(".//*[@id='magedelight_cybersource_payment_profile_id']")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='magedelight_cybersource_payment_profile_id']/option[2]")).click();
	await delay(1000);
	browser.waitForAngular();
});
When('FFC-0290 Enter payment method', async () => {
	await delay(8000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys('4242424242424242');
	browser.manage().timeouts().implicitlyWait(3000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[2]")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys('123');
	await delay(3000);
	element(by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='checkout-step-review']/div[4]/div/button")).click();
	await delay(5000);
});
Then('FFC-0300 Order conformation page is displayed', async () => {
	await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/h2"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('FFC-0040 Formed Funding Campaign page is displayed', async () => {
	await delay(15000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-options-wrapper']/div/div[1]/div[1]/div/label/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[3]/div/div[1]/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	element(by.xpath(".//*[@id='product-options-wrapper']/div/div[2]/input")).click();
	await delay(5000); 
	element(by.xpath(".//*[@id='product-options-wrapper']/div/div[2]/input")).sendKeys('50');
	await delay(3000);
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(3000);
	browser.waitForAngular();
});
When('FFC-0050 Enter the credit card Cvv number', async () => {
	await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys('123');
	await delay(3000);
	element(by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
	await delay(3000);
	element(by.xpath("//*[@id='checkout-step-review']/div[4]/div/button")).click();
	await delay(5000);
	browser.waitForAngular();
});
Then('FFC-0060 Conformation Contribution is displayed', async () => {
	await delay(10000);
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/strong/span")).getText()).to.eventually.equal('$50.00');
	await delay(5000);
});
Then('FFC-0070 click on View button in Account page', async () => {
	await delay(5000);
    await expect(element(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[3]/span")).getText()).to.eventually.equal('$50.00');
	await delay(5000);
	element(by.xpath(".//*[@href='https://beta.formed.org/']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
});
Then('PPF-0080 market Tax amount', async () => {
	await delay(5000);
    await expect(element(by.xpath("//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div/div[5]/div[2]/span")).getText()).to.eventually.equal('$0.00');
	await delay(5000);
});
Then('FFC-0080 order Details is displayed', async () => {
	await expect(element(by.xpath(".//*[@id='maincontent']/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[5]/div[2]/strong/span")).getText()).to.eventually.equal('$50.00');
	await delay(5000);
	element(by.xpath(".//*[@href='https://beta.formed.org/']")).click();
	browser.waitForAngular();
	await delay(10000);
});
When('FFC-0090 Formed Funnding Contribution is displayed', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("//*[@id='community-tabs']/div/div[1]/div[1]/organization-header/div/div[2]/crowd-funding-widget/div/div/div[3]/div/a"))).to.eventually.exist;
	await delay(5000);                          
});
Then('CO-0100 click on apply credits', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='minicart-apply-credits']/button[1]"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='minicart-apply-credits']/button[2]"))).to.eventually.exist;
    await delay(1000);
	element(by.xpath(".//*[@id='minicart-apply-credits']/button[1]")).click();
	browser.waitForAngular();
    await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[4]"))).to.eventually.exist;
    await delay(2000); 
});
Then('HPF-0020 market details are displayed', async () => {
	await delay(8000); 
	await expect(browser.findElement(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='login-dropdown-button']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('HPF-0020 move to Study products', async () => {
	browser.actions().mouseMove(element(by.linkText("Study"))).perform();
	await delay(3000);
	//await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/study/faith-formation.html']"))).to.eventually.exist;
	//await delay(2000);
	//await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/study/bible-studies.html']"))).to.eventually.exist;
	//await delay(2000);
});
When('HPF-0020 move to Watch products', async () => {
	browser.actions().mouseMove(element(by.linkText("Watch"))).perform();
	await delay(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/feature-films.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/documentaries.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/tv-shows.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/talks.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/spanish.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('HPF-0020 move to Subscriptions', async () => {
	browser.actions().mouseMove(element(by.linkText("Subscriptions"))).perform();
	await delay(5000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/all-products/formed-subscriptions/on-demand.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('HPF-0020 move to Read products', async () => {
	browser.actions().mouseMove(element(by.linkText("Read"))).perform();
	await delay(5000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/nonfiction.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/fiction.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/youth.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/espa-ol.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('GFF-0010 navigate to subscriptions', async () => {
    await delay(2000); 
	browser.actions().mouseMove(element(by.linkText("Subscriptions"))).perform();
	await delay(2000);                              
});
When('GFF-0010 Click on Gift Subscriptions', async () => {
	await delay(2000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/all-products/formed-subscriptions/gift-subscriptions.html']")).click();
	browser.waitForAngular();
});
Then('GFF-0010 On Demand and Gift Subscriptions are displayed', async () => {
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/all-products/formed-subscriptions/on-demand.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/all-products/formed-subscriptions/gift-subscriptions.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('GFF-0010 Giftable Products are displayed', async () => {
    await delay(15000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('HPF-0020 products page is displayed', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[1]/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('Click on Start Shopping in Library page', async () => {
    await delay(5000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/section/a")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(2000);
});
When('HPF-0080 purchase products is displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('HPF-0020 move to Listen products', async () => {
	browser.actions().mouseMove(element(by.linkText("Listen"))).perform();
	await delay(5000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/talks.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/audio-dramas.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/audiobooks.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/espa-ol.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('i click on search icon and enter text', async () => {
	element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
	await delay(4000);
	element(by.xpath(".//*[@id='search']")).sendKeys("Listen");
	await delay(2000);                  
	element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
	await delay(6000);
 });
When('HPF-0030 click on demand page', async () => {
    await delay(10000);
	element(by.xpath(".//a[@href='https://beta.formed.org/']")).click();
	await delay(1000); 
	browser.waitForAngular();
	await delay(80000);                         
});
When('HPF-0050 i click on library link', async () => {
    await delay(10000);
	element(by.xpath(".//a[@href='https://market.beta.formed.org/mylibrary/']']")).click();
	await delay(15000);
});
Then('your library is  empty and some message is displayed',async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/h1"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/p/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
 });
 When('HPF-0060 Click on user name', async () => {
	await delay(20000);
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('HPF-0070 login user market page details', async () => {	   
   await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/shop-products.html']"))).to.eventually.exist;
   await delay(3000);
   await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown-button']"))).to.eventually.exist;
   await delay(3000);
   await expect(browser.findElement(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
   await delay(3000);
 });
When('HPF-0080 click on library page', async () => {
  element(by.xpath("//a[@href='https://market.beta.formed.org/mylibrary/']")).click();
  await delay(10000);
});
When('HPF-0080 show purchase products', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/a/img"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[2]/div/div/a/img"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[3]/div/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
When('LP-0020 click on library page', async () => {
	await delay(7000);
    element(by.xpath(".//a[@href='https://market.beta.formed.org/mylibrary/']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(10000);
});
Then('LP-0030 Purchase products is displayed', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[1]/a/label"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/h1"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('LP-0050 click on watch', async () => {
	element(by.xpath(".//*[@id='filters-container']/li/ol/li[1]/a/label")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(4000);
});
Then('LP-0050 watch purchased products are displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[1]/ol/li[1]/a/label/div[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/a/img"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='open-modal-mylibrary-player-1969']/i"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[1]/ol/li[2]/a/label/div[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	element(by.xpath(".//*[@id='open-modal-mylibrary-player-1969']/i")).click();
	await delay(10000);
});
Then('LP-0060 click on play button', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='close-modal-mylibrary-player-1969']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
});
When('LP-0070 click on Listen', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[2]/a/label/div[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	element(by.xpath(".//*[@id='filters-container']/li/ol/li[2]/a/label/div[1]")).click();
	await delay(5000);
});
When('LP-0070 Listen purchased products are displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/div[2]/strong/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[2]/ol/li/a/label/div[2]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	element(by.xpath(".//*[@id='open-modal-mylibrary-player-1665']/i")).click();
	await delay(10000);
});
Then('LP-0070 click on play button', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='close-modal-mylibrary-player-1665']")).click();
	await delay(5000);
});
When('LP-0040 click on Title string', async () => {
	element(by.xpath(".//*[@id='sorter']")).click();
	await delay(5000);                         
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[2]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000); 
});
When('LP-0080 click on Read', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='filters-container']/li/ol/li[3]/a/label/div[1]")).click();
	await delay(10000);
});
When('LP-0080 Read products are displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[2]/div/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[3]/ol/li[1]/a/label/div[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('LP-0090 Download format is displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='ebook-download-modal-2297']/div/div[1]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='ebook-download-modal-2297']/div/div[2]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('LP-0090 Click on download icon', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='open-ebook-download-modal-2297']/i")).click();
	await delay(10000);
});
Then('LLP-0010 Formed icon, Ondemand, Library, Market are displayed', async  () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@title='On Demand']"))).to.eventually.exist;	
	browser.manage().timeouts().implicitlyWait(3000);  
	await expect(browser.findElement(by.xpath(".//*[@title='Community']"))).to.eventually.exist;  
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/mylibrary/']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/']"))).to.eventually.exist;
	await delay(5000); 
});
When('i click on login button to verify for forgot password', async  () => { 
	await delay(5000); 
	element(by.xpath(".//*[@id='login-dropdown-button']")).click();
	await delay(5000);   
});
Then('LLP-0020 Email, Password, submit, Forgot password are displayed', async  () => { 
	await delay(10000);  
	await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[3]/a"))).to.eventually.exist;
	await delay(5000);  
});
When('LLP-0040 When click on Forgot Password', async  () => {
	await delay(5000); 
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[3]/a")).click();
	await delay(2000);
});
Then('LLP-0040 Prompt is displayed to enter email', async  () => {
	element(by.xpath(".//*[@id='login-dropdown-button']")).click();
	await delay(3000);   
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='gigya-forgot-password-screen']/form/div/div[1]/div/input"))).to.eventually.exist;
	await delay(2000);
});
Then('click on back to enter email', async  () => {
    await delay(2000);
	element(by.xpath(".//*[@id='gigya-forgot-password-screen']/form/div/div[3]/label/a")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='login-dropdown-button']")).click();
	await delay(3000); 
});
When('LLP-0050 Click on account drop down for parish user', async  () => {
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("hsbahdtdyygu@gmail.com");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Honey@123");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
	await delay(1000);
	browser.waitForAngular();
    await delay(15000);
	element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	await delay(5000);
});
Then('LLP-0060 Name and Email are displayed', async  () => {
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/p"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/h2"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('LLP-0050 Account, subscription, dashboard, logout are displayed', async  () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[2]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[3]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[4]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[5]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('LLP-0060 Click on Account in username drop down', async  () => {
          
	element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
	await delay(5000);
});
Then('LLP-0060 Name, Email, Password are displayed', async  () => {
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/p"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/h2"))).to.eventually.exist;
	await delay(2000);
});
When('LLP-0080 Click on Subscription in username drop down', async  () => {
	await delay(10000);
	element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='account-dropdown']/div/a[2]")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(3000);
});
Then('LLP-0080 Subscription, Parish, Payment information are displayed', async  () => {
    await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='parishCode']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('LLP-0110 Click on dashboard in username drop down', async  () => {  
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(8000);
});
When('LLP-0120 Click on logout button', async  () => {
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
	await delay(5000);
});
When('LLP-0050 Click on username drop down for individual user', async  () => {
	await delay(10000);
	element(by.xpath(".//*[@id='simple-dropdown']")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("invalid1477227@gmail.com");
	await delay(3000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("Raj@2016");
	await delay(3000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(10000);
	element(by.xpath("//*[@id='simple-dropdown']/i")).click();
	await delay(2000);
});
When('GFF-0020 click on On Demand Gift subscription', async  () => {
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img")).click();
	await delay(20000);
});
Then('LLP-0050 Account, Subscription, logout are displayed', async  () => {
	await delay(15000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('LLP-0100 Click on Subscription for individual user', async  () => {
	await delay(5000);
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
	await delay(10000);
});
Then('LLP-0100 Subscription payement is displayed', async  () => {
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div/div/div/div/div[2]/div/div[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div/div/div/div/div[2]/div/div[2]/div/modal-link/a/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
})
Then('click on ondemand subscription' , async () => {
	await delay(10000);
    element(by.xpath("//a[@href='https://market.beta.formed.org/all-products/formed-subscriptions/on-demand.html']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(10000);
    element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
	await delay(1000);
	browser.waitForAngular();
});
Then('click on Group ondemand subscription' , async () => {
	browser.waitForAngular();
	await delay(10000);
	element(by.xpath("//*[@id='amasty-shopby-product-list']/div[3]/ol/li[5]/div/a/img")).click();
	await delay(3000);
});
Then('VR-0020 sign in group detail is displayed', async  () => {  
	await delay(10000);
	element(by.xpath(".//*[@id='attribute201']/div[1]/label/span")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
	await delay(4000);
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(3000);
	browser.waitForAngular();
});
Then('VR-0020 sign in group details are displayed', async () =>{
	await delay(10000);
	element(by.xpath(".//*[@id='attribute201']/div[1]/label/span")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
	await delay(4000);
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(3000);
	browser.waitForAngular();
})
Then('VR-0020 Click on Add To Cart button', async  () => {  
	await delay(15000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
	await delay(7000);
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(3000);
	browser.waitForAngular();
});
Then('VR-0020 click on checkout button', async  () => {
	browser.navigate().refresh();
	await delay(10000);
	element(by.xpath(".//*[@class='counter-number']")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
	await delay(10000);
});
Then('GFF-0030 About Gifting information is displayed', async  () => {  
	await delay(7000);
	await expect(browser.findElement(by.xpath(".//*[@id='about-modal']/h1"))).to.eventually.exist;
	await delay(2000);
	element(by.xpath("/html/body/div[3]/aside[2]/div[2]/footer/button[1]")).click();
	await delay(5000);
	element(by.xpath("/html/body/div[3]/aside[3]/div[2]/footer/button[1]")).click();
	await delay(5000);
});
Then('GFF-0030 About Gifting information is displayed for Digital products', async  () => {  
	await delay(7000);
	await expect(browser.findElement(by.xpath(".//*[@id='about-modal']/h1"))).to.eventually.exist;
	await delay(1000);
	element(by.xpath("/html/body/div[4]/aside[3]/div[2]/footer/button[1]")).click();
	await delay(5000);
	element(by.xpath("/html/body/div[4]/aside[2]/div[2]/footer/button[1]")).click();
	await delay(5000);
});
When('PBC-0010 click on pay by check' , async () => {
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[1]/div/div/div/select")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[1]/div/div/div/select/option[2]")).click();
    await delay(5000);
});
When('GFF-0020 Click on Gift Information check box' , async () => {
    await delay(5000);
    element(by.xpath(".//*[@id='group-subscription-organization']/div[1]/label/span")).click();
    await delay(10000);
});
Then('PBC-0020 Billing information are displayed', async () => { 

    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div/input")).sendKeys("test");
    await delay(5000);
    element(by.xpath(".//*[@name=street[0]]")).sendKeys("Chicago illonois");
    await delay(5000);
    element(by.xpath(".//*[@name=city")).sendKeys("Chicago");
    await delay(1000);
    element(by.xpath(".//*[@name=region_id")).click();
	await delay(5000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
    await delay(1000);
    element(by.xpath(".//*[@name=country_id]")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/div[8]/div/select/option[219]")).click();
    await delay(1000);
    element(by.xpath(".//*[@name=telephone]")).sendKeys("9898985555");
    await delay(3000);
    element(by.xpath(".//[@name=postcode]")).sendKeys("60014");
    await delay(1000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[10]/div/button[1]")).click();
    await delay(5000);
});
When('PBCC-0040 click on Entercupon', async () => {
	await delay(8000);
	element(by.xpath(".//*[@id='coupons-tax-exempt']/div[1]/strong/a")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input")).sendKeys("2018FormedSP");
	await delay(2000);
	element(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/button[1]")).click();
    await delay(2000);
});
When('PBC-0030 order conformation is displayed', async () => {
	await delay(20000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[2]/span"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("//a[@href='https://beta.formed.org/']"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('Billing amount shows in Account overview page and Ondemand subpanel', async () => {
	await delay(10000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/formed/account/']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000); 
	await expect(element(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[1]/div[1]/div/div[3]/span[2]")).getText()).to.eventually.equal('$925.00');
	await delay(5000); 
});
Then('PBC-0120 click on account page in user dropdown', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(3000);
});
When('click on Dashboard', async () => {
    element(by.xpath(".//*[@id='account-dropdown-button']")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
    await delay(20000);
});
When('click on login user in ondemand page', async () => { 
    element(by.xpath(".//*[@class='initials ng-binding']")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
    await delay(10000);
});
When('subscription information is displayed', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[2]/div/div[1]"))).to.eventually.exist;
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[1]/div[1]/a"))).to.eventually.exist;
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[2]/div/div[2]/div/modal-link/a/span"))).to.eventually.exist;
    await delay(5000);
});
Then('VR-0010 entercode,getfreetrail,sign up group is displayed', async  () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div[2]/registration-column/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div[3]/registration-column/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div[4]/registration-column/modal-link/a/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000);
});
When('VR-0010 click on Sign up group', async () => { 
    element(by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div[3]/registration-column/a")).click();
	await delay(3000);
	browser.waitForAngular();
});
Then('VR-0030 Billing information are displayed', async () => { 
	browser.navigate().refresh();
	element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
	await delay(12000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
	await delay(5000);
	element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
	await delay(1000);
	element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[9]/div/input")).sendKeys("9898985555");
	await delay(3000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
	await delay(1000);
	element(by.xpath(".//*[@id='billing-new-address-form']/div[10]/div/button[1]")).click();
	await delay(5000);
});
Then('VR-0030 Enter Payment Method', async () => { 
	
	//await delay(5000);
	//element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
	
	await delay(5000);
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4242424242424242");
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[2]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("123");
});
Then('SGB-0010 Enter Payment Method with Form fund', async () => { 
	await delay(5000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
	browser.manage().timeouts().implicitlyWait(2000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4242424242424242");
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[2]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
	browser.manage().timeouts().implicitlyWait(2000);
    element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("123");
    await delay(5000);
	browser.waitForAngular(); 
    element(by.xpath(".//*[@id='checkout-step-payment']/div/div[2]/div/label/span")).click();
	await delay(2000);   
});
Then('SGB-0020 agree for terms of Funding', async () => {
	await delay(5000);
	browser.manage().timeouts().implicitlyWait(2000);
	await expect(browser.findElement(by.xpath("/html/body/div[4]/aside[4]/div[2]/footer/button[1]"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath("/html/body/div[4]/aside[4]/div[2]/footer/button[1]")).click();
	await delay(5000);
});
Then('SGB-0020 Set goal', async () => {
	await delay(8000);
	browser.manage().timeouts().implicitlyWait(2000);
	await expect(browser.findElement(by.xpath("/html/body/div[4]/aside[2]/div[2]/footer/button[1]/span"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath("/html/body/div[4]/aside[1]/div[2]/footer/button[1]/span")).click();
	await delay(3000);
	element(by.xpath("/html/body/div[4]/aside[2]/div[2]/footer/button[1]/span")).click();
	await delay(3000);
});
Then('VR-0040 Place Order button is displayed and click on place order button', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='checkout-step-review']/div[5]/div/button"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-step-review']/div[5]/div/button")).click();
	await delay(3000);
	browser.waitForAngular();
});
Then('VR-0050 Place Order button is displayed and click on place order button', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='checkout-step-review']/div[5]/div/button"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath("//*[@id='checkout-step-review']/div[5]/div/button")).click();
	await delay(25000);
	browser.waitForAngular();
});
When('SGB-0020 Click on Continue to Organisation', async () => {
	await delay(10000);
	element(by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
	await delay(2000);
	browser.waitForAngular();
});
When('click on Talks', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/talks.html']")).click();
	await delay(10000);
});
Then('SGB-0030 summary Page is displayed', async () => {
	await delay(15000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button"))).to.eventually.exist;
	await delay(5000);
});
Then('SGB-0040 Click on Setup group and verify', async () => {
	await delay(7000);
	element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button")).click();
	await delay(2000);
	browser.waitForAngular();
	await delay(10000);
});
Then('SGB-0050 Enter Organisation information is displayed', async () => {
	await delay(40000);
	await element(by.xpath(".//*[@id='groupLeader']")).click();
	//await delay(2000);
    await element(by.xpath(".//*[@id='groupLeader']")).sendKeys("Group loeade");
    await delay(2000);
    await element(by.xpath(".//*[@id='groupMission']")).sendKeys("Group Mission");
    await delay(2000);
    await element(by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/input[3]")).sendKeys("test");
	await delay(2000);
	await element(by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/custom-url/div/div/div[1]/input")).sendKeys("test");
    await delay(2000);
    await element(by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/input[4]")).click();
    await delay(2000);
    //.//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button
});
Then('SGB-0080 Enter Organisation information is displayed', async () => {
    await delay(3000);
    await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/input[3]"))).to.eventually.exist;
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/custom-url/div/div/div[1]/input"))).to.eventually.exist;
    await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@value='activate']"))).to.eventually.exist;
    await delay(10000);
});

Then('SGB-0050 Enter Organisation information', async () => {
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='groupName']"))).to.eventually.exist;
	await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='groupLeader']"))).to.eventually.exist;
    await delay(2000);
    //.//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button
});
When('VR-0050 click on Entercoupon', async () => {
	await delay(8000);
	await expect(browser.findElement(by.xpath(".//*[@id='discount-code']"))).to.eventually.exist;
    await delay(2000);
});
When('VR-0040 click on Entercupon', async () => {
	await delay(8000);
	element(by.xpath(".//*[@id='coupons-tax-exempt']/div[1]/strong/a")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[2]/input"))).to.eventually.exist;
	await delay(2000);
});
When('VR-0030 Choose organization', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='group-subscription-diocese-select']")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='group-subscription-diocese-select']/option[5]")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']/option[6]")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='group-subscription-organization']/div[4]/div/button")).click();
	await delay(5000);
});
When('VR-0040 Choose organization', async () => {
	element(by.xpath(".//*[@id='group-subscription-diocese-select']")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='group-subscription-diocese-select']/option[5]")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']/option[6]")).click();
	await delay(3000)
	element(by.xpath(".//*[@id='group-subscription-organization']/div[4]/div/button")).click();
	await delay(5000);
});
When('VR-0050 order conformation is displayed', async () => {
	await delay(25000);
	await expect(browser.findElement(by.xpath("//a[@href='https://beta.formed.org/']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[2]/span"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath("//a[@href='https://beta.formed.org/']")).click();
	await delay(2000);
	browser.navigate().refresh();
	await delay(3000);
	browser.waitForAngular();
});
When('VR-0060 Enter organization information', async () => {
	browser.waitForAngular();
	await delay(10000);
	element(by.xpath("//*[@placeholder='Group Name']")).sendKeys("St Thomas the Doubter");
	await delay(2000);
	element(by.xpath(".//*[@id='groupLeader']")).sendKeys("Formed.org");
	await delay(2000);
	element(by.xpath(".//*[@id='groupMission']")).sendKeys("Catholic");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Your organization website (Ex: stmarys.org)']")).sendKeys("Formed");
	await delay(2000);
	element(by.xpath(".//*[@value='activate']")).click();
	await delay(3000); 
	element(by.xpath(".//*[@value='OK']")).click();
	await delay(5000);
});
Then('VR-0060 Leader checklist is displayed', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("//*[@id='leaders-wrapper']/div[2]/div[1]/div[1]/div/a/button"))).to.eventually.exist;
    await delay(3000);
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(4000);
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
	await delay(2000); 
	browser.waitForAngular();
});
Then('VR-0070 Subscription information is displayed', async () => {
  await delay(10000);
  await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div/div/div/div[3]/div[2]/modal-link/a/span"))).to.eventually.exist;
  browser.manage().timeouts().implicitlyWait(3000);
  await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div/div/div/div[1]/div[2]/a"))).to.eventually.exist;
  browser.manage().timeouts().implicitlyWait(3000);
  element(by.xpath(".//*[@id='simple-dropdown']")).click();
  await delay(4000);
  element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
  await delay(5000);         
  browser.waitForAngular();   
});
Then('VR-0080 click on ondemand subscription' , async () => {
  element(by.xpath("//a[@href='https://market.beta.formed.org/all-products/formed-subscriptions/on-demand.html']")).click();
  await delay(10000);
  element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img")).click();
  await delay(8000);
});
Then('VR-0090 sign in group detail is displayed', async  () => {
    element(by.xpath(".//*[@id='attribute201']/div[1]/label/span")).click();
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div/div[1]/div/img"))).to.eventually.exist;
	await delay(2000);
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(10000);
});
Then('VR-0100 Billing information are displayed', async () => { 
	browser.navigate().refresh();
	element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
	await delay(5000);
	element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
	await delay(12000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
	await delay(5000);
	element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
	await delay(1000);
	element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
	await delay(1000);
	element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
	await delay(5000);
});
When('VR-0120 click on Entercupon', async () => {
	await delay(8000);
	element(by.xpath(".//*[@id='coupons-tax-exempt']/div[1]/strong/a")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[2]/input"))).to.eventually.exist;
	await delay(2000);
	element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[6]/div/button")).click();
	await delay(15000);
});
When('VR-0130 order conformation is displayed', async () => {
	await delay(15000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[2]/span"))).to.eventually.exist;
	await delay(2000);
});
Then('PBP-0010 Read products is displayed',async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/nonfiction.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/fiction.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/youth.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/espa-ol.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);					  
});	  
Then('PBP-0010 Read products are displayed',async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/nonfiction.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/fiction.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/youth.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/espa-ol.html']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);					  
}); 
Then('PBP-0010 Click on fiction in Read link',async () => {
	await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/fiction.html']")).click();
	await delay(1000);
	browser.waitForAngular();
});
When('PBP-0020 Click on product', async () => {
	await delay(10000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
	await delay(1000);
	browser.waitForAngular();
});	
When('GFF-0140 Click on Library product', async () => {
	await delay(15000);
	element(by.xpath("//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
});	
Then('GFF-0140 Click on ADD TO CART button',async () => {
	await delay(10000);
    element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(5000);
});
Then('PBP-0020 Read product and Add to cart button is displayed',async () => {
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div/div[1]/div/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
When('PBP-0030 click on Add to cart button', async () => {
	await delay(10000);
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(5000);
});
Then('PBP-0030 Message and cart icon number and incart displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[1]/div[2]/div[2]/div/div"))).to.eventually.exist;
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-alreadyincart-button']"))).to.eventually.exist;
	await delay(5000);
});
When('PBP-0040 Click on incart button', async () => {
	element(by.xpath(".//*[@class='counter qty']")).click();
	await delay(5000);
	// element(by.xpath(".//*[@id='minicart-content-wrapper']/div")).isDisplayed();
	
});
When('PBP-0050 cart icon button is increased by 1', async () => {
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@class='counter-number']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('SPP-0010 digital products and search icon are displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/listen.html']"))).to.eventually.exist;
	await delay(3000);
 });
 When('SPP-0020 click on the search icon', async () => {
	await delay(6000);
	element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
	await delay(6000);
	element(by.xpath(".//*[@id='search']")).sendKeys("pope");
	await delay(6000);
	element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
	await delay(10000);
});
Then('SPP-0030 Search product page is displayed', async () => { 
	await delay(3000);
	await expect(browser.findElement(by.xpath("//*[@id='amasty-shopby-product-list']/div[1]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(3000);           	   
 });
 When('SPP-0040 click on watch in left side view', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='filters-container']/li/ol/li[2]/a/label/div")).click();
	await delay(15000);
 });
 Then('SPP-0040 Watch sub options are displayed', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[2]/ol/li[1]/a/label/div"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[2]/ol/li[2]/a/label/div"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[2]/ol/li[3]/a/label/div"))).to.eventually.exist;
	await delay(3000);
 });
 When('SPP-0040 click on Listen in left side view', async () => {
	element(by.xpath(".//*[@id='filters-container']/li/ol/li[3]/a/label/div")).click();
	await delay(15000);
 });
 Then('SPP-0040 Listen sub options are displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[3]/ol/li[1]/a/label/div"))).to.eventually.exist;
	await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[3]/ol/li[2]/a/label/div"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[3]/ol/li[3]/a/label/div"))).to.eventually.exist;
	await delay(3000);
 });
 When('SPP-0040 click on Read in left side view', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='filters-container']/li/ol/li[4]/a/label/div")).click();
	await delay(15000);  
 });
 Then('SPP-0040 Read sub options are displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[4]/ol/li[1]/a/label"))).to.eventually.exist;
	await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[4]/ol/li[2]/a/label"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='filters-container']/li/ol/li[4]/ol/li[3]/a/label"))).to.eventually.exist;
	await delay(3000);
 });  
 When('SPP-0040 select one or more attribute filter',async () => {		 
	 await delay(5000);
	element(by.xpath("//*[@id='narrow-by-list']/dd[2]/ol/form/li[2]/a/label/span")).click();
	await delay(15000);
});
When('SPP-0050 click on filter product',async () => {
	await delay(5000);
	element(by.xpath("//*[@id='narrow-by-list']/dd[4]/ol/form/li[1]/a/label/span")).click();
	await delay(10000);
});
Then('SPP-0050 Product details are displayed',async () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('SPP-0060 Product page is displayed',async () => {
	await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/talks.html']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li/div/a/img"))).to.eventually.exist;
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath(".//*[@id='sorter']")).click(); 
	await delay(5000);
});
Then('SPP-0070 featured drop down is displayed',async () => {
    await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[1]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[2]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[3]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[4]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[5]"))).to.eventually.exist;
	await delay(2000);
});
Then('SPP-0080 product details are displayed',async () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
	await delay(5000);
});
Then('SPP-0040 select Available ON DEMAND',async () => {
	await delay(10000);
	element(by.xpath("//*[@id='narrow-by-list']/dd[1]/ol/form/li[1]/a/label/span")).click();
	await delay(20000);
});
Then('SPP-0040 ON DEMAND products is displayed',async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("//*[@id='amasty-shopby-product-list']/div[1]/ol/li[1]/div/div/div[3]/div[3]/span"))).to.eventually.exist;
	await delay(5000);
});
When('SPP-0080 Click on product',async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(8000);
});
Then('navigate to lenlet_cart', async () => {
	await delay(5000);
	await browser.get("https://market.beta.formed.org/c/lenten_trial");
	await delay(1000);
	browser.waitForAngular();
	await delay(8000);
})
Then('navigate to getbronze', async () => {
	await delay(5000);
	await browser.get("https://market.beta.formed.org/c/getbronze");
	await delay(1000);
	browser.waitForAngular();
	await delay(8000);
});
Then('navigate to 7daytrial', async () => {
	await delay(5000);
	await browser.get("https://market.beta.formed.org/c/7daytrial");
	await delay(1000);
	browser.waitForAngular();
	await delay(8000);
});
Then('navigate to SoG', async () => {
	await delay(5000);
	await browser.get("https://market.beta.formed.org/c/SoG");
	await delay(10000);
});
Then('navigate to BiaY', async () => {
	await delay(10000);
	await browser.get("https://market.beta.formed.org/c/BiaY");
	await delay(1000);
	browser.waitForAngular();
	await delay(8000);
});
Then('navigate to getsilver', async () => {
	await delay(5000);
	await browser.get("https://market.beta.formed.org/c/getsilver");
	await delay(1000);
	browser.waitForAngular();
	await delay(8000);
});
Then('navigate to getplatinum', async () => {
	await delay(5000);
	await browser.get("https://market.beta.formed.org/c/getgold");
	await delay(1000);
	browser.waitForAngular();
	await delay(8000);
});
Then('navigate to getgold', async () => {
	await delay(5000);
	await browser.get("https://market.beta.formed.org/c/getgold");
	await delay(1000);
	browser.waitForAngular();
	await delay(8000);
});
Then('ICO-0020 Verify the Checkout Page', async () => { 
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
	await delay(7000);
	await expect(browser.findElement(by.xpath(".//*[@id='checkout-step-review']/div[4]/div/button"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    element(by.xpath(".//*[@id='checkout-step-review']/div[4]/div/button")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(7000);
});
When('ICO-0010 instant page is displayed', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[2]/div/div[1]/div/h1"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);                      
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[2]/div/div[1]/div/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('ICO-0030 order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/header/h1"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div[2]/span"))).to.eventually.exist;
    await delay(2000);
});
Then('ICO-0020 Billing information are displayed in incart', async () => { 
	await delay(10000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(1000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(1000);
	element(by.xpath(".//*[@value='12']")).click();
	await delay(1000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("60014");
	await delay(1000);	
});
Then('Trail Billing information are displayed in incart', async () => { 
	await delay(5000);
	browser.navigate().refresh();
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(1000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(1000);
	element(by.xpath(".//*[@value='12']")).click();
	await delay(1000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("60014");
	await delay(1000);	
});
Then('SoG Billing information are displayed', async () => { 
	await delay(5000);
	browser.navigate().refresh();
	await delay(20000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(1000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(1000);
	element(by.xpath(".//*[@value='12']")).click();
	await delay(1000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("60014");
	await delay(1000);	
});
Then('lenlet_cart Billing information are displayed', async () => { 
	await delay(5000);
	browser.navigate().refresh();
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(1000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(1000);
	element(by.xpath(".//*[@value='12']")).click();
	await delay(1000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("60014");
	await delay(1000);		
});
Then('getbronze order conformation is displayed', async () => { 
	await delay(10000);
    await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/mylibrary/']"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div[2]/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('getsilver order conformation is displayed', async () => { 
	await delay(10000);
    await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/mylibrary/']"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div[2]/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('getgold order conformation is displayed', async () => { 
	await delay(5000);
    await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/mylibrary/']"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div[2]/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('getplatinum order conformation is displayed', async () => { 
    await delay(10000);
    await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/mylibrary/']"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div[2]/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('SoG order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath("//a[@href='https://beta.formed.org/welcome']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div[2]/span"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('BiaY order conformation is displayed', async () => { 
	await delay(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/mylibrary/']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div[2]/span"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('7daytrial conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[3]/div[1]/div[2]/div[3]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div[2]/span"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('BiYa Verify the Checkout Page', async () => { 
	await delay(5000);
    element(by.xpath("//*[@id='checkout-step-review']/div[4]/div/button")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
});
Then('BiaY Billing information are displayed in incart', async () => { 
    browser.navigate().refresh();
    element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
    await delay(10000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
    await delay(5000);
	element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	await delay(3000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
    await delay(1000);
    element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
    await delay(1000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
    await delay(5000);
});
Then('ICO-0040 7 days free trial page is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[2]/div/div[2]/div/div[1]/div/h1"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
When('LPA-0010 click on login button', async () => {
	await delay(10000);
	element(by.xpath(".//*[@id='simple-dropdown']")).click();
	await delay(2000);
});
When('LPA-0010 Enter Parish Admin Name and password', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("test+parish@formed.org");
	await delay(3000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("formed");
    await delay(3000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
	await delay(5000);
	browser.waitForAngular();
	await delay(15000);
});
When('I click on On Demand page', async () => {
	await delay(8000);
	element(by.xpath(".//a[@href='https://beta.formed.org/']")).click();
	browser.waitForAngular();
	await delay(5000);
});
Then('LPA-0020 Click on study Link and Verify with parish admin', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='/catholic-programs']")).click();
	browser.waitForAngular();
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);                   
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('LPA-0020 Click on watch Link and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/catholic-movies']")).click();
	browser.waitForAngular();
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('LPA-0020 Click on Listen Link and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/catholic-audio']")).click();
	browser.waitForAngular();
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('LPA-0020 Click on read Link and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/catholic-books']")).click();
	browser.waitForAngular();
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('LPA-0030 Click on sacramental-preparation and Verify with parish admin', async () => {
	await delay(3000);
	element(by.xpath("//a[@href='/catholic-programs?linkId=study-sacramental-preparation']")).click();
	browser.waitForAngular();
	await delay(5000);
});
Then('LPA-0030 Click on Faith Information and Verify with parish admin', async () => {
	await delay(3000);
	element(by.xpath("//a[@href='/catholic-programs?linkId=study-faith-formation']")).click();
	browser.waitForAngular();
	await delay(3000);
	await expect(browser.findElement(by.xpath("//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[1]/div[1]/h3"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('LPA-0030 Click on Bible studies and Verify with parish admin', async () => {
	element(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[3]/a")).click();
	browser.waitForAngular();
	await delay(5000);
});
Then('LPA-0030 Click on Current Topics and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/catholic-programs?linkId=study-current-topics']")).click();
	browser.waitForAngular();
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[1]/div[1]/h3"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('LPA-0030 Click on Youth Disciple and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/catholic-programs?linkId=study-youth']")).click();
	browser.waitForAngular();
	await delay(4000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[1]/div[1]/h3"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[5]/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);                        
});
Then('LPA-0030 Click on espanol and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/catholic-programs?linkId=study-espanol']")).click();
	browser.waitForAngular();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[5]/segment/div[2]/div/stripe/div/div/div[1]/div[1]/h3"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('STUDY link is hovered', async () => {
	await delay(5000);
	browser.actions().mouseMove(element(by.xpath("//a[@href='/catholic-programs']"))).perform();
	await delay(5000);
});
When('Watch link is hovered', async () => {
	await delay(5000);
	browser.actions().mouseMove(element(by.xpath("//a[@href='/catholic-movies']"))).perform();
	await delay(5000);           
});
When('listen link is hovered', async () => {
	await delay(5000);
	browser.actions().mouseMove(element(by.xpath("//a[@href='/catholic-audio']"))).perform();
	await delay(5000);
});
When('Read link is hovered', async () => {
	await delay(5000);
	browser.actions().mouseMove(element(by.xpath("//a[@href='/catholic-books']"))).perform();
	await delay(5000);
});
Then('LPA-0040 Click on Watch Movies and Verify with parish admin', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='/catholic-movies?linkId=watch-movies']")).click();
	await delay(5000);
	browser.manage().timeouts().implicitlyWait(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[5]/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(5000);                     
});
Then('LPA-0040 Click on Documentaries and Verify with parish admin', async () => {
	await delay(3000);
	element(by.xpath("//a[@href='/catholic-movies?linkId=watch-documentaries']")).click();
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='watch-documentaries']/div/div[1]/h1"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('click on Faith formation link and verify', async () => {
	await delay(5000);
	element(by.xpath("html/body/header/section[3]/section/div[1]/div[1]/div/ul/li[1]/div/a")).click();
	browser.manage().timeouts().implicitlyWait(10000);    
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('LPA-0040 Click on Apologetics and Verify with parish admin', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='/catholic-movies?linkId=watch-apologetics']")).click();
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='watch-apologetics']/div/div[1]/h1"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('LPA-0040 Click on Watch Youth Disciple and Verify with parish admin', async () => {
	await delay(3000);
	element(by.xpath("//a[@href='/catholic-movies?linkId=watch-youth']")).click();
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='watch-youth']/div/div[1]/h1"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('LPA-0040 Click on watch espanol and Verify with parish admin', async () => {
	await delay(3000);
	element(by.xpath("//a[@href='/catholic-movies?linkId=watch-espanol']")).click();
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[7]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
});
Then('LPA-0050 Click on Listen Talks and Verify with parish admin', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[3]/a")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img"))).to.eventually.exist;
});
Then('LPA-0050 Click on Listen audio dramas and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/catholic-audio?linkId=listen-dramas']")).click();
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
});
Then('click on Bible studies link and verify', async () => {
	await delay(5000);
	element(by.xpath("html/body/header/section[3]/section/div[1]/div[1]/div/ul/li[2]/div/a")).click();
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0050 Click on Listen audio books and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/catholic-audio?linkId=listen-audiobooks']")).click();
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[5]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[7]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
When('Click on Choose organization', async () => {
	element(by.xpath(".//*[@id='co-payment-form']/fieldset")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='group-subscription-diocese-select']")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='group-subscription-diocese-select']/option[5]")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']/option[6]")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='group-subscription-organization']/div[4]/div/button")).click();
	await delay(5000);
});
Then('LPA-0050 Click on Listen espanol and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/catholic-audio?linkId=listen-espanol']")).click();
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[5]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img"))).to.eventually.exist;
	await delay(3000);                          
});    
Then('LPA-0060 Click on NonFiction and Verify with parish admin', async () => {
	await delay(3000);
	element(by.xpath("//a[@href='/catholic-books?linkId=read-nonfiction']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath("//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[12]/div/a/img"))).to.eventually.exist;
	await delay(3000);                                        
});
Then('LPA-0060 Click on Fiction and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/catholic-books?linkId=read-fiction']")).click();
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[1]/div[1]/h3"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0060 Click on Read Youth and Verify with parish admin', async () => {
	await delay(3000);
	element(by.xpath("//a[@href='/catholic-books?linkId=read-youth']")).click();
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='read-youth']/div/div[1]/h1"))).to.eventually.exist;
	await delay(4000);
});
Then('LPA-0060 Click on Read espanol and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/catholic-books?linkId=read-espanol']")).click();
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[1]/div[1]/h3"))).to.eventually.exist;
	await delay(5000);
}); 
Then('i click on account and logout for parish in market page', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	await delay(4000);
	element(by.xpath(".//*[@id='account-dropdown']/div/a[5]")).click();
	await delay(5000);
}); 
Then('i click on account and logout for parish', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(4000);
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
	await delay(5000);
});      
When('LLP-0020 Click on Login button', async  () => {
	await delay(10000);
	element(by.xpath(".//*[@id='simple-dropdown']")).click();
	await delay(3000);
});
Then('Show products link is displayed', async () => {
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']"))).to.eventually.exist;    
	await delay(8000);
});
When('Show products link is hovered', async () => {
	browser.actions().mouseMove(element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']"))).perform();
	await delay(4000);
});
Then('click on feature film link and verify', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/feature-films.html']")).click();
	await delay(2000);  
	browser.waitForAngular(); 
	await delay(4000);  
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath("//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
    await delay(2000);                           
});     
Then('click on Documentreies link and verify', async () => {
    await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/documentaries.html']")).click();
	await delay(2000);
	browser.waitForAngular();
	await delay(7000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('click on Talks link and verify', async () => {
    await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/talks.html']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);       
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('click on Tv shows link and verify', async () => {
    await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/tv-shows.html']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('click on Espamol in watch link and verify', async () => {
    await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/spanish.html']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('Click on talks Link and Verify', async () => {
    await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/talks.html']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('Click on audio dramas Link and Verify', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/audio-dramas.html']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('Click on audiobooks Link and Verify', async () => {
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/audiobooks.html']")).click();
    await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
	await delay(2000);  
});
Then('Click on espanol Listen Link and Verify', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/espa-ol.html']")).click();
	await delay(1000);          
	browser.waitForAngular();
	await delay(7000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000);
});
Then('Click on nonfiction link and verify', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/nonfiction.html']")).click();
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(2000);  
});
Then('Click on fiction link and verify', async () => {
    await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/fiction.html']")).click();
	browser.waitForAngular();
	await delay(5000);
});
When('PPF-0010 Select Physical product', async () => {
    await delay(5000);
	element(by.xpath("//*[@id='narrow-by-list']/dd[3]/ol/form/li[1]/a/label/span")).click();
	browser.waitForAngular();
    await delay(8000);
	await expect(browser.findElement(by.xpath("//*[@id='amasty-shopby-product-list']/div[4]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(2000);
	element(by.xpath("//*[@id='amasty-shopby-product-list']/div[4]/ol/li[4]/div/a/img")).click();
	browser.waitForAngular();
    await delay(5000);
});
When('PPF-0020 Select second physical product', async () => {
    await delay(5000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img")).click();
    await delay(10000);
});
Then('Click on youth link and verify', async () => {
    await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/youth.html']")).click();
	browser.waitForAngular();
	await delay(7000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(2000);
});
Then('PPF-0070 Select Digital product', async () => {
    await delay(5000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
});
Then('Click on espanol link and verify', async () => {
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/espa-ol.html']")).click();
	browser.waitForAngular();
	await delay(5000);
	browser.manage().timeouts().implicitlyWait(20000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[4]/div/a/img"))).to.eventually.exist;
	await delay(2000);
});
Then('Click on watch Link and Verify', async () => {
	//element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[3]/a/label/div")).click();
	element(by.xpath("//*[@id='filters-container']/li[2]/ol/li[2]/a/label/div")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('Click on Listen Link and Verify', async () => {
	//element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[4]/a/label/div")).click();
	element(by.xpath("//*[@id='filters-container']/li[2]/ol/li[3]/a/label/div")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[4]/div/a/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('Click on read Link and Verify', async () => {
	await delay(5000);
	//element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[5]/a/label/div")).click();
	element(by.xpath("//*[@id='filters-container']/li[2]/ol/li[4]/a/label/div")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[4]/div/a/img"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
When('navigate to formed page', async () => {
	element(by.xpath(".//*[@class='icon-formed']")).click();
	await delay(5000);
});
Then('Enter Name and password for individual user', async () => {
	element(by.xpath("//input[@name='email']")).sendKeys("rajeshnakka.cmc@gmail.com");
	await delay(1000);
	element(by.xpath("//input[@name='password']")).sendKeys("123456");
	await delay(1000);
	element(by.xpath("//button[@class='btn btn-large btn-primary login-submit']")).click();
	await delay(5000);
});
When('forgot password is displayed', async  () => {    
  await delay(1000);  
  await expect(browser.findElement(by.xpath(".//*[@class='forgotPassword']"))).to.eventually.exist;
  await delay(2000);
});
Then('i Enter Name and password for individual user', async () => {
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("rajeshnakka.cmc@gmail.com");
	await delay(2000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("123456");
	await delay(2000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
	await delay(10000);
});
Then('SPP-0050 Expand attributes',async () => {
	element(by.xpath(".//*[@id='product__description--toggle']']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='product__description']/div[2]"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@id='product__description--toggle']']")).click();
	await delay(6000);		
});
Then('PAP-0020 Product detailed page is displayed', async () => {     
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('account is displayed', async () => {     
    await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('PBP-0070 Click on purchase produt in library page', async () => { 
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img"))).to.eventually.exist;
	await delay(6000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img")).click();
	await delay(8000);
});
Then('PBP-0070 Billing information are displayed', async () => { 
	browser.waitForAngular();
	await delay(10000);
	element(by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div/div[1]/div/div[2]/div[1]/form/fieldset/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
	await delay(5000);
	element(by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div/div[1]/div/div[2]/div[1]/form/fieldset/div[3]/div/input")).sendKeys("Chicago");
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div/div[1]/div/div[2]/div[1]/form/fieldset/div[5]/div/select")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div/div[1]/div/div[2]/div[1]/form/fieldset/div[5]/div/select/option[13]")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div/div[1]/div/div[2]/div[1]/form/fieldset/div[6]/div/input")).sendKeys("60014");
	await delay(5000);	
});
When('PAP-0010 i navigate to listen and click on audio dramas', async () => {
	element(by.xpath(".//*[@href='https://market.beta.formed.org/shop-products/listen/audio-dramas.html']")).click();
	await delay(10000);
});
Then('PAP-0010 Audio dramas page is displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[4]/div/a/img"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']"))).to.eventually.exist;
	await delay(2000);
});
Then('SPP-0050 collapse attributes',async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='product__description']"))).to.eventually.exist;
	await delay(3000);
});
When('TS-0010 click on product in movies link', async () => {
    element(by.xpath("//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[5]/div/a/img")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@id='movie-title']/h1"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(30000);
    await expect(browser.findElement(by.xpath(".//*[@id='social-icons']/share/div/div/span[1]/a"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(30000);
    await expect(browser.findElement(by.xpath(".//*[@id='social-icons']/share/div/div/span[2]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(30000);
});
When('TS-0010 click on play button', async () => {
	browser.navigate().refresh();
	await delay(1000);
	browser.waitForAngular();
	await delay(10000);
    element(by.xpath(".//*[@id='oo-responsive']/div/div[1]/a")).click();
	await delay(25000);
	element(by.xpath(".//*[@id='social-icons']/share/div/div/span[1]/a")).click();
    await delay(10000);
});
Then('TS-0020 share model dialog page is displayed', async () => {
	await delay(15000);
    await expect(browser.findElement(by.xpath(".//*[@id='simple-dropdown']"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/form/div[1]/div/div[2]"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/form/div[2]/input"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/form/div[2]/input")).sendKeys("formed");
	await delay(2000);
	element(by.xpath(".//*[@id='topicComment']")).sendKeys("share model dialog page is displayed");
	await delay(15000);
	element(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/form/input")).click();
	await delay(15000);
});
Then('TS-0030 share icons are displayed', async () => {
	await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/div/ul/li[1]/a"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/div/ul/li[2]/a"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/div/ul/li[3]/a"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/div/ul/li[4]/a"))).to.eventually.exist;
	await delay(3000);
});
Then('TS-0060 click on facebook', async () => {
	await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/div/ul/li[1]/a")).click();
	await delay(3000);
});
Then('TS-0070 click on twitter', async () => {
	element(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/div/ul/li[2]/a")).click(); 
	await delay(5000);
});
Then('TS-0080 click on pinterest', async () => {
	element(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/div/ul/li[3]/a")).click(); 
	await delay(5000);
});
Then('TS-0090 click on gmail', async () => {
	element(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/div/ul/li[4]/a")).click(); 
	await delay(5000);
});
Then('TS-0100 close the share icons', async () => {
	element(by.xpath("html/body/div[3]/div/div/topic-share/div[1]/div/i")).click(); 
	await delay(5000);
});
Then('TS-0040 click on audio image', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img")).click();
	browser.waitForAngular();
	await delay(5000);
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='audio']/div[1]/div/div[2]/img"))).to.eventually.exist;
    await delay(1000);
});
Then('TS-0110 click on topicshares in on demand page', async () => {
	await delay(10000);
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[2]/a")).click();
	await delay(10000);
});
Then('TS-0110 Your Evangelization Impact are displayed', async () => {
	await delay(15000);
	await expect(browser.findElement(by.xpath(".//*[@class='subheader text-center']"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@class='text-link ng-binding']"))).to.eventually.exist;
	await delay(1000);
	element(by.xpath("html/body/div[3]/div/div/div[2]/evangelization-panel/div/table/tbody/tr[5]/td[1]")).click();
	await delay(10000);
});
Then('TS-0050 click on play button', async () => {
	element(by.xpath(".//*[@id='oo-responsive']/div/div[1]/a")).click();
	await delay(20000);
});
When('TS-0120 comments and rating are displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@class='ng-scope']"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='movie']/prorater/div/div/div[1]/modal-link/a/span"))).to.eventually.exist;
    await delay(1000);
	await expect(browser.findElement(by.xpath(".//*[@class='col-sm-6 commentary hidden-sm']"))).to.eventually.exist;
	await delay(1000);
});
Then('TS-0130 click on video product ondemand page without user', async () => {
	await delay(15000);
	element(by.xpath(".//*[@id='scroll-top']/div/div/trending-topics/div[2]/div/div/div/div/div[7]/a/div/div/div[2]/div")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
})
When('PPF-0010 i move to physical products', async () => {
	await delay(5000);
	browser.actions().mouseMove(element(by.xpath("//a[@href='https://market.beta.formed.org/physical-products.html']"))).perform();
	await delay(5000);
});
Then('PPF-0020 click on physical products', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/physical-products/dvds.html']"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/physical-products/dvds.html']")).click();
	await delay(10000);
});
Then('PPF-0030 click on first product in the physical products', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
	await delay(10000);
});
Then('PPF-0040 increase the product quantity 2 and click on Add to Cart button', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='addtocart-qty-plus']")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(10000);
});
When('PPF-0050 click on remove option',async () => {
	element(by.xpath(".//*[@class='action delete']")).click();
	await delay(5000);
});
Then('PPF-0050 Item Remove prompt is displayed and click on OK button',async () => {
	await expect(browser.findElement(by.xpath(".//*[@class='action-secondary action-dismiss']"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@class='action-primary action-accept']")).click();
	await delay(10000);
});
Then('PPF-0050 Cart empty message is displayed',async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='minicart-content-wrapper']/div/strong"))).to.eventually.exist;
	await delay(3000);
});
Then('PPF-0060 order information is displayed',async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='checkout-step-shipping']/button"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='checkout-review-table']/tbody/tr/td[2]/div/a[2]"))).to.eventually.exist;
	await delay(3000);
});
Then('GFF-0060 Giftable order confirmation page is displayed',async () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[2]/h2/strong"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[1]/h2/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('GFF-0120 order confirmation page is displayed',async () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[2]/h2/strong"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[1]/h2/a"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('GFF-0100 Gifting Physical Product  order confirmation page is displayed',async () => {
	await delay(15000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[2]/h2/strong"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[1]/h2/a"))).to.eventually.exist;
	await delay(3000);
});
When('click on login button and enter username and password', async () => {
	await delay(10000);
	element(by.xpath(".//*[@id='login-dropdown-button']")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("saicharan@gmail.com");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Honey@123");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
	await delay(10000);
});
When('PPF-0010 click on Book in Product type', async () => {
	await delay(10000);
	element(by.xpath("//*[@id='narrow-by-list']/dd[4]/ol/form/li[1]/a/label/span")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath("//*[@id='amasty-shopby-product-list']/div[4]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath("//*[@id='amasty-shopby-product-list']/div[4]/ol/li[1]/div/a/img")).click();
	await delay(10000);
});
	Then('PPF-0070 Select Shipping method',async () => {
	element(by.xpath(".//*[@id='checkout-shipping-method-load']/div[1]/label/span")).click();
	await delay(10000);
	element(by.xpath(".//*[@id='checkout-step-shipping']/div[7]/div/button")).click();
	await delay(10000);
});
Then('BiaY Payment information is displayed', async () => { 
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
    element(by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
    await delay(7000);
});
Then('ALA-0010 click on Account', async () => {
	await delay(7000);
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]")).click();
	await delay(1000); 
	browser.waitForAngular();
});
Then('ALA-0020 click on On Demand subscription in account page', async () => {
	await delay(6000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/formed/account/subscriptions/']")).click();
	browser.waitForAngular();
	await delay(5000);
	await delay(3000);
	element(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[1]/div/div/span[2]")).click();
	await delay(3000);
	await expect(browser.findElement(by.xpath("//*[@id='cancel-ondemand-btn']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('FFC-0320 click on cancel contribution', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("//*[@id='cancel_recurring_subscription']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	element(by.xpath("//*[@id='cancel_recurring_subscription']")).click();
	await delay(5000);
	element(by.xpath(".//*[@class='cancel-recurring-contribution-btn']")).click();
	await delay(5000);
});
When('FFC-0320 Formed Contribution status is inactive', async () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath("//*[@id='formed-account-subscription-accordion']/div[2]/div[2]/div[2]/div[1]/div/div[2]/div[2]/span[2]/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('ALA-0030 click Edit button in payment method', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/span[2]/a")).click();
	await delay(2000);
	browser.waitForAngular();
});
Then('ALA-0040 click on change payment Method', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='update-payment__form-modal']/select")).click();
	await delay(3000);
	element(by.xpath("//*[@id='update-payment__form-modal']/select/option[4]")).click();
	await delay(3000);
});
Then('ALA-0050 Billing information from pbc', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='update-payment__firstname']")).sendKeys("Fname");
    await delay(1000);
	element(by.xpath("//*[@id='update-payment__lastname']")).sendKeys("Lname");
	await delay(1000);
	element(by.xpath("//*[@id='update-payment__purchase-order']")).sendKeys("123456896");
	await delay(1000);
	element(by.xpath("//*[@id='update-payment__street']")).sendKeys("chicago ilunious");
	await delay(1000);
	element(by.xpath("//*[@id='update-payment__city']")).sendKeys("chicago");
	await delay(2000);
	element(by.xpath("//*[@id='update-payment__region_id']")).click();
	await delay(2000);
	element(by.xpath("//*[@id='update-payment__region_id']/option[13]")).click();
	await delay(2000);
	element(by.xpath("//*[@id='update-payment__zip']")).sendKeys("60014");
	await delay(5000);
	element(by.xpath("/html/body/div[3]/aside[6]/div[2]/footer/button[1]")).click();
	await delay(8000);
	element(by.xpath("/html/body/div[4]/aside[7]/div[2]/footer/button")).click();
	await delay(8000);
});
  Then('ALA-0040 Payment Method Updated prompt is displayed', async () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@class='primary']"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@class='primary']")).click();
	await delay(5000);
});
Then('ALA-0060 click on Add Cupon in On demand subscription', async () => {
	await delay(15000);
	element(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/span[2]")).click();
	await delay(5000);
	element(by.xpath("//*[@id='coupon-edit-popup-container']/div/p/input")).sendKeys("testGAS");
	await delay(3000);
	element(by.xpath(".//*[@class='cancel-ondemand-btn']")).click();
	await delay(5000);
});
Then('ALA-0070 click on Resend invoice', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[2]/div[2]/div/div[1]/div/div[1]/span[2]/a[2]")).click();
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[2]/div[1]/div"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('FFC-0120 click on Account', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await delay(3000)
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]")).click();
	await delay(1000);
	browser.waitForAngular();
});
Then('FFC-0120 click on On Demand Subscription', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/formed/account/subscriptions/']"))).to.eventually.exist;
	await delay(8000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/formed/account/subscriptions/']")).click();
	await delay(2000);
	browser.waitForAngular();
	element(by.xpath("//*[@id='formed-account-subscription-accordion']/div[1]/div[1]/div/div/span[2]")).click();
	await delay(2000);
});
Then('DONATE-3.3 click on Recurring Donation in Subscriptions', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/formed/account/subscriptions/']"))).to.eventually.exist;
	await delay(8000);
	element(by.xpath("//a[@href='https://market.beta.formed.org/formed/account/subscriptions/']")).click();
	await delay(10000);
	browser.waitForAngular();
	element(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[1]/div/div/span[2]")).click();
	await delay(10000);
});
When('FFC-0220 click on enable button in On Demand Subscription page', async () => {
	await delay(3000);
    element(by.xpath("//*[@id='formed-account-subscription-accordion']/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div/a")).click();
	await delay(1000);
	browser.waitForAngular();
});
Then('FFC-0220 Accept Terms button is displayed', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("html/body/div[3]/aside[4]/div[2]/footer/button[1]"))).to.eventually.exist;
	await delay(2000);
});
Then('FFC-0220 click on Accept Terms button', async () => {
	await delay(5000);
	element(by.xpath("html/body/div[3]/aside[4]/div[2]/footer/button[1]")).click();
	await delay(3000);
	element(by.xpath("html/body/div[3]/aside[3]/div[2]/footer/button[1]")).click();
	await delay(3000);
	element(by.xpath("html/body/div[3]/aside[2]/div[2]/footer/button[1]")).click();
	await delay(3000);
});
When('FFC-0220 click on Enable Formed Funding', async () => {
	await delay(3000);
	element(by.xpath(".//*[@class='primary enable-modal-btn']")).click();
	await delay(2000);
	browser.waitForAngular();
});
When('FFC-0260 click on Cancel On-demand subscription', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='cancel-ondemand-btn']")).click();
	await delay(5000);
	await expect(browser.findElement(by.xpath("/html/body/div[3]/aside[5]/div[2]/footer/button[1]/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('FFC-0260 click on Cancel Subscription', async () => {
	await delay(8000);
	element(by.xpath("/html/body/div[3]/aside[5]/div[2]/footer/button[1]/span")).click();
	await delay(4000);
});
Then('FFC-0260 Subcription was cancelled message is displayed', async () => {
	await delay(1000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[2]/div[1]/div/div")).getText()).to.eventually.equal('Your subscription was canceled.');
    browser.manage().timeouts().implicitlyWait(3000);
});
When('FFC-0220 Formed Funding is enable', async () => {
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@class='primary enable-modal-btn']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('FFC-0230 Formed funding Tab page is displayed', async () => {
	await delay(3000);
    await expect(browser.findElement(by.xpath("//*[@id='enableModalToggle']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/div[1]/h3"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('FFC-0250 Disable button is displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='enableModalToggle']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('FFC-0250 click on disable button in formed funding page', async () => {
	element(by.xpath(".//*[@id='enableModalToggle']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(3000);
});
Then('FFC-0250 click on Disable formed funding', async () => {
	element(by.xpath(".//*[@class='primary enable-modal-btn']")).click();
	await delay(5000);
});
Then('FFC-0250 Campigan disable message is dispalyed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[2]/div[1]/div/div")).getText()).to.eventually.equal('Campaign disabled successfully.');
	browser.manage().timeouts().implicitlyWait(3000);
});
When('click on logout button in Account page',async () => {
    element(by.xpath(".//*[@id='account-dropdown-button']")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[4]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
    element(by.xpath(".//*[@id='account-dropdown']/div/a[4]")).click();
    await delay(3000);
});
Then('FFC-0110 click on login button and enter Formed funding user details', async () => {
    await delay(5000);
    element(by.xpath(".//*[@id='login-dropdown-button']")).click();
    await delay(1000);
    element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("Bekkam@gmail.com");
    await delay(1000);
    element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Honey@123");
	await delay(1000);
    element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(10000);
});
Then('FFC-0130 On Demand Subscription page is displayed', async () => {
    await expect(browser.findElement(by.xpath(".//*[@class='subscription-info__item-content']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//a[@href='/formed-funding/account']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('FFC-0140 Formed Funding Tab is displayed', async () => {
	await delay(3000);
    await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/formed-funding/account/']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('FFC-0150 Click on Formed Funding Tab', async () => {
	await delay(3000);
    element(by.xpath("//a[@href='https://market.beta.formed.org/formed-funding/account/']")).click();
	await delay(1000);
	browser.waitForAngular();
});
Then('FFC-0160 Formed Funding page is displayed', async () => {
	await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='appealModalToggle']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='goalModalToggle']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='formed-funding-history-table-export']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('FFC-0170 click ALL dropdown', async () => {
	await delay(3000);
    element(by.xpath(".//*[@id='formed-funding-history-table-filter']")).click();
	await delay(4000);
	await expect(browser.findElement(by.xpath(".//*[@id='formed-funding-history-table-filter']/option[2]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('FFC-0180 click on Hide button in Visisbility', async () => {
	await delay(3000);
    element(by.xpath(".//*[@id='appealModalToggle']")).click();
	await delay(3000);
	browser.waitForAngular();
});
Then('FFC-0180 Hide APPEALS button is displayed', async () => {
	await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@class='primary appeal-modal-btn']"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
Then('FFC-0180 click on Hide APPEALS button', async () => {
	await delay(3000);
    element(by.xpath(".//*[@class='primary appeal-modal-btn']")).click();
	await delay(1000);
	browser.waitForAngular();
});
When('FFC-0190 click on Show button in Hide', async () => {
	await delay(3000);
    element(by.xpath(".//*[@id='appealModalToggle']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@class='primary appeal-modal-btn']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('FFC-0190 click on Show APPEALS button is displayed', async () => {
	await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@class='primary appeal-modal-btn']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
When('FFC-0190 click on Show APPEALS button', async () => {
	await delay(3000);
    element(by.xpath(".//*[@class='primary appeal-modal-btn']")).click();
	await delay(5000);
});
Then('FFC-0200 Formed Funding History is displayed', async () => {
	await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='campaign_history-0']/td[2]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='campaign_history-1']/td[2]"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
When('FFC-0210 click on Edit in Formed funding', async () => {
	await delay(10000);
    element(by.xpath(".//*[@id='goalModalToggle']")).click();
	await delay(10000);
	element(by.xpath(".//*[@id='goal-modal']/div/input")).click();
	await delay(10000);
	element(by.xpath("/html/body/div[4]/aside[3]/div[2]/footer/button")).click();
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[2]/div[1]/div/div"))).to.eventually.exist;
	await delay(6000);
});
Then('GFF-0040 Enter the Recipient Information', async () => { 
	await delay(10000);
	element(by.xpath(".//*[@id='group-subscription-organization']/div[3]/div[1]/div/div/div[1]/div/input")).sendKeys("GIFT");
	await delay(5000);
	element(by.xpath(".//*[@id='group-subscription-organization']/div[3]/div[1]/div/div/div[2]/div/input")).sendKeys("RECIPIENT");
	await delay(5000);
	element(by.xpath(".//*[@id='gift-message-email']")).sendKeys("RECIPIENT@gmail.com");
	await delay(3000);
	element(by.xpath(".//*[@id='gift-message-whole-message']")).sendKeys("FORMED is the revolutionary digital platform that gives your parish unprecedented access to video-based study programs, feature films, audio presentations, and eBooks from the Church’s foremost presenters. Whether fallen away or deeply engaged, at the parish or on the go, FORMED helps you reach your flock anytime, anywhere.");
	await delay(10000);
	element(by.xpath(".//*[@id='group-subscription-organization']/div[3]/div[3]/div/button")).click();
	await delay(10000);
});
Then('GFF-0050 Gifting Information and Edit button are displayed', async () => {
	await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='checkout-step-gift-static']/div/p[2]/em"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='gift']/div[1]/div"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('GFF-0110 Gifting Restrictions prompt is displayed', async () => {
	await delay(10000);
    await expect(browser.findElement(by.xpath("//*[@id='ineligible-modal']/h1"))).to.eventually.exist;
	await delay(5000);
});
Then('GFF-0150 REMOVE ITEMS button is displayed', async () => {
	await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='checkout-step-review']/div[1]/button"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('GFF-0150 click on REMOVE ITEMS button', async () => {
	await delay(3000);
   element(by.xpath(".//*[@id='checkout-step-review']/div[1]/button")).click();
   await delay(1000);
   browser.waitForAngular();
   await delay(7000);
});
Then('GFF-0150 click on Read product', async () => {
	await delay(3000);
   element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img")).click();
   await delay(15000);
});
When('SSCC-0010 Click Edit button in Payment method', async () => {
	await delay(3000);
   element(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[4]/p[2]/a")).click();
   await delay(8000);
});
When('SSCC-0010 Click on Change payment method', async () => {
	await delay(3000);
	element(by.xpath(".//*[@id='md_savecard']")).click();
	await delay(3000);
});
Then('SSCC-0010 Payment method dropdown is displayed', async () => {
	await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='md_savecard']/option[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='md_savecard']/option[2]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='md_savecard']/option[3]"))).to.eventually.exist;
    await delay(3000);
});
When('SSCC-0020 Click on Add New card', async () => {
	await delay(2000);
	element(by.xpath(".//*[@id='md_savecard']/option[3]")).click();
	await delay(3000);
});
When('SSCC-0020 Enter Billing information For New credit Card', async () => {
	await delay(2000);
	element(by.xpath("//*[@id='magedelight_cybersource_firstname']")).sendKeys('vijay');
	browser.manage().timeouts().implicitlyWait(3000);
	element(by.xpath("//*[@id='magedelight_cybersource_lastname']")).sendKeys('Rajesh');
	browser.manage().timeouts().implicitlyWait(3000);
	element(by.xpath("//*[@id='magedelight_cybersource_street']")).sendKeys('illunious');
	browser.manage().timeouts().implicitlyWait(3000);
	element(by.xpath("//*[@id='magedelight_cybersource_city']")).sendKeys('chicago');
	await delay(2000);
	element(by.xpath("//*[@id='magedelight_cybersource_region_id']")).click();
	await delay(2000);
	element(by.xpath(".//*[@value='12'")).click();
	await delay(2000);
	element(by.xpath("//*[@id='magedelight_cybersource_zip']")).sendKeys('60014');
	await delay(2000);
});
Then('SSCC-0020 Enter Payment Details For New credit Card', async () => {
	await delay(3000);
	element(by.xpath("//*[@id='magedelight_cybersource_cc_type']")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4111111111111111");
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[7]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[3]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("222");
	await delay(1000);
	element(by.xpath("//*[@id='cybersource_add_card']/fieldset[2]/div[5]/div/label/span")).click();
	await delay(1000);
	element(by.xpath("/html/body/div[3]/aside[2]/div[2]/footer/button")).click();
	await delay(1000);
	browser.waitForAngular();
});
Then('SALES-1.0 navigate to magento', async () => {
	await delay(5000);
	await browser.get("https://market.beta.formed.org/control_panel_v1");
	await delay(1000);
	browser.waitForAngular();
	await delay(8000);
});
When('SALES-1.0 Enter Username and password', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='username']")).sendKeys('testadmin')
	await delay(2000);
	element(by.xpath("//*[@id='login']")).sendKeys('hYb2pt9t')
	await delay(2000);
	element(by.xpath(".//*[@class='action-login action-primary']")).click();
	await delay(2000);
	browser.waitForAngular();
	await delay(5000);
	element(by.xpath("//*[@id='html-body']/div[3]/aside/div[2]/header/button")).click();
	await delay(2000);
});
When('SALES-1.0 Click on SALES button', async () => {
	await delay(5000);
    element(by.xpath("//*[@id='menu-magento-sales-sales']/a")).click();
	await delay(3000);
});
Then('SALES-1.0 Product Subscription is displayed', async () => {
	browser.manage().timeouts().implicitlyWait(5000);
	await expect(browser.findElement(by.xpath("//*[@id='menu-magento-sales-sales']/div/ul/li/div/ul/li[7]/a/span"))).to.eventually.exist;
    await delay(3000);
});
Then('SALES-1.0 Click on Product Subscription', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='menu-magento-sales-sales']/div/ul/li/div/ul/li[7]/a")).click();
	await delay(10000);
});
Then('SALES-1.0 Click on View button in purchased subscription', async () => {
	await delay(20000);
    element(by.xpath("//*[@id='container']/div/div[3]/table/tbody/tr[2]/td[3]/a")).click();
	await delay(2000);
});
When('SALES-1.0 Payment information is displayed', async () => {
	await delay(5000);
    await expect(browser.findElement(by.xpath("//*[@id='profile_edit']"))).to.eventually.exist;
    await delay(3000);
});
Then('SALES-1.0 Click on Edit Profile', async () => {
	await delay(10000);	
    element(by.xpath("//*[@id='profile_edit']")).click();
	await delay(3000);
    element(by.xpath("//*[@id='html-body']/div[7]/aside/div[2]/footer/button[2]")).click();
    await delay(5000);
});
When('SALES-1.0 Click on Card Details dropdown and verify', async () => {
	await delay(5000);	
    element(by.xpath("//*[@id='md_savecard']")).click();
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='md_savecard']/option[3]"))).to.eventually.exist;
	await delay(1000);                        
});
Then('SALES-1.1 Click on Add New Card button', async () => {
	await delay(5000);	
    element(by.xpath("//*[@id='md_savecard']/option[3]")).click();
	await delay(2000);
});
When('SALES-1.1 Enter Billing information For New credit Card', async () => {
	await delay(2000);
	element(by.xpath("//*[@name='md_cybersource_new_card[address_info][firstname]']")).sendKeys('vijay');
	await delay(1000);
	element(by.xpath("//*[@name='md_cybersource_new_card[address_info][lastname]']")).sendKeys('Rajesh');
	await delay(1000);
	element(by.xpath("//*[@name='md_cybersource_new_card[address_info][street]']")).sendKeys('illunious');
    await delay(1000);
	element(by.xpath("//*[@name='md_cybersource_new_card[address_info][city]']")).sendKeys('chicago');
	await delay(2000);
	element(by.xpath("//*[@id='md_cybersource_new_card_region_id']")).click();
	await delay(2000);
	element(by.xpath("//*[@id='md_cybersource_new_card_region_id']/option[13]")).click();
	await delay(2000);
	element(by.xpath("//*[@name='md_cybersource_new_card[address_info][zip]']")).sendKeys('60014');
	await delay(1000);
	element(by.xpath("//*[@name='md_cybersource_new_card[address_info][telephone]']")).sendKeys('125879453');
	await delay(1000);
});
When('SALES-1.1 Enter Payment Details', async () => {
	await delay(5000);	
	element(by.xpath("//*[@id='md_cybersource_new_card_cc_type']")).click();
	await delay(2000);
	element(by.xpath("//*[@id='md_cybersource_new_card_cc_type']/option[3]")).click();
	await delay(2000);
    element(by.xpath("//*[@name='md_cybersource_new_card[payment_info][cc_number]']")).sendKeys('4242424242424242');
	await delay(2000);
	element(by.xpath("//*[@id='md_cybersource_new_card_expiration']/option[2]")).click();
	await delay(1000);
	element(by.xpath("//*[@id='md_cybersource_new_card_expiration_yr']/option[4]")).click();
	await delay(1000);
	element(by.xpath("//*[@id='new_card_form']/div[2]/table/tbody/tr[14]/td/input")).sendKeys("123");
	await delay(3000);
});
Then('SALES-1.2 Click on Update Profile', async () => {
	await delay(5000);	
    element(by.xpath("//*[@id='profile_update']")).click();
	await delay(8000);
});
Then('SALES-1.2 Click on Generate Order', async () => {
	await delay(5000);	
    element(by.xpath("//*[@id='generate_bill']/span")).click();
	await delay(3000);
	element(by.xpath("//*[@id='html-body']/div[7]/aside/div[2]/footer/button[2]/span")).click();
	await delay(2000);
});
Then('SALES-1.2 Click on Re-activate button', async () => {
	await delay(5000);	
    element(by.xpath("//*[@id='profile_reactivate']/span")).click();
	await delay(5000);
	element(by.xpath("//*[@id='html-body']/div[7]/aside/div[2]/footer/button[2]/span")).click();
	await delay(5000);
});
Then('SALES-NEW_1.0 Click on Product name dropdown and verify', async () => {
	await delay(5000);	
    element(by.xpath("//*[@id='product_select']")).click();
	await delay(3000);
	await expect(browser.findElement(by.xpath("//*[@id='product_select']/option[1]"))).to.eventually.exist;
	await delay(1000);
	await expect(browser.findElement(by.xpath("//*[@id='product_select']/option[2]"))).to.eventually.exist;
    await delay(1000);
});
When('SALES-NEW_1.0 Click on Subscription from Monthly', async () => {
	await delay(5000);	
    element(by.xpath("//*[@id='product_select']/option[2]")).click();
	await delay(3000);
});
Then('SALES-NEW_1.0 Change Monthly amount is displayed', async () => {
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(element(by.xpath("//*[@id='subscribenow_productsubscribers_view_tabs_profile_info_content']/section[1]/div/div[2]/div[2]/table/tbody/tr[1]/td")).getText()).to.eventually.equal("$179.99");
	await delay(2000);
});
When('SALES-NEW_2.0 Click on Subscription from Annual', async () => {
	await delay(5000);	
    element(by.xpath("//*[@id='product_select']/option[1]")).click();
	await delay(3000);
});
When('SALES-NEW_2.0 Change Annual amount is displayed', async () => {
	browser.manage().timeouts().implicitlyWait(10000);
	await expect(element(by.xpath("//*[@id='subscribenow_productsubscribers_view_tabs_profile_info_content']/section[1]/div/div[2]/div[2]/table/tbody/tr[1]/td")).getText()).to.eventually.equal("$925");
	await delay(2000);
});
When('SALES-NEW_3.0 Click on payment Method and verify check option', async () => {
	await delay(5000);	
	element(by.xpath("//*[@id='subscription_profile_update']/section[1]/div/div[2]/div[2]/table/tbody/tr[2]/td/select")).click();
	await delay(3000);
});
When('SALES-NEW_3.0 Select Check option', async () => {
	await delay(5000);	
	element(by.xpath("//*[@id='subscription_profile_update']/section[1]/div/div[2]/div[2]/table/tbody/tr[2]/td/select/option[2]")).click();
	await delay(3000);
});
Then('SALES-NEW_3.0 Payment method is displayed', async () => {
	browser.manage().timeouts().implicitlyWait(10000);	
	await expect(element(by.xpath("//*[@id='subscribenow_productsubscribers_view_tabs_profile_info_content']/section[1]/div/div[2]/div[2]/table/tbody/tr[2]/td")).getText()).to.eventually.equal("Check / Money order");
	await delay(2000);
});
When('SALES-NEW_4.0 Click on Payment method and select Credit Card', async () => {
	await delay(5000);	
	element(by.xpath("//*[@name='payment_method_code']")).click();
	await delay(3000);
	await expect(browser.findElement(by.xpath("//*[@id='subscription_profile_update']/section[1]/div/div[2]/div[2]/table/tbody/tr[2]/td/select/option[2]"))).to.eventually.exist;
	await delay(1000);
	element(by.xpath("//*[@id='subscription_profile_update']/section[1]/div/div[2]/div[2]/table/tbody/tr[2]/td/select/option[2]")).click();
	await delay(3000);
});
Then('SALES-NEW_4.0 Select Add New Card', async () => {
	await delay(5000);	
	element(by.xpath("//*[@id='md_savecard']")).click();
	await delay(3000);
	await expect(browser.findElement(by.xpath("//*[@id='md_savecard']/option[2]"))).to.eventually.exist;
	await delay(1000);
	element(by.xpath("//*[@id='md_savecard']/option[2]")).click();
	await delay(3000);
});
Then('SALES-NEW_4.0 Card Details information is displayed', async () => {
	await delay(5000);	
	await expect(element(by.xpath("//*[@id='subscribenow_productsubscribers_view_tabs_profile_info_content']/section[1]/div/div[2]/div[2]/table/tbody/tr[3]/th/span")).getText()).to.eventually.equal("Card Details:");
	await delay(2000);
});
When('DONATE-2.0 Review Order Panel is displayed', async () => {	
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='review']/div[1]/span"))).to.eventually.exist;
	await delay(3000);
});
Then('DONATE-2.0 Donations Solicitation Message is displayed', async () => {
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='checkout-step-review']/div[3]/div[1]/p[2]"))).to.eventually.exist;
	await delay(1000);
});
When('DONATE-2.1 Click on Why donate?', async () => {
	await delay(1000);    	
	element(by.xpath("//*[@id='checkout-step-review']/div[3]/a")).click();
	await delay(3000);
});
Then('DONATE-2.1 Click on Close button in Popup window', async () => {	
	element(by.xpath("/html/body/div[4]/aside[4]/div[2]/footer/button/span")).click();
	await delay(3000);
});
Then('DONATE-2.2 Enter dollar amount', async () => {	
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='checkout-step-review']/div[3]/div[2]/div[1]/input"))).to.eventually.exist;
	await delay(1000);
	element(by.xpath("//*[@id='checkout-step-review']/div[3]/div[2]/div[1]/input")).click();
	await delay(3000);
	element(by.xpath("//*[@id='checkout-step-review']/div[3]/div[2]/div[1]/input")).sendKeys('50');
	await delay(3000);
});
Then('DONATE-2.2 Click on Donations Solicitation', async () => {	
	await delay(1000);
	element(by.xpath("//*[@id='checkout-step-review']/div[3]/div[1]/p[2]")).click();
	await delay(15000);
});
Then('DONATE-2.3 Donation amount displayed in order summary', async () => {	
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='opc-sidebar']/div[1]/div[2]/table/tbody/tr[3]/td/span    "))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(element(by.xpath("//*[@id='opc-sidebar']/div[1]/div[2]/table/tbody/tr[2]/td/span")).getText()).to.eventually.equal("$50.00");
	await delay(2000);
});
When('DONATE-2.3 Total Order amount displayed in order summary', async () => {	
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(element(by.xpath("//*[@id='opc-sidebar']/div[1]/div[2]/table/tbody/tr[4]/td[2]/strong/span")).getText()).to.eventually.equal("$52.49");
	await delay(2000);
});
Then('DONATE-2.3 Change an amount in the Donations Form', async () => {	
	element(by.xpath("//*[@id='checkout-step-review']/div[3]/div[2]/div[1]/input")).click();
	await delay(3000);
	element(by.xpath("//*[@id='checkout-step-review']/div[3]/div[2]/div[1]/input")).sendKeys('0');
	await delay(3000);
});
Then('DONATE-2.3 Change Donation amount displayed in order summary', async () => {	
	await expect(element(by.xpath("//*[@id='opc-sidebar']/div[1]/div[2]/table/tbody/tr[2]/td/span")).getText()).to.eventually.equal("$500.00");
	await delay(2000);
});
When('DONATE-2.3 Change Total Order amount displayed in order summary', async () => {	
	await expect(element(by.xpath("//*[@id='opc-sidebar']/div[1]/div[2]/table/tbody/tr[4]/td[2]/strong/span")).getText()).to.eventually.equal("$502.49");
	await delay(2000);
});
Then('DONATE-3.0 Order and Donation Confirmation Page is displayed', async () => {	
	await delay(15000);
	await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div/div[8]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div/div[7]/div[2]/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div/div[7]/div[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]/div/div[10]/div[2]/strong/span"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('DONATE-3.0', async () => {	
	await delay(10000);
	expect(element(by.xpath("//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/p")).getText());
	await delay(1000);		
});
When('DONATE-2.4 select the checkbox of Make monthly recurring', async () => {	
	await delay(3000);
	element(by.xpath("//*[@id='checkout-step-review']/div[3]/div[2]/div[2]/label/span")).click();
	await delay(5000);
});
Then('DONATE-2.4 Uncheck the checkbox of Make monthly recurring', async () => {	
	await delay(3000);
	element(by.xpath("//*[@id='checkout-step-review']/div[3]/div[2]/div[2]/label/span")).click();
	await delay(5000);
});
When('DONATE-3.4 Donation information is displayed', async () => {	
	await delay(5000);
	await expect(browser.findElement(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[2]/div[2]/div[1]/div/div[1]/span[2]/a"))).to.eventually.exist;
	await delay(2000);                         
	await expect(browser.findElement(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[2]/div[2]/div[1]/div/div[3]/span[2]/a"))).to.eventually.exist;
	await delay(2000);
});
Then('DONATE-3.4 Click on Update button of Payment method', async () => {	
	await delay(5000);
	element(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[2]/div[2]/div[2]/div/div/span[2]/a")).click();
	await delay(3000);
});
Then('DONATE-3.4 Select New credit card', async () => {	
	await delay(5000);
	element(by.xpath("//*[@id='update-payment__form-modal']/select")).click();
	await delay(3000);
	element(by.xpath("//*[@id='update-payment__form-modal']/select/option[3]")).click();
	await delay(3000);
	element(by.xpath("//*[@id='update-payment__firstname']")).sendKeys("Fname");
    await delay(1000);
	element(by.xpath("//*[@id='update-payment__lastname']")).sendKeys("Lname");
	await delay(1000);
	element(by.xpath("//*[@id='update-payment__street']")).sendKeys("chicago ilunious");
	await delay(1000);
	element(by.xpath("//*[@id='update-payment__city']")).sendKeys("chicago");
	await delay(2000);
	element(by.xpath("//*[@id='update-payment__region_id']")).click();
	await delay(2000);
	element(by.xpath("//*[@id='update-payment__region_id']/option[13]")).click();
	await delay(2000);
	element(by.xpath("//*[@id='update-payment__zip']")).sendKeys("60014");
	await delay(5000);
});
Then('DONATE-3.4 Enter Payment Method', async () => {	
	await delay(5000);
	element(by.xpath("//*[@id='update-payment__cc-number']")).sendKeys("4242424242424242");
	await delay(1000);
	element(by.xpath("//*[@id='update-payment__form-modal']/div/fieldset[2]/div[2]/div/div[1]/select/option[2]")).click();
	await delay(1000);
	element(by.xpath("//*[@id='cc_exp_year']/option[3]")).click();
	await delay(1000);
    element(by.xpath("//*[@id='update-payment__cc-cid']")).sendKeys("60014");
	await delay(3000);
	element(by.xpath("/html/body/div[3]/aside[5]/div[2]/footer/button[1]/span")).click();
	await delay(3000);
});
When('DONATE-3.4 Click on New Item', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a")).click();
	await delay(1000);
	browser.waitForAngular();
});
Then('DONATE-3.4 Enter CVV and click on continue to Review button', async () => {
	await delay(10000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys('123');
	await delay(3000);
	element(by.xpath("//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
	await delay(3000);
});
Then('DONATE-2.5 You already have a recurring donation prompt is displayed', async () => {
	await delay(5000);
    await expect(browser.findElement(by.xpath("//*[@id='existing-recurring-donation']/h1"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='existing-recurring-donation']/div[1]/input"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='existing-recurring-donation']/div[1]/span[1]"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('DONATE-2.5 Enter dollar amount', async () => {	
	await delay(5000);
	element(by.xpath("//*[@id='existing-recurring-donation']/div[1]/input")).sendKeys("100");
	await delay(10000);
});
Then('DONATE-2.5 Click on Edit button', async () => {	
	await delay(5000);
	element(by.xpath("/html/body/div[5]/aside[5]/div[2]/footer/button[1]")).click();
	await delay(1000);
});
When('DONATE-3.4 Changed Recurring Donation is displayed', async () => {	
	browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[2]/div[2]/div[1]/div/div[1]/span[2]/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('DONATE-3.4 Click on Cancel button in Donation information', async () => {	
	await delay(5000);
	element(by.xpath("//*[@id='formed-account-subscription-accordion']/div/div[2]/div[2]/div[1]/div/div[1]/span[2]/a")).click();
	await delay(3000);
});
When('DONATE-3.4 Cancle confirmation promt is displayed', async () => {	
	browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("/html/body/div[3]/aside[3]/div[2]/footer/button/span"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath("/html/body/div[3]/aside[3]/div[2]/footer/button/span")).click();
	await delay(3000);
});
Then('DONATE-3.4 Your subscription was canceled message is displayed', async () => {	
	browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("//*[@id='maincontent']/div[2]/div[2]/div[1]/div/div"))).to.eventually.exist;
	await delay(1000);
});
Then('Enter Details in create Account', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='creditplans.html']")).click();
	await delay(5000);
	element(by.xpath("//*[@id='offer-dt']/p[4]/a/button")).click();
	await delay(5000);
	element(by.xpath("//*[@id='col1']/p[5]/a/button")).click();
	await delay(15000);
	var x = 9999999;
	var rand = Math.floor(Math.random() * x) + 1;
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("50000");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("invalid" + rand + "@gmail.com");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("Raj@2016");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Raj@2016");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();
	await delay(15000);	
});
When('TSI-1 Click on Share Item', async () => {
	await delay(5000);
	element(by.xpath("/html/body/div[3]/div/div/div[2]/evangelization-panel/div/table/tbody/tr[2]/td[1]")).click();
	await delay(10000);
});
Then('TSI-5 Source title is displayed', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("//*[@id='scroll-top']/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div/div[2]/h5/a"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
	await expect(browser.findElement(by.xpath("//*[@id='scroll-top']/div/div/div[3]/div/div/div[1]/a/div/div/div"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(3000);
});
Then('TSI-6 Share Item Discription is displayed', async () => {
	await delay(2000);
	await expect(browser.findElement(by.xpath("//*[@id='scroll-top']/div/div/div[1]/div[2]/div[1]/p"))).to.eventually.exist;
	await delay(3000);
});
When('TSI-3 Thumbnail of item and description are displayed', async () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath("//*[@id='scroll-top']/div/div/div[3]/div/div/div[1]/a/div/div/div"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath("//*[@id='scroll-top']/div/div/div[3]/div/div/div[2]/div/div[2]/div"))).to.eventually.exist;
	await delay(3000);
});
When('TSI-2 GET FREE TRAIL link is displayed', async () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath("//*[@id='scroll-top']/div/div/div[3]/div/div/div[2]/div/div[1]/div[2]/a"))).to.eventually.exist;
	await delay(3000);
});
Then('PBP-0001 Enter Details in create Account', async () => {
	console.log(`logging object`, globalObject);
	await delay(5000);
	  var x = 9999999;
	  var rand = Math.floor(Math.random()*x) + 1;
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("50000");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("invalid"+rand+"@gmail.com");
	  await delay(1000);
	  var obj = {
		randomMails:  `invalid${rand}@gmail.com`
	  };
    randomMail = `invalid${rand}@gmail.com`;
	var json = JSON.stringify(obj);
	console.log(`random mails array obj`, obj);
	var outputFilename = './MAIL_ID1.json';
	fs.writeFile(outputFilename, json, 'utf8', cb);
	function cb(data) {
		console.log(`testcases.json updated successfully...`);
	}
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
	  await delay(5000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
	  await delay(5000);
	  browser.waitForAngular();
	  await delay(10000);
});
Then('PBP-0070 Enter Details in create Account', async () => {
	await delay(5000);
	  var x = 9999999;
	  var rand = Math.floor(Math.random()*x) + 1;
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("50000");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("invalid"+rand+"@gmail.com");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
	  await delay(5000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
	  await delay(5000);
	  browser.waitForAngular();
	  await delay(10000);
});
Then('Email_ID-1 Enter Username and password', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='login-dropdown-button']")).click();
	await delay(5000); 
	const fs = require('fs');
	var path = "./MAIL_ID1.json";
	fs.readFile("MAIL_ID1.json",  (err: any, data: string)=> {
	if (err) throw err;
	// data:Buffer=JSON.parse(data:any);
	var Data:any=JSON.parse(data);
   	// let randomMail:any= this.Data;
   console.log(Data.randomMails); 
    element(by.xpath("//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys(Data.randomMails); 
});   
});         
Then('PBP-0002 Enter Details in create Account', async () => {
	console.log(`logging object`, globalObject);
	await delay(5000);
	  var x = 9999999;
	  var rand = Math.floor(Math.random()*x) + 1;
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
	  await delay(1000); 
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("50000");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("invalid"+rand+"@gmail.com");
	  await delay(1000);
	  var obj = {
		randomMails:  `invalid${rand}@gmail.com`
	  };
    randomMail = `invalid${rand}@gmail.com`;
	var json = JSON.stringify(obj);
	console.log(`random mails array obj`, obj);
	var outputFilename = './MAIL_ID2.json';
	fs.writeFile(outputFilename, json, 'utf8', cb);
	function cb(data) {
		console.log(`testcases.json updated successfully...`);
	}
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
	  await delay(5000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
	  await delay(5000);
	  browser.waitForAngular();
	  await delay(10000);
});   
Then('Email_ID-2 Enter Username and password', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='login-dropdown-button']")).click();
	await delay(5000); 
	const fs = require('fs');
	var path = "./MAIL_ID2.json";
	fs.readFile("MAIL_ID2.json",  (err: any, data: string)=> {
	if (err) throw err;
	// data:Buffer=JSON.parse(data:any);
	var Data:any=JSON.parse(data);
   	// let randomMail:any= this.Data;
   console.log(Data.randomMails); 
    element(by.xpath("//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys(Data.randomMails); 
}); 
});
Then('PBP-0003 Enter Details in create Account', async () => {  
	console.log(`logging object`, globalObject);
	 await delay(10000);
	  var x = 9999999;
	  var rand = Math.floor(Math.random()*x) + 1;
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("50000");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("invalid"+rand+"@gmail.com");
	  await delay(1000);
	  var obj = {
		randomMails:  `invalid${rand}@gmail.com`
	  };
    randomMail = `invalid${rand}@gmail.com`;
	var json = JSON.stringify(obj);
	console.log(`random mails array obj`, obj);
	var outputFilename = './MAIL_ID3.json';
	fs.writeFile(outputFilename, json, 'utf8', cb);
	function cb(data) {
		console.log(`testcases.json updated successfully...`);
	}
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
	  await delay(5000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
	  await delay(5000);
	  browser.waitForAngular();
	  await delay(15000);
});
Then('Email_ID-3 Enter Username and password', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='login-dropdown-button']")).click();
	await delay(5000); 
	const fs = require('fs');
	var path = "./MAIL_ID3.json";
	fs.readFile("MAIL_ID3.json",  (err: any, data: string)=> {
	if (err) throw err;
	// data:Buffer=JSON.parse(data:any);
	var Data:any=JSON.parse(data);
   	// let randomMail:any= this.Data;
   console.log(Data.randomMails); 
    element(by.xpath("//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys(Data.randomMails); 
});   
});      
Then('PBP-0004 Enter Details in create Account', async () => {  
	console.log(`logging object`, globalObject);
	 await delay(10000);
	  var x = 9999999;
	  var rand = Math.floor(Math.random()*x) + 1;
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("50000");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("invalid"+rand+"@gmail.com");
	  await delay(1000);
	  var obj = {
		randomMails:  `invalid${rand}@gmail.com`
	  };
    randomMail = `invalid${rand}@gmail.com`;
	var json = JSON.stringify(obj);
	console.log(`random mails array obj`, obj);
	var outputFilename = './MAIL_ID4.json';
	fs.writeFile(outputFilename, json, 'utf8', cb);
	function cb(data) {
		console.log(`testcases.json updated successfully...`);
	}
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
	  await delay(5000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
	  await delay(5000);
	  browser.waitForAngular();
	  await delay(15000);
});
Then('Email_ID-4 Enter Username and password', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='login-dropdown-button']")).click();
	await delay(5000); 
	const fs = require('fs');
	var path = "./MAIL_ID4.json";
	fs.readFile("MAIL_ID4.json",  (err: any, data: string)=> {
	if (err) throw err;
	// data:Buffer=JSON.parse(data:any);
	var Data:any=JSON.parse(data);
   	// let randomMail:any= this.Data;
   console.log(Data.randomMails); 
    element(by.xpath("//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys(Data.randomMails); 
});   
});      
Then('PBP-0005 Enter Details in create Account', async () => {  
	console.log(`logging object`, globalObject);
	 await delay(10000);
	  var x = 9999999;
	  var rand = Math.floor(Math.random()*x) + 1;
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("50000");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("invalid"+rand+"@gmail.com");
	  await delay(1000);
	  var obj = {
		randomMails:  `invalid${rand}@gmail.com`
	  };
    randomMail = `invalid${rand}@gmail.com`;
	var json = JSON.stringify(obj);
	console.log(`random mails array obj`, obj);
	var outputFilename = './MAIL_ID5.json';
	fs.writeFile(outputFilename, json, 'utf8', cb);
	function cb(data) {
		console.log(`testcases.json updated successfully...`);
	}
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
	  await delay(5000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
	  await delay(5000);
	  browser.waitForAngular();
	  await delay(15000);
});
Then('Email_ID-5 Enter Username and password', async () => {
	await delay(5000);
	element(by.xpath("//*[@id='simple-dropdown']")).click();
	await delay(5000); 
	const fs = require('fs');
	var path = "./MAIL_ID5.json";
	fs.readFile("MAIL_ID5.json",  (err: any, data: string)=> {
	if (err) throw err;
	// data:Buffer=JSON.parse(data:any);
	var Data:any=JSON.parse(data);
   	// let randomMail:any= this.Data;
   console.log(Data.randomMails); 
    element(by.xpath("//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys(Data.randomMails); 
});   
});
});
