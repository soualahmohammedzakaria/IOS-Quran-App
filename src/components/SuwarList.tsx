import React from "react";
import { FlatList, FlatListProps, View, Text, Image } from "react-native";
import { SuwarListItem } from "./SuwarListItem";
import { utilsStyles } from "@/styles";
import TrackPlayer, { Track } from "react-native-track-player";
import { unkownRecitationImageURI } from "@/constants/images";

export type SuwarListProps = Partial<FlatListProps<Track>> & {
    suwar: Track[]
}

const ItemDivider = () => <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />

export const SuwarList = ({suwar, ...flatlistProps}: SuwarListProps) => {
    const handleRecitationSelect = async (recitation: Track) => {
        await TrackPlayer.load(recitation)
        TrackPlayer.play()
    }
    
    return (
        <FlatList 
            data={suwar}
            ItemSeparatorComponent={ItemDivider}
            ListEmptyComponent={
                <View>
                    <Text style={utilsStyles.emptyContentText}>No recitations found</Text>
                </View>}
            contentContainerStyle={{ paddingBottom: 80, paddingTop: 10 }}
            renderItem={({ item: recitation }) => (
                <SuwarListItem
                    recitation={recitation}
                    onRecitationSelect={handleRecitationSelect}
                />
            )}
            {...flatlistProps}
        />
    );
};
