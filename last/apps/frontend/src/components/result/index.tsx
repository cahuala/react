'use client'
import GameContext from "@/contexts/GameContext";
import { useContext } from "react";
import Modal from '@/components/shared/Modal';
import { PlayerType } from "core";
import { IconCircle, IconX } from "@tabler/icons-react";
import Button from "../shared/Button";

export default function Result() {
    const { result,clear,nextRound } = useContext(GameContext);
    return(
        <Modal visible={result.finished}>
            {result.tied ? (
                <span className="uppercase font-blod text-light-500">
                    Empate!
                </span>
            ) : (
                <>
                        <span className="uppercase font-blod text-light-500">
                        Jogador {result.xWins ? PlayerType.X : PlayerType.O} venceu!
                        </span>
                        <div className={`flex items-center gap-5 ${result.xWins ? 'text-primary-500' : 'text-secondary-500'}`}>
                            {
                                result.xWins ? (
                                    <IconX size={80} stroke={6} />
                                ):(
                                    <IconCircle size={70} stroke={6}/>
                                )
                            }
                            <span className="uppercase text-6xl font-blod">ganhou a rodada</span>
                        </div>
                </>
            )}
            <div className="flex gap-5">
                    <Button onClick={clear}>
                        <div className="font-bold uppercase text-dark-500">
                            Reiniciar
                        </div>
                    </Button>
                    <Button color="secondary" onClick={nextRound}>
                        <div className="font-bold uppercase text-dark-500">
                            Próxima rodada
                        </div>
                    </Button>
            </div>

        </Modal>
    )
}