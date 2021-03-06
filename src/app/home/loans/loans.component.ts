import { Component, OnInit } from '@angular/core';
import { Loan } from '../../_models/loan.model';
import { LoansService } from '../../_services/loans.service';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Input } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  userLoans: Observable<Loan[]>;
  userLoansRecents: Observable<Loan[]>;

  constructor(private loansService: LoansService) {}

  ngOnInit() {
   this.userLoans = this.loansService.retrieveAllUserLoans();
   this.userLoansRecents = this.loansService.retrieveRecentsLoans();
  }
}
