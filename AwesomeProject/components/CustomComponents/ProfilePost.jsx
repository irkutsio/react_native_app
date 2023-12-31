import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CommentsIcon } from '../SvgIcons/CommentsIcon';
import { LikeIcon } from '../SvgIcons/LikeIcon';
import { MapIcon } from '../SvgIcons/MapIcon';
import { COLORS } from '../../constants/constants';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useComments } from '../../hooks/getComment';

export const ProfilePost = ({ source, signature, commentsQuantity, location, coords, postId }) => {
	const [likesQuantity, setLikesQuantity] = useState(0);
	const { comments, loading } = useComments(postId);

	const navigation = useNavigation();

	return (
		<View>
			<Image
				source={source}
				resizeMode={'cover'}
				style={{
					marginBottom: 8,
					width: 343,
					height: 240,
					borderRadius: 8,
					borderWidth: 2,
					borderColor: COLORS.darkGrey,
				}}
			/>
			<Text
				style={{
					marginBottom: 8,
					fontFamily: 'roboto-medium',
					fontSize: 16,
					color: COLORS.titleDarkBlue,
				}}
			>
				{signature}
			</Text>
			<View style={styles.descr}>
				<TouchableOpacity
					style={{ display: 'flex', flexDirection: 'row', gap: 6 }}
					onPress={() => {
						navigation.navigate('Comments', { source, postId });
					}}
				>
					<CommentsIcon />
					<Text style={{ fontFamily: 'roboto-regular', fontSize: 16, color: COLORS.titleDarkBlue }}>
						{comments?.length}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ display: 'flex', flexDirection: 'row', gap: 6 }}
					onPress={() => setLikesQuantity(prev => prev + 1)}
				>
					<LikeIcon />
					<Text style={{ fontFamily: 'roboto-regular', fontSize: 16, color: COLORS.titleDarkBlue }}>
						{likesQuantity}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('MapScreen', { coords });
					}}
					style={{ display: 'flex', flexDirection: 'row', gap: 4, marginLeft: 'auto' }}
				>
					<MapIcon />
					<Text style={{ fontFamily: 'roboto-regular', fontSize: 16, color: COLORS.titleDarkBlue }}>
						{location}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	descr: {
		display: 'flex',
		flexDirection: 'row',
		gap: 24,
		marginBottom: 32,
	},
});
