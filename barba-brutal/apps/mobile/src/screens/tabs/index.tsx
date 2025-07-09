import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Started from './Started'
import Schedule from './Schedule'
import User from './User'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Tab = createBottomTabNavigator()
export default function Abas({ navigation }: any){
    function tab(name:string,component:any,label:string,icon:string){
        return(
            <Tab.Screen
                name={name}
                component={component}
                options={{
                    unmountOnBlur:true,
                    tabBarIcon:({ focused }) =>(
                        <View style={styles.tabScreen}>
                            <Ionicons name={ icon as any} size={24} color={focused ? '#29A7EA':'#9DA2AE'} />
                            <Text
                                style={{
                                    ...styles.tabScreenText,
                                    color: focused ? '#29A7EA':'#9DA2AE'
                                }}
                            >
                            {label}
                            </Text>

                        </View>
                    )
                }}
            >

            </Tab.Screen>
        )
    }
    return(
        <Tab.Navigator
            initialRouteName='Started'
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarActiveBackgroundColor:'#222',
                tabBarInactiveBackgroundColor:'#222',
                tabBarStyle:{
                    backgroundColor:'#222',
                }
            }}
        >
            {tab('Started', Started, 'Início', 'home-outline')}
            {tab('Schedule', Schedule, 'Agendamento', 'calendar-outline')}
            {tab('User', User, 'Usuário', 'person-outline')}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabScreen:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    tabScreenText:{
        fontSize:10
    }
})