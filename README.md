# Command line utility for Geo coder

  This module filter the location point based on the parameters passed
```javascript
    Options:
      -V, --version:             Output the version number
      --sourceLatitude <value>   Latitude of source
      --sourceLongitude <value>  Longitude of source
      -R, --radius <value>       Radius to find near by user 
      -O, --order <value>        Order of the result
      -U, --unit <value>         Unit km - K, miles- M, nutical mile- N
      -S, --src <value>          Source file
      -h, --help                 output usage information

```

## Base logic
The base logic for this utility is published in the separate module.
This module is available to npm [Geocoder Node Utility](https://www.npmjs.com/package/geocoder_node) 


## Quick Start

##### Clone the module 

```javascript
    git clone https://github.com/princesoni1989/geocoder.git

```

##### cd to the folder
```javascript
    cd geocoder

```
##### cd to the folder

```javascript
    npm run install

```

##### Give executable permission to file

```javascript
    chmod +x index.js

```

## Example

```javascript
    ./index.js
```

```javascript
    ./index.js --order asc  --radius 100
```

```javascript
    ./index.js --order desc  --radius 100
```








