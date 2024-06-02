import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity, Linking } from "react-native";
import facebook from '../image/facebook.png';
import instagram from '../image/instagram.png';
import x from '../image/x.png';

const Footer = () => {

    const openLink = (url) => {
        Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
    };

    return (
        <SafeAreaView>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => openLink('https://www.facebook.com')}>
                    <Image style={styles.socialIcon} source={facebook} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://www.twitter.com')}>
                    <Image style={styles.socialIcon} source={x} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://www.instagram.com')}>
                    <Image style={styles.socialIcon} source={instagram} />
                </TouchableOpacity>
                <Text style={styles.copyright}>© 2024 EduVoc</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    socialIcon: {
        marginHorizontal: 8,
    },
    copyright: {
        fontSize: 12,
        color: '#333',
    },
});

export default Footer;
