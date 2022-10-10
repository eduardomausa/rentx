import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, generateInterval, MarkedDateProps } from '../../components/Calendar';
import { useTheme } from 'styled-components';
import ArrowSvg from '../../assets/arrow.svg'
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { StatusBar } from 'react-native';
import { DateData } from 'react-native-calendars';

export function Schedule() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [lastSelectedDate, setLastSelectedDate] = useState<DateData>({} as DateData)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)

  function handleConfirmRental() {
    navigation.navigate('ScheduleDetails');
  }

  function handleBack() {
    navigation.goBack()
  }

  function handleChangeDate(date: DateData) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    console.log(interval)
    setMarkedDates(interval);
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle='light-content'
          translucent
          backgroundColor='transparent'
        />
        <BackButton
          onPress={handleBack}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={true}>
              18/09/2022
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>

            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}