const fs = require('fs')


class Jsconv {

    constructor(filepath) {
        if (typeof filepath !== "string") {
            throw new Error('Invalid Filepath')
        } else {
            this.filepath = filepath
        }

    }

    writejs(key, value) { // user func
        
        const updated_object = this.updateJson(key, value)
        let data = JSON.stringify(updated_object)
        try {
            fs.writeFileSync(this.filepath, data)
            console.log('JSON data is saved')
    
        } catch (err) {
            console.log(err)
            return err
        }
    }


    readjs() { // user_func
        try{
            const returned_result = fs.readFileSync(this.filepath, 'utf-8')
            return returned_result
            
        } catch (err) {
            console.log(err)
            return err
        }
    }

    updateJson(key, value) {

        try {
            let dictionary = {key: value}
            const stringified_dictionary = JSON.stringify(dictionary)
        
            const dictionary_obj = JSON.parse(stringified_dictionary)
            
            dictionary_obj[key] = value
            return dictionary_obj

        } catch (err) {
            console.log(err)
            return err
        }

    }

    loadjs(key) { //user func
        const returned_object = fs.readFileSync(this.filepath, 'utf-8')
        const returned_object_parsed = JSON.parse(returned_object)
        const result = returned_object_parsed[key]
        return result
    }
    

    



}



/*exports.jsconv_init = function (file_path) {
    const jsconv = new Jsconv(file_path)
    return jsconv
}*/

jsconv_init = function (file_path) {
    const jsconv = new Jsconv(file_path)
    return jsconv

}


