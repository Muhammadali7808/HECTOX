import { Box, Container, IconButton, Stack } from '@mui/material'
import React from 'react'
import { IconHeader } from '../../../assets/icon/icon_header'

export const HeaderTop = () => {
  return (
    <Box bgcolor={'#7e33e0'} >
        <Container maxWidth='lg'>
            <Stack direction={'row'} gap={'48px'} alignItems={'center'}>
                <Stack>
                  <IconButton>
                    <IconHeader/>
                  </IconButton>
                </Stack>
            </Stack>
        </Container>
    </Box>
  )
}

