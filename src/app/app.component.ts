import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  maxFunding: number = 17484500;
  vehicle: string = 'Honda ADV 150 CBS';
  model: string = '2021';
  loanAmount: number = 14500000;
  loanPeriod: number = 12;
  monthlyInstallment: number = 150000;

  calculateInstallment() {
    this.monthlyInstallment = Math.round((this.loanAmount / this.loanPeriod) * 1.05); // Example Calculation
  }

  applyLoan() {
    console.log('Loan Amount:', this.loanAmount);
    console.log('Loan Period:', this.loanPeriod);
    console.log('Estimated Installment:', this.monthlyInstallment);
  }
}
