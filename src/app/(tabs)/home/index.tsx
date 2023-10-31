import { Stack } from "expo-router";
import { View, SafeAreaView, useWindowDimensions, Text, FlatList } from "react-native";
import { Icon } from "react-native-paper";

const Home = () => {
    const {height, width} = useWindowDimensions();

    return (
        <SafeAreaView>
            <Stack.Screen 
                options={{
                    header: () => (
                        <View style={{justifyContent: "space-between", flexDirection: "row", backgroundColor: "#043F63", paddingTop: 25}}>
                            <View style={{padding: 10}}>
                                <Icon source="menu" size={50} color="#fff"/>
                            </View>
                            <View style={{padding: 10}}>
                                <Icon source="bell" size={50} color="#fff"/>
                            </View>
                        </View>
                    )
                }}
            />
            <View style={{backgroundColor:"#043F63", height: height * 0.1, marginTop: -3}}>
                <View style={{flexDirection: "row", paddingLeft: 20, paddingTop: 20}}>
                    <Text style={{color: "#fff", fontSize: 22}}>Bem vindo, </Text>
                    <Text style={{color: "#FF7A0F", fontSize: 22}}>Vitor</Text>
                </View>
            </View>
            <View style={{backgroundColor: "#043F63", height: height * 0.06, opacity: 0.9}}>
                <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center", paddingTop: 7}}>
                    <Text style={{color: "#FF7A0F", fontSize: 19}}>Meus Relatorios</Text>
                    <Text style={{color: "#92989F", fontSize: 16}}>Gerais</Text>
                    <Text style={{color: "#92989F", fontSize: 16}}>Ouros</Text>
                </View>
            </View>
            <FlatList 
                data={[["0 hr","timer-sand","Horas trabalhadas"], ["0 hr","archive-clock","xxxxxxxxxx"],["xxxx","account","xxxxxxxxxx"]]}
                renderItem={({item})=>(
                    <View style={{padding: 15, width: width * 0.38, margin:10}}>
                        <Text style={{color: "#FF7A0F"}}>{item[2]}</Text>
                        <View style={{flexDirection: "row", justifyContent: "space-between", backgroundColor: "#ccc", borderRadius: 5, padding: 15, width: width * 0.4}}>
                            <Text style={{color: "#043F63", fontWeight: "bold"}}>{item[0]}</Text>
                            <Icon source={item[1]} size={30} color="#043F63"/>
                        </View>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
        </SafeAreaView>
    )
}

export default Home;