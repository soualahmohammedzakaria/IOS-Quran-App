import React from "react";
import { FlatList, FlatListProps, View } from "react-native";
import library from "@/assets/data/library.json";
import { SuwarListItem } from "./SuwarListItem";
import { utilsStyles } from "@/styles";

export type SuwarListProps = Partial<FlatListProps<unknown>> & {
    suwar: any[]
}

const ItemDivider = () => <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />

export const SuwarList = ({suwar, ...flatlistProps}: SuwarListProps) => {
    return (
        <FlatList 
            data={suwar}
            ItemSeparatorComponent={ItemDivider}
            contentContainerStyle={{ paddingBottom: 80, paddingTop: 10 }}
            renderItem={({ item: recitation }) => (
                <SuwarListItem
                    recitation={{
                        ...recitation,
                        image: recitation.artwork
                    }}
                />
            )}
            {...flatlistProps}
        />
    );
};
