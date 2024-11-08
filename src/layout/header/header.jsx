import React from 'react';
import { Box, colors, Container, IconButton, Stack, TextField, Typography } from '@mui/material';
import { IconHeader } from '../../assets/icon/icon_header';
import Icon_1 from '../../assets/icon/icon_1';
import { HeaderTop } from './components/header_top';
import img_1 from '../../assets/img/img_1.svg';
import { HektoData } from '../../data/data_product';
import { SearchInput } from './components/search';



export const Header = () => {
  const changeInput = (e) => {
    console.log(e.target.value);

  }
  return (<>
    <Box pt={'10px'} pb={'12px'} bgcolor={'#7e33e0'}>
      <Container maxWidth="lg">
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={'12px'}>
          <Box sx={{
            display: 'flex',
            gap: '48px',
            alignItems: 'center'
          }}>
            <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
              <IconButton>
                <IconHeader />
              </IconButton>
              <Typography variant='body1'>mhhasanul@gmail.com</Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
              <IconButton>
                <Icon_1 />
              </IconButton>
              <Typography variant='body1'>(12345)67890</Typography>
            </Stack>
          </Box>
          <HeaderTop />
        </Stack>
      </Container>
    </Box>
    <Box pt={'12px'} pb={'19px'}>
      <Container>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <img src={img_1} alt="img" />
          <Stack direction={'row'} gap={'35px'}>
            {HektoData.map((item) =>
              <Typography key={item.id} sx={{
                ":hover": {
                  color: '#fb2e86',
                  cursor: 'pointer'
                }
              }} variant='body2'>{item.title}</Typography>
            )}
          </Stack>
            <SearchInput onChange={changeInput} />
        </Stack>
      </Container>
    </Box>
  </>
  )
}


