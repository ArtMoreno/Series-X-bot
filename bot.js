const puppeteer = require('puppeteer');

const product_url = "https://www.walmart.com/ip/Xbox-Series-X/443574645";



async function givePage() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    return page;
}

async function addToCart(page) {
    await page.goto(product_url)
    await page.waitForSelector("<section class="prod-ProductCTA primaryProductCTA-marker"><div class="valign-middle display-inline-block prod-product-primary-cta primaryProductCTA-marker"><div class="visuallyhidden" aria-live="assertive" aria-relevant="additions"></div><div class="display-inline-block l-margin-right QuantityPicker-select font-semibold field field--select field--secondary"><span aria-hidden="true" class="elc-icon field-select-arrow field-select-arrow--secondary elc-icon-down-arrow elc-icon-16"></span><select aria-invalid="false" aria-label="Quantity" data-automation-id="field" class="field-input field-input--secondary"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option></select><label class="field-label field-label--secondary"><span class="field-label-text" data-automation-id="field-label" aria-hidden="true">Qty: </span><span class="field-label-extras" data-automation-id="field-label-extras"></span><span class="field-label-error" aria-live="polite" data-automation-id="field-error"></span></label></div><div class="prod-product-cta-add-to-cart display-inline-block"><button class="button spin-button prod-ProductCTA--primary button--primary" data-automation-id="button" data-tl-id="ProductPrimaryCTA-cta_add_to_cart_button" type="button"><span class="button-wrapper"><span class="spin-button-children">Add to cart</span></span></button></div></div><div class="cart-error-modal"></div></section>");
    await page.click("<section class="prod-ProductCTA primaryProductCTA-marker"><div class="valign-middle display-inline-block prod-product-primary-cta primaryProductCTA-marker"><div class="visuallyhidden" aria-live="assertive" aria-relevant="additions"></div><div class="display-inline-block l-margin-right QuantityPicker-select font-semibold field field--select field--secondary"><span aria-hidden="true" class="elc-icon field-select-arrow field-select-arrow--secondary elc-icon-down-arrow elc-icon-16"></span><select aria-invalid="false" aria-label="Quantity" data-automation-id="field" class="field-input field-input--secondary"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option></select><label class="field-label field-label--secondary"><span class="field-label-text" data-automation-id="field-label" aria-hidden="true">Qty: </span><span class="field-label-extras" data-automation-id="field-label-extras"></span><span class="field-label-error" aria-live="polite" data-automation-id="field-error"></span></label></div><div class="prod-product-cta-add-to-cart display-inline-block"><button class="button spin-button prod-ProductCTA--primary button--primary" data-automation-id="button" data-tl-id="ProductPrimaryCTA-cta_add_to_cart_button" type="button"><span class="button-wrapper"><span class="spin-button-children">Add to cart</span></span></button></div></div><div class="cart-error-modal"></div></section>", elem => elem.click());
}   

async function checkout() {
    var page = await givePage();
    await addToCart(page);
}



checkout();