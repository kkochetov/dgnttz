const assert = require('assert')

describe('Search cases', () => {
    beforeEach(() => {
        browser.url('/')
        $('div#title-search').click();
    });
      
    it('Open search widget', () => {
        browser.isVisible('div.digi-container-overlay')
    })

    it('Search', () => {
        var searchString = 'розетка';
        $('div.digi-search-input').setValue(searchString);
        $('div.digi-search-button').click();
        var searchResult = $$('div.digi-product-item');
        assert.isAbove(searchResult.length, 0, 'Search result must have more than 0 items');
        var firstItemText = searchResult[0].getText().toLowerCase(); 
        assert.include(firstItemText, searchString, "First item must contains " + searchString);
    })

    it('Autocomplete', () => {
        var searchString = 'роз';
        var fullSearchString = 'розетка';
        $('div.digi-search-input').click();
        browser.keys(searchString);
        var acResult = $$('div.ac-query-item');
        assert.isAbove(acResult.length, 0, 'Autocomplete result must have more than 0 items');
        var firstItemText = searchResult[0].getText().toLowerCase(); 
        assert.include(firstItemText, searchString, "First autocomplete item must contains " + searchString);
    })
})
