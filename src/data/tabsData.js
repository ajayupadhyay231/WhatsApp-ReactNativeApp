import CommunityScreen from "../screens/bottom_tab_screens/CommunityScreen";
import ChatsListScreen from "../screens/bottom_tab_screens/ChatsListScreen";
import StatusScreen from "../screens/bottom_tab_screens/StatusScreen";
import CallsScreen from "../screens/bottom_tab_screens/CallsScreen";


const  tabsData = [
    {
      id:1,
      tabName: "Community",
      componentToRender: CommunityScreen,
      activeIconType: "FontAwesome",
      activeIconName: "group",
      activeIconSize: 25,
      inactiveIconType: "FontAwesome",
      inactiveIconName: "group",
      inactiveIconSize: 25,
    },
    {
      id:2,
      tabName: "Chats",
      componentToRender: ChatsListScreen,
      activeIconType: "MaterialCommunityIcons",
      activeIconName: "android-messages",
      activeIconSize: 25,
      inactiveIconType: "MaterialCommunityIcons",
      inactiveIconName: "android-messages",
      inactiveIconSize: 25,
    },
    {
      id:3,  
      tabName: "StatusScreen",
      componentToRender: StatusScreen,
      activeIconType: "Entypo",
      activeIconName: "notification",
      activeIconSize: 25,
      inactiveIconType: "Entypo",
      inactiveIconName: "notification",
      inactiveIconSize: 25,
    },
    {
      id:4,  
      tabName: "CallsScreen",
      componentToRender: CallsScreen,
      activeIconType: "Ionicons",
      activeIconName: "call",
      activeIconSize: 25,
      inactiveIconType: "Ionicons",
      inactiveIconName: "call-outline",
      inactiveIconSize: 25,
    },
    // {
        //  id:5,
    //   tabName: "SettingsScreen",
    //   componentToRender: SettingsScreen,
    //   activeIconType: "Feather",
    //   activeIconName: "settings",
    //   activeIconSize: 25,
    //   inactiveIconType: "Feather",
    //   inactiveIconName: "settings",
    //   inactiveIconSize: 25,
    // },
    // {
        // id:6,
    //   tabName: "ProfileScreen",
    //   componentToRender: ProfileScreen,
    //   activeIconType: "MaterialIcons",
    //   activeIconName: "person",
    //   activeIconSize: 25,
    //   inactiveIconType: "MaterialIcons",
    //   inactiveIconName: "person",
    //   inactiveIconSize: 25,
    // },
  ];

  export default tabsData;