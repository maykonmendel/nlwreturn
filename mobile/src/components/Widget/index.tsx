import React, { useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ChatTeardropDots } from 'phosphor-react-native';
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Options } from '../Options';
import { Form } from '../Form';
import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
    const bottomSheet = useRef<BottomSheet>(null);

    function handleOpen() {
        bottomSheet.current?.expand();
    }

    return (
    <>
        <TouchableOpacity style={styles.button} onPress={handleOpen}>
            <ChatTeardropDots size={24} weight="bold" color={theme.colors.text_on_brand_color} />
        </TouchableOpacity>
        
        <BottomSheet ref={bottomSheet} snapPoints={[1, 280]} backgroundStyle={styles.modal} handleIndicatorStyle={styles.indicator}>
            <Form feedbackType={'BUG'} />               
        </BottomSheet>
            
    </>
  );
}

export default gestureHandlerRootHOC(Widget);