import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';



export default function ProductDetails() {
    const navigation = useNavigation();

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };



    return (
        <>
        <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
            <Image style={styles.MenuImg} source={require('./assets/Menu.png') } />
        </TouchableOpacity>

        <View style={styles.textCon}>
        <Text style={{fontSize:30,fontWeight:'500', left:27, top:4}}>
            Open </Text>
        <Text style={{fontSize:30, fontWeight:'500', bottom:12, left:6}}>
             Fashion </Text>
        </View>
       <View style={styles.rightHead}>
            <Icon style={styles.seacrhIcon} name="search" size={30} color="black"  />
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon style={styles.shoppingIcon} name="shopping-bag" size={30} color="black"  />
            </TouchableOpacity>
       </View>
</View>

<Modal
         animationType="slide"
         transparent={true}
         visible={isMenuVisible}
         onRequestClose={toggleMenu}
     >
         <View style={styles.modalView}>
             <TouchableOpacity onPress={toggleMenu}>
             <Icon style={{ bottom: 30, right:15 }} name="times" size={25} color="black" />
             </TouchableOpacity>
                <Text style={{fontSize: 42, fontWeight: '300', top: -15,right:20}}>Eric Atsu</Text>
                <View style={{borderTopWidth: 2, width: 110,right: 10, bottom: 10, borderColor: 'orange'}}/>
                <Text style={styles.drawerlist}>Store</Text>
                <Text style={styles.drawerlist}>Locations</Text>
                <Text style={styles.drawerlist}>Blog</Text>
                <Text style={styles.drawerlist}>Jewelery</Text>
                <Text style={styles.drawerlist}>Electronic</Text>
                <Text style={styles.drawerlist}>Clothing</Text>
         </View>
     </Modal>
</>
    );
}


const styles = StyleSheet.create({
 header: {
        height: 80,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        bottom: -40,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        height: '100%',
        width: 300,
    },
    drawerlist: {
        fontSize: 30,
        fontWeight: '300',
        top: 20,
        right: 20,
        marginBottom: 40,
    },



});