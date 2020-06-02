# generator-test-debug 
This repo contains examples and information on how to debug and how to test a yeoman generator, using the VS Code IDE.

## Assumptions

You've previously installed [Yeoman](http://yeoman.io) and created a generator. Now, you now want to debug or test that generator using the VS Code IDE. 

In the examples contained therein, our Yeoman generator is named 'generator-test-debug'.

## Setup for Debugging

Three items must be configured to debug our node app.

**#1 Requires local install of the yo npm package**


In order to debug a yeoman generator you will need to install [Yeoman](http://yeoman.io) local to the project.

```css
npm install -save-dev yo
```


**#2 Add a Configuration**
1. Click Debug in the Activity Bar
2. Click the Gear to add the Yeoman Generator and Node Launch configurations. Or, create a launch.json file (located at the project's root level, in the .vscode folder) that contains the following:
```
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "node",
                "request": "attach",
                "name": "Attach",
                "port": 9229,
                "skipFiles": [
                    "<node_internals>/**"
                ]
            },
            {
                "type": "node",
                "request": "launch",
                "name": "Yeoman generator",
                "program": "${workspaceFolder}/node_modules/yo/lib/cli.js",
                "args": [
                    "yangtest"
                ],
                "console": "integratedTerminal",
                "internalConsoleOptions": "neverOpen",
                "skipFiles": [
                    "<node_internals>/**"
                ]
            }
        ]
    }
```

**#3 Create a run script**

Add the following script to the package.json file; replacing test-debug with the name of your generator.
```
  "scripts": {
    "debug": "nodemon --inspect-brk ./node_modules/yo/lib/cli.js  test-debug"
  },
```
## Debugging Cont'd

Click the **Start Debugging** button.

Now VS Code will attach to the process and break at the first line.  Now you can set break points and step through the code of your generator.


## Setup for Testing

In order to debug a yeoman generator you will need to install [Yeoman](http://yeoman.io) local to the project.

```css
npm install -save-dev yo
```



## Misc links on Debugging and Testing


[How to debug a Yeoman Generator using VS Code](https://www.donovanbrown.com/post/How-to-debug-a-Yeoman-Generator-using-VS-Code).

## License

MIT © [Bill Allen]()


[npm-image]: https://badge.fury.io/js/generator-yangtest.svg
[npm-url]: https://npmjs.org/package/generator-yangtest
[travis-image]: https://travis-ci.com/Bill-A/generator-yangtest.svg?branch=master
[travis-url]: https://travis-ci.com/Bill-A/generator-yangtest
[daviddm-image]: https://david-dm.org/Bill-A/generator-yangtest.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Bill-A/generator-yangtest