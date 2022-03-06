import React from "react";
import {
  BrowserRouter as Router, Switch,
  Route, Redirect,
} from "react-router-dom";
import '../stylesheet.css';
import bluePiggyBank from '../images/blue piggy bank.jpg';
const HomePage = () => {
  return (
    <div class="budget-section">

    <div class="budget col col-md col-sm">
      <h2>budget</h2>
      <img src= {bluePiggyBank}class="pig" />
      <p class="amount">$ <span id="budgetAmount">0</span></p>
    </div>

    <div class="expenses col col-md col-sm">
      <h2>expenses</h2>
      <img src="image/accounting.svg" width="40" alt="" />
      <p class="exp-amount">$ <span id="expensesAmount">0</span></p>
    </div>

    <div class="balance col col-md col-sm">
      <h2>balance</h2>
      <img src="image/law.svg" width="40" alt="" />
      <p class="amount bala">$ <span id="balanceAmount">0</span></p>
    </div>

  </div>

            );
    }; export default SignOn;
