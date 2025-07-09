import useSection from "@/src/data/hooks/useSection";
import { View, Text, Pressable } from "react-native";

export default function User({ navigation }:any){
    const { finishSection } = useSection()
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}} >
            <Pressable onPress={()=>{
                finishSection()
                navigation.replace('Autentication')
                }}>
                <Text>User</Text>
            </Pressable>
        </View>
    )
}