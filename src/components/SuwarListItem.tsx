import { unkownRecitationImageURI } from "@/constants/images";
import { colors, fontSize } from "@/constants/tokens";
import { defaultStyles } from "@/styles";
import { Text, View, StyleSheet, TouchableHighlight, Image } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Track, useActiveTrack, useIsPlaying } from "react-native-track-player";
import LoaderKit from "react-native-loader-kit";

export type SuwarListItemProps = {
    recitation: Track;
    onRecitationSelect: (recitation: Track) => void;
};

export const SuwarListItem = ({ recitation, onRecitationSelect: handleRecitationSelect }: SuwarListItemProps) => {
    const { playing } = useIsPlaying();
    const isPlaying = useActiveTrack()?.url === recitation.url;

    return (
        <TouchableHighlight onPress={() => handleRecitationSelect(recitation)}>
            <View style={styles.surahItemContainer}>
                <View>
                    <Image
                        source={{
                            uri: recitation.artwork ?? unkownRecitationImageURI,
                        }}
                        style={{
                            ...styles.recitationImage,
                            opacity: isPlaying ? 0.6 : 1,
                        }}
                    />

                    {isPlaying && 
                        (playing ? (
                            <LoaderKit style={styles.recitationPlayingIndicator} name="LineScaleParty" color={colors.icon} />
                        ) : (
                            <Ionicons style={styles.recitationPausedIndicator} name="play" size={24} color={colors.icon}
                            />
                        ))
                    }
                </View>

                <View style={styles.spaceStyles}>
                    <View style={{ width: '100%' }}>
                        <Text
                            numberOfLines={1}
                            style={{
                                ...styles.recitationTitleText,
                                color: isPlaying ? colors.primary : colors.text,
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

                    <Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    recitationPausedIndicator: {
        position: 'absolute',
        top: 14,
        left: 14,
    },
    recitationPlayingIndicator: {
        position: 'absolute',
        top: 16,
        left: 16,
        width: 16,
        height: 16,
    },
    spaceStyles: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    surahItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 20,
    },
    recitationReciterText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize: fontSize.xs,
        marginTop: 4,
    },
    recitationTitleText: {
        ...defaultStyles.text,
        fontWeight: '600',
        maxWidth: '90%',
        fontSize: fontSize.sm,
    },
    recitationImage: {
        borderRadius: 8,
        height: 50,
        width: 50,
    },
});
