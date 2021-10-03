<script>
const BankRequest = (Balance, Requests) => {
  let index = 1;
  for (let Request of Requests) {
    let queryList = Request.split(" ");

    let type = queryList[0];
    let operation = Selector(type);

    if (queryList.length <= 3) {
      let Acc = Number(queryList[1]) - 1;
      let Amount = Number(queryList[2]);
 
      if (!amtCheck(Acc, Balance)) {
        return [-index];
      }

      Balance = operation(Balance, Acc, Amount);
    } else {
      let amtFrom = Number(queryList[1]) - 1;
      let amtTo = Number(queryList[2]) - 1;

      if (!amtCheck(amtFrom, Balance)) {
        return [-index];
      }

      if (!amtCheck(amtTo, Balance)) {
        return [-index];
      }

      let Amount = Number(queryList[3]);
      Balance = operation(Balance, amtFrom, amtTo, Amount);
    }

    if (Balance === "invalid") {
      return [-index];
    }

    index++;
  }
  return Balance;
};

const amtCheck = (Acc, Balance) => {
  if (Acc >= Balance.length) 
   return false;
  else
  return true;
};

const withdraw = (Balance, Acc, Amt) => {
  Balance[Acc] -= Amt;

  if (Balance[Acc] < 0) {
    return "invalid";
  }
  return Balance;
};

const deposit = (Balance, Acc, Amt) => {
  Balance[Acc] += Amt;
  if (Balance[Acc] < 0) {
    return "invalid";
  }
  return Balance;
};

const transfer = (Balance, amtFrom, amtTo, Amt) => {
  Balance[amtFrom] -= Amt;
  Balance[amtTo] += Amt;
  if (Balance[amtTo] < 0 || Balance[amtFrom] < 0) {
    return "invalid";
  }
  return Balance;
};

const Selector = (operation) => {
  switch (operation) {
    case "transfer":
      return transfer;
    case "withdraw":
      return withdraw;
    case "deposit":
      return deposit;
  }
};


console.log(BankRequest([10, 100, 20, 50, 30],["withdraw 2 10", "transfer 5 1 20", "deposit 5 20", "transfer 3 4 15"]));
  
console.log(BankRequest([20, 1000, 500, 40, 90],["deposit 3 400", "transfer 1 2 30", "withdraw 4 50"]));

</script>
