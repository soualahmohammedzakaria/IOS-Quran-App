import { SuwarList } from "@/components/SuwarList"
import { defaultStyles } from "@/styles"
import { View, Text, ScrollView } from "react-native"

const SuwarScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <ScrollView>
                <SuwarList scrollEnabled={false} />
            </ScrollView>    
        </View>
    )
}

export default SuwarScreen