import { View, Text, StyleSheet} from 'react-native';

export default function DrawerView() {
    return (
        <View style={styles.drawer}>
            <Text>
                Hellooo
                
                </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    drawer: {
        
        backgroundColor: 'blue',
        padding: 20,
    },
});
