// 1. A Promise represents a value that will be available in the future — either success or failure.
//    In automation, it’s important because API calls, UI actions, background jobs and waits are asynchronous.
//   Promises ensure the test waits for these operations to complete before performing validations, preventing flaky test failures.



//--> example for simple promise
const loginpromise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve('login success')

    },3000)
})
loginpromise.then(result=>{
 console.log(result)

}) // login success

/*In the above example, we are using only the resolve method of a Promise.
When the code is executed, the Promise waits for 3 seconds and then returns the response "login success".

This delay happens because we are using the setTimeout function, which executes the code only after the specified time (3 seconds in this case).

In this example, no condition is applied, so the Promise will always resolve successfully.
 */

//--> another example of promise using both resolve and reject

/* 
in this example if the login account is Ram or  Jaya then they gonna login success means promise is got resolved
otherwise promise got rejected 
*/
  
const login = new Promise((resolve,reject)=>{

    const loginaccount = 'jaya'
    setTimeout(()=>{

        if (loginaccount ==='ram'|| loginaccount ==='jaya')
        {
            resolve(`${loginaccount} is Logged in Successfully`)
        }
        else 
        {
            reject(`${loginaccount} is failed to login please try again`)
        }

    },3000)
})

login.then(result=>{

    console.log(result)
})
.catch(error=>{
    console.error(error)
})

/*  in above example if we want to test rejected method then we can chnage the const  loginaccount = other than jaya and ram  
 then we can check promise reject.  ex :   loginaccount = 'test'
*/

//---> Advanced Example make login account is parameterzied one using arrow function


export const alogin =(loginaccount)=> {

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if (loginaccount==='ram'|| loginaccount ==='jaya')
            {
                resolve(`${loginaccount} is Logged in Successfully`)
            }
            else 
            {
                reject(`${loginaccount} is failed to login please try again`)

            }


        },3000)
    })

}

// here we can execute the above promise code 
alogin('ram').then(result=>{
    console.log(result)
})
.catch(error=>{
    console.error(error)
})
alogin('jaya').then(result=>{
    console.log(result)
})
.catch(error=>{
    console.error(error)
});

alogin('test').then(result=>{
    console.log(result)
})
.catch(error=>{
    console.error(error)
});

// here we can execute same program by using for each loop  this will reduce no of lines 

const accounts =['ram', 'jaya', 'test']
accounts.forEach(account=>{

    alogin(account)
    .then
    (result=>{
        console.log(result)
    })
    .catch(error=>{
        console.error(error)
    })
})

/*
“When we create a Promise directly, it executes immediately. 
When we need parameters or reusability, we wrap the Promise inside a function and return it.”

| Feature              | `const login = new Promise(...)` | `const login = (accountName) => new Promise(...)` |
| -------------------- | --------------------------------------- | ------------------------------------------------- |
| Is it a function?    | ❌ No                                    | ✅ Yes                                             |
| Can take parameters? | ❌ No                                    | ✅ Yes                                             |
| When does it start?  | Immediately                             | Only when called                                  |
| Reusable?            | ❌ No                                    | ✅ Yes                                             |
| Example use          | `loginPromise.then(...)`                | `login("jaya").then(...)`                        |

*/
