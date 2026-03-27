```javascript
const responsePromise = page.waitForResponse(res =>
  res.url().includes('/api/results') && res.status() === 200
);

// Click Logon button
await page.getByRole('button', { name: 'Logon' }).click();

// Wait for API response
const response = await responsePromise;

// Convert response to JSON
const responseBody = await response.json();

// API assertion
expect(responseBody.records).toBe('no results');

// UI assertion
await expect(page.getByText('No Results')).toBeVisible();
```

--------------------------------

```javascript
cy.intercept('GET', '/api/results').as('results');

cy.visit('/results-page');

cy.contains('button', 'Logon').click();

cy.wait('@results').then((interception) => {
  expect(interception.response.statusCode).to.eq(200);
  expect(interception.response.body.records).to.eq('no results');
});

cy.contains('No Results').should('be.visible');
```

----------------------------------------------------

<--A fixture in Playwright is a reusable setup/teardown mechanism that provides test dependencies (like browser, page, data, or custom utilities) to test functions in a structured and maintainable way-->.

# 1. Built-in Fixtures

## ✅ 1. What is a Fixture?

### 👶 Simple (Kid Level)

A fixture is something that:

- prepares things before test
- gives them to test
- cleans up after test

👉 Like:

- Open browser
- Create data
- Setup page

### 💼 Professional Definition (Interview)

A fixture in Playwright is a reusable setup and teardown mechanism that provides test dependencies (like browser, page, context, or custom data) to test functions in a controlled lifecycle.

## ✅ 2. Types of Fixtures in Playwright

There are 2 main types 🔥

### 🟢 1. Built-in Fixtures

👉 These are already provided by Playwright

🔥 Common Built-in Fixtures (MOST IMPORTANT)

#### 1. page

👉 Used for UI actions

```typescript
test('example', async ({ page }) => {
  await page.goto('https://example.com');
});
```

✔ Opens a new tab
✔ Used for UI automation

#### 2. browser

```typescript
test('example', async ({ browser }) => {
  const context = await browser.newContext();
});
```

✔ Controls whole browser
✔ Rarely used directly

#### 3. context

```typescript
test('example', async ({ context }) => {
  const page = await context.newPage();
});
```

✔ Browser session
✔ Used for cookies, storage

#### 4. request

```typescript
test('api test', async ({ request }) => {
  const res = await request.get('/api/users');
});
```

✔ API testing
✔ Backend calls

📌 Built-in Fixture Count?

👉 Officially many exist, but core ones you must know (interview):

- page
- browser
- context
- request

### 🟣 2. Custom Fixtures

syantax:

```typescript
import { test as base } from '@playwright/test';

export const test = base.extend({
  fixtureName: async ({ dependency }, use) => {
    
    // ✅ Setup (before test)
    const data = "some value";

    // ✅ Provide fixture to test
    await use(data);

    // ✅ Teardown (after test)
  }
});
```

example :

```typescript
// customFixture.ts
import { test as base, expect } from '@playwright/test';

type User = {
  id: string;
  name: string;
};

type Course = {
  id: string;
  title: string;
};

export const test = base.extend<{
  user: User;
  course: Course;
  importJob: { jobId: string };
  submittedForm: { success: boolean };
}>({

  // 🔹 1. Create User (API)
  user: async ({ request }, use) => {
    const res = await request.post('/api/users', {
      data: { name: 'Ram User' }
    });

    const user = await res.json();

    await use(user);

    // cleanup
    await request.delete(`/api/users/${user.id}`);
  },

  // 🔹 2. Create Course (API)
  course: async ({ request }, use) => {
    const res = await request.post('/api/courses', {
      data: { title: 'Math Course' }
    });

    const course = await res.json();

    await use(course);

    await request.delete(`/api/courses/${course.id}`);
  },

  // 🔹 3. Run Import (UI)
  importJob: async ({ page }, use) => {
    await page.goto('/import');

    await page.setInputFiles('#file-upload', 'tests/data/sample.zip');
    await page.click('#upload-btn');

    // assume jobId appears in UI
    const jobId = await page.locator('#job-id').textContent();

    await use({ jobId: jobId! });

    // no cleanup needed usually
  },

  // 🔹 4. Submit Form (UI)
  submittedForm: async ({ page }, use) => {
    await page.goto('/form');

    await page.fill('#name', 'Ram');
    await page.fill('#email', 'ram@test.com');
    await page.click('#submit');

    await use({ success: true });
  }

});

export { expect };
```

usage :

```typescript
// userCourse.spec.ts
import { test, expect } from './customFixture';

test('verify user and course created', async ({ user, course }) => {
  expect(user.name).toBe('Ram User');
  expect(course.title).toBe('Math Course');
});
```

```typescript
// import.spec.ts
import { test, expect } from './customFixture';

test('verify import job created', async ({ importJob }) => {
  expect(importJob.jobId).toBeTruthy();
});
```

```typescript
// form.spec.ts
import { test, expect } from './customFixture';

test('verify form submission', async ({ page, submittedForm }) => {
  await expect(page.locator('.success-msg')).toBeVisible();
  expect(submittedForm.success).toBe(true);
});
```

```typescript
// combined.spec.ts
import { test, expect } from './customFixture';

test('full flow test', async ({ page, user, course }) => {
  await page.goto('/dashboard');

  await expect(page.locator('#user-name')).toHaveText(user.name);
  await expect(page.locator('#course-name')).toHaveText(course.title);
});

---- 
//table handling

 test.only('tcjk8893', async({page})=>{

         await page.locator('.icon-cog').hover();
         await page.locator('[title="Setup"]').waitFor({state :'visible'})
         await page.getByRole('link', { name: 'Setup' }).click();
         await page.waitForLoadState('load');
         await page.locator('.darkcategory', {hasText:'PowerSchool Data Integration'}).click();
         await page.getByRole ('heading', {name :'PowerSchool Data integration'}).waitFor({state:'visible'})

         const table = page.locator('.ant-table')
         const tablecolumns= table.locator('.ant-table-thead tr th')
         const tablerows =table.locator('.ant-table-tbody tr')
         const clickrow = tablerows.filter ({
            has : page.locator('td',
                {hasText:'3/7/2026, 8:23:25 AM'}
            )

         })

        
        await expect (clickrow.locator('[data-test-id="status"]')).toContainText('import');
 })


// multi tab handling 

test('TCM-XXXX', 'favreports open in new tab ', async ({ page,context }) => {

        // const [newtab] = await Promise.all([
        //     context.waitForEvent('page'),
        //    page.click('[data-text="All reports"]')
        // ]);

        const [newtab] = await Promise.all([

            page.waitForEvent('popup'),
            page.click('[data-text="All reports"]')
        ])
            await expect(newtab).toHaveURL(/reports-v3/);
            await page.waitForTimeout(8000);

            newtab.close();
            await page.waitForLoadState('load');
            
            await page.locator('#button-mfe-staff-mfe-btn-new-group').waitFor({state:'visible'})

    });


```


