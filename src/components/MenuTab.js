import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation"
import { Tools, Scanner } from "../views"

const MenuTab = createMaterialTopTabNavigator({
    Scanner: Scanner,
    Tools: Tools,
},
    {
        initialRouteName: 'Scanner',
        headerLayoutPreset: 'center',
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#FABB17',
            inactiveTintColor: '#fff',
            indicatorStyle: {
                backgroundColor: '#fff',
            },
            labelStyle: {
                fontSize: 14,
                fontWeight: 'bold'
            },
            style: {
                backgroundColor: '#1D44AF',
            }
        }
    })

const MenuTabContainer = createAppContainer(MenuTab)

export default MenuTabContainer