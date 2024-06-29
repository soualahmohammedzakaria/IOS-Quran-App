import { colors, fontSize } from "@/constants/tokens"
import { BlurView } from "expo-blur"
import { Tabs } from "expo-router"
import { StyleSheet } from "react-native"
import { FontAwesome5, FontAwesome6, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons"

const TabsNavigation = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: fontSize.xs,
                    fontWeight: '500'
                },
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderTopWidth: 0,
                    paddingTop: 8,
                },
                tabBarBackground: () => (
                    <BlurView 
                        intensity={95}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            overflow: 'hidden',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}
                    />),
            }}
        >
            <Tabs.Screen name="(suwar)"
                options={{
                    title: "Suwar",
                    tabBarIcon: ({ color }) => <FontAwesome5 name="quran" size={18} color={color} />,
                }}
            />
            <Tabs.Screen name="favorites"
                options={{
                    title: "Favorites",
                    tabBarIcon: ({ color }) => <AntDesign name="heart" size={22} color={color} />,
                }}
            />
            <Tabs.Screen name="playlists"
                options={{
                    title: "Playlists",
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="playlist-play" size={28} color={color} />,
                }}
            />
            <Tabs.Screen name="reciters"
                options={{
                    title: "Reciters",
                    tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={20} color={color} />
                }}
            />
        </Tabs>
    )
}

export default TabsNavigation