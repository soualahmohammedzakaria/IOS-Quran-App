import React from "react";
import { FlatList, FlatListProps } from "react-native";
import library from "@/assets/data/library.json";
import { SuwarListItem } from "./SuwarListItem";

export type SuwarListProps = Partial<FlatListProps<unknown>>

export const SuwarList = ({...flatlistProps}: SuwarListProps) => {
    return (
        <FlatList 
            data={library}
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
