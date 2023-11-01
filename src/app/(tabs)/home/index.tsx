import { Stack } from "expo-router";
import { View, SafeAreaView, useWindowDimensions, FlatList } from "react-native";
import { Text, Icon } from "react-native-paper";
import HorizontalCards from "../../../components/homeCards/horizontalMenuCards";

const Home = () => {
    const {height, width} = useWindowDimensions();
    const data = [["0 hr","timer-sand","Horas trabalhadas"], ["0 hr","archive-clock","xxxxxxxxxx"],["xxxx","account","xxxxxxxxxx"]];
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
                    <Text variant="displayMedium" style={{color: "#fff", fontSize: 22}}>Bem vindo, </Text>
                    <Text variant="displayMedium" style={{color: "#FF7A0F", fontSize: 22}}>Vitor</Text>
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
        </SafeAreaView>
    )
}

export default Home;