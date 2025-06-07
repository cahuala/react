import Card from "./Card";

export interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'dark' | 'light';
  children: React.ReactNode
}

export default function Button(props: ButtonProps){
    return(
        <button { ...props } className="text-black">
            <Card color={props.color } hover>
                {props.children}
            </Card>
        </button>
    )
}