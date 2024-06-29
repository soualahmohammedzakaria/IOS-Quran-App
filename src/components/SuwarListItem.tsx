import { unkownRecitationImageURI } from "@/constants/images"
import { colors, fontSize } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import { Text, View, StyleSheet, TouchableHighlight } from "react-native"
import FastImage from "react-native-fast-image"

export type SuwarListItemProps = {
    recitation: {title: string, image?: string, reciter?: string}
}

export const SuwarListItem = ({recitation}: SuwarListItemProps) => {
const isPlaying = false

    return (
        <TouchableHighlight>
            <View style={styles.surahItemContainer}>
                <View>
                    <FastImage 
                        source={{
                            uri: recitation.image ?? unkownRecitationImageURI,
                            priority: FastImage.priority.normal
                        }}
                        style={{
                            ...styles.recitationImage,
                            opacity: isPlaying ? 0.6 : 1
                        }}
                    />
                </View>

                <View style={{width: '100%'}}>
                    <Text numberOfLines={1}
                        style={{
                            ...styles.recitationTitleText,
                            color: isPlaying ? colors.primary : colors.text
                        }}
                    >
                        {recitation.title}
                    </Text>

                    {recitation.reciter && (
                    <Text style={styles.recitationReciterText}>
                        {recitation.reciter} 
                    </Text>
                    )}
                </View>
            </View> 
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    surahItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 20
    },
    recitationReciterText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize: fontSize.xs,
        marginTop: 4
    },
    recitationTitleText: {
        ...defaultStyles.text,
        fontWeight: '600',
        maxWidth: '90%',
        fontSize: fontSize.sm
    },
    recitationImage: {
        borderRadius: 8,
        height: 50,
        width: 50
    }
})