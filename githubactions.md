git :-->
---------------------------------------
git is a version Control System where we can download git into our mechine also 
mainly git is used to manage source code 
using git we can do commits 
works with aleternative codes by creating branches 
we can move between branches 
with git we can rollback to older code snapshots (older code versions) or develope new feature without breaking existing feature 


Github :--->
---------------------------------------
github is just a companey it will provide repository and services that code which we are   managing 
we can create or make repository public or private 
github is not only just cloud repo where we can manage our pull requests, CI/ CD github Actions, Reviewa ...etc

Github Actions: --->
---------------------------------------
its a workflow automate all kind of repo related process and actions 
like it will automate code , testing, building and deployment it will auomate reviews issues managements etc...

in simple words :
---------------------------------------
Github Actions is a CI CD Platform that allows us to Automate execution, Build and Deployment workflows directly inside github

in QA Automation i used to Run Cypress Tests on Every Pull Requests , Validate  Critcial Flows and Block Merges when it fails this ensures us faster feedback and Stable Releases 

we can handle ENVIRONMENT VARIABLES easly in Github Actions By Placing them into github Secrets 

Key Elements in GitHub Actions  : ----->
---------------------------------------
there elements in github actions 

* work flows ,  * Jobs,  *  Steps : 

* here one repository consists multiple workflows 
* inside each work flow its consists multiple jobs 
* inside each job consists multiple Steps 



+-------------------------------+      +-------------------------------+
|          WORKFLOW 1           |      |          WORKFLOW 2           |
|                               |      |                               |
|  +-------------------------+  |      |  +-------------------------+  |
|  |         JOB 1           |  |      |  |         JOB 1           |  |
|  |                         |  |      |  |                         |  |
|  |  +--------+  +--------+|  |      |  |  +--------+  +--------+|  |
|  |  | Step 1 |  | Step 2 ||  |      |  |  | Step 1 |  | Step 2 ||  |
|  |  +--------+  +--------+|  |      |  |  +--------+  +--------+|  |
|  +-------------------------+  |      |  +-------------------------+  |
|                               |      |                               |
|  +-------------------------+  |      |  +-------------------------+  |
|  |         JOB 2           |  |      |  |         JOB 2           |  |
|  |                         |  |      |  |                         |  |
|  |  +--------+  +--------+|  |      |  |  +--------+  +--------+|  |
|  |  | Step 1 |  | Step 2 ||  |      |  |  | Step 1 |  | Step 2 ||  |
|  |  +--------+  +--------+|  |      |  |  +--------+  +--------+|  |
|  +-------------------------+  |      |  +-------------------------+  |
|                               |      |                               |
+-------------------------------+      +-------------------------------+

simple diagram : 

WORKFLOW 1            WORKFLOW 2
   |                      |
  Job 1                  Job 1
  /   \                  /   \
Step1 Step2         Step1 Step2
   |
  Job 2                  Job 2
  /   \                  /   \
Step1 Step2          Step1 Step2

now we can learn what  this three elements can do simple way :
----------------------------------------------------------------

workflows: 

its atatched to the git repo
one workflow consists multiple jobs
triggred up on events 

jobs : 

* jobs will define a runner (execution enviroment) here runner means mechine and os ex : mac , windows , ubintu, linux 
* contain one or more steps 
* we can run jobs paralley or sequentially 
* can be conditional 


Steps : 

* in steps we can Execute shell script or An Action
* Steps Can run in Order only 
* Can be Condistional 

Now  How to create Workflow :
---------------------------------

* we can always create work flow with .yml  extension 
* workflow path always will be 
<reponame>/.github/workflow/<myworkflow,yml>

*  we can create via vs code and push or else we can create  directly in Github

* clcik on actions --->  then click on configure on simple work flow ---> give filename with extension.yml-->  write  jobs and and step names and save and commit 


[ Actions ]
     |
     v
[ Configure ]
     |
     v
[ Simple Workflow ]
     |
     v
[ Enter File Name ]
( example: workflow.yml )
     |
     v
[ Write Jobs ]
( define job names )
     |
     v
[ Write Steps ]
( define step names )
     |
     v
[ Save Workflow ]
     |
     v
[ Commit Changes ]



here we can write basci yml file : 
----------------------------------

* every yml file start with the name of the file we can give name with keyword <name>
 ex -->  name : mysmapleWorkflow
* now we need to defined 









