import React, { useState } from "react";
import '../stylesheet.css';
import bluePiggyBank from '../images/blue piggy bank.jpg';


const SignOn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <title>Budget App</title>
      <h1 className="title">Budget App</h1>
      <form action="action_page.php" method="post">
        <div class="imgcontainer">
          <img src= {bluePiggyBank}class="pig" />
        </div>
        <div className="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />

              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me
              </label>
            </div>
          </form>
        </div>
        );

}; export default SignOn;