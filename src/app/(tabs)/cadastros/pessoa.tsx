import { useRouter } from "expo-router";
import { ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity, View, Image, Dimensions } from "react-native"
import useFetch from "src/hooks/useFetch";
import { useEffect, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet } from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { TextInput, Text } from "react-native-paper";
import MaskInput from "react-native-mask-input";

const Pessoa = () => {
    const {width, height} = Dimensions.get('window');
    const router = useRouter();
    const [data2, setData2] = useState({"nome": "Vitor Fraporti",
    "social": "",
    "sexo": "M",
    "cpf": "03462629093",
    "data": "2003-02-05",
    "nis": "123456",
    "estado": "Solteiro",
    "pai": "Pai",
    "mae": "Mãe",
    "nacionalidade": "Brasileiro",
    "escolaridade": "Ensino Médio"})
    const estadoCivil = [{"key":"Solteiro", "value":"Solteiro"},{"key":"Casado", "value":"Casado"}, {"key":"Divorciado", "value":"Divorciado"}, {"key":"Viúvo", "value":"Viúvo"}]
    const nacionalidades = [{"key":"Brasileiro", "value":"Brasileiro"},{"key":"Estrangeiro", "value":"Estrangeiro"}]
    const escolaridades = [{"key":"Ensino Médio", "value":"Ensino Médio"},{"key":"Ensino Superior", "value":"Ensino Superior"}, {"key":"Ensino Fundamental", "value":"Ensino Fundamental"}, {"key":"Pós-Graduação", "value":"Pós-Graduação"}]
    const {data3, error, loading} = useFetch("https://viacep.com.br/ws/97105300/json/")
    const [nome, setNome] = useState("")
    const [social, setSocial] = useState("")
    const [cpf, setCpf] = useState("")
    const [data, setData] = useState(new Date())
    const [nis, setNis] = useState("")
    const [estado, setEstado] = useState("")
    const [pai, setPai] = useState("")
    const [mae, setMae] = useState("")
    const [nacionalidade, setNacionalidade] = useState("")
    const [escolaridade, setEscolaridade] = useState("")
    const [refresh, setRefresh] = useState(false)
    
    useEffect(()=>{
        if (!loading) {
            setNome(data2.nome)
            setSocial(data2.social)
            if(data2.sexo == "M") {
                setSexo('1')
            } else {
                setSexo('2')
            }
            setCpf(data2.cpf)
            setData(new Date( new Date(data2.data).getTime() + Math.abs(new Date(data2.data).getTimezoneOffset()*60000)))
            setNis(data2.nis)
            setEstado(data2.estado)
            setPai(data2.pai)
            setMae(data2.mae)
            setNacionalidade(data2.nacionalidade)
            setEscolaridade(data2.escolaridade)
        }
    },[loading, refresh])

    const [readOnly, setReadOnly] = useState(true)

    const [sexo, setSexo] = useState('1')

    return (
        <SafeAreaView>
            <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
                <Text>Pessoa</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        (loading)? (<ActivityIndicator size="large" color="#0000ff" />) : (error)? (<Text>{error}</Text>) : (
                            <SafeAreaView>
                                <View style={{alignItems: 'center'}} pointerEvents={readOnly?"none":"auto"}>
                                    <TextInput mode="outlined" style={style(readOnly, width).input}
                                        label="Nome" value={nome} onChangeText={(change)=>setNome(change)}
                                    />
                                    <TextInput mode="outlined" style={style(readOnly, width).input}
                                        label="Nome social" value={social} onChangeText={(change)=>setSocial(change)}
                                    />
                                    <Text style={{alignSelf: 'flex-start', paddingLeft: 10}}>Sexo:</Text>
                                    
                                    <TextInput mode="outlined" style={style(readOnly, width).input}
                                        label="CPF" value={cpf} onChangeText={(change)=>setCpf(change)}
                                        render={(props) => (<MaskInput {...props} mask={[/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'-',/\d/, /\d/]} />)}
                                    />
                                    <Text style={{alignSelf: 'flex-start', paddingLeft: 10}}>Data de nascimento:</Text>
                                    <View style={style(readOnly, width).input}>
                                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
                                            onPress={() => {
                                                DateTimePickerAndroid.open({
                                                    value: data,
                                                    onChange: (event, selectedDate) => {
                                                        const currentDate = selectedDate;
                                                        setData(currentDate)
                                                    },
                                                    mode: 'date'
                                                })
                                            }}
                                        >
                                            <Text style={{paddingRight: 10}}>{data.toLocaleString().split(" ")[0]}</Text>
                                            <Image style={{height: 30, width: 30}} source={{uri: "https://cdn-icons-png.flaticon.com/512/42/42253.png"}}/>
                                        </TouchableOpacity>
                                    </View>
                                    <TextInput mode="outlined" style={style(readOnly, width).input}
                                        label="NIS" value={nis} onChangeText={(change)=>setNis(change)}
                                    />
                                    <Text style={{alignSelf: 'flex-start', paddingLeft: 10}}>Estado civil:</Text>
                                    <SelectList boxStyles={{width: width * 0.85, backgroundColor: (readOnly)?"#ccc":"#fff"}}
                                        defaultOption={{key: estado, value: estado}}
                                        data={estadoCivil}
                                        setSelected={setEstado}
                                    />
                                    <TextInput mode="outlined" style={style(readOnly, width).input}
                                        label="Nome do pai" value={pai} onChangeText={(change)=>setPai(change)}
                                    />
                                    <TextInput mode="outlined" style={style(readOnly, width).input} 
                                        label="Nome da mãe" value={mae} onChangeText={(change)=>setMae(change)}
                                    />
                                    <Text style={{alignSelf: 'flex-start', paddingLeft: 10}}>Nacionalidade:</Text>
                                    <SelectList boxStyles={{width: width * 0.85, backgroundColor: (readOnly)?"#ccc":"#fff"}}
                                        defaultOption={{key: nacionalidade, value: nacionalidade}}
                                        data={nacionalidades}
                                        setSelected={setNacionalidade}
                                    />
                                    <Text style={{alignSelf: 'flex-start', paddingLeft: 10}}>Escolaridade:</Text>
                                    <SelectList boxStyles={{width: width * 0.85, backgroundColor: (readOnly)?"#ccc":"#fff"}}
                                        defaultOption={{key: escolaridade, value: escolaridade}}
                                        data={escolaridades}
                                        setSelected={setEscolaridade}
                                    />
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10}}>
                                    {
                                        (readOnly)?(
                                            <View>
                                                <TouchableOpacity style={{backgroundColor: '#0482BA', padding: 10, borderRadius: 10, width: 150}}
                                                    onPress={()=>setReadOnly(false)}
                                                >
                                                    <Text style={{color: '#fff', textAlign: 'center'}}>Editar</Text>
                                                </TouchableOpacity>
                                            </View>
                                        ):(
                                            <>
                                                <View>
                                                    <TouchableOpacity style={{ backgroundColor: '#0482BA', padding: 10, borderRadius: 10, width: 150 }}
                                                        onPress={() => {
                                                            setData2({"nome": nome,
                                                            "social": social,
                                                            "sexo": (sexo == '1')?"M":"F",
                                                            "cpf": cpf,
                                                            "data": data.toLocaleString().split(" ")[0],
                                                            "nis": nis,
                                                            "estado": estado,
                                                            "pai": pai,
                                                            "mae": mae,
                                                            "nacionalidade": nacionalidade,
                                                            "escolaridade": escolaridade})
                                                            setReadOnly(true)
                                                        }}
                                                    >
                                                        <Text style={{ color: '#fff', textAlign: 'center' }}>Salvar</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity style={{ backgroundColor: '#0482BA', padding: 10, borderRadius: 10, width: 150 }}
                                                        onPress={() => {
                                                            setRefresh(!refresh)
                                                            setReadOnly(true)
                                                        }}
                                                    >
                                                        <Text style={{ color: '#fff', textAlign: 'center' }}>Cancelar</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </>
                                        )
                                    }
                                </View>
                            </SafeAreaView>
                        )
                    }
                    <View style={{height: 70}}></View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Pessoa;

const style = (readOnly, width)=> StyleSheet.create({
    input:  {
        margin: 2,
        padding: 10,
        width: width * 0.85,
        backgroundColor: (readOnly)?"#ccc":"#fff"
    }
})