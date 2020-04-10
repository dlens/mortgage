# Mortgage Savings Calculator

* [Mortgage Savings Calculator](calculator.html): How much many can you save by paying a bit more on each payment?  A surprising amount!
* [Simpler view of the calculator](calculatorv2.html): This is a simpler view of the calculator.  It is the same calculation though.

# What is this all about?
Small strategic changes can have long term consequences.  The mortgage savings
calculator provides a clear example of this.  By paying a small amount extra
every month, you can save a large amount of money over the life of your loan.
For instance, paying an extra $100 a month on a $100,000 loan **saves you
nearly $30,000** over the life of then loan, and **saves you
8 years of payments**.

Similarly, seemingly small strategic changes in your planning can have surprising
long term effects to your bottom line.  The algorithms we develop at 
Decision Lens surface these options quickly and effectively.  We can help you
find the planning changes needed to reach your goals and desired results.

We hope you enjoy tinkering with our calculator, and please feel free to
submit feedback at [our github bug page](https://github.com/dlens/mortgage/issues/new).

# Information
* In [MortgageExamples.ipynb](MortgageExamples.ipynb) we have the mathematical explanations and formula derivations.  Additionally there is some Python code that performs the calculation.
* The code for the [calculator.html](calculator.html) app is organized as follows:
  * [mortgage.js](mortgage.js): javascript calculation code
  * [myexpect.js](myexpect.js): a simple unit testing framework I created for other projects to allow a poor man's version of unit testing that can be run in a browser.
  * [test/browser_test.html](test/browser_test.html): The actual unit tests that can be run in any browser.
  * [calculator.css](calculator.css): The style sheet for the calculator app.
