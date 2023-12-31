import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../../constants/constants';

export const OrangeSubmitBtn = ({ text, onPress }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.btnDescr}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: COLORS.mainOrange,
		borderRadius: 100,
		paddingVertical: 16,
		marginBottom: 14,
	},
	btnDescr: {
		color: 'white',
		textAlign: 'center',
		fontFamily: 'roboto-regular',
	},
});
