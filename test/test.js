const { jsconv_init } = require('jsconv')



const jsconv_test = jsconv_init('new.json')
jsconv_test.writejs('key3', 'val2')

const returned_data = jsconv_test.readjs() 
specific_data = jsconv_test.loadjs('key')