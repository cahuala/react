import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Autentication from './Autentication'
import Abas from '../tabs'
import { ProviderSection } from '@/src/data/contexts/ContextSection'

const Stack = createNativeStackNavigator()
export default function StackApp() {
    return (
        <ProviderSection>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Autentication'>
                  <Stack.Screen
                        name='Autentication'
                        component={Autentication}
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen
                        name='Abas'
                        component={Abas}
                        options={{
                            headerShown:false
                        }}
                    />  
                </Stack.Navigator>
            </NavigationContainer>
        </ProviderSection>
    )
}
