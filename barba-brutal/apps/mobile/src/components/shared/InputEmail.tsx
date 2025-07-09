import InputText, {InputTextProps} from "./InputText";

export default function InputEmail(props: InputTextProps){
    return <InputText {...props} keyboardType="email-address" />
}