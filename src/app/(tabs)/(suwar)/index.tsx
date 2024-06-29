import { SuwarList } from "@/components/SuwarList"
import { screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/useNavigationSearch"
import { defaultStyles } from "@/styles"
import { View, ScrollView } from "react-native"
import library from "@/assets/data/library.json"
import { useMemo } from "react"
import { surahTitleFilter } from "@/utils/filter"

const SuwarScreen = () => {
    const search = useNavigationSearch({ searchBarOptions: { placeholder: 'Find a surah recitation' } })

    const filteredSuwar = useMemo(() => {
        if (!search)  return library
        return library.filter(surahTitleFilter(search))
    }, [search])

    return (
        <View style={defaultStyles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{ paddingHorizontal: screenPadding.horizontal }}
            >
                <SuwarList suwar={filteredSuwar} scrollEnabled={false} />
            </ScrollView>    
        </View>
    )
}

export default SuwarScreen