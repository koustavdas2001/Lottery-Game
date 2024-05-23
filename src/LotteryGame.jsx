import { useState } from "react"
import { getTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";
import "./LotteryGame.css";

export default function Lottery({n=3, winCondition}) {

    let[ticket, setTicket] = useState(getTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(getTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            < Ticket ticket={ticket}/>
            <Button action={buyTicket}/>
            <h3 className="winText">{isWinning ? "Congratulations you Won!" : ""}</h3>
        </div>
    )
}