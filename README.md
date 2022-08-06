# jsconv

A Library to convert Javascript data to Python through JSON files. Read, Write, and Update data using Jsconv, which can be read through Python scripts.

### Installation and use

***Prerequisite:***

Install jsconv:

```
npm install jsconv
```

Importing Jsconv to your Program

```
const { jsconv_init } = require('jsconv')
```

### Full npm script reference


#### Initialization

To begin using jsconv, it is essential that you initialize a filepath of the desired json file to read, write, and update data. This can be done so with the following syntax:

```
const jsconv_var = jsconv_init('FILEPATH_OF_JSON')
```

*Note*: If the filepath is not in string format an error will be thrown. View the ***Errors*** section of the documentation to learn more.

#### Reading JSON data

Jsconv returns all data from json in the form of a dictionary with the following syntax:

```
const returned_data = jsconv_var.readjs()
```

*Note*: Filepath must be valid or an error will be prompted. 

Jsconv will return ***null*** if there is no data on the json file. 

#### Writing to JSON 

Write data to JSON in the form of a key, value pair as so:

```
jsconv_var.writejs('KEY', 'VAL')
```
If the key has not been used to store data in the json, a new entry will appear on the file. However, if the key has already been used, the new data will override the old data by nature of a dictionary. 

*Note*: Errors may appear if the filepath is specified incorrectly upon initialization. Learn more under the ***Errors*** section of the documentation.


#### Load a certain Key on JSON

Jsconv has the ability to load a certain value given a desired key in the JSON.

```
const specific_data = jsconv_test.loadjs('KEY')
```

If the key is not found, an error will be prompted. Moreover, if the key has an empty data value, jsconv will return an ***undefined*** or ***null***.

### Errors

The most common error that can occur is a native ***JSON*** error where the filepath cannot be found in the form of:

```
SyntaxError: Unexpected end of JSON input
```

In this case, it is essential that the user has the filepath specified in the string format and is correct in terms of location. A common mistake users have is that they do not place, `./` before the parent directory to indicate that the location is within our present directory location on the Operating System.

Other errors that revolve JSON files are mostly related to its location. It is absolutely essential that the filepath is correct as ***all functions*** part of jsconv require a filepath reference.

## Resources (Coming Soon)
- [Pypi pconv](https://pypi.org/project/pconv-lib/0.0.3/)
- [Jsconv npm](https://www.npmjs.com/package/jsconv)



## Contact Information
Here are some of the ways you can find me:
 - [www.jaivalpatel.com]
 - [Twitter](https://twitter.com/patjaival)
 - [npm](https://www.npmjs.com/~jaivalpatel1)
 - [Instagram](https://www.instagram.com/jaivalpatelll/)

Made by @Jaival - 2022