import { PlayerType } from "core";
import Card from "../shared/Card";
import { IconCircle, IconX } from "@tabler/icons-react";


export interface CellAreaProps {
    type?: PlayerType | null;
    selected?: boolean;
}
export default function CellArea(props:CellAreaProps){
    return (
        <Card color={!props.selected ? 'dark' : props.type === PlayerType.X ? 'primary' : 'secondary'}>
            <div className={`flex items-center justify-center w-32 h-32`}>
                { props.type === PlayerType.X && (
                    <IconX size={70} stroke={6}
                    className={props.selected ? 'text-dark-500':'text-primary-500' } 
                    />
                )}
                { props.type === PlayerType.O && (
                    <IconCircle size={70} stroke={6}
                    className={props.selected ? 
                        'text-dark-500':'text-secondary-500'} />
                )}
            </div>
        </Card>
    )
}