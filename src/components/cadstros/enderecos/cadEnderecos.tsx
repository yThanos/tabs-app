import { ActivityIndicator, SafeAreaView, View, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import CheckBox from 'expo-checkbox'
import useFetch from "../../../hooks/useFetch"
import { Text, TextInput, Button } from "react-native-paper";

const CadEnderecos = ({cep, handlePress, handleSuccess}) => {
    const [numero, setNumero] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [indCorresp, setIndCorresp] = useState(false)
    const {data, error, loading} = useFetch(`https://viacep.com.br/ws/${cep}/json/`)

    useEffect(()=> {
        if(!loading){
            setLogradouro(data.logradouro ?? "")
            setBairro(data.bairro ?? "")
            setCidade(data.localidade ?? "")
            setEstado(data.uf ?? "")
            setComplemento(data.complemento ?? "")
        }
    }, [loading])
    
    return(
        (loading)? <ActivityIndicator size="large" color="#0000ff" /> :
        (error)? <Text>Erro ao carregar</Text> :
        <SafeAreaView>
            <View>
            <TextInput mode="outlined" label="Logradouro" value={logradouro} onChangeText={(change)=> setLogradouro(change)}/>
            <TextInput mode="outlined" label="Número" value={numero} onChangeText={(change)=> setNumero(change)}/>
            <TextInput mode="outlined" label="Complemento" value={complemento} onChangeText={(change)=> setComplemento(change)}/>
            <TextInput mode="outlined" label="Bairro" value={bairro} onChangeText={(change)=> setBairro(change)}/>
            <TextInput mode="outlined" label="Cidade" value={cidade} onChangeText={(change)=> setCidade(change)}/>
            <TextInput mode="outlined" label="Estado" value={estado} onChangeText={(change)=> setEstado(change)}/>
            <View style={{flexDirection: 'row', margin: 2, borderColor: "gray", borderWidth: 1, borderRadius: 10, padding: 10, alignItems: 'center'}}>
                <CheckBox
                    style={{margin: 2, marginRight: 8}}
                    value={indCorresp}
                    onValueChange={setIndCorresp}
                />
                <Text>Endereço de correspondencia</Text>
            </View>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Button onPress={()=>{
                handlePress(false)
            }}>
                <Text>Cancelar</Text>
            </Button>
            <Button onPress={()=>{
                data.logradouro = logradouro
                data.numero = numero
                data.complemento = complemento
                data.bairro = bairro
                data.localidade = cidade
                data.uf = estado
                data.ind_corresp = indCorresp
                handleSuccess({data})
                }}>
                <Text>Salvar</Text>
            </Button>
        </View>
        </SafeAreaView>
    )
}

export default CadEnderecos

const styles = StyleSheet.create({
    input: {
        margin: 2,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
  });