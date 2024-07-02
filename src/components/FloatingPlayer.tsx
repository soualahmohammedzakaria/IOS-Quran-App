import { PlayPauseButton, SkipToNextButton } from '@/components/PlayerControls'
import { unkownRecitationImageURI } from '@/constants/images'
import { useLastActiveTrack } from '@/hooks/useLastActiveTrack'
import { defaultStyles } from '@/styles'
import { useRouter } from 'expo-router'
import { StyleSheet, TouchableOpacity, View, ViewProps, Image, Text } from 'react-native'
import { useActiveTrack } from 'react-native-track-player'
import { MovingText } from './MovingText'

export const FloatingPlayer = ({ style }: ViewProps) => {
	const router = useRouter()

	const activeTrack = useActiveTrack()
	const lastActiveTrack = useLastActiveTrack()

	const displayedTrack = activeTrack ?? lastActiveTrack

	const handlePress = () => {
		router.navigate('/player')
	}

	if (!displayedTrack) return null

	return (
		<TouchableOpacity onPress={handlePress} activeOpacity={0.9} style={[styles.container, style]}>
			<>
				<Image
					source={{
						uri: displayedTrack.artwork ?? unkownRecitationImageURI,
					}}
					style={styles.recitationArtworkImage}
				/>

				<View style={styles.recitationTitleContainer}>
					<MovingText
						style={styles.recitationTitle}
						text={displayedTrack.title ?? ''}
						animationThreshold={25}
					/>
				</View>

				<View style={styles.recitationControlsContainer}>
					<PlayPauseButton iconSize={24} />
					<SkipToNextButton iconSize={22} />
				</View>
			</>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#252525',
		padding: 8,
		borderRadius: 12,
		paddingVertical: 10,
	},
	recitationArtworkImage: {
		width: 40,
		height: 40,
		borderRadius: 8,
	},
	recitationTitleContainer: {
		flex: 1,
		overflow: 'hidden',
		marginLeft: 10,
	},
	recitationTitle: {
		...defaultStyles.text,
		fontSize: 18,
		fontWeight: '600',
		paddingLeft: 10,
	},
	recitationControlsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20,
		marginRight: 16,
		paddingLeft: 16,
	}
})