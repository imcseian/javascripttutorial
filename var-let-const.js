/*
1️⃣ var
🔹 What is var?

Function-scoped

Hoisted (moved to top)

Can be redeclared and reassigned

❌ Not recommended in modern JS*/

function vartest(){

    var a = 10; 
    if (true)
    {
        var a =2 ; 
        console.log(a); // same variable re declared
    }
    console.log(a);
    
    if (a==2)
    {
        var a =3;
        console.log(a);
    }
}
vartest();

// 2️⃣ let
// 🔹 What is let?

// Block-scoped ({ })

// Can be reassigned
// cant be redeclared in the same scope

// Safer than var
function lettest()
{
    let a= 1;
    console.log(a);
    a = 3; // this is re assign in same block so it will work
    // let a = 4 ; // this is re declare so it will throw an error
    if (true)
    {
        let a =2;
        console.log(a);

    }
console.log(a)
}
lettest();

// 3️⃣ const
// 🔹 What is const?

// Block-scoped

// Cannot be reassigned

// Must be initialized at declaration

// ✅ Most preferred in automation

function consttest()
{

    const url = "imcseian.com" // this is intailized at declaration
    console.log('hey ram this is your url\n'+url)
    const users= {name : 'ram ' , role :'QA' }
    console.log(users)
    users.role='Automation Engineer' // allowed. because object properties can be changed
    console.log(users) 
    // users={age:'hello', role:'AWSENg'} // not allowed because reassignment

    if (url!=='imcseian.com')
    {
      const url = 'qa.imcseian.com'   // block-scoped const
      console.log('Hey Ram this is Your QA Url \n'+url)
        
    }

}
consttest()
