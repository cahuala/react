'use client'
import GameContext from "@/contexts/GameContext"
import { useContext } from "react"
import CellArea from "./CellArea"

export default function BoardArea() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { board,result, addMove } = useContext(GameContext)
    function renderCells(){
       const cells=[]
       for(let row=0;row < board.rows; row++){
           for(let col=0;col < board.columns; col++){
                const selected = result.hasCell(row, col)
                cells.push(
                    <div key={`${row}-${col}`} onClick={() => addMove(row, col)}>
                        <CellArea type={board.get(row, col)?.type} selected={selected} /> 

                    </div>
                )
           }
        }

        return cells
        
       
    }
    return(
        <div className="grid grid-cols-3 gap-5">
            { renderCells() }
        </div>
    )
}