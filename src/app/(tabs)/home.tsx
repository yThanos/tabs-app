import { useContext, useState } from "react";
import { View, SafeAreaView, useWindowDimensions, FlatList, TouchableOpacity } from "react-native";
import { IconButton, Text } from "react-native-paper";
import HorizontalCards from "../../components/homeCards/horizontalMenuCards";
import { AuthContext } from "../../context/auth.context";

const Home = () => {
    const {user} = useContext(AuthContext);
    const {height, width} = useWindowDimensions();
    const data = [["0 hr","timer-sand","Horas trabalhadas"], ["0 hr","archive-clock","xxxxxxxxxx"],["xxxx","account","xxxxxxxxxx"]];
    const [grid, setGrid] = useState(false);
    console.log(user)
    return (
        <SafeAreaView>
            <View>
                <View style={{backgroundColor:"#043F63", height: height * 0.07, marginTop: -3}}>
                    <View style={{flexDirection: "row", paddingLeft: 20, paddingTop: 5}}>
                        <Text variant="displayMedium" style={{color: "#fff", fontSize: 22}}>Bem vindo, </Text>
                        <Text variant="displayMedium" style={{color: "#FF7A0F", fontSize: 22}}>{user?.name ?? ""}</Text>
                    </View>
                </View>
                <View style={{backgroundColor: "#043F63", height: height * 0.06, opacity: 0.9}}>
                    <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                        <Text variant="displayMedium" style={{color: "#FF7A0F", fontSize: 19}}>Meus Relatorios</Text>
                        <Text variant="displayMedium" style={{color: "#92989F", fontSize: 16}}>Gerais</Text>
                        <Text variant="displayMedium" style={{color: "#92989F", fontSize: 16}}>Ouros</Text>
                    </View>
                </View>
                <View style={{marginTop: -20}}>
                    <FlatList 
                        data={data}
                        renderItem={({item, index})=>(
                            <HorizontalCards item={item} index={index} length={data.length} width={width}/>
                        )}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 25, paddingRight: 15, alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontFamily:"Oxanium-Bold", color: "#043F63"}}>Ocorrências</Text>
                    <View style={{flexDirection: 'row'}}>
                        <IconButton icon={"view-list"} size={30} iconColor={grid?"grey":"#FF7A0F"} onPress={()=>setGrid(false)} />
                        <IconButton icon={"view-module"} size={30} iconColor={grid?"#FF7A0F":"grey"} onPress={()=>setGrid(true)} style={{marginLeft: -5}} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;