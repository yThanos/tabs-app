import { Modal, SafeAreaView, ScrollView } from "react-native";
import { View } from "react-native"
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import CadEnderecos from "src/components/cadstros/enderecos/cadEnderecos";
import EnderecosCard from "src/components/cadstros/enderecos/enderecosCard";

const Enderecos = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [cep, setCep] = useState("");
    const [showResto, setShowResto] = useState(false);
    const [data, setData] = useState([{"cep": "97010-041",
        "logradouro": "Rua André Marques",
        "complemento": "lado ímpar",
        "bairro": "Centro",
        "localidade": "Santa Maria",
        "uf": "RS",
        "numero": "820",
        "ind_corresp": false},{"cep": "97105-300",
        "logradouro": "Rua Cinco de Março",
        "complemento": "",
        "bairro": "Camobi",
        "localidade": "Santa Maria",
        "uf": "RS",
        "numero": "315",
        "ind_corresp": true}
    ]);
    return (
        <SafeAreaView>
            <View style={{padding: 16, paddingBottom: 100}}>
                <Modal
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                    transparent={true}
                >
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000000aa"}}>
                        <View style={{backgroundColor: "#FFF", padding: 20, borderRadius: 10, width: "90%"}}>
                            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <TextInput mode="outlined" style={{margin: 2, borderColor: "gray", borderWidth: 1, borderRadius: 10, padding: 10, width: "75%"}} 
                                    placeholder="CEP" value={cep} onChangeText={(change)=>setCep(change)}
                                />
                                <Button onPress={()=>{setShowResto(true)}}>
                                    <Text>Pesquisar</Text>
                                </Button>
                            </View>
                            {
                            (showResto)? (<CadEnderecos cep={cep} handlePress={(bool)=>{setModalVisible(bool);setShowResto(false)}} handleSuccess={(item)=>{
                                if (item.data.ind_corresp) {
                                    data.map((ende, index) => {
                                        if (ende.ind_corresp) {
                                            ende.ind_corresp = false
                                            data[index] = ende
                                        }
                                    })
                                }
                                setData([...data, item.data])
                                setModalVisible(false)
                            }}/>):
                            <Button onPress={() => {
                                setModalVisible(!modalVisible)
                                setShowResto(false)
                            }}>
                                <Text>Fechar</Text>
                            </Button>
                            }
                            
                        </View>
                    </View>
                </Modal>
                <Text>Endereços</Text>
                <ScrollView>
                    {
                        data.sort((a,b)=>{
                            if(a.ind_corresp) return -1
                            if(b.ind_corresp) return 1
                            return 0
                        }).map((item, index) => (
                            <EnderecosCard key={index} endereco={item} />
                        ))
                    }
                </ScrollView>
            </View>
            <View style={{
                position: 'absolute',
                height: 60,
                left: 0,
                right: 0,
                bottom: 0,
            }}>
                <Button onPress={() => setModalVisible(true)}>
                    <Text>Adicionar Endereço</Text>
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default Enderecos;