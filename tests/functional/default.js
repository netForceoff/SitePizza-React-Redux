const {assert} = require('chai');

const addCount = (browser, button, block, span) => {
	return browser
		.waitForVisible(button)
		.click(button)
		.click(button)
		.waitForVisible(block, 5000)
		.click(block)
		.waitForVisible(span)
		.click(span)
		.waitForVisible(span, 5000)
		.getText(span)
		.then(text => {
			console.log(text);
			assert('123', text.includes(1));
		})
};

const main = async (browser, url, element) => {
	return  browser
				.url(url)
		    .waitForVisible(element, 5000)
				.click(element);
};

const pizzaClick = (browser, element) => {
	  return browser
		     .waitForVisible(element)
		     .click(element)
		     .pause(2000);
};

const shop =  (browser, element) => {
	   return  browser
				.waitForVisible(element, 5000)
				.getText(element)
				.then(text => {
					console.log(text);
					assert('123', text.includes('Сумма 22.90руб.'));
				});
};

const checkInputSearch = (browser, element, text) => {
	return browser
					.waitForVisible(element, 10000)
					.setValue(element, text)
					.pause(3000)
					.getValue(element).then(function(value) {
							assert(value === text);
					})
					.pause(3000)
					.clearElement(element)
					.getValue (element) .then ( function ( value ) {
							assert (value === '' );
					});
};



describe('adding to cart',  function() {
	it(`adds pizza to cart`,  async function() {
		await main(this.browser, 'http://192.168.158.91:8080/', 'a[data-test-id="pizza"]');
		this.browser.pause(5000);
		await pizzaClick(this.browser, 'button[data-test-id="add1"]');
		await shop(this.browser, 'div[class="src-components-Userbox-Shop-Shop__shop"]');
	});

	it(`add count to shop items`, async function() {
			await main(this.browser, 'http://192.168.158.91:8080/', 'a[data-test-id="pizza"]');
			await addCount(this.browser, 'button[data-test-id="add1"]', 'div[class="src-components-Userbox-Shop-Shop__shop"]', 'span[class="src-components-Shop-ShopItems-ShopItems__product__price_minus"]');
	});

	it(`check to input search`, async function() {
		await main(this.browser, 'http://192.168.158.91:8080/', 'a[data-test-id="pizza"]');
		await checkInputSearch(this.browser, 'input[data-set-change="search"]', 'Дон-Макарон');
	});

	it(`checkbox filter`, async function() {
			await main(this.browser, 'http://192.168.158.91:8080/', 'a[data-test-id="pizza"]');
			this.browser.scroll('body', 0, 200)
			.waitForVisible('button[class="src-components-Filter-Filter__filter_button"]', 2000)
			.click('button[class="src-components-Filter-Filter__filter_button"]')
			.pause(2000)
			.isEnabled ( 'label[for="best"]' )
			.then ( function ( isEnabled ) {
				console.log(isEnabled);
			})
			.waitForVisible('label[for="best"]')
			.click('label[for="best"]')
			.pause(2000)
			.click('label[for="best"]')
			.pause(2000)
			.waitForVisible('button[class="src-components-Filter-Filter__form__closeForm_filter"]', 2000)
			.click('button[class="src-components-Filter-Filter__form__closeForm_filter"]')
			.pause(2000)
	});

	it(`visible elements`, async function () {
		await this.browser
			.url('http://192.168.158.91:8080/')
			.waitForVisible('a[data-test-id="pizza"]', 5000)
			.pause(1000)
			.debug()
			.click('a[data-test-id="pizza"]')
			.isVisibleWithinViewport('div[class="src-components-Menu-MenuSearch-MenuSearch__mainMenu__search"]')
			.then(function(isVisible) {
				console.log(isVisible)
			})
	});

it(`check doubleClick`, async function()  {
	await this.browser
		.url('http://192.168.158.91:8080/')
		.waitForVisible('a[data-test-id="pizza"]', 5000)
		.pause(1000)
		.click('a[data-test-id="pizza"]')
		.waitForVisible('button[data-test-id="add1"]')
		.leftClick('button[data-test-id="add1"]')
		.then(function(click) {
			console.log(click);
		})
		.pause(3000)
})
});
