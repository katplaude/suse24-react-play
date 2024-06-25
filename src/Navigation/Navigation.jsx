import {Link} from "wouter";

function Navigation() {
   return (
       <nav>
       <ul>
           <li><Link href="/home">Home</Link></li>
           <li><Link href="/counter">Counter</Link></li>
           <li><Link href="/board">TicTacToe</Link></li>
           <li><Link href="/form">Form</Link></li>

       </ul>
   </nav>
   )
}

export default Navigation

