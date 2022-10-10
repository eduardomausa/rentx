import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import { Feather } from '@expo/vector-icons'
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

export function ScheduleDetails() {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('ScheduleComplete');
  }

  function handleBack() {
    navigation.goBack()
  }

  const theme = useTheme()
  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsG7M1jAT4uUPEy1Kt5O3MhX5e3TgcWX_QbwQTqUvWoAErqYh2pdwlWjM3hsFYYeHVS8&usqp=CAU']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>RS 5 Coupé</Name>
          </Description>

          <Rent>
            <Period>AO DIA</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name='380Km/h' icon={SpeedSvg} />
          <Accessory name='3.2s' icon={AccelerationSvg} />
          <Accessory name='800 HP' icon={ForceSvg} />
          <Accessory name='Gasolina' icon={GasolineSvg} />
          <Accessory name='Auto' icon={ExchangeSvg} />
          <Accessory name='2 pessoas' icon={PeopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>19/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title='Alugar agora'
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>

    </Container>
  );
}