import { StackScreenWithSearchBar } from "@/constants/layout"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const SuwarScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen 
                    name="index"
                    options={{
                        ...StackScreenWithSearchBar,
                        headerTitle: "Suwar",
                    }}
                />
            </Stack>
        </View>
    )
}

export default SuwarScreenLayout