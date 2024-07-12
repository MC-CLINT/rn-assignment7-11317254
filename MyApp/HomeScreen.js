import React, {useState, useEffect } from "react";
import {View,Modal, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import { Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen() {
    const navigation = useNavigation();
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    const [isListVisible, setIsListVisible] = useState(false);

    const [sampleItems, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setItems(data); 
        } catch (error) {
            console.error(error);
        }
    };

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    const addToCart = async (item) => {
        try {
            let cart = await AsyncStorage.getItem('cart');
            cart = cart ? JSON.parse(cart) : [];
            cart.push(item);
            await AsyncStorage.setItem('cart', JSON.stringify(cart));
            alert('Item added to cart');
        } catch (error) {
            console.error(error);
        }
    };

    const shortenDescription = (description) => {
        const maxLength = 50; 
        if (description.length > maxLength) {
            return `${description.substring(0, maxLength)}...`;
        }
        return description;
    };
    
    
    
    return (
       <>
<ScrollView>
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

<View style={styles.HomeHead}>
    <Text style={{fontSize:30, letterSpacing: 8}}> OUR STORY</Text>
   
    <View style={styles.ListViewCon}>
    <Icon style={{ top:8, opacity:0.7}} name="list" size={25} color="black"  />
    </View>
   
    
    <View style={styles.filterCon}>
        <Icon style={{top:8}} name="filter" size={25} color="orange"  />
    </View>
</View>
{!isListVisible && (<View style={styles.itemsContainer}>
                {sampleItems.map(item => (
                    <TouchableOpacity key={item.id} onPress={() => navigation.navigate('ProductDetails', { item: item })}>
                    <View key={item.id} style={styles.item}>
                        <Image style={{ height: 230, width: 170, marginTop:30, }} source={{ uri: item.image }} />
                        <TouchableOpacity onPress={() => addToCart(item)}>
                            <View style={styles.circle}>
                                <Icon style={{ left: 6 }} name="plus" size={20} color="black" />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 0, bottom:25, width:120 }}>{item.title}</Text>
                        <Text style={{ fontSize: 15, bottom:25, width: 150 }}>{shortenDescription(item.description)}</Text>
                        <Text style={{ fontSize: 30, color: 'orange', bottom:25 }}>${item.price}</Text>
                    </View> 
                    </TouchableOpacity>
                ))}
            </View>
            )}
</ScrollView>
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
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 15,
        bottom: -40,
    },
    item: {
        marginTop: -20,
        
    },
    MenuImg: {
        width: 30,
        height: 40,
        
    },
    rightHead: {
        flexDirection: 'row',
        marginLeft: 50,
        justifyContent: 'space-between',
    },
    seacrhIcon: {
        marginRight: 20,
    },
    textCon: {
        flexDirection: 'column',
        marginLeft: 40,
        alignContent: 'center',
        justifyContent: 'center',
    },
    HomeHead: {
        flexDirection: 'row',
        top: 60,
        height: 60,
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    ListViewCon: {
        flexDirection: 'row',
        marginLeft: 80,
        backgroundColor: 'lightgrey',
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
    },
    filterCon: {
        flexDirection: 'row',
        marginRight: 15,
        backgroundColor: 'lightgrey',
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
    },

    
    circle: {
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        borderWidth: 1,
        left: 138,
        bottom: 35
    },
  
    ListCon: {
        backgroundColor: 'lightgrey',
        height: 75,
        width: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        top: 0,
        left: -110,
        zIndex: 1,
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