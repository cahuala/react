import InputText, {InputTextProps} from "./InputText";

export default function InputPassword(props: InputTextProps){
    return <InputText {...props} secureTextEntry={true} />
}