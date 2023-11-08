import { Slot, Stack } from "expo-router"
import { PaperProvider, configureFonts, MD3LightTheme, Icon } from "react-native-paper";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect, useState } from "react";
import Drawer from "expo-router/drawer";
import CustomDrawerContent from "./drawer.content";
import { View } from "react-native";
import { AuthContext } from "../auth.context";

SplashScreen.preventAutoHideAsync();

const StackLayout = () => {
    const {logged} = useContext(AuthContext);
    const [appReady, setAppReady] = useState(false);

    const [loaded] = useFonts({
        'Oxanium-Regular': require("src/assets/fonts/Oxanium-Regular.ttf"),
        'Oxanium-Bold': require("src/assets/fonts/Oxanium-Bold.ttf"),
        'Oxanium-ExtraBold': require("src/assets/fonts/Oxanium-ExtraBold.ttf"),
        'Oxanium-SemiBold': require("src/assets/fonts/Oxanium-SemiBold.ttf"),
        'Oxanium-Light': require("src/assets/fonts/Oxanium-Light.ttf"),
        'Oxanium-ExtraLight': require("src/assets/fonts/Oxanium-ExtraLight.ttf"),
        'Oxanium-Medium': require("src/assets/fonts/Oxanium-Medium.ttf")
    });

    const baseFont = {
        fontFamily: "Oxanium-Regular"
    } as const;

    const baseVariants = configureFonts({
        config: baseFont
    });

    const customVariants = {
        displayMedium: {
            ...baseVariants.displayMedium,
            fontFamily: "Oxanium-Regular"
        },
        bold: {
            ...baseVariants.bodyMedium,
            fontFamily: "Oxanium-Bold"
        },
        extraBold: {
            ...baseVariants.bodyMedium,
            fontFamily: "Oxanium-ExtraBold"
        },
        semiBold: {
            ...baseVariants.bodyMedium,
            fontFamily: "Oxanium-SemiBold"
        },
        light: {
            ...baseVariants.bodyMedium,
            fontFamily: "Oxanium-Light"
        },
        extraLight: {
            ...baseVariants.bodyMedium,
            fontFamily: "Oxanium-ExtraLight"
        },
        medium: {
            ...baseVariants.bodyMedium,
            fontFamily: "Oxanium-Medium"
        }
    } as const;

    const fonts = configureFonts({
        config: {
            ...baseVariants,
            ...customVariants
        }
    });

    const theme = {
        ...MD3LightTheme,
        colors: {
            ...MD3LightTheme.colors,
            primary: "#043F63",
            accent: "#0482BA",
            background: "#FFFFFF",
            surface: "#FFFFFF",
            text: "#FF7A0F",
            placeholder: "#92989F",
            backdrop: "#000000",
            notification: "#FF7A0F"
        },
    }

    useEffect(() => {
        if (loaded) {
            init();
        }
    }, [loaded]);

    async function init() {
        await SplashScreen.hideAsync();
        setAppReady(true);
    }
    
    if (!appReady) {
        return <Slot />;
    }

    return (
        <PaperProvider theme={{ ...theme, fonts }}>
            {logged ? (
                <>
                <Drawer initialRouteName='(tabs)' drawerContent={CustomDrawerContent}>
                    <Drawer.Screen
                            name="(tabs)"
                            options={{
                                title: "",
                                headerTintColor: '#fff',
                                headerStyle: {
                                    backgroundColor: '#043F63',
                                    elevation: 0,
                                },
                                headerRight: () => (
                                    <View style={{paddingRight: 10}}>
                                        <Icon  source="bell" size={30} color="#fff"/>
                                    </View>
                                )
                            }}
                    />
                </Drawer>
                </>
            ) : (
                <>
                <Stack>
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                </Stack>
                </>
            )

            }
        </PaperProvider>
    )
}

export default StackLayout;