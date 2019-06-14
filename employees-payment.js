// Imagine that you are currently the big boss of a company. It is the
// first day of the month and you want to pay your employees. In the
// company there are now working 72 employees.
// The cashier/balance of your company now is 100.000$. You will use
// these to pay the salaries to your workers.
// Your company is comprised of:
// 50 workers with ops and general duties: each earns 1.000$.
// 10 web developers:
// 4 of them are Frontend Developers: each earns 1.500$
// 4 of them are Backend Developers: each earns 2.000$
// 2 of them are FullStack developers: each earns 3.000$
// 5 Project managers: each earns 4.000$
// 5 DevOps Engineers: each earns 5.000$
// 2 Data Scientists:
// 1 Data Analyst: earns 7.500$
// 1 Machine Learning Engineer: earns 10.000$
let companyMoney = 100000;

let generalDuties = [50, 1000];
let frontEnd = [4, 1500];
let backEnd = [4, 2000];
let fullStack = [2, 3000]
let projectManager = [5, 4000];
let devOps = [5, 5000];
let dataAnalyst = [1, 7500];
let mL = [1, 10000];

let totalWorkers = generalDuties[0] + frontEnd[0] + backEnd[0] + fullStack[0] + projectManager[0] + devOps[0] + dataAnalyst[0] + mL[0];

let paid = 0;

// Suppose you want to start paying them one by one and pay as many
// as you can. But there is an order. Everyone has an identifying number.
// The Data Scientist come first (from 1 to 2).
// Then the web devs (3 to 4, Full stack come first), (5 to 8, here come
// the Backend Devs), then the Frontend Devs.
// Then the normal workers.
// Then DevOps Engineers
// Project Managers last.

paid += (mL[1] * mL[0]);
paid += (dataAnalyst[1] * dataAnalyst[0]);
paid += (fullStack[1] * fullStack[0]);
paid += (backEnd[1] * backEnd[0]);
paid += (frontEnd[1] * frontEnd[0]);
paid += (generalDuties[1] * generalDuties[0]);
paid += (devOps[1] * devOps[0]);
paid += (projectManager[1] * projectManager[0]);


console.log(paid);

// Print a message to the console after the program to know exactly how
// many people have not received their payment yet, in order to keep
// track on the amount of people who are waiting for the salaries.
// Additionally print how much money is left in the balance after the
// payment.
