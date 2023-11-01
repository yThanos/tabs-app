import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const EnderecosCard = ({ endereco }) => {
    const { logradouro, numero, bairro, localidade, uf, ind_corresp } = endereco;

    return (
        <SafeAreaView>
            <View style={{ borderRadius: 10, flexDirection: 'row' , justifyContent: "space-between", alignContent: "center", padding: 10, margin: 5, backgroundColor: (ind_corresp)?('#0482BA'):('#92989F')}}>
                <View>
                    <Text style={{color: (ind_corresp)?('#fff'):("#000")}}>{logradouro}, {numero}</Text>
                    <Text style={{color: (ind_corresp)?('#fff'):("#000")}}>{bairro}, {localidade} - {uf}</Text>
                </View>
                <TouchableOpacity style={{backgroundColor: '#043F63', alignContent:'center', justifyContent: 'center', padding: 5, borderRadius: 5}}>
                    <Text style={{color: '#fff'}}>Ver</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default EnderecosCard;
