import InputEmail from '@/src/components/shared/InputEmail'
import InputPassword from '@/src/components/shared/InputPassword'
import InputText from '@/src/components/shared/InputText'
import useFormAuth from '@/src/data/hooks/useFormAuth'
import useSection from '@/src/data/hooks/useSection'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, ImageBackground, Image } from 'react-native'




const Stack = createNativeStackNavigator()
export default function Autentication({ navigation }: any){
    const { user } = useSection()
    const { name, 
        email, 
        password,
        mode,
        errors,
        alterName,
        alterEmail,
        alterPassword,
        alterMode,
        submeter 
    } = useFormAuth()

    useEffect(()=>{
        if(user){
            navigation?.replace('Abas')
        }
    },[user])

    return (
        <View style={styles.container}>
            <ImageBackground source={require('@/assets/images/inicio/fundo.png')} 
                style={styles.imageBackground}
            >
            <View style={styles.content}>
                <Image source={require('@/assets/images/inicio/logo-brutal.png')} 
                    style={styles.logo}
                />
                <Text style={styles.title}>
🤘DO CLASSICO AO ROCK 🤘</Text>
                <Text style={styles.description}>Cabelo afiado, barba de 
                    lenhador e mãos motoqueiro, tudo ao som de rock pesado!</Text>
                    <View style={styles.form}>
                        {mode ==='cadastro' &&(
                             <InputText
                            label='Nome'
                            placeholder='Digite o seu nome'
                            value={name}
                            onChangeText={alterName}
                            error={errors.name}
                        />
                        )

                        }
                        <InputEmail
                            label='E-mail'
                            placeholder='Digite o e-mail'
                            value={email.toLowerCase()}
                            onChangeText={alterEmail}
                            error={errors.email}
                        />
                        <InputPassword
                            label='Senha'
                            placeholder='Digite a sua senha'
                            value={password}
                            onChangeText={alterPassword}
                            error={errors.password}
                        />
                    </View>
                    <Pressable style={styles.button} onPress={submeter}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </Pressable>
                    <Pressable onPress={()=>alterMode()} style={{paddingTop:10}}>
                            <Text style={styles.buttonText}>
                            {mode ==='login' ?
                                "Não possui conta? Faça seu cadastro!"
                            :
                                  "já possui conta? Clique aqui para fazer o login!"
                               
                            }
                            </Text>
                    </Pressable>
            </View>
           
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageBackground:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center'
    },
    logo:{
        marginVertical:20,
    },
    form:{
        padding:20
    },
    content:{
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        marginBottom:10
    },
    description:{
        fontSize:14,
        color:'white',
        textAlign:'center',
        marginBottom:20,
        marginHorizontal:20,
    },
    button:{
        width:'40%',
        height:40,
        backgroundColor:'#22c55e',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText: {
        color:'#fff',
        fontSize:16,
    }
})