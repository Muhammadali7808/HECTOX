import styled from '@emotion/styled'
import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react';
import { IconHome } from '../../assets/icon/icon_home';
import { FeaturedProducts } from '../../data/data_product';
export const Home = () => {
  const ButtonHome = styled.button`
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 0.02em;
    color: white;
    border-radius: 2px;
    background-color: #fb2e86;
    padding: 16px 40px;
    border: none;
    border-radius: 5px;
    margin-top: 27px;
    cursor: pointer;
  `

  const TitleHome = styled.h1`
    font-weight: 800;
    font-size: 34px;
    letter-spacing: 0.01em;
    color: #000;
  `
  return (<>
    <Box bgcolor={'#F2F0FF'} pt={'39px'} pb={'36px'}>
      <Container maxWidth="lg">
        <Stack direction={'row'} gap={'22px'} alignItems={'center'}>
          <Box>
            <Box>
              <Typography variant='h3'>Best Furniture For Your Castle....</Typography>
            </Box>
            <Box mt={'34px'} mb={'14px'}>
              <TitleHome>New Furniture Collection <br /> Trends in 2020</TitleHome>
            </Box>
            <Typography mt={'34px'} variant='h4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.</Typography>
            <ButtonHome>Shop Now</ButtonHome>
          </Box>
          <Box>
            <IconHome />
          </Box>
        </Stack>
      </Container>
    </Box>
    <Box>
      <Container>
        <Box pt={'130px'} pb={'130px'}>
          <Typography variant='h2' textAlign={'center'} mb={'48px'}>Featured Products</Typography>
          <Stack justifyContent={'center'} direction={'row'} gap={'30px'} alignItems={'center'}>
            {FeaturedProducts.map((item) =>
              <Box textAlign={'center'}>
                <Box bgcolor={'#f6f7fb'} pt={'41px'} pl={'41px'} pr={'54px'} pb={'20px'}>
                  <img src={item.img} alt="img" />
                </Box>
                <Box bgcolor={'#f9f8f8'} pt={'15px'} pb={'17px'}>
                  <Typography mb={'12px'} variant='h3'>{item.title}</Typography>
                  <img src={item.image} alt="img" />
                  <Typography mt={'12px'} mb={'12px'} variant='body2'>{item.text}</Typography>
                  <Typography variant='body2'>${item.price}</Typography>
                </Box>
              </Box>
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  </>
  )
}


