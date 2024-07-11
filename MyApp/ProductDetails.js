import React from 'react';
import { View,Modal, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';



export default function ProductDetails() {
    const route = useRoute();
    const { item } = route.params;


    const navigation = useNavigation();

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };



    return (
        
        <ScrollView>
        <View style={styles.container}>
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

       <View style={styles.container2}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Image source={require('./assets/Export.png')} style={{width: 25, height: 25, right: -125, top: 60}}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>

        <Text style={styles.MaterialsHead}>MATERIALS</Text>
        <Text style={styles.MaterialDesc}>We work with several teams to ensure high standard of products
            for all buyers and sellers across the globe. We ensure that all products are made with the best materials.
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Image source={require('./assets/DoNotBleach.png')} size={30} style={{width: 30, height: 30, right: 195, bottom: 220, top: -200}}/>
        <Text style={{fontSize: 18, bottom: 195, right: 187,fontWeight: '300', }}>Do not use bleach</Text>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Image source={require('./assets/DoNotTumbleDry.png')} size={30} style={{width: 30, height: 30, right: 195, bottom: 220, top: -200}}/>
        <Text style={{fontSize: 18, bottom: 195, right: 187,fontWeight: '300', }}>Do not tumble dry </Text>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Image source={require('./assets/DoNotWash.png')} size={30} style={{width: 30, height: 30, right: 195, bottom: 220, top: -200}}/>
        <Text style={{fontSize: 18, bottom: 195, right: 187,fontWeight: '300', }}>Dry clean tetrachloroehtylene</Text>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Image source={require('./assets/IronLowTemperature.png')} size={30} style={{width: 30, height: 30, right: 195, bottom: 220, top: -200}}/>
        <Text style={{fontSize: 18, bottom: 195, right: 187,fontWeight: '300', }}> Iron at maximum 110°C/230°F</Text>
        </View>

        
<View style={{borderBottomWidth: 1, height: 100, color: 'black', bottom: 250, right: 195, opacity:0.15}}/>
<View style={{bottom: 200, right: 175}}>
<Text style={{fontSize: 25}}> Free Flat Rate Shipping </Text>
<Text style={{left: 3, fontSize: 18}}> Estimated to be delivered on</Text>
<Text style={{left: 6, fontSize: 18}}>9/11/2021 - 12/11/2021</Text>
</View>
        
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
     </View>
        </ScrollView>

    );
}


const styles = StyleSheet.create({
 header: {
        height: 80,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        bottom: 10,
    },
   
    MenuImg: {
        width: 30,
        height: 40,
        
    },
    rightHead: {
        flexDirection: 'row',
        left: 150,
        justifyContent: 'space-between',
    },
    seacrhIcon: {
        marginRight: 20,
    },
    textCon: {
        flexDirection: 'column',
        left: 80,
        alignContent: 'center',
        justifyContent: 'center',
    },
    container:{
            flex:1,
            height: 1500,
    },
    container2:{
        height: '100%',
       

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
    
    image: {
        width: '100%',
        height: 400,
        right: 195,
        top: 60,
        marginBottom: 10,
       
    },
    title: {
        position:'static',
        fontSize: 30,
        fontWeight: '500',
        right: 195,
        top: 50,
        height: 100,
        marginBottom: 5,
    },
    description: {
        position:'static',
        fontSize: 20,
        top:-5,
        fontWeight: '300',
        paddingTop:20,
        right: 195,
        minHeight: 300,
        maxHeight: 1000,
        marginBottom: 5,
    },
    price: {
        position: 'static',
        fontSize: 30,
        paddingTop: 5,
        fontWeight: '500',
        right: 195,
        bottom: 240 ,
        color: 'orange',
    },
    MaterialsHead:{
        position: 'static',
        fontSize: 30,
        fontWeight: '500',
        right: 195,
        bottom: 240,
        top: -200,
        marginBottom: 5,
    },
    MaterialDesc:{  
        position: 'static',
        fontSize: 20,
        height: 80,
        right: 195,
        bottom: 240,
        top: -200,
        marginBottom: 5,
    },

});