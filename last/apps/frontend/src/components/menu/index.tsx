'use client'
import { IconCircle, IconReload, IconX } from "@tabler/icons-react";
import Button from "../shared/Button";
import { useContext } from "react";
import GameContext from "@/contexts/GameContext";
import Card from "../shared/Card";
import { PlayerType } from "core";

export default function Menu(){
    const { currentPlayer ,nextRound } = useContext(GameContext)
    return(
        <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2 w-32">
                <IconX size={40} stroke={6} className="text-primary-500"/>
                <IconCircle size={35} stroke={6} className="text-secondary-500"/>
            </div>
            <Card color="dark">
                    <div className="flex items-center justify-center gap-2">
                        { currentPlayer.type === PlayerType.X && <IconX size={30} stroke={6} className="text-primary-500"/> }
                        { currentPlayer.type === PlayerType.O && <IconCircle size={30} stroke={6} className="text-secondary-500"/> }
                        <span className="text-lg font-bold"> JOGA </span>
                    </div>
            </Card>
            <div className="flex justify-end w-32">
                <Button onClick={nextRound}>
                    <IconReload  stroke={2} className="text-dark-500"/>
                </Button>
            </div>
        </div>
    )
}