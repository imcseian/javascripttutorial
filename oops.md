OOPS (Object-Oriented Programming System) is very important in JavaScript/TypeScript — especially in Playwright automation because we use it in Page Object Model (POM).

Let’s understand clearly and practically 👇

🔷 What is OOPS?

OOPS is a programming style based on objects and classes.

Main 4 Concepts:

Encapsulation

Abstraction

Inheritance

Polymorphism

Now I’ll explain each one with Playwright examples (real-time automation style).

1️⃣ Encapsulation

👉 Wrapping data (variables) + methods (functions) inside a class.

Example in Playwright
import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;   // encapsulated

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#loginBtn');
  }
}
✅ What happened here?

page variable is inside class

User cannot access it directly (because private)

All actions are controlled via methods

This is Encapsulation.

2️⃣ Abstraction

👉 Hiding implementation details and showing only necessary functionality.

Example:

Test file:

await loginPage.login('admin', 'admin123');

Test doesn't know:

Which locator used

How fill is done

How click is done

It just calls login().

That is Abstraction.

3️⃣ Inheritance

👉 One class can reuse another class properties and methods.

Very common in Playwright: BasePage

BasePage.ts
import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }
}
LoginPage.ts
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#loginBtn');
  }
}
✅ What happened?

LoginPage inherits BasePage

It can use navigate() method

Code reuse

That is Inheritance.

4️⃣ Polymorphism

👉 Same method name, different behavior.

Example:
class AdminPage {
  async dashboard() {
    console.log("Admin Dashboard");
  }
}

class StudentPage {
  async dashboard() {
    console.log("Student Dashboard");
  }
}

Same method dashboard(), different output.

That is Polymorphism.

🔥 Why OOPS is Important in Playwright?

Because Playwright framework uses:

Page Object Model (POM)

Base classes

Reusable components

Utility classes

Fixtures

Without OOPS → framework becomes messy.

🔥 Real Interview Question (Very Common)
❓ Why use OOPS in automation?

Answer:

Code reusability

Maintainability

Scalability

Easy debugging

Structured framework

🔥 JavaScript vs TypeScript in OOPS
JavaScript	TypeScript
Supports classes	Supports classes + types
No strict typing	Strong typing
Less control	More secure with private, protected, public

In Playwright → TypeScript is preferred.

💡 Simple Real Framework Structure
pages/
   BasePage.ts
   LoginPage.ts
   DashboardPage.ts

tests/
   login.spec.ts

This entire structure is built using OOPS concepts.

If you want, I can next explain:

🔥 How to design a real Playwright framework using OOPS (5–9 years interview level)

🔥 Advanced OOPS questions asked in automation interviews

🔥 Difference between JS prototype vs class (important interview topic)

Tell me which one you want 🚀

here what is constructor why we need to use

Good question 👌 This is very important in Playwright + OOPS interviews.

🔷 What is a Constructor?

A constructor is a special method inside a class that runs automatically when an object is created.

It is mainly used to:

Initialize variables

Assign values

Setup required dependencies

🔥 Simple Example (Normal JavaScript)
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const p1 = new Person("Ram");
p1.greet();
👉 What happens?

When we write:

const p1 = new Person("Ram");

The constructor runs automatically and sets:

this.name = "Ram"

Without constructor → name will not be assigned.

🔥 Now Understand in Playwright (Very Important)

Example:

import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login() {
    await this.page.fill('#username', 'admin');
  }
}
🔷 Why We Need Constructor in Playwright?

When Playwright runs a test:

test('login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
});

Here:

Playwright gives us a page object

We pass that page into the class

Constructor receives it

Stores it inside class

So we can use this.page everywhere

🔥 What If We Don't Use Constructor?
export class LoginPage {
  async login() {
    await this.page.fill('#username', 'admin'); // ❌ ERROR
  }
}

It will throw:

Property 'page' does not exist

Because page was never initialized.

🔷 Real Meaning in Automation

Constructor is used to:

✔ Inject Playwright page
✔ Inject API client
✔ Inject test data
✔ Inject fixtures
✔ Initialize locators

🔥 Advanced Example (Better Framework Design)
export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
  }
}

This is cleaner TypeScript style.

🔷 Interview Answer (Very Important)

If interviewer asks:

❓ Why constructor is used in Playwright framework?

You answer:

Constructor is used to initialize class dependencies like the Playwright page object. It helps in dependency injection and allows methods inside the class to access the page instance using this.page.

That’s a 7+ years level answer.

🔥 Simple Summary
Constructor	Why Needed
Special method	Runs automatically
Initializes variables	Assigns page object
Required for dependency injection	Used in POM

If you want, I can next explain:

🔥 What is this keyword (very confusing topic)

🔥 What happens in memory when constructor runs

🔥 Difference between constructor vs normal method

🔥 Can we create class without constructor?

Tell me which one you want 🚀

write login test using pom

Perfect 👍 Let’s write a Login Test using Page Object Model (POM) in Playwright + TypeScript (real-time framework style).

I’ll show you:

✅ Folder structure

✅ LoginPage (POM class)

✅ Test file

✅ Small improvement (best practice way)

📁 Project Structure
pages/
   BasePage.ts
   LoginPage.ts

tests/
   login.spec.ts
1️⃣ BasePage.ts (Reusable Parent Class)
import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }
}

✔ Used for common methods
✔ Reusable across all pages

2️⃣ LoginPage.ts (POM Class)
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly dashboardText: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#loginBtn');
    this.dashboardText = page.locator('text=Dashboard');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
🔥 Why this is good practice?

Locators stored separately

Clean test file

Easy maintenance

If locator changes → change in one place only

3️⃣ login.spec.ts (Test File)
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User should login successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate('https://example.com/login');

  await loginPage.login('admin', 'admin123');

  await expect(loginPage.dashboardText).toBeVisible();

});
🔥 Flow Explanation

Playwright gives page

We create object:
new LoginPage(page)

Constructor stores page

Test calls methods

Page object handles actions

That’s Encapsulation + Abstraction + Inheritance working together.

🧠 Real Interview Question
❓ Why POM is used?

Answer:

Improves maintainability

Reduces code duplication

Separates test logic from UI logic

Easy to scale for large projects

🔥 Even Cleaner Version (Advanced)

You can move URL inside page class:

async goto() {
  await this.page.goto('/login');
}

Then in test:

await loginPage.goto();

This makes test more readable.

🚀 Final Output

✔ Clean
✔ Scalable
✔ Industry standard
✔ 5–9 years interview level structure