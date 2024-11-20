

interface Favourite {
  id: string
  acct: BankAccount
}

class BankAccount {
  private balance: number
  private interestPerc: number
  private interestCeiling: number

  private readonly minimumBalance: number = 0

  constructor(balance: number, interestPerc: number = 0, interestCeiling: number = 50000)
  {
    this.balance = balance
    this.interestPerc = interestPerc
    this.interestCeiling = interestCeiling
  }

  addMoney(amount: number): void {
    if (amount < 0) {
      throw new Error('Cannot add negative money')
    }
    this.balance += amount
  }

  withdrawMoney(amount: number): void {
    if (amount < 0) {
      throw new Error('Cannot withdraw negative money')
    }
    let new_balance = this.balance - amount
    if (new_balance < this.minimumBalance) {
      throw new Error('Cannot withdraw - would be a debt')
    }
    this.balance = new_balance
  }

  transferMoneyTo( targetAcct: BankAccount, amount: number): void {
    this.withdrawMoney(amount)
    targetAcct.addMoney(amount)
  }

  getBalance(): number {
    return this.balance
  }

  getInterest(): number {
    return Math.min(this.interestCeiling, this.balance) * this.interestPerc / 100
  }

  private favourites: Favourite[] = []

  addFavourite(id: string, acct: BankAccount): void {
    this.favourites.push({id: id, acct: acct})
  }

  getFavourite(index: number): BankAccount {
    return this.favourites[index].acct
  }

  removeFavourite(acct_id: string): void {
    const idx = this.favourites.findIndex((favourite: Favourite)=>{ return favourite.id == acct_id; })
    if (idx >= 0) {
      this.favourites.splice(idx, 1)
    }
  }
}


const account1 = new BankAccount(40000, 1, 50000)
const account2 = new BankAccount(100000, 1, 50000)

account1.addFavourite("id2", account2)
account1.transferMoneyTo(account1.getFavourite(0), 20000)
try {
  account1.withdrawMoney(25000)
} catch (err: unknown) {
  console.log((err as Error).message)
}
console.log(`Acct#1 Interest = ${account1.getInterest()}`)
console.log(`Acct#1 Amount   = ${account1.getBalance()}`)

account1.removeFavourite("id2")
