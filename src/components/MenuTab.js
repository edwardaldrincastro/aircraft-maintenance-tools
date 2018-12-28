import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation"
import { Tools, Scanner } from "../views"
import Config from "../views/Config";

const MenuTab = createMaterialTopTabNavigator({
    Scanner: Scanner,
    Tools: Tools,
    // Config: Config
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
                // backgroundColor: '#EF6B52',
            }
        }
    })

const MenuTabContainer = createAppContainer(MenuTab)

export default MenuTabContainer