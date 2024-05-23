class IncomeStream {
  private _passiveIncome: number;

  constructor(initialIncome: number = 0) {
    this._passiveIncome = initialIncome;
  }

  get passiveIncome(): number {
    return this._passiveIncome;
  }

  set passiveIncome(newIncome: number) {
    if (newIncome >= 0) {
      this._passiveIncome = newIncome;
    } else {
      console.error('Income cannot be negative.');
    }
  }

  // Method to add income
  addIncome(amount: number): void {
    if (amount > 0) {
      this._passiveIncome += amount;
    } else {
      console.error('Amount to add must be positive.');
    }
  }

  // Method to report income
  reportIncome(): void {
    console.log(`Current passive income: $${this._passiveIncome}`);
  }
}

// Usage
const myIncome = new IncomeStream(500);
myIncome.addIncome(200);
myIncome.reportIncome();
