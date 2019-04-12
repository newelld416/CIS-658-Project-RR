# Unit testing

> [Guide](https://angular.io/guide/testing) offers tips and techniques for unit and integration testing Angular applications

## Tools:
* [Karma](https://karma-runner.github.io/latest/index.html);
* [Jasmine](https://jasmine.github.io/);
* [Protractor](http://www.protractortest.org/);

### Coverage
#####Quality gate - **`80%`**

Minimum amount to be unit tested that enforce this minimum with the Angular CLI. 
Current code base to have a minimum of 80% code coverage. To enable this, 
find `karma.conf.js` and see the following in the `coverageIstanbulReporter: key`

> Base test configuration [karma.conf.js](../src/karma.conf.js)

````
coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80
      }
    },
````

### Run unit tests with coverage.
> Scripts for test running [package.json](../package.json)
```
npm run test
```
#### Report in CLI:
````bash
> business-center@0.0.0 test .../amer-business-center/amer-business-center
> ng test --code-coverage

 10% building 8/9 modules 1 active ...er/amer-business-center/src/styles.scss18 03 2019 12:18:09.158:INFO [karma-server]: Karma v4.0.1 server started at http://0.0.0.0:9876/
18 03 2019 12:18:09.163:INFO [launcher]: Launching browsers ChromeHeadlessCI with concurrency unlimited
18 03 2019 12:18:09.185:INFO [launcher]: Starting browser ChromeHeadless
18 03 2019 12:18:22.037:INFO [HeadlessChrome 74.0.3723 (Mac OS X 10.14.3)]: Connected on socket 6rqyppF_ZHUVOz19AAAA with id 93939258
HeadlessChrome 74.0.3723 (Mac OS X 10.14.3): Executed 5 of 5 SUCCESS (0.597 secs / 0.464 secs)
TOTAL: 5 SUCCESS

=============================== Coverage summary ===============================
Statements   : 100% ( 13/13 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 3/3 )
Lines        : 100% ( 10/10 )
================================================================================
TOTAL: 5 SUCCESS
TOTAL: 5 SUCCESS
````

### Run e2e tests.
## Running end-to-end tests

Run command below to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
```
npm run e2e
````
### Good practices

* Name your tests cleanly and consistently
* Do not only test nominal cases, the most important tests are the one covering the edge cases
* Each test should be independent to all the others
* Avoid unnecessary assertions: it's counter-productive to assert anything covered by another test, it just increase pointless failures and maintenance workload
* Test only one code unit at a time: if you cannot do this, it means you have an architecture problem in your app
* Mock out all external dependencies and state: if there is too much to mock, it is often a sign that maybe you should split your tested module into several more independent modules
* Clearly separate or identify these 3 stages of each unit test (the 3A): arrange, act and assert
* When you fix a bug, add a test case for it to prevent regression

### Pitfalls

* Sometimes your architecture might mean your code modify static variables during unit tests. Avoid this if you can, but if you can't, at least make sure each test resets the relevant statics before and after your tests.
* Don’t unit-test configuration settings
* Improving test coverage is good, but having meaningful tests is better: start with the latter first, and only after essential features of your code unit are tested, your can think of improving the coverage.
